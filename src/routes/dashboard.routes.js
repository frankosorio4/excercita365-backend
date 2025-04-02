const {Router} = require('express')

const dashboardController = require('../controllers/DashboardController')

const dasboardRoutes = Router()

dasboardRoutes.get('/locais', dashboardController.listarLocais
    /* 
    #swagger.tags = ['dashboard']
    #swagger.path = '/dashboard/locais'
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

dasboardRoutes.get('/atividades', dashboardController.listarAtividades
    /* 
    #swagger.tags = ['dashboard']
    #swagger.path = '/dashboard/atividades'
    #swagger.method = 'get'
    #swagger.description = 'End Point para lista todas as atividades fisicas sem estar logado.'
    #swagger.responses[200] = {
        description: 'OK'        
    }
    #swagger.responses[404] = {
        description: 'Nenhuma atividade encontrada'        
    }
    #swagger.responses[500] = {
        description: 'Erro ao listar as atividades'        
    }
    */
)

module.exports = dasboardRoutes