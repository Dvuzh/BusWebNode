'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Stations',
      [
        { id: 7445, name: "Rozhdestvenskogo" },
        { id: 8759, name: "Zh/d vokzal" },
        { id: 7731, name: "Cirk" },
        { id: 8758, name: "Zh/d vokzal" },
        { id: 7435, name: "Rozhdestvenskogo" },
        { id: 7735, name: "pl. Serova" },
        { id: 8287, name: "Hlebozavod (prospekt Karla Marksa)" },
        { id: 7736, name: "Cirk" },
        { id: 7737, name: "Dom pechati" },
        { id: 7738, name: "Akademiya transporta" },
        { id: 7410, name: "Magazin Goluboj ogonek" },
        { id: 7728, name: "Magazin Goluboj ogonek" },
        { id: 7411, name: "Magazin Detskij Mir" },
        { id: 7694, name: "pl. Lenina" },
        { id: 7594, name: "Dvorec tvorchestva" },
        { id: 7595, name: "Agrarnyj universitet" },
        { id: 7596, name: "Telecentr" },
        { id: 7421, name: "pl. Lenina" },
        { id: 7729, name: "Akademiya transporta" },
        { id: 7732, name: "pl. Serova" },
        { id: 7730, name: "Dom pechati" },
        { id: 8605, name: "Magazin Yunyj tehnik" },
        { id: 8293, name: "Hlebozavod (prospekt Karla Marksa)" },
        { id: 7609, name: "Telecentr" },
        { id: 7610, name: "Agrarnyj universitet" },
        { id: 7611, name: "Dvorec tvorchestva" },
        { id: 8756, name: "Zavod im. Popova" },
        { id: 8757, name: "Zavod im. Popova" },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stations', null, {});
  }
};
