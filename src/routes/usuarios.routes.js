const { Router } = require("express");
const UsuarioController = require("../controllers/UsuarioController");

const usuariosRoutes = new Router();

// usuariosRoutes.post(
//     "/",
//     UsuarioController.cadastrarUsuario
//     /* 
//     #swagger.tags = ['Usuário']
//     #swagger.path = '/usuarios'
//     #swagger.method = 'post'
//     #swagger.description = 'Cadastra um novo usuário'
//     #swagger.parameters['obj'] = {
//         in: 'body',
//         description: 'Informe os dados do usuário ou use o exemplo',
//         required: true,
//         schema: { 
//             $nome: 'usuario teste',
//             $sexo: 'Masculino',
//             $cpf: '11122233344',
//             $dataNascimento: '2000-01-01',
//             $email: 'email@email.com',
//             $password: '12345678',
//             $cep: '88047600',
//             $logradouro: 'Logradouro',
//             $bairro: 'Bairro Centro',
//             $cidade: 'Florianópolis',
//             $estado: 'SC',
//             $numeroCasa: '100',
//             $complemento: '1a',
//             $isaOnline: 'false'
//         }
//     }
//     #swagger.responses[201] = {
//         description: 'Usuário criado com sucesso',
//         schema: {
//                 message: "Conta criada com sucesso",
//                 nome: "nome do usuario",
//                 email: "email do usuario",
//                 createdAt: "Data de criacao da conta"
//             }
//     }
//     #swagger.responses[400] = { 
//         description: 'Bad Request',
//         schema: {
//                 message: "Um o mais dados faltantes. O nome, sexo, cpf, email, password, cep, logradouro, bairro, cidade, estado e data de nascimento são obrigatórios."
//             }
//     }
//     #swagger.responses[409] = {
//         description: 'Conflict',
//         schema: {
//                 message: 'Email já cadastrado'
//             } 
//     }        
//     #swagger.responses[500] = {
//         description: 'Internal Server Error',
//         schema: {
//                 mensagem: 'Não foi possivel criar a conta'
//             }
//     }                               
//     */
// );

usuariosRoutes.get("/",
    UsuarioController.listarUsuarios
    /* 
    #swagger.tags = ['Usuário']
    #swagger.path = '/usuarios'
    #swagger.method = 'get'
    #swagger.description = 'Lista todos os usuários'
    #swagger.responses[200] = {
        description: 'OK'        
    }
    #swagger.responses[401] = { 
        description: 'Unauthorized',
        schema: {
                message: 'O Token está inválido ou expirado'
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

usuariosRoutes.put("/",
    UsuarioController.atualizarUsuarios
    /* 
    #swagger.tags = ['Usuário']
    #swagger.path = '/usuarios'
    #swagger.method = 'put'
    #swagger.description = 'Atualiza o usuário quando passado o id como params'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informe os dados do usuário a modificar ou use o exemplo. Apague os dados que não deseja modificar',
        required: true,
        schema: { 
            $nome: 'usuario modificado',
            $sexo: 'Masculino',
            $dataNascimento: '2000-01-01',
            $email: 'emailModificado@email.com',
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
                message: 'O Token está inválido ou expirado'
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
                message: 'Erro ao atualizar o usuário'
            }         
    }
    */
);

usuariosRoutes.delete("/:id",
    UsuarioController.deletarUsuarios
    /* 
    #swagger.tags = ['Usuário']
    #swagger.path = '/usuarios/{userID}'
    #swagger.method = 'delete'
    #swagger.description = 'Deleta o usuário quando passado o id como params'
    #swagger.parameters['userID'] = {
        in: 'path',
        description: 'ID do usuario',
        required: true,
        type: 'integer'
    }
    #swagger.responses[204] = {
        description: 'OK'        
    }
    #swagger.responses[400] = { 
        description: 'Bad request',
        schema: {
                message: 'É necessário passar o ID como route params'
            } 
    }
    #swagger.responses[401] = { 
        description: 'Unauthorized',
        schema: {
                message: 'O Token está inválido ou expirado'
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
                message: 'Erro ao deletar o usuário'
            }  
    }
    */
);


module.exports = usuariosRoutes;
