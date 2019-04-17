'use strict';
module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {   
    transportId: DataTypes.INTEGER,
    stationId: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    direction: DataTypes.INTEGER,
  }, {
    tableName:'Routes',
    timestamps: false
  });
  
  Route.associate = (models) => {
    // Route.belongsTo(models.Transport,{foreignKey: 'transportId'});

    Route.belongsTo(models.Station);

    Route.belongsTo(models.Transport);
  };
  return Route;
};