'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      Example:
      return queryInterface.bulkInsert('batches', [{
        batchName: 'Artic Fox',
        totalStudent : 23,
        createdAt : new Date(),
        updatedAt : new Date(),
      },{
        batchName: 'Buble Fox',
        totalStudent : 23,
        createdAt : new Date(),
        updatedAt : new Date(),
      },{
        batchName: 'Charlie Fox',
        totalStudent : 23,
        createdAt : new Date(),
        updatedAt : new Date(),
      },{
        batchName: 'Darwin Fox',
        totalStudent : 23,
        createdAt : new Date(),
        updatedAt : new Date(),
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
