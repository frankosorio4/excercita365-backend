const { Router } = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../config/docs/swagger');

const routes = new Router();

const dashboardRoutes = require('./dashboard.routes');
const loginRoutes = require('./login.routes');
const cadastrarRoutes = require('./cadastrar.routes');
const usuariosRoutes = require('./usuarios.routes');
const localRoutes = require('./locais.routes');
const atividadeRoutes = require('./atividades.routes');
const permissoesRoutes = require('./permissoes.routes');
const permissoesUsuarioRoutes = require('./permissoesUsuario.routes');
const usuariosAdminRoutes = require('./usuariosAdmin.routes');
const validaToken = require('../middlewares/validaToken');
const verificaPermissao = require('../middlewares/verificaPermissao');

// Rotas Públicas
routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
routes.use('/dashboard', dashboardRoutes);
routes.use('/login', loginRoutes);
routes.use('/cadastrar', cadastrarRoutes);

// Rotas Privadas
routes.use('/usuarios', validaToken,usuariosRoutes);
routes.use('/locais', validaToken, localRoutes);

// Rotas com permissoes
routes.use('/permissoes', validaToken, verificaPermissao(['admin']), permissoesRoutes);
routes.use('/usuarios-permissoes', validaToken, verificaPermissao(['admin']), permissoesUsuarioRoutes);
routes.use('/atividades', validaToken, verificaPermissao(['admin']),atividadeRoutes);
routes.use('/usuarios-admin', validaToken, verificaPermissao(['admin']),usuariosAdminRoutes);

module.exports = routes;