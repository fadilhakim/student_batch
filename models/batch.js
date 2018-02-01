'use strict';
module.exports = (sequelize, DataTypes) => {
  var batch = sequelize.define('batch', {
    batchName: DataTypes.STRING,
    totalStudent: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return batch;
};