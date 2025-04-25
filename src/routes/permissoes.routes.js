const {Router} = require('express');

const PermissoesController = require('../controllers/PermissoesController');

const permissoesRoutes = Router();

permissoesRoutes.post('/', 
    PermissoesController.criar
    /* 
    #swagger.tags = ['Permissao-Admin']
    #swagger.path = '/permissoes'
    #swagger.method = 'post'
    #swagger.description = 'Rota com permissoes de admin. Cadastra uma nova permissao.'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Nome descritivo da permissao sem espaco e com letras minusculas',
        required: true,
        schema: { $descricao: 'Nome da permissao' }

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
    /*  #swagger.tags = ['Permissao-Admin']
      #swagger.path = '/permissoes'
      #swagger.method = 'get'
      #swagger.description = 'Rota com permissoes de admin...'
      #swagger.responses[200] = { description: 'OK', schema: { usuarioId: 1, permissaoId: 2, createdAt: '', updatedAt: '' } }
      #swagger.responses[500] = { description: 'Erro ao listar as permissoes' }
  */
);

permissoesRoutes.put('/:id',
    PermissoesController.atualizarPermissao
    /* 
    #swagger.tags = ['Permissao-Admin']
    #swagger.path = '/permissoes/{id}'
    #swagger.method = 'put'
    #swagger.description = 'Rota com permissoes de admin. Atualiza uma permissao pelo id.'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informa a descricao da permissao',
        required: true,
        schema: { 
            $descricao: 'Nome da permissao modificado'
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
    #swagger.tags = ['Permissao-Admin']
    #swagger.path = '/permissoes/{id}'
    #swagger.method = 'delete'
    #swagger.description = 'Rota com permissoes de admin. Deleta uma permissao pelo id.'
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