const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const Atividade = require("./Atividade");
const LocalAtividade = require("./LocalAtividade");

const Local = connection.define('locais', {
    nome: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    },
    cep: {
        type: DataTypes.STRING
    },
    logradouro: {
        type: DataTypes.STRING
    },
    municipio: {
        type: DataTypes.STRING
    },
    uf: {
        type: DataTypes.STRING
    },
    latitude: {
        type: DataTypes.STRING
    },
    longitude: {
        type: DataTypes.STRING
    },
    linkmap:{
        type: DataTypes.STRING
    },
    usuarioId: {
        type: DataTypes.INTEGER
    }
}, {
    paranoid: true
});

Local.belongsToMany(Atividade, { 
    through: LocalAtividade,
    foreignKey: 'localId',
    otherKey: 'atividadeId'
});

Atividade.belongsToMany(Local, { 
    through: LocalAtividade,
    foreignKey: 'atividadeId',
    otherKey: 'localId'
});

module.exports = Local