const { Router } = require("express");
const LocalController = require("../controllers/LocalController");

const localRoutes = new Router();

localRoutes.post(
  "/",
  LocalController.cadastrarLocal
  /* 
    #swagger.tags = ['Local']
    #swagger.path = '/locais'
    #swagger.method = 'post'
    #swagger.description = 'Cadastra um novo local'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informe os dados do local',
        required: true,
        schema: { 
            $nome: 'Local teste',
            $descricao: 'descricao local teste',
            $cep: '88047470',
            $logradouro: 'logradouro teste',
            $municipio: 'municipio teste',
            $uf: 'SC',
            $atividades: { 
                "surf": false,
                "skate": true, 
                "ciclismo": false,
                "natacao": true, 
                "corrida": false,
                "caminhada": true,
                "trilha": false,
                "musculacao": true,
                "futebol": false
            } 
        }
    }
    #swagger.responses[201] = { 
        description: 'OK',
        schema: {
                message: 'Local criado com sucesso',
                nome: 'Nome Local',
                id: 'idLocal',
                linkmap: "https://www.google.com/maps?q=",
                usuarioId: 'number'
            }
    }
    #swagger.responses[400] = { 
        description: 'Bad Request',
        schema: {
                message: 'O nome do local é obrigatório'
            }
    } 
    #swagger.responses[401] = { 
        description: 'Unauthorized',
        schema: {
                message: 'O Token está inválido ou expirado'
            } 
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error',
        schema: {
                mensagem: 'Erro ao cadastrar o local'
            }
    }
    */
);

localRoutes.get(
  "/usuario/:id",
  LocalController.listarLocaisPorUsuario
  /* 
    #swagger.tags = ['Local']
    #swagger.path = '/locais/usuario/{usuarioId}'
    #swagger.method = 'get'
    #swagger.description = 'Lista todos os locais do usuario logado)'
    #swagger.responses[200] = {
        description: 'Retorna lista de locais pelo id do usuario'        
    }
    #swagger.responses[401] = {
        description: 'Unauthorized',
        schema: {
                message: 'O Token está inválido ou expirado'
            } 
    }          
    #swagger.responses[400] = {
        description: 'Not Found',
        schema: {
                message: 'O ID do usuario é obrigatório'
            }
    }   
    #swagger.responses[500] = {
        description: 'Internal Server Error',
        schema: {
                mensagem: 'Erro ao buscar os locais'
            }       
    }
    */
);

localRoutes.get(
  "/:id",
  LocalController.listarPorId
  /* 
    #swagger.tags = ['Local']
    #swagger.path = '/locais/{id}'
    #swagger.method = 'get'
    #swagger.description = 'Lista o local por id'
    #swagger.responses[200] = {
        description: 'Retorna lista de locais pelo id'        
    }
    #swagger.responses[401] = {
        description: 'Unauthorized',
        schema: {
                message: 'O Token está inválido ou expirado'
            } 
    }          
    #swagger.responses[400] = {
        description: 'Not Found',
        schema: {
                message: 'O ID do local é obrigatório'
            }
    }   
    #swagger.responses[500] = {
        description: 'Internal Server Error',
        schema: {
                mensagem: 'Erro ao buscar  local'
            }       
    }
    */
);

localRoutes.get(
  "/:id/maps",
  LocalController.pegarUrlMapa
  /*
    #swagger.tags = ['Local']
    #swagger.path = '/locais/{id}/maps'
    #swagger.method = 'get'
    #swagger.description = 'Retorna a url do mapa do local pelo id do local'
    #swagger.responses[200] = {
        description: 'OK',
        schema: {
            urlLocal: "https://www.google.com/maps?q="
        }    
    }
    #swagger.responses[400] = {
        description: 'Bad Request',
        schema: {
                message: 'Local não encontrado'
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
                message: 'Local não possui link de mapas'
            }  
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error',
        schema: {
                mensagem: 'Erro ao buscar o local'
            }         
    }        
    */
);

localRoutes.delete(
  "/:id",
  LocalController.deletarLocal
  /* 
    #swagger.tags = ['Local']
    #swagger.path = '/locais/{id}'
    #swagger.method = 'delete'
    #swagger.description = 'Deleta um local pelo id do local'
    #swagger.responses[204] = {
        description: 'No Content'        
    }
    #swagger.responses[401] = {
        description: 'Unauthorized',
        schema: {
                message: 'O Token está inválido ou expirado'
            }          
    }
    #swagger.responses[403] = {
        description: 'Forbidden'       
    }
    }        
    #swagger.responses[404] = {
        description: 'Not Found',
        schema: {
                message: 'Local não encontrado'
            }           
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error',
        schema: {
                mensagem: 'Erro ao excluir o local: '
            }        
    }
    */
);

localRoutes.put(
  "/:id",
  LocalController.atualizarLocal
  /* 
    #swagger.tags = ['Local']
    #swagger.path = '/locais/{id}'
    #swagger.method = 'put'
    #swagger.description = 'Atualiza um local pelo id do local'
    #swagger.tags = ['Local']
    #swagger.path = '/locais'
    #swagger.method = 'post'
    #swagger.description = 'Cadastra um novo local'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Modifique os campos do local a modificar',
        required: true,
        schema: { 
            $nome: 'Local modificado',
            $descricao: 'descricao local modificado',
            $cep: '88047480',
            $logradouro: 'logradouro modificado',
            $municipio: 'municipio modificado',
            $uf: 'SC',
            $atividades: { 
                "surf": false,
                "skate": true, 
                "ciclismo": false,
                "natacao": false, 
                "corrida": false,
                "caminhada": false,
                "trilha": false,
                "musculacao": true,
                "futebol": false
            } 
        }
    }
    #swagger.responses[200] = {
        description: 'OK',
        schema: {
            message: "Local atualizado com sucesso"
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
                message: 'Local não encontrado'
            }   
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error',
        schema: {
                mensagem: 'Erro ao atualizar o local'
            }   
    }    
    */
);

module.exports = localRoutes;
