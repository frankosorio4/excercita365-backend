'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(10);

    const users = [
      {
        nome: 'Usuario teste',
        cpf: '98765432100',
        sexo: 'Feminino',
        dataNascimento: '1990-01-01',
        email: 'usuario.teste@example.com',
        password: await bcrypt.hash('password123', salt),
        cep: '01001000',
        logradouro: 'Rua Principal',
        bairro: 'Centro',
        cidade: 'Sao Paulo',
        estado: 'SP',
        complemento: '',
        numeroCasa: 100,
        isOnline: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Jane Smith',
        cpf: '98765432101',
        sexo: 'Feminino',
        dataNascimento: '1992-02-02',
        email: 'jane.smith@example.com',
        password: await bcrypt.hash('password456', salt),
        cep: '01311000',
        logradouro: 'Avenida Paulista',
        bairro: 'Bela Vista',
        cidade: 'Sao Paulo',
        estado: 'SP',
        complemento: 'Apt 12',
        numeroCasa: 200,
        isOnline: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Alice Johnson',
        cpf: '11111111111',
        sexo: 'Feminino',
        dataNascimento: '1988-03-03',
        email: 'alice.johnson@example.com',
        password: await bcrypt.hash('password789', salt),
        cep: '22020030',
        logradouro: 'Rua das Flores',
        bairro: 'Copacabana',
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        complemento: '1-b',
        numeroCasa: 150,
        isOnline: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Bob Brown',
        cpf: '22222222222',
        sexo: 'Masculino',
        dataNascimento: '1985-04-04',
        email: 'bob.brown@example.com',
        password: await bcrypt.hash('password321', salt),
        cep: '30120010',
        logradouro: 'Rua do Carmo',
        bairro: 'Botafogo',
        cidade: 'minas',
        estado: 'MG',
        complemento: 'Casa',
        numeroCasa: 50,
        isOnline: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Eve White',
        cpf: '33333333333',
        sexo: 'Feminino',
        dataNascimento: '1993-07-07',
        email: 'eve.white@example.com',
        password: await bcrypt.hash('password111', salt),
        cep: '90010000',
        logradouro: 'Rua Esperança',
        bairro: 'Centro',
        cidade: 'Porto Alegre',
        estado: 'RS',
        complemento: '',
        numeroCasa: 300,
        isOnline: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('usuarios', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};