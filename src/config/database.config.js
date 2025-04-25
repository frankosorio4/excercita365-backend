const { config } = require('dotenv');
config();

const sequelizeConfig = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    dialectOptions: process.env.DB_SSL === 'true' ? {
        ssl: {
            require: true,
            rejectUnauthorized: false // Ajuste conforme necessário
        }
    } : {}
};

module.exports = sequelizeConfig;