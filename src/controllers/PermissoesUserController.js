const Permissao = require("../models/Permissao")
const Usuario = require("../models/Usuario")
const UsuarioPermissao = require("../models/UsuarioPermissao")

class PermissoesUsuarioController {

    async atribuirPermissao(request, response) {
        try {
            const { usuarioId, permissaoId } = request.body

            const usuario = await Usuario.findByPk(usuarioId)
            const permissao = await Permissao.findByPk(permissaoId)

            if (!usuario || !permissao) {
                return response.status(404).json({ mensagem: 'Usuário ou permissão não existente' })
            }

            const usuarioPermissoes = await UsuarioPermissao.findOne(
                {
                    where: {
                        usuarioId: usuarioId,
                        permissaoId: permissaoId
                    }
                }
            )

            if (usuarioPermissoes) {
                return response.status(400).json({ mensagem: 'O usuario ja possui essa permissão' })
            }

            // This function "addPermissoes" is from the model "Usuario". It is atomatically created by sequelize due the relation between the two models "belong to many".
            await usuario.addPermissoes(permissao)

            response.status(204).json()
        }
        catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'Erro ao desinar permissao ao usuário' })
        }

    }

    async listarPermissoes(request, response) {
        try {

            const usuarioPermissoes = await UsuarioPermissao.findAll({
                attributes: [
                    'usuarioId',
                    'permissaoId',
                    'createdAt',
                    'updatedAt'
                ]
            })

            response.status(200).json(usuarioPermissoes)
        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'Erro ao listar as permissoes' })
        }
    }

    async listarPermissoesPorUsuario(request, response) {
        try {
            const { usuarioId } = request.params

            const usuario = await Usuario.findByPk(usuarioId, {
                include: {
                    model: Permissao,
                    through: {
                        model: UsuarioPermissao,
                        attributes: []
                    }
                }
            });
            //revisar que devuelve usuario y tratar de retornar id de permissoes y descripcion
            const permissoesUsuario = usuario.permissoes.map(p => (
                {
                    id_permissao: p.id,
                    descricao: p.descricao
                })
            )
            console.log(permissoesUsuario)

            response.status(200).json(permissoesUsuario)
        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'Erro ao listar as permissoes' })
        }
    }

    async removerPermissao(request, response) {
        try {
            const { usuarioId, permissaoId } = request.body

            const usuario = await Usuario.findByPk(usuarioId)
            const permissao = await Permissao.findByPk(permissaoId)

            if (!usuario || !permissao) {
                return response.status(404).json({ mensagem: 'Usuário ou permissão não existente' })
            }

            const usuarioPermissoes = await UsuarioPermissao.findOne(
                {
                    where: {
                        usuarioId: usuarioId,
                        permissaoId: permissaoId
                    }
                }
            )

            if (!usuarioPermissoes) {
                return response.status(404).json({ mensagem: 'O usuario não possui essa permissão' })
            }

            await UsuarioPermissao.destroy({ where: { usuarioId: usuarioId, permissaoId: permissaoId } });

            return response.status(204).json()
        }
        catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'Erro ao deletar permissao ao usuário' })
        }
    }

}

module.exports = new PermissoesUsuarioController()