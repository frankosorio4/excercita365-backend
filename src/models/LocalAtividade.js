const { DataTypes } = require("sequelize");
const connection = require("../database/connection");

const LocalAtividade = connection.define('local_atividades', {
    localId: {
        type: DataTypes.INTEGER,
        references: { 
            model: 'locais', 
            key: 'id' 
        }
    },
    atividadeId: {
        type: DataTypes.INTEGER,
        references: { 
            model: 'atividades', 
            key: 'id' 
        }
    }
});


module.exports = LocalAtividade