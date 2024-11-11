const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const {hashSync} = require('bcryptjs');
const Local = require("./Local");

const Usuario = connection.define('usuarios', {
    nome: {
        type: DataTypes.STRING,
    },
    sexo: {
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
    password: {
        type: DataTypes.STRING
    },
    cep: {
        type: DataTypes.STRING
    },
    logradouro: {
        type: DataTypes.STRING
    },
    bairro: {
        type: DataTypes.STRING
    },
    cidade: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
    numeroCasa: {
        type: DataTypes.INTEGER
    },
    complemento: {
        type: DataTypes.STRING
    },
    isOnline: {
        type: DataTypes.BOOLEAN
    }
})

 Local.belongsTo(Usuario);
 Usuario.hasMany(Local);

Usuario.beforeSave((usuario) => {
    usuario.password = hashSync(usuario.password, 10)
    return usuario
})

module.exports = Usuario