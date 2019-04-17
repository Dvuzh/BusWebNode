'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Stations',
      [
        { id: 7633, name: "Vatutina" },
        { id: 7634, name: "Vostochnaya" },
        { id: 7635, name: "Putilova" },
        { id: 7636, name: "Kinoteatr Irtysh" },
        { id: 7637, name: "Shkola milicii" },
        { id: 7638, name: "Studencheskaya" },
        { id: 9047, name: "Zhiloj kompleks Kristall" },
        { id: 7485, name: "Dmitrieva" },
        { id: 7486, name: "11-j mikrorajon" },
        { id: 7758, name: "Uchebnyj punkt" },
        { id: 7759, name: "3 - ya Kirovskaya" },
        { id: 8081, name: "Yuzhnaya" },
        { id: 8082, name: "DOK(ul. 5 - ya Kirovskaya)" },
        { id: 9204, name: "5 - ya Kirovskaya" },
        { id: 8083, name: "Perova" },
        { id: 8084, name: "Kozhzavod" },
        { id: 8085, name: "Kozhzavod" },
        { id: 8086, name: "Perova" },
        { id: 8062, name: "Torgovaya" },
        { id: 7662, name: "Torgovyj gorod" },
        { id: 7663, name: "TC Kontinent" },
        { id: 7664, name: "11 - j mikrorajon" },
        { id: 9064, name: "70 let Oktyabrya(po trebovaniyu)" },
        { id: 9048, name: "Zhiloj kompleks Kristall" },
        { id: 7667, name: "Studencheskaya" },
        { id: 7668, name: "Shkola milicii" },
        { id: 7669, name: "Putilova" },
        { id: 7670, name: "Vostochnaya" },
        { id: 7671, name: "Vatutina" },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stations', null, {});
  }
};

// [{ id : 7625 , name : пос. Солнечный}, { id : 7626 , name : Дорстрой (ул. 2-я Солнечная)}, { id : 7627 , name : Комкова}, { id : 7628 , name : Звёздная}, { id : 7629 , name : Дианова}, { id : 7630 , name : ОАЗИС}, { id : 7631 , name : Лесной проезд (ул. Дианова)}, { id : 7632 , name : Универсам (ул. Дианова)}, { id : 7633 , name : Ватутина}, { id : 7634 , name : Восточная}, { id : 7635 , name : Путилова}, { id : 7636 , name : Кинотеатр Иртыш}, { id : 7637 , name : Школа милиции}, { id : 7638 , name : Студенческая}, { id : 9047 , name : Жилой комплекс \"Кристалл\"}, { id : 7639 , name : Поворотная (ул. 70 лет Октября)}, { id : 9049 , name : Магазин (ул. 70 лет Октября)}, { id : 7485 , name : Дмитриева}, { id : 7486 , name : 11-й микрорайон}, { id : 7640 , name : ТЦ Континент}, { id : 7641 , name : Торговый город}, { id : 7408 , name : Таксопарк}, { id : 7749 , name : Аэропорт местных линий}, { id : 7750 , name : Авиационная}, { id : 7751 , name : Поликлиника (ул. 12 Декабря)}, { id : 7752 , name : Володарского}, { id : 7781 , name : АО Сибирский хлеб}, { id : 7757 , name : Школа №55}, { id : 7758 , name : Учебный пункт}, { id : 7759 , name : 3-я Кировская}, { id : 8081 , name : Южная}, { id : 8082 , name : ДОК (ул. 5-я Кировская)}, { id : 9204 , name : 5-я Кировская}, { id : 8083 , name : Перова}, { id : 8084 , name : Кожзавод}, { id : 8085 , name : Кожзавод}, { id : 8086 , name : Перова}, { id : 7801 , name : Нефтебаза (ул. Мельничная)}, { id : 8087 , name : Сады Яблонька}, { id : 7802 , name : Школа №53}, { id : 7780 , name : Администрация Кировского округа}, { id : 8062 , name : Торговая}, { id : 7786 , name : Володарского}, { id : 7787 , name : Поликлиника (ул. 12 Декабря)}, { id : 7788 , name : Авиационная}, { id : 7789 , name : Аэропорт местных линий}, { id : 7425 , name : Таксопарк}, { id : 7662 , name : Торговый город}, { id : 7663 , name : ТЦ Континент}, { id : 7664 , name : 11-й микрорайон}, { id : 9064 , name : 70 лет Октября (по требованию)}, { id : 7665 , name : Дмитриева}, { id : 7666 , name : Поворотная (ул. 70 лет Октября)}, { id : 9048 , name : Жилой комплекс \"Кристалл\"}, { id : 7667 , name : Студенческая}, { id : 7668 , name : Школа милиции}, { id : 7669 , name : Путилова}, { id : 7670 , name : Восточная}, { id : 7671 , name : Ватутина}, { id : 7672 , name : Универсам (ул. Дианова)}, { id : 7673 , name : Лесной проезд (ул. Дианова)}, { id : 7674 , name : ОАЗИС}, { id : 7675 , name : Дианова}, { id : 7676 , name : Звёздная}, { id : 7677 , name : Комкова}, { id : 7678 , name : Дорстрой (ул. 2-я Солнечная)}, { id : 7679 , name : пос. Солнечный}]
