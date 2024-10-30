'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable(
      'usuarios',
      {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false
        },
        nome: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        cpf: {
          type: Sequelize.STRING(11),
          allowNull: false
        },
        dataNascimento: {
          type: Sequelize.DATE,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        password_hash : { 
          type: Sequelize.STRING,
          allowNull: false
        },
        confirma_password_hash : {
          type: Sequelize.STRING,
          allowNull: false
        },
        cep: {
          type: Sequelize.STRING,
          allowNull: false
        },
        logradouro: {
          type: Sequelize.STRING,
          allowNull: false
        },
        municipio: {
          type: Sequelize.STRING,
          allowNull: false
        },
        uf: {
          type: Sequelize.STRING,
          allowNull: false
        },
        complemento: {
          type: Sequelize.STRING
        },
        numero: {
          type: Sequelize.STRING
        },
        isOnline: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
      }
     )
  },
  
  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('usuarios');
  }
};
