'use strict';
module.exports = (sequelize, DataTypes) => {

  const Transport = sequelize.define('Transport', {
    num: DataTypes.INTEGER,
    directionOne: DataTypes.INTEGER,
    directionTwo: DataTypes.INTEGER,
    type: DataTypes.INTEGER
  }, {
    tableName:'Transports',
    timestamps: false
  }); 
    
  Transport.associate = (models) => {   
    Transport.hasMany(models.Route);
  };
  return Transport;
};