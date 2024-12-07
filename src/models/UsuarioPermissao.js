const { DataTypes } = require('sequelize');
const connection = require('../database/connection');
const Permissao = require('./Permissao');

const UsuarioPermissao = connection.define('usuario_permissoes', {
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    },
    permissaoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'permissoes',
            key: 'id'
        }
    }
}, {
    paranoid: true //  Habilita soft delete
});

module.exports = UsuarioPermissao