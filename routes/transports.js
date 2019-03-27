var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

// Load the MySQL pool connection
const sequelize = require('../data/config');

const Transport = sequelize.import("../models/transport")

let carsId = [];

router.get('/buses', function (req, res, next) {
    let buses = [];

    Transport.findAll({
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

    Transport.findAll({
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

    Transport.findAll({
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
    Transport.sum('directionOne').then(amountDirectionOne => {
        Transport.sum('directionTwo').then(amountDirectionTwo => {
            const amountTransposrt = amountDirectionOne + amountDirectionTwo;
            res.json({
                amountTransposrt
            });
        });
    });
});

router.post('/?:id', function (req, res, next) {
    // let arr =[]; document.querySelectorAll(".styled-list.style1 li h4").forEach(item => arr.push(item.innerText)); console.log(arr)
    // const baseUrl = 'http://api.your-bus.ru/route?id=108';
    // fetch(baseUrl)
    // // .then(result => result.json())
    // .then((result) => {
    //     console.log(result)
    //     // const filteredResult = result.countall.filter(elem => carsId.includes(parseInt(elem.id)));
    //     // res.json(filteredResult);
    // })
    // .catch(err => {
    //     console.log('tut3')
    //     // res.redirect('/error');
    // });

    Transport.findByPk(req.params.id, {
        attributes: ['id', 'num', 'directionOne', 'directionTwo', 'type']
    }).then(result => {
        const car = result.dataValues;
        res.json({
            car
        });
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