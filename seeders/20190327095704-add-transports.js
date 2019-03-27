'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Transports', [{     
      id: 189,
      num: 21,
      directionOne: 4,
      directionTwo: 5,
      type: 0
    },    
    {     
      id: 105,
      num: 14,
      directionOne: 7,
      directionTwo: 5,
      type: 0
    },
    {     
      id: 196,
      num: 67,
      directionOne: 4,
      directionTwo: 7,
      type: 2
    },
    {     
      id: 108,
      num: 22,
      directionOne: 9,
      directionTwo: 1,
      type: 0
    }, 
    {     
      id: 182,
      num: 2,
      directionOne: 9,
      directionTwo: 5,
      type: 1
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Transports', null, {});
  }
}