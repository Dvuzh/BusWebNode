// const mysql = require('mysql');

// // Set database connection credentials
// const config = {
//     host: 'localhost',
//     user: 'test',
//     password: 'nokia12nokia',
//     database: 'buses',
// };

// // Create a MySQL pool
// const pool = mysql.createPool(config);

// // Export the pool
// module.exports = pool;


const Sequelize = require('sequelize');
const sequelize = new Sequelize('buses', 'test', 'nokia12nokia', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }  
});

// // Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

module.exports = sequelize;