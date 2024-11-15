const { Router } = require("express");
const CasdastrarController = require("../controllers/CadastrarController");

const usuariosRoutes = new Router();

usuariosRoutes.post(
    "/",
    CasdastrarController.cadastrarUsuario
    /* 
    #swagger.tags = ['Cadastrar']
    #swagger.path = '/cadastrar'
    #swagger.method = 'post'
    #swagger.description = 'Cadastra um novo usuário'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informe os dados do usuário ou use o exemplo',
        required: true,
        schema: { 
            $nome: 'usuario teste',
            $sexo: 'Masculino',
            $cpf: '11122233344',
            $dataNascimento: '2000-01-01',
            $email: 'email@email.com',
            $password: '12345678',
            $cep: '88047600',
            $logradouro: 'Logradouro',
            $bairro: 'Bairro Centro',
            $cidade: 'Florianópolis',
            $estado: 'SC',
            $numeroCasa: '100',
            $complemento: '1a',
            $isaOnline: 'false'
        }
    }
    #swagger.responses[201] = {
        description: 'Usuário criado com sucesso',
        schema: {
                message: "Conta criada com sucesso",
                nome: "nome do usuario",
                email: "email do usuario",
                createdAt: "Data de criacao da conta"
            }
    }
    #swagger.responses[400] = { 
        description: 'Bad Request',
        schema: {
                message: "Um o mais dados faltantes. O nome, sexo, cpf, email, password, cep, logradouro, bairro, cidade, estado e data de nascimento são obrigatórios."
            }
    }
    #swagger.responses[409] = {
        description: 'Conflict',
        schema: {
                message: 'Email já cadastrado'
            } 
    }        
    #swagger.responses[500] = {
        description: 'Internal Server Error',
        schema: {
                mensagem: 'Não foi possivel criar a conta'
            }
    }                               
    */
);

module.exports = usuariosRoutes;
