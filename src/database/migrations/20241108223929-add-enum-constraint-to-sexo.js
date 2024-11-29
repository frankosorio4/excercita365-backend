'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('usuarios', 'sexo', {
      type: Sequelize.ENUM('Masculino', 'Feminino', 'Não informado'),
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('usuarios', 'sexo', {
      type: Sequelize.STRING,
      allowNull: false
    });

    // Optionally, remove ENUM values from the database if no longer needed
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_usuarios_sexo";');
  }
};
