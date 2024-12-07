const { Router } = require('express');

const PermissoesUsuarioController = require('../controllers/PermissoesUserController');

permissoesUsuarioRoutes = Router();

permissoesUsuarioRoutes.post('/',
    PermissoesUsuarioController.atribuirPermissao
    /* 
    #swagger.tags = ['Permissao_usuario']
    #swagger.path = '/usuarios-permissoes'
    #swagger.method = 'post'
    #swagger.description = 'Desina uma permissao ao usuario pelo id do usuario e da permissao'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Forneca o usuario_id e a permissao_id',
        required: true,
        schema: { 
            $usuarioId: 'Id_usuário',
            $permissaoId: 'Id_permissao',
        }
    }
    #swagger.responses[204] = {
        description: 'No Content'
    } 
    #swagger.responses[400] = {
        schema: { 
            message: 'Usuário ou permissão nao encontrado'
        },
    }        
    #swagger.responses[404] = {
        schema: { 
            message: 'Usuário ou permissão nao encontrado'
        },
    }
    #swagger.responses[500] = {
        schema: { 
            message: 'Erro ao desinar permissao ao usuário'
        },
    }
    */
);

permissoesUsuarioRoutes.get('/',
    PermissoesUsuarioController.listarPermissoes
    /* 
    #swagger.tags = ['Permissao_usuario']
    #swagger.path = '/usuarios-permissoes'
    #swagger.method = 'get'
    #swagger.description = 'Retorna uma lista com todas as permissões do usuário'
    #swagger.responses[200] = {
        schema: {
        "usuarioId": usuarioId,
        "permissaoId": permissaoId,
        "createdAt": "data de criacao da permissão",
        "updatedAt": "data de atualizacao da permissão"
        }
    }
    #swagger.responses[500] = {
        schema: { 
            message: 'Erro ao listar permissões do usuário'
        },
    }
    */
);

permissoesUsuarioRoutes.get('/:usuarioId',
    PermissoesUsuarioController.listarPermissoesPorUsuario
    /* 
    #swagger.tags = ['Permissao_usuario']
    #swagger.path = '/usuarios-permissoes/{usuario_id}'
    #swagger.method = 'get'
    #swagger.description = 'Retorna uma lista com todas as permissões do usuário'
    #swagger.responses[200] = {
        schema: {
        "usuarioId": usuarioId,
        "permissaoId": permissaoId,
        "createdAt": "data de criacao da permissão",
        "updatedAt": "data de atualizacao da permissão"
        }
    }
    #swagger.responses[500] = {
        schema: { 
            message: 'Erro ao listar permissões do usuário'
        },
    }
    */
);

permissoesUsuarioRoutes.delete('/',
    PermissoesUsuarioController.removerPermissao
    /* 
    #swagger.tags = ['Permissao_usuario']
    #swagger.path = '/usuarios-permissoes'
    #swagger.method = 'delete'
    #swagger.description = 'Remove uma permissao ao usuario'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Forneca o usuario_id e a permissao_id',
        required: true,
        schema: { 
            $usuarioId: 'usuario_id',
            $permissaoId: 'permissao_id',
        }
    }
    #swagger.responses[204] = {
        description: 'No Content'
    } 
    #swagger.responses[400] = {
        schema: { 
            message: 'Usuário ou permissão nao encontrado'
        },
    }        
    #swagger.responses[401] = {
        description: 'Unauthorized'
    }
    #swagger.responses[404] = {
        schema: { 
            message: 'Usuário ou permissão nao encontrado'
        },
    }
    #swagger.responses[500] = {
        schema: { 
            message: 'Erro ao desinar permissao ao usuário'
        },
    }
    */
);

module.exports = permissoesUsuarioRoutes