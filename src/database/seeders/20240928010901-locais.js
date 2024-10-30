"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const gymPlaces = [
      {
        nome: "Fox Academia",
        descricao:
          "Uma academia completa para todas as suas necessidades de treino.",
        cep: "88056300",
        logradouro: "Rua Leonel Pereira, 1050 - Cachoeira do Bom Jesus.",
        municipio: "Florianópolis",
        uf: "SC",
        latitude: "-27.42206",
        longitude: "-48.43112",
        linkmap: "https://www.google.com/maps?q=-27.42206,-48.43112",
        usuarioId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Academia Pratique Fitness",
        descricao: "A melhor academia para musculação e aeróbicos.",
        cep: "88058200",
        logradouro: "Rua Graciliano Manoel Gomes, 423 - Ingleses do Rio Vermelho.",
        municipio: "Florianópolis",
        uf: "SC",
        latitude: "-27.44925",
        longitude: "-48.40893",
        linkmap: "https://www.google.com/maps?q=-27.44925,-48.40893",
        usuarioId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Academia Perfill",
        descricao: "Musculação e fit dance.",
        cep: "88054001",
        logradouro: "Rua Me. Maria Villac, 1378 - Canasvieiras.",
        municipio: "Florianópolis",
        uf: "SC",
        latitude: "-27.42889",
        longitude: "-48.46494",
        linkmap: "https://www.google.com/maps?q=-27.42889,-48.46494",
        usuarioId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Spot Fit Academia",
        descricao: "Academias com treinamento funcional em Florianópolis.",
        cep: "20040002",
        logradouro: "Tv. Olindina Viêira dos Santos, 67 - Vargem Grande",
        municipio: "Florianópolis",
        uf: "SC",
        latitude: "-27.45271",
        longitude: "-48.45176",
        linkmap: "https://www.google.com/maps?q=-27.45271,-48.45176",
        usuarioId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Ironberg Florianópolis",
        descricao: "O maior centro de treinamento do Brasil!",
        cep: "88034070",
        logradouro: "Rua Antônio Costa, 10 - Itacorubi",
        municipio: "Florianópolis",
        uf: "SC",
        latitude: "-27.58009",
        longitude: "-48.51077",
        linkmap: "https://www.google.com/maps?q=-27.58009,-48.51077",
        usuarioId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("locais", gymPlaces, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("locais", null, {});
  },
};
