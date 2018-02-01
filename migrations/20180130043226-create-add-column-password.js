'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.addColumn('Students','password',{ type: Sequelize.STRING });
    
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('addColumnPasswords');
  }
};