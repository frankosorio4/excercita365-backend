const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const {hashSync} = require('bcryptjs');
const Local = require("./Local");

const Usuario = connection.define('usuarios', {
    nome: {
        type: DataTypes.STRING,
    },
    cpf: {
        type: DataTypes.STRING
    },
    dataNascimento: {
        type: DataTypes.DATE
    },
    email: {
        type: DataTypes.STRING
    },
    password_hash: {
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
    complemento: {
        type: DataTypes.STRING
    },
    numero: {
        type: DataTypes.INTEGER
    },
    isOnline: {
        type: DataTypes.BOOLEAN
    }
})

 Local.belongsTo(Usuario);
 Usuario.hasMany(Local);

Usuario.beforeSave((usuario) => {
    usuario.password_hash = hashSync(usuario.password_hash, 10)
    return usuario
})

module.exports = Usuario