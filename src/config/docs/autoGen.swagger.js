require('dotenv').config();
const swaggerAutogen = require('swagger-autogen')();

const outputFile = 'src/config/docs/swagger.json';
const endpointsFiles = ['src/routes/routes.js'];

const hostname = process.env.APP_HOST;
const port = process.env.APP_PORT_LOCAL;

const doc = {
    info: {
        title: "API Exercise Open Air",
        description: "API para gerenciamento de locais e atividades",
        version: "1.0.0",
    },
    host: `${hostname}`,
    //host: `${hostname}:${port}`, use this line for docker or local development, port 3000
    schemes: ["https", "http"],
    //schemes: ["http", "https"],// use this line for docker or local development
    security: [{ apiKeyAuth: [] }],
    securityDefinitions: {
        apiKeyAuth: {
            type: "apiKey",
            in: "header",
            name: "Authorization",
            description: "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
        },
    },
};

swaggerAutogen(outputFile, endpointsFiles, doc);