const Sequelize = require('sequelize');
const sequelize = new Sequelize('buses', 'phpmyadmin', '123', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  logging: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }  
});

module.exports = sequelize;