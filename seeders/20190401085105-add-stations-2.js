'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Stations',
      [{ id: 8641, name: "ПО Полет(конечная)" }, { id: 8642, name: "Поликлиника(ул. 3 - я Транспортная)" }, { id: 8643, name: "Панфилова" },
      { id: 8644, name: "Трамвайное депо" }, { id: 8645, name: "Цирк" }, { id: 8646, name: "Гостиница Омск" }, { id: 8647, name: "пл.Серова" },
      { id: 8648, name: "Ленинский рынок" }, { id: 8649, name: "Речной порт" }, { id: 8650, name: "Котельникова" }, { id: 8632, name: "Котельникова" },
      { id: 8633, name: "Ленинский рынок" }, { id: 8634, name: "пл.Серова" }, { id: 8635, name: "Гостиница Омск" }, { id: 8636, name: "Цирк" },
      { id: 8637, name: "Трамвайное депо" }, { id: 8638, name: "Панфилова" }, { id: 8639, name: "Поликлиника(ул. 3 - я Транспортная)" },
      { id: 8640, name: "ПО Полет(конечная)" }], {});
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Stations', null, {});
    }
};

