'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('local_atividades', [
      {
        localId: 1,
        atividadeId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        localId: 2,
        atividadeId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        localId: 3,
        atividadeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        localId: 3,
        atividadeId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        localId: 4,
        atividadeId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        localId: 5,
        atividadeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        localId: 5,
        atividadeId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('local_atividades', {
      localId: {
        [Sequelize.Op.in]: [1, 2, 3, 4, 5]
      },
      atividadeId: {
        [Sequelize.Op.in]: [1, 2, 3, 4, 5]
      }
    }, {});
  }
};
