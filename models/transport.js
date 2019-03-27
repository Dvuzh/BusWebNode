'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transport = sequelize.define('Transport', {
    num: DataTypes.INTEGER,
    directionOne: DataTypes.INTEGER,
    directionTwo: DataTypes.INTEGER,
    type: DataTypes.INTEGER
  }, {});
  Transport.associate = function(models) {
    // associations can be defined here
  };
  return Transport;
};