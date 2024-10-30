const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database.config');

const connection = new Sequelize(databaseConfig.url || databaseConfig);

module.exports = connection;
