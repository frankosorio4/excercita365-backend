'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('local_atividades', {
     id: {
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER,
       allowNull: false
     },
     localId: {
       type: Sequelize.INTEGER,
       allowNull: false,
       references: { model: 'locais', key: 'id' }
     },
     atividadeId: {
       type: Sequelize.INTEGER,
       allowNull: false,
       references: { model: 'atividades', key: 'id' }
     },
     createdAt: {
       type: Sequelize.DATE,
       allowNull: false
     },
     updatedAt: {
       type: Sequelize.DATE,
       allowNull: false
     },
     deletedAt: {
       type: Sequelize.DATE
     }
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('local_atividades');
  }
};
