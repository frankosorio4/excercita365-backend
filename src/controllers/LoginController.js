const Usuario = require('../models/Usuario')
const {compareSync} = require('bcryptjs')
const { sign } = require('jsonwebtoken')

class LoginController {
    async login(req, res) {
        try {
            const dados = req.body

            if (!dados.email || !dados.password) {
                return res.status(400).json({ mensagem: 'Email e senha obrigatórios' })
            }

            const usuario = await Usuario.findOne({ where: { email: dados.email } })
    
            if (!usuario) {
                return res.status(404).json({ mensagem: 'Conta não encontrada' })
            }

            if (!compareSync(dados.password, usuario.password_hash)) {
                return res.status(401).json({ mensagem: 'Email ou senha inválido' })
            }

            const token = sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION })

            return res.status(200).json({ usuarioId: usuario.id, 'Authorization': token, 'nome': usuario.nome })

        } catch (error) {
            return res.status(500).json({ error: 'Erro ao efetuar o login' })
        }
    }

    async atualizarStatusUsuario(request, response) {
        try {
            const { id } = request.params
            const { isOnline } = request.body

            if (!id) {
                return response
                    .status(400)
                    .json({
                        message: 'Id obrigatório'
                    })
            }

            if (isOnline === undefined || isOnline === null) {
                return response
                    .status(400)
                    .json({
                        message: 'Status obrigatório'
                    })
            }

            const usuario = await Usuario.findOne({ where: { id } })

            if (!usuario) {
                return response
                    .status(404)
                    .json({
                        message: 'Usuario não encontrado'
                    })
            }

            await Usuario.update({ isOnline }, { where: { id } })

            return response
                .status(200)
                .json({
                    message: 'Status atualizado com sucesso'
                })
        } catch (error) {
            return response
                .status(500)
                .json({ error: 'Erro ao atualizar o status do usuario' })
        }
    }
}   

module.exports = new LoginController()