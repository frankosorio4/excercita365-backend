const Permissao = require("../models/Permissao");
const Usuario = require("../models/Usuario");

const verificarPermissao = (permissoesRequeridas)  => {
    return async (request, response, next) => {
        try{
            const { usuarioId } = request
            
            // Get all the information of the user inckluding the permissions
            const usuario = await Usuario.findByPk(usuarioId, {
                include: {
                    model: Permissao,
                    through: {
                        attributes: []
                    }
                }
            });

            // get an ARRAY with the permissions of the user from usuario.permissoes
            const permissoesUsuario = usuario.permissoes.map(p => p.descricao)

            const temPermissao = permissoesRequeridas.every(permissao => permissoesUsuario.includes(permissao))

            if(!temPermissao) {
                return response.status(401).json({ mensagem: 'Usuário não tem uma ou mais permissões' })
            }
            
            next();
        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'A requisição falhou' })
        }
    }
}

module.exports = verificarPermissao