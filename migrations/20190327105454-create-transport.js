'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      num: {
        type: Sequelize.INTEGER
      },
      directionOne: {
        type: Sequelize.INTEGER
      },
      directionTwo: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.INTEGER
      },
    },
    {
      timestamps: false
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Transports');
  }
};