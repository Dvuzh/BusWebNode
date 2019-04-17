'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Stations',
      [
        { id: 7513, name: "Omskij neftepererabatyvayushij zavod" },
        { id: 7514, name: "PO Neftehimavtomatika" },
        { id: 7515, name: "Specavtomatika" },
        { id: 7516, name: "PATP-7" },
        { id: 7517, name: "pos. Ermak" },
        { id: 7518, name: "pl. Lickevicha" },
        { id: 7519, name: "Magistral`naya" },
        { id: 7520, name: "Malunceva" },
        { id: 7697, name: "prospekt Komarova (ul. Lukashevicha)" },
        { id: 7698, name: "Lukashevicha" },
        { id: 7672, name: "Universam (ul. Dianova)" },
        { id: 7673, name: "Lesnoj proezd (ul. Dianova)" },
        { id: 7674, name: "OAZIS" },
        { id: 7675, name: "Dianova" },
        { id: 7676, name: "Zvezdnaya" },
        { id: 7677, name: "Komkova" },
        { id: 7678, name: "Dorstroj (ul. 2-ya Solnechnaya)" },
        { id: 7679, name: "pos. Solnechnyj" },
        { id: 7625, name: "pos. Solnechnyj" },
        { id: 7626, name: "Dorstroj (ul. 2-ya Solnechnaya)" },
        { id: 7627, name: "Komkova" },
        { id: 7628, name: "Zvezdnaya" },
        { id: 7629, name: "Dianova" },
        { id: 7630, name: "OAZIS" },
        { id: 7631, name: "Lesnoj proezd (ul. Dianova)" },
        { id: 7632, name: "Universam (ul. Dianova)" },
        { id: 7702, name: "Lukashevicha" },
        { id: 7703, name: "prospekt Komarova (ul. Lukashevicha)" },
        { id: 7571, name: "KDC Kristall" },
        { id: 7573, name: "Malunceva" },
        { id: 7574, name: "Magistral`naya" },
        { id: 7575, name: "pl. Lickevicha" },
        { id: 7576, name: "pos. Ermak" },
        { id: 7852, name: "pos. Ermak" },
        { id: 7577, name: "PATP-7" },
        { id: 7578, name: "Specavtomatika" },
        { id: 7579, name: "PO Neftehimavtomatika" },
        { id: 7580, name: "Poliklinika (prospekt Gubkina)" },
        { id: 7581, name: "Omskij neftepererabatyvayushij zavod" },


      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stations', null, {});
  }
};

