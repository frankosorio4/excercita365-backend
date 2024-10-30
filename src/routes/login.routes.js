const {Router} = require('express')

const loginController = require('../controllers/LoginController')

const loginRoutes = Router()

loginRoutes.post('/', loginController.login
    /* 
    #swagger.tags = ['Login']
    #swagger.path = '/login'
    #swagger.method = 'post'
    #swagger.description = 'Rota para efetuar o login'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informe seu email e a senha ou use os indicados embaixo',
        required: true,
        schema: { 
            $email: 'usuario.teste@example.com',
            $password: 'password123',
        }
    }
    #swagger.responses[200] = {
        description: 'Login efetuado com sucesso',
        schema: {
            "usuarioId": 1,
            "Authorization": "string",
            "nome": "Usuario teste"
        }
    }
    #swagger.responses[400] = {
        description: 'Bad Request',
        schema: {
                mensagem: 'Email e senha obrigatórios'
            } 
    }
    #swagger.responses[401] = {
        description: 'Bad Request',
        schema: {
                mensagem: 'Email ou senha inválido'
            } 
    }
    #swagger.responses[404] = {
        description: 'Not Found',
        schema: {
                mensagem: 'Conta não encontrada'
            }          
    }   
    #swagger.responses[500] = {
        description: 'Internal Server Error',
        schema: {
                mensagem: 'Erro ao efetuar o login'
            }   
    }                     
    */
)

loginRoutes.put('/:id', loginController.atualizarStatusUsuario
    /* 
    #swagger.tags = ['Login']
    #swagger.path = '/login/{id}'
    #swagger.method = 'put'
    #swagger.description = 'Atualiza o status do usuario'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informa o status do usuario',
        required: true,
        schema: { 
            $isOnline: 'Status do usuario',
        }
    }
    #swagger.responses[200] = {
        description: 'Status atualizado com sucesso'
    }
    #swagger.responses[400] = {
        description: 'Bad Request'
    }
    #swagger.responses[404] = {
        description: 'Not Found'            
    }   
    #swagger.responses[500] = {
        description: 'Internal Server Error'
    }                     
    */
)   

module.exports = loginRoutes
