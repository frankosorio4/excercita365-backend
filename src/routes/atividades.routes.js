const  {Router} = require('express')
const AtividadeController = require('../controllers/AtividadeController')

const atividadeRoutes = new Router()

atividadeRoutes.post('/', AtividadeController.cadastrarAtividade
    /* 
    #swagger.tags = ['Atividade']
    #swagger.path = '/atividades'
    #swagger.method = 'post'
    #swagger.description = 'Cadastra uma nova atividade'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informa os dados da atividade',
        required: true,
        schema: { 
            $nomeAtividade: 'Nome da Atividade',
            $descricao: 'Descrição da Atividade',
        }
    }
    #swagger.responses[201] = {
        description: 'Atividade criada com sucesso'
    }        
    #swagger.responses[400] = {
        description: 'Bad Request'
    }        
    #swagger.responses[401] = {
        description: 'Unauthorized'
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error'
    }                
    */
)
atividadeRoutes.get('/', AtividadeController.listarAtividades,
    /* 
    #swagger.tags = ['Atividade']
    #swagger.path = '/atividades'
    #swagger.method = 'get'
    #swagger.description = 'Lista todas as atividades'
    #swagger.responses[200] = {
        description: 'OK'        
    }
    #swagger.responses[401] = {
        description: 'Unauthorized'
    }
    #swagger.responses[404] = {
        description: 'Not Found'
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error'
    }                        
    */
)
atividadeRoutes.delete('/:id', AtividadeController.deletarAtividade,
    /* 
    #swagger.tags = ['Atividade']
    #swagger.path = '/atividades/{id}'
    #swagger.method = 'delete'
    #swagger.description = 'Deleta uma atividade'
    #swagger.responses[204] = {
        description: 'No Content'        
    }
    #swagger.responses[401] = {
        description: 'Unauthorized'        
    }
    #swagger.responses[404] = {
        description: 'Not Found'        
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error'        
    }
    */
)
atividadeRoutes.put('/:id', AtividadeController.atualizarAtividade,
    /* 
    #swagger.tags = ['Atividade']
    #swagger.path = '/atividades/{id}'
    #swagger.method = 'put'
    #swagger.description = 'Atualiza uma atividade'
    #swagger.responses[200] = {
        description: 'OK'        
    }
    #swagger.responses[401] = {
        description: 'Unauthorized'        
    }
    #swagger.responses[404] = {
        description: 'Not Found'        
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error'        
    }
    */
)

module.exports = atividadeRoutes