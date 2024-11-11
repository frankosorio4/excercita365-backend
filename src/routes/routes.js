const { Router } = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../config/docs/swagger');

const routes = new Router();

const dasboardRoutes = require('./dashboard.routes');
const loginRoutes = require('./login.routes');
const cadastrarRoutes = require('./cadastrar.routes');
const usuariosRoutes = require('./usuarios.routes');
const localRoutes = require('./locais.routes');
const atividadeRoutes = require('./atividades.routes');
const validaToken = require('../middlewares/validaToken');

// Rotas Públicas
routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
routes.use('/dashboard', dasboardRoutes);
routes.use('/login', loginRoutes);
routes.use('/cadastrar', cadastrarRoutes);

// Rotas Privadas
routes.use('/usuarios', usuariosRoutes);
routes.use('/locais', validaToken, localRoutes);
routes.use('/atividades', validaToken, atividadeRoutes);

module.exports = routes;
