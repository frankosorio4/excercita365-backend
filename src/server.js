const express = require("express");
const cors = require('cors');
const routes = require("./routes/routes");
const connection = require("./database/connection");
const APP_PORT = process.env.APP_PORT_LOCAL;

class Server {
    // a comment to test git hub actions
    constructor(server = express()) {
        this.middlewares(server);
        this.database();
        server.use(routes);
        this.initializeServer(server);
    }

    async middlewares(server) {
        console.log("Executando os middlewares");
        server.use(cors({
            origin: '*'
        }));
        server.use(express.json());
        console.log("Middlewares executados");
    }

    async database() {
        try {
            console.log("Conectando ao banco de dados");
            await connection.authenticate();
        } catch (error) {
            console.log("Erro ao conectar ao banco de dados: ", error);
        }
    }

    async initializeServer(server) {
        server.listen(APP_PORT, () => {
            console.log(`Servidor rodando na porta ${APP_PORT}!`);
        });
    }
}

module.exports = { Server };
