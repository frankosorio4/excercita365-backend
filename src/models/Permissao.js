// the model allows us to map the tables from the db.
const { DataTypes } = require('sequelize');
const connection = require('../database/connection');
const Usuario = require('./Usuario');
const UsuarioPermissao = require('./UsuarioPermissao');

// this model maps the responsaveis table into Permicao
const Permissao = connection.define('permissoes', 
    {
    descricao: {
        allowNull: false,
        type: DataTypes.STRING(100)
    }
}, {
    paranoid: true
});

module.exports = Permissao;