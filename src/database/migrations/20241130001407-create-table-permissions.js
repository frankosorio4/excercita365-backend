'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable(
      'permissoes',
      {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false
        },
        descricao: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        deletedAt: {
          type: Sequelize.DATE
        }
      }
     )
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('permissoes');
  }
};
