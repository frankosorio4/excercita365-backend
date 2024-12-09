const padraoEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const padraoDataNascimento = /^\d{4}-\d{2}-\d{2}$/;
const padraoCPF = new RegExp(/^\d{11}$/);
const padraoCEP = new RegExp(/^\d{8}$/);
const Usuario = require("../models/Usuario");
const Local = require("../models/Local");
const UsuarioPermissao = require("../models/UsuarioPermissao");
const Permissao = require("../models/Permissao");

class UsuariosAdminController {

    async listarUsuarios(request, response) {
        try {
            const usuarios = await Usuario.findAll({
                attributes: [
                    "id",
                    "nome",
                    "sexo",
                    "email",
                    "cpf",
                    "cep",
                    "createdAt",
                    "isOnline",
                ],
                include: {
                    model: Permissao,
                    through: {
                        model: UsuarioPermissao,
                        attributes: []
                    }
                },
                order: ["id"],
            });

            if (!usuarios) {
                return response.status(404).json({
                    message: "Usuário não encontrado",
                });
            }

            return response.status(200).json(usuarios);
        } catch (error) {
            response.status(500).json({
                mensagem: "Erro ao buscar os usuários: ",
                error,
            });
        }
    }

    async atualizarUsuarios(request, response) {
        try {

            const { id } =  request.params;
            const dados = request.body;
            const usuario = await Usuario.findByPk(id);

            if (!dados || Object.keys(dados).length === 0) {
                return response.status(400).json({
                    message:
                        "É necessário passar os dados do usuário que deseja atualizar como corpo da requisição",
                });
            }

            if (!usuario) {
                return response.status(404).json({
                    message: "Usuário não encontrado",
                });
            }

            if (dados.nome) {
                if (typeof dados.nome !== "string") {
                    return response
                        .status(400)
                        .json({ mensagem: "O nome deve ser uma string" });
                }
            }

            if (dados.email) {
                if (padraoEmail.test(dados.email) === false) {
                    return response
                        .status(400)
                        .json({ mensagem: "O email está no formato inválido" });
                }

            }

            if (dados.dataNascimento) {
                if (padraoDataNascimento.test(dados.dataNascimento) === false) {
                    return response.status(400).json({
                        mensagem:
                            "A data de nascimento deve estar no formato YYYY-MM-DD",
                    });
                }
            }

            if (dados.sexo) {
                const valoresSexo = ['Masculino', 'Feminino', 'Nao especificado'];
                if (!valoresSexo.includes(dados.sexo)) {
                    return response
                        .status(400)
                        .json({ mensagem: 'O valor de sexo é inválido. Os valores permitidos são: \"Masculino\", \"Feminino\", ou \"Nao especificado\".' })
                }
            }

            if (dados.cpf) {
                if (!padraoCPF.test(dados.cpf)) {
                    return response
                        .status(400)
                        .json({ mensagem: 'O CPF deve conter somente números e ter 11 dígitos.' });
                }
            }

            const cpfExistente = await Usuario.findOne({
                where: {
                    cpf: dados.cpf,
                },
            });

            if (cpfExistente) {
                return response
                    .status(409)
                    .json({ mensagem: "CPF já cadastrado" });
            }

            if(dados.password) {
                if (
                    !(dados.password?.length >= 8 && dados.password?.length <= 16)
                ) {
                    return response.status(400).json({
                        mensagem: "A senha deve ter entre 8 e 16 dígitos",
                    });
                }
            }

            usuario.nome = dados.nome || usuario.nome;
            usuario.email = dados.email || usuario.email;
            usuario.sexo = dados.sexo || usuario.sexo;
            usuario.dataNascimento = dados.dataNascimento || usuario.dataNascimento;
            usuario.cpf = dados.cpf || usuario.cpf;

            if (dados.password) {
                usuario.password = dados.password;
            }
            await usuario.save();
            return response.status(200).json({
                message: "Usuário atualizado com sucesso",
            });
        } catch (error) {
            console.log(error);
            response.status(500).json({
                mensagem: "Erro ao atualizar o usuário",
            });
        }
    }
}

module.exports = new UsuariosAdminController();