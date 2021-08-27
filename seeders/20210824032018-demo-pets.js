'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Pets",
     [
       {
        name: 'Yancy',
        breed: 'Bulldog',
        age: 10,
        tricks: 'sit',
        createdAt: new Date(),
        updatedAt: new Date(),
        parent: 1,
    },
        { 
      name: 'Teddy',
      breed: 'pitbull',
      age: 10,
      tricks: 'shake',
      createdAt: new Date(),
      updatedAt: new Date(),
      parent: 2,
    },

    ],
    {}
  );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
