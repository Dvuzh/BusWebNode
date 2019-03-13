// buses: [{num: 1, directionOne: 5, directionTwo: 2, id: 1, type: 0}, {num: 2, directionOne: 7, directionTwo: 2, id: 2, type: 0}, {num: 3, directionOne: 6, directionTwo: 5, id: 3, type: 0},
//     {num: 21, directionOne: 5, directionTwo: 2, id: 10, type: 0}, {num: 23, directionOne: 5, directionTwo: 2, id: 12, type: 0}, {num: 91, directionOne: 5, directionTwo: 2, id: 14, type: 0},
//     {num: 22, directionOne: 5, directionTwo: 2, id: 11, type: 0}, {num: 24, directionOne: 5, directionTwo: 2, id: 13, type: 0}, {num: 109, directionOne: 5, directionTwo: 2, id: 15, type: 0}],
// trams: [{num: 8, directionOne: 5, directionTwo: 2, id: 4, type: 1}, {num: 6, directionOne: 7, directionTwo: 2, id: 5, type: 1}, {num: 3, directionOne: 6, directionTwo: 5, id: 6, type: 1}],
// trolleys: [{num: 21, directionOne: 9, directionTwo: 2, id: 7, type: 2}, {num: 22, directionOne: 7, directionTwo: 2, id: 8, type: 2}, {num: 23, directionOne: 8, directionTwo: 6, id: 9, type: 2}]

var express = require('express');
var router = express.Router();

// Load the MySQL pool connection
const pool = require('../data/config');

/* GET users listing. */
router.get('/', function(req, res, next) {
    let buses = [];
    let trams = [];
    let trolleys = [];
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
 pool.query('SELECT * FROM cars WHERE type = 0', (error, result) => {
    if (error) throw error;
    buses = result;

    // res.json({buses})
});

pool.query('SELECT * FROM cars WHERE type = 1', (error, result) => {
    if (error) throw error;
    trams = result;
});

pool.query('SELECT * FROM cars WHERE type = 2', (error, result) => {
    if (error) throw error;
    trolleys = result;
});
// console.log(buses)

  res.json( {trolleys, trams, buses});

});

module.exports = router;