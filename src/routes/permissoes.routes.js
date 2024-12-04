const {Router} = require('express');

const PermissoesController = require('../controllers/PermissoesController');

permissoesRoutes = Router();

permissoesRoutes.post('/', 
    PermissoesController.criar
    /* 
    #swagger.tags = ['Permissao']
    #swagger.path = '/permissoes'
    #swagger.method = 'post'
    #swagger.description = 'Cadastra uma nova permissao'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Nome descritivo da permissao sem espaco e com letras minusculas',
        required: true,
        schema: { 
            $descricao: 'Nome da permissao',
        }
    }
    #swagger.responses[201] = {
        description: 'Permissao criada com sucesso'
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
);

permissoesRoutes.get('/', 
    PermissoesController.listarPermissoes
    /* 
    #swagger.tags = ['Permissao']
    #swagger.path = '/permissoes'
    #swagger.method = 'get'
    #swagger.description = 'End Point para listar todas as permissoes'
    #swagger.responses[200] = {
        description: 'OK'        
    }
    #swagger.responses[500] = {
        description: 'Erro ao listar as permissoes'        
    }
    */
);

permissoesRoutes.put('/:id',
    PermissoesController.atualizarPermissao
    /* 
    #swagger.tags = ['Permissao']
    #swagger.path = '/permissoes/{id}'
    #swagger.method = 'put'
    #swagger.description = 'Atualiza uma permissao pelo id da permissao'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informa a descricao da permissao',
        required: true,
        schema: { 
            $descricao: 'Nome da permissao modificado',
        }
    }
    #swagger.responses[200] = {
        description: 'Permissao atualizada com sucesso'
    }
    #swagger.responses[400] = {
        description: 'Bad Request'
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

permissoesRoutes.delete('/:id',
    PermissoesController.deletarPermissao
    /* 
    #swagger.tags = ['Permissao']
    #swagger.path = '/permissoes/{id}'
    #swagger.method = 'delete'
    #swagger.description = 'Deleta uma permissao pelo id da permissao'
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

module.exports = permissoesRoutes