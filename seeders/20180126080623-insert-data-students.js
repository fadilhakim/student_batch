'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */

      return queryInterface.bulkInsert('Students', [
        {
        name: 'Fuadi',
        age : 40,
        email: "fuadiGetStronger@gmail.com",
        score : 70,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Devdots',
        age : 27,
        email: "subscribeMePlease@gmail.com",
        score : 76,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Agny',
        age : 25,
        score : 82,
        email: "AgnyGG@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Aauutians',
        age : 23,
        score : 82,
        email: "autians@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Marapulai',
        age : 29,
        score : 92,
        email: "marapat@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkDelete('Students', null, {});
    
  }
};
