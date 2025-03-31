const Permissao = require("../models/Permissao")

class PermissoesController {

    async criar(request, response) {
        try {
            const data = request.body

            if (!data.descricao) {
                return response.status(400).json({ mensagem: 'A descricao nâo pode ser vacia' })
            }

            if (!isNaN(data.descricao)) {
                return response.status(400).json({ mensagem: 'A descricao não pode ser numerica.' })
            }

            if (data.descricao.includes(' ')) {
                return response.status(400).json({ mensagem: 'A descricao não pode conter espaços em branco.' })
            }

            const permissaoExistente = await Permissao.findOne({
                where: {
                    descricao: data.descricao
                }
            })

            if (permissaoExistente) {
                return response.status(400).json({ mensagem: 'Permissão ja existente' })
            }

            data.descricao = data.descricao.toLowerCase();

            const permissao = await Permissao.create(data)
            response.status(201).json({
                id: permissao.id,
                descricao: permissao.descricao,
                createdAt: permissao.createdAt
            })
        } catch (error) {
            console.log(error)
            response.status(500).json({
                mensagem: 'Houve um erro ao cadastrar a permissao'
            })
        }
    }

    async listarPermissoes(request, response) {
        try {
            const permissoes = await Permissao.findAll({
                attributes: ['id', 'descricao', 'createdAt', 'updatedAt']
            });
            return response.json(permissoes)
        } catch (error) {
            console.log(error)
            response.status(500).json({
                mensagem: 'Houve um erro ao listar as permissoes'
            })
        }
    }

    async atualizarPermissao(request, response) {
        try {
            const id = request.params.id
            const data = request.body
            const permissao = await Permissao.findByPk(id)

            if (!permissao) {
                response
                    .status(404)
                    .json({ mensagem: 'Não foi encontrado a permissao' })
            }

            if (!data.descricao) {
                return response.status(400).json({ mensagem: 'A descricao nâo pode ser vacia' })
            }

            if (!isNaN(data.descricao)) {
                return response.status(400).json({ mensagem: 'A descricao não pode ser numerica.' })
            }

            if (data.descricao.includes(' ')) {
                return response.status(400).json({ mensagem: 'A descricao não pode conter espaços em branco.' })
            }

            const permissaoExistente = await Permissao.findOne({
                where: {    
                    descricao: data.descricao    
                }
            })

            if (permissaoExistente) {
                return response.status(400).json({ mensagem: 'Permissão ja existente' })
            }

            data.descricao = data.descricao.toLowerCase();

            await permissao.update(data)
            response.status(200).json({
                id: permissao.id,
                descricao: permissao.descricao,
                createdAt: permissao.createdAt
            })
        } catch (error) {
            response.status(500).json({
                mensagem: 'Houve um erro ao atualizar a permissao'
            })
        }
    }

    async deletarPermissao(request, response) {
        try {
            const id = request.params.id
            const permissao = await Permissao.findByPk(id)

            if (!permissao) {
                response
                    .status(404)
                    .json({ mensagem: 'Não foi encontrado a permissao' })
            }

            await permissao.destroy()

            response.status(204).json()

        } catch (error) {
            response.status(500).json({
                mensagem: 'Houve um erro ao deletar a permissao'
            })
        }
    }

    // async atribuirPermissao(request, response) {
    //     try {
    //         const { usuarioId, permissaoId } = request.body

    //         const usuario = await Usuario.findByPk(usuarioId)
    //         const permissao = await Permissao.findByPk(permissaoId)

    //         if (!usuario || !permissao) {
    //             response.status(404).json({ mensagem: 'Usuário ou permissão não encontrados' })
    //         }

    //         await usuario.addPermissoes(permissao)

    //         response.status(204).json()
    //     }
    //     catch (error) {
    //         console.log(error)
    //         response.status(500).json({ mensagem: 'A requisição falhou' })
    //     }

    // }
}

module.exports = new PermissoesController()