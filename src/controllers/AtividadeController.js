const Atividade = require('../models/Atividade')
class AtividadeController {
    async cadastrarAtividade(request, response) {
        try {
            const dadosRequest = request.body

            const dados = {
                nomeAtividade: dadosRequest.nomeAtividade.toLowerCase(),
                descricao: dadosRequest.descricao
            }
            
            if (!(dados.nomeAtividade)) {
                return response
                    .status(400)
                    .json({ mensagem: 'O nome da atividade é obrigatório' })
            }   

            if (!(dados.descricao)) {
                return response
                    .status(400)
                    .json({ mensagem: 'A descrição da atividade é obrigatória' })
            }

            const atividadeExistente = await Atividade.findOne({ where: { nomeAtividade: dados.nomeAtividade } })
            console.log(atividadeExistente)

            if (atividadeExistente) {
                return response
                    .status(400)
                    .json({ mensagem: 'Já existe uma atividade com esse nome' })
            }

            const atividade = await Atividade.create(dados)

            return response
                .status(201)
                .json({mensagem: 'Atividade criada com sucesso', atividade})

        } catch (error) {
            console.log(error);
            response.status(500).json({
                mensagem: 'Erro ao cadastrar a atividade: '
            });
        }
    }

    async listarAtividades(request, response) {
        try {
            const atividades = await Atividade.findAll()

            if(!(atividades)) {
                return response
                    .status(404)
                    .json({
                        message: 'Nenhuma atividade encontrada'
                    })
            }

            return response
                .status(200)
                .json(atividades)

        } catch (error) {
            response
            .status(500)
            .json({
                mensagem: 'Erro ao buscar as atividades: ',
                error
            })
        }
    }

    async deletarAtividade(request, response) {
        try {
            const { id } = request.params
            const atividade = await Atividade.findOne({ where: { id } })

            if (!(atividade)) {
                return response
                    .status(404)
                    .json({
                        message: 'Atividade não encontrada'
                    })
            }

            await Atividade.destroy({ where: { id } })
            return response
                .status(204)
                .json({
                    message: 'Atividade excluída com sucesso'
                })

        } catch (error) {
            response
            .status(500)
            .json({
                mensagem: 'Erro ao excluir a atividade: ',
                error
            })
        }
    }

    async atualizarAtividade(request, response) {
        try {
            const { id } = request.params
            const dados = request.body

            const atividadeAtualizar = await Atividade.findOne({ where: { id } })

            if (!(atividadeAtualizar)) {
                return response
                    .status(404)
                    .json({
                        message: 'Atividade não encontrada'
                    })
            }
            const atividade = await Atividade.update(dados, { where: { id } })
            
            return response
                .status(200)
                .json({
                    message: 'Atividade atualizada com sucesso',
                    atividade
                })

        } catch (error) {   
            response
            .status(500)
            .json({
                mensagem: 'Erro ao atualizar a atividade: ',
                error
            })
        }
    }
}

module.exports = new AtividadeController()