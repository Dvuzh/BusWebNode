var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

// Load the MySQL pool connection
const sequelize = require('../data/config');

const models = require("../models");
const Transport = models.Transport;
const Route = models.Route;

let carsId = [];

router.get('/buses', function (req, res, next) {
    let buses = [];

    models.Transport.findAll({
        attributes: ['id', 'num', 'directionOne', 'directionTwo', 'type'],
        where: {
            type: 0
        }
    })
        .then(myTableRows => {
            const obj = JSON.parse(JSON.stringify(myTableRows));
            obj.map(row => buses.push(row));
            res.json({
                buses
            });
        });
});

router.get('/trams', function (req, res, next) {
    let trams = [];

    models.Transport.findAll({
        attributes: ['id', 'num', 'directionOne', 'directionTwo', 'type'],
        where: {
            type: 1
        }
    })
        .then(myTableRows => {
            const obj = JSON.parse(JSON.stringify(myTableRows));
            obj.map(row => trams.push(row));
            res.json({
                trams
            });
        });
});

router.get('/trolleys', function (req, res, next) {
    let trolleys = [];

    models.Transport.findAll({
        attributes: ['id', 'num', 'directionOne', 'directionTwo', 'type'],
        where: {
            type: 2
        }
    })
        .then(myTableRows => {
            const obj = JSON.parse(JSON.stringify(myTableRows));
            obj.map(row => trolleys.push(row));
            res.json({
                trolleys
            });
        });
});

router.get('/amount', function (req, res, next) {
    models.Transport.sum('directionOne').then(amountDirectionOne => {
        Transport.sum('directionTwo').then(amountDirectionTwo => {
            const amountTransposrt = amountDirectionOne + amountDirectionTwo;
            res.json({
                amountTransposrt
            });
        });
    });
});

router.post('/?:id', function (req, res, next) {

    models.Transport.findByPk(req.params.id).then((result) => {
        const car = result.dataValues;
        res.json({
            car
        });
    });
});

router.get('/get-stations/?:id', function (req, res) {
    models.Transport.findByPk(req.params.id, {
        include: [{
            model: models.Route,
            include: [{
                model: models.Station
            }]
        }],
    })
        .then((result) => result.getRoutes())
        .then((routes) => {

            routes.sort((a, b) => { return a.direction - b.direction; });

            return Promise.all(
                routes.map(async route => {
                    const tasks = await models.Route.findAll({
                        where: {
                            stationId: route.stationId
                        },
                        include: [{
                            model: models.Transport,
                            attributes: ['num', 'type'],
                        }]
                    });
                    const transportInStations = tasks.map(item => { return { "num": item.dataValues.Transport.num, "type": item.dataValues.Transport.type }; })

                    return route.getStation().then(t => {
                        return {
                            "id": t.dataValues.id, "name": t.dataValues.name, "direction": route.direction, "index": route.number - 1,
                            "transports": transportInStations
                        }
                    });
                })
            ).catch(e => {
                return [];
            });
        })
        .then((stations) => {
            res.json(stations);
        });
});

function putCarsId() {
    if (carsId.length === 0) {
        Transport.findAll({
            attributes: ['id']
        }).then(result => {
            const obj = JSON.parse(JSON.stringify(result));
            obj.map(elem => carsId.push(elem.id));
        });
    }
}

const makeRequest = async () => {
    return await putCarsId();
}

router.get('/countall', (req, res) => {
    const baseUrl = 'http://api.your-bus.ru/route?id=3&d=countall';

    makeRequest();

    fetch(baseUrl)
        .then(result => result.json())
        .then((result) => {
            const filteredResult = result.countall.filter(elem => carsId.includes(parseInt(elem.id)));
            res.json(filteredResult);
        })
        .catch(err => {
            console.log('tut3')
            // res.redirect('/error');
        });

});

router.get('/position/?:transportId', (req, res) => {
    const baseUrl = 'http://api.your-bus.ru/position?id=' + req.params.transportId;

    fetch(baseUrl)
        .then(result => result.json())
        .then((result) => {
            res.json(result);
        })
        .catch(err => {
            console.log('tut')
            // res.redirect('/error');
        });

});

router.get('/route-transport/?:transportId', (req, res) => {
    const baseUrl = 'http://api.your-bus.ru/route?id=' + req.params.transportId;

    fetch(baseUrl)
        .then(result => result.json())
        .then((result) => {
            res.json(result);
        })
        .catch(err => {
            console.log('tut')
            // res.redirect('/error');
        });

});

//route?id=105



module.exports = router;