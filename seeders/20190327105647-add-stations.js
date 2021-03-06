'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stations',
      [{ id: 8007, name: "pos. Nikolaevka" },
      { id: 8008, name: "Zagorodnaya (po trebovaniyu)" },
      { id: 8009, name: "Magazin (ul. Zagorodnaya)" },
      { id: 8010, name: "Peschanaya" },
      { id: 8011, name: "Kar`er (ul. Zagorodnaya)" },
      { id: 8012, name: "Povorot (ul. Zagorodnaya)" },
      { id: 8013, name: "prospekt Mira (po trebovaniyu)" },
      { id: 8014, name: "Zavod Metallist" },
      { id: 8015, name: "ZSZhB-5" },
      { id: 8017, name: "Magazin (prospekt Mira)" },
      { id: 8018, name: "Mikrorajon Yubilejnyj" },
      { id: 8019, name: "Radiostanciya" },
      { id: 8020, name: "Social`nyj rynok (prospekt Mira)" },
      { id: 8021, name: "DOK (prospekt Mira)" },
      { id: 8022, name: "Magazin Sadko" },
      { id: 8023, name: "OmGU" },
      { id: 8024, name: "Neftezavodskaya" },
      { id: 7521, name: "DK im. Malunceva" },
      { id: 7606, name: "KDC Kristall" },
      { id: 7607, name: "Tehnicheskij universitet" },
      { id: 8755, name: "Medicinskaya akademiya" },
      { id: 7608, name: "SibADI" },
      { id: 7739, name: "Arena-Omsk (ul. Lukashevicha)" },
      { id: 8025, name: "Zarechnaya" },
      { id: 8026, name: "bul`var Zelenyj" },
      { id: 8027, name: "Avtovokzal (ul. Lukashevicha)" },
      { id: 7704, name: "Levoberezhnyj rynok (prospekt Komarova)" },
      { id: 7744, name: "Bol`nica (ul. Stepanca)" },
      { id: 7745, name: "5-j mikrorajon" },
      { id: 7639, name: "Povorotnaya (ul. 70 let Oktyabrya)" },
      { id: 9049, name: "Magazin (ul. 70 let Oktyabrya)" },
      { id: 8028, name: "Dmitrieva" },
      { id: 8029, name: "prospekt Komarova (ul. Dmitrieva)" },
      { id: 8030, name: "12-j mikrorajon" },
      { id: 8988, name: "1-ya Sadovaya" },
      { id: 8031, name: "1-ya Sadovaya" },
      { id: 8032, name: "Shkola" },
      { id: 8033, name: "Koneva" },
      { id: 8034, name: "11-j mikrorajon" },
      { id: 7640, name: "TC Kontinent" },
      { id: 7641, name: "Torgovyj gorod" },
      { id: 7408, name: "Taksopark" },
      { id: 7749, name: "Aeroport mestnyh linij" },
      { id: 7750, name: "Aviacionnaya" },
      { id: 7751, name: "Poliklinika (ul. 12 Dekabrya)" },
      { id: 7752, name: "Volodarskogo" },
      { id: 7753, name: "Voenkomat (ul. Dimitrova)" },
      { id: 7754, name: "Tehnikum (ul. Granichnaya)" },
      { id: 7755, name: "22 Dekabrya" },
      { id: 7756, name: "Po trebovaniyu (ul. Olega Koshevogo)" },
      { id: 7757, name: "Shkola №55" },
      { id: 7803, name: "Shkola №53" },
      { id: 8184, name: "Sady Yablon`ka" },
      { id: 7804, name: "Neftebaza (ul. Mel`nichnaya)" },
      { id: 7805, name: "Samarka" },
      { id: 7806, name: "Magazin (ul. Mel`nichnaya)" },
      { id: 8185, name: "Mezhrajbaza (ul. Mel`nichnaya)" },
      { id: 8194, name: "Baza OPS" },
      { id: 8195, name: "Mehanicheskij zavod" },
      { id: 8196, name: "pos. Melioratorov" },
      { id: 9110, name: "pos. Melioratorov" },
      { id: 8197, name: "Mehanicheskij zavod" },
      { id: 8198, name: "Baza OPS" },
      { id: 8199, name: "Mezhrajbaza (ul. Mel`nichnaya)" },
      { id: 7799, name: "Magazin (ul. Mel`nichnaya)" },
      { id: 7800, name: "Samarka" },
      { id: 7801, name: "Neftebaza (ul. Mel`nichnaya)" },
      { id: 8087, name: "Sady Yablon`ka" },
      { id: 7802, name: "Shkola №53" },
      { id: 7780, name: "Administraciya Kirovskogo okruga" },
      { id: 7781, name: "AO Sibirskij hleb" },
      { id: 7782, name: "Po trebovaniyu (ul. Olega Koshevogo)" },
      { id: 7783, name: "22 Dekabrya" },
      { id: 7784, name: "Tehnikum (ul. Granichnaya)" },
      { id: 7785, name: "Voenkomat (ul. Dimitrova)" },
      { id: 7786, name: "Volodarskogo" },
      { id: 7787, name: "Poliklinika (ul. 12 Dekabrya)" },
      { id: 7788, name: "Aviacionnaya" },
      { id: 7789, name: "Aeroport mestnyh linij" },
      { id: 7425, name: "Taksopark" },
      { id: 8035, name: "Torgovyj gorod" },
      { id: 7426, name: "Ambulatoriya" },
      { id: 7472, name: "Strojmarket Novosel" },
      { id: 7473, name: "11-j mikrorajon" },
      { id: 7474, name: "Social`nyj rynok" },
      { id: 7475, name: "Koneva" },
      { id: 7481, name: "Shkola" },
      { id: 7482, name: "1-ya Sadovaya" },
      { id: 7483, name: "12-j mikrorajon" },
      { id: 7484, name: "prospekt Komarova (ul. Dmitrieva)" },
      { id: 7665, name: "Dmitrieva" },
      { id: 7666, name: "Povorotnaya (ul. 70 let Oktyabrya)" },
      { id: 7746, name: "5-j mikrorajon" },
      { id: 7747, name: "Bol`nica (ul. Stepanca)" },
      { id: 7695, name: "Levoberezhnyj rynok (prospekt Komarova)" },
      { id: 7696, name: "Avtovokzal (prospekt Komarova)" },
      { id: 8036, name: "Avtovokzal (ul. Lukashevicha)" },
      { id: 8037, name: "bul`var Zelenyj" },
      { id: 8038, name: "Zarechnaya" },
      { id: 7727, name: "Arena-Omsk (ul. Lukashevicha)" },
      { id: 7597, name: "SibADI" },
      { id: 8998, name: "Medicinskaya akademiya" },
      { id: 7902, name: "Tehnicheskij universitet" },
      { id: 8039, name: "KDC Kristall" },
      { id: 7572, name: "DK im. Malunceva" },
      { id: 8040, name: "Neftezavodskaya" },
      { id: 8041, name: "OmGU" },
      { id: 8042, name: "Magazin Sadko" },
      { id: 8043, name: "DOK (prospekt Mira)" },
      { id: 8044, name: "Social`nyj rynok (prospekt Mira)" },
      { id: 8045, name: "Radiostanciya" },
      { id: 8046, name: "Mikrorajon Yubilejnyj" },
      { id: 8047, name: "Magazin (prospekt Mira)" },
      { id: 8049, name: "ZSZhB-5" },
      { id: 8050, name: "Zavod Metallist" },
      { id: 8051, name: "prospekt Mira (po trebovaniyu)" },
      { id: 8052, name: "Povorot (ul. Zagorodnaya)" },
      { id: 8053, name: "Kar`er (ul. Zagorodnaya)" },
      { id: 8054, name: "Peschanaya" },
      { id: 8055, name: "Magazin (ul. Zagorodnaya)" },
      { id: 8056, name: "Zagorodnaya (po trebovaniyu)" },
      { id: 8057, name: "pos. Nikolaevka" },



      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stations', null, {});
  }
};
