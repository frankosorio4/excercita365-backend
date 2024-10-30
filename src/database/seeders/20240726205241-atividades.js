"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("atividades", [
      {
        nomeAtividade: "surf",
        descricao: "Surf na praia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomeAtividade: "skate",
        descricao: "Skate na praia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomeAtividade: "ciclismo",
        descricao: "Ciclismo na praia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomeAtividade: "natacao",
        descricao: "Natação na praia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomeAtividade: "corrida",
        descricao: "Corrida na praia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomeAtividade: "caminhada",
        descricao: "Caminhada na praia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomeAtividade: "trilha",
        descricao: "Trilha",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomeAtividade: "musculacao",
        descricao: "Musculacao",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomeAtividade: "futebol",
        descricao: "Futebol",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("atividades", null, {});
  },
};
