'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'confirma_password_hash');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('usuarios', 'confirma_password_hash', {
      type: Sequelize.STRING,
      allowNull: false
    });
  }
};
