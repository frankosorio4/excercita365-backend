'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('usuarios', 'cpf', {
      type: Sequelize.STRING(11),
      allowNull: false,
      unique: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('usuarios', 'cpf', {
      type: Sequelize.STRING(11),
      allowNull: false,
      unique: false // Removes the unique constraint
    });
  }
};
