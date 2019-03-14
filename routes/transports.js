var express = require('express');
var router = express.Router();

// Load the MySQL pool connection
const sequelize = require('../data/config');
const Cars = sequelize.define('cars', {}, {
    tableName: 'cars'
});

router.get('/buses', function (req, res, next) {
    let buses = [];

    Cars.findAll({
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

    Cars.findAll({
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

    Cars.findAll({
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
    Cars.sum('directionOne').then(amountDirectionOne => {
        Cars.sum('directionTwo').then(amountDirectionTwo => {
            const amountTransposrt = amountDirectionOne + amountDirectionTwo;
            res.json({
                amountTransposrt
            });
        });
    });
});

router.post('/?:id', function (req, res, next) {    
    Cars.findByPk(req.params.id,{attributes: ['id', 'num', 'directionOne', 'directionTwo', 'type']}).then(result => {       
        const car = result.dataValues;
        res.json({car});
    });
});

module.exports = router;