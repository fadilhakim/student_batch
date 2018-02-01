'use strict';
module.exports = (sequelize, DataTypes) => {
  var addColumnPassword = sequelize.define('addColumnPassword', {
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return addColumnPassword;
};