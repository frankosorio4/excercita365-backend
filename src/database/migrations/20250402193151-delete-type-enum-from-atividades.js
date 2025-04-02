"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Revert the column type back to STRING.
    await queryInterface.changeColumn("atividades", "nomeAtividade", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    // Reapply the original ENUM type if needed.
    await queryInterface.changeColumn("atividades", "nomeAtividade", {
      type: Sequelize.ENUM(
        "surf",
        "skate",
        "ciclismo",
        "natacao",
        "corrida",
        "caminhada",
        "trilha",
        "musculacao",
        "futebol"
      ),
      allowNull: false,
    });
  },
};
