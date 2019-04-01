'use strict';
module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {   
    transportId: DataTypes.INTEGER,
    stationId: DataTypes.INTEGER,
    number: DataTypes.INTEGER
  }, {});
  Route.associate = function(models) {
    // associations can be defined here
    // TransportStations.belongsTo(models.Transport, {foreignKey: 'id_transport' });
  };
  return Route;
};