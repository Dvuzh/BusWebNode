'use strict';
module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.import("../models/route")

  const Transport = sequelize.define('Transport', {
    num: DataTypes.INTEGER,
    directionOne: DataTypes.INTEGER,
    directionTwo: DataTypes.INTEGER,
    type: DataTypes.INTEGER
  }, {}); 
  
  Transport.associate = function(models) {
    Transport.hasMany(Route, {  foreignKey: 'transportId'});
  };
  return Transport;
};