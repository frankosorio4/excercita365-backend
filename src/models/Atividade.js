const { DataTypes } = require("sequelize");
const connection = require("../database/connection");

const Atividade = connection.define('atividades', {
    nomeAtividade: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    deletedAt: {
        type: DataTypes.DATE
    }
});

module.exports = Atividade