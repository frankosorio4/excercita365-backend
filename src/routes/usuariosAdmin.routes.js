const { Router } = require("express");
const UsuariosAdminController = require("../controllers/UsuarioAdminController");

const usuariosAdminRoutes = new Router();

usuariosAdminRoutes.get("/",
    UsuariosAdminController.listarUsuarios
    /* 
    #swagger.tags = ['Usuários-Admin']
    #swagger.path = '/usuarios-admin'
    #swagger.method = 'get'
    #swagger.description = 'Rota com permissoes de admin. Lista todos os usuários.'
    #swagger.responses[200] = {
        description: 'OK'        
    }
    #swagger.responses[401] = { 
        description: 'Unauthorized',
        schema: {
                message: 'O Token está inválido ou expirado ou usuario sem permissão'
            }
    }
    #swagger.responses[404] = {
        description: 'Not Found',
        schema: {
                message: 'Usuário não encontrado'
            } 
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error',
        schema: {
                message: 'Erro ao buscar os usuários'
            }      
    }
    */
);

usuariosAdminRoutes.put("/:id",
    UsuariosAdminController.atualizarUsuarios
    /* 
    #swagger.tags = ['Usuários-Admin']
    #swagger.path = '/usuarios-admin/{id}'
    #swagger.method = 'put'
    #swagger.description = 'Rota com permissoes de admin. Atualiza os campos de um usuário pelo id.'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informe os campos do usuário que deseja modificar. Use o exemplo embaixo e apague os dados que não deseja modificar',
        required: true,
        schema: { 
            $nome: 'usuario modificado',
            $sexo: 'Masculino',
            $dataNascimento: '2000-01-01',
            $email: 'emailModificado@email.com',
            $cpf: 'cpf modificado',
            $password: '12345678',
        }
    }
    #swagger.responses[200] = {
        description: 'OK',
        schema: {
                message: 'Usuário atualizado com sucesso'
            }  
    }
    #swagger.responses[401] = { 
        description: 'Unauthorized',
        schema: {
                message: 'O Token está inválido ou expirado ou usuario sem permissão'
            } 
    }
    #swagger.responses[404] = {
        description: 'Not Found',
        schema: {
                message: 'Usuário não encontrado'
            }  
    }
    #swagger.responses[409] = {
        description: 'Conflict',
        schema: {
                message: 'Cpf ja cadastrado'
            }        
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error',
        schema: {
                message: 'Erro ao atualizar o usuário'
            }         
    }
    */
);

module.exports = usuariosAdminRoutes;