const {Router} = require('express')

const dashboardController = require('../controllers/DashboardController')

const dashboardRoutes = Router()

dashboardRoutes.get('/locais', 
    dashboardController.listarLocais
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

dashboardRoutes.get('/atividades', 
    dashboardController.listarAtividades
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

dashboardRoutes.get('/usuarios', 
    dashboardController.listarUsuariosLogados
    /* 
    #swagger.tags = ['dashboard']
    #swagger.path = '/dashboard/usuarios'
    #swagger.method = 'get'
    #swagger.description = 'End Point para listar o total de usuarios logados.'
    #swagger.responses[200] = {
        description: 'OK',
        schema: {
            $total: '#total de usuarios logados',
            $online: '#usuarios logados',
        }      
    }
    #swagger.responses[404] = {
        description: 'Nenhum usuario encontrado'        
    }
    #swagger.responses[500] = {
        description: 'Erro ao listar os usuarios'        
    }
    */
)

module.exports = dashboardRoutes