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
        sexo: {
          type: Sequelize.STRING,
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
        password : { 
          type: Sequelize.STRING,
          allowNull: false
        },
        cep: {
          type: Sequelize.STRING(11),
          allowNull: false
        },
        logradouro: {
          type: Sequelize.STRING,
          allowNull: false
        },
        bairro: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cidade: {
          type: Sequelize.STRING,
          allowNull: false
        },
        estado: {
          type: Sequelize.STRING,
          allowNull: false
        },
        numeroCasa: {
          type: Sequelize.STRING,
          allowNull: true
        },
        complemento: {
          type: Sequelize.STRING,
          allowNull: true
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
        deleteAt:{
          type: Sequelize.DATE}
      }
     )
  },
  
  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('usuarios');
  }
};
