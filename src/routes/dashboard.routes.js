const {Router} = require('express')

const dashboardController = require('../controllers/DashboardController')

const dasboardRoutes = Router()

dasboardRoutes.get('/', dashboardController.listarLocais
    /* 
    #swagger.tags = ['dashboard']
    #swagger.path = '/dashboard'
    #swagger.method = 'get'
    #swagger.description = 'End Point para lista todos os locais sem estar logado.'
    #swagger.responses[200] = {
        description: 'OK'        
    }
    #swagger.responses[500] = {
        description: 'Erro ao listar os locais'        
    }
    */
)

module.exports = dasboardRoutes