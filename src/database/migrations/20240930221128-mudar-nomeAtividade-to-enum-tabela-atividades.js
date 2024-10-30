"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("atividades", "nomeAtividade", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
