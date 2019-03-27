'use strict';
module.exports = (sequelize, DataTypes) => {
  const Station = sequelize.define('Station', {
    name: DataTypes.STRING
  }, {});
  Station.associate = function(models) {
    // associations can be defined here
  };
  return Station;
};