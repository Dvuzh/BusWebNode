'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Stations',
      [
        { id: 8641, name: "PO Polet(konechnaya)" },
        { id: 8642, name: "Poliklinika(ul. 3 - ya Transportnaya)" },
        { id: 8643, name: "Panfilova" },
        { id: 8644, name: "Tramvajnoe depo" },
        { id: 8645, name: "Cirk" },
        { id: 8646, name: "Gostinica Omsk" },
        { id: 8647, name: "pl.Serova" },
        { id: 8648, name: "Leninskij rynok" },
        { id: 8649, name: "Rechnoj port" },
        { id: 8650, name: "Kotel`nikova" },
        { id: 8632, name: "Kotel`nikova" },
        { id: 8633, name: "Leninskij rynok" },
        { id: 8634, name: "pl.Serova" },
        { id: 8635, name: "Gostinica Omsk" },
        { id: 8636, name: "Cirk" },
        { id: 8637, name: "Tramvajnoe depo" },
        { id: 8638, name: "Panfilova" },
        { id: 8639, name: "Poliklinika(ul. 3 - ya Transportnaya)" },
        { id: 8640, name: "PO Polet(konechnaya)" },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stations', null, {});
  }
};

