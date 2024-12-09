const padraoEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const padraoDataNascimento = /^\d{4}-\d{2}-\d{2}$/;
const padraoCPF = new RegExp(/^\d{11}$/);
const padraoCEP = new RegExp(/^\d{8}$/);
const Usuario = require("../models/Usuario");
const Local = require("../models/Local");

class UsuarioController {

    async listarCamposUsuario(request, response) {
        try {

            const userID =  request.usuarioId;// ID from valida token

            const usuario = await Usuario.findByPk(userID);

            if (!usuario) {
                return response.status(404).json({
                    message: "Usuário não encontrado",
                });
            }

            return response.status(200).json(
                {
                    id: usuario.id,
                    nome: usuario.nome,
                    sexo: usuario.sexo,
                    email: usuario.email,
                    dataNascimento: usuario.dataNascimento,
                    cpf: usuario.cpf,
                    cep: usuario.cep,
                    logradouro: usuario.logradouro,
                    bairro: usuario.bairro,
                    cidade: usuario.cidade,
                    estado: usuario.estado,
                    complemento: usuario.complemento,
                    numeroCasa: usuario.numeroCasa,
                    CreatedAt: usuario.createdAt,
                    UpdatedAt: usuario.updatedAt
                }
            );
        } catch (error) {
            response.status(500).json({
                mensagem: "Erro ao buscar os usuários: ",
                error,
            });
        }
    }

    async atualizarUsuario(request, response) {
        try {
            const userID =  request.usuarioId;// ID from valida token
            const dados = request.body;
            const usuario = await Usuario.findByPk(userID);

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

            if (dados.password) {
                usuario.password = dados.password;
            }
            await usuario.save();
            return response.status(200).json({
                message: "Usuário atualizado com sucesso",
            });
        } catch (error) {
            response.status(500).json({
                mensagem: "Erro ao atualizar o usuário",
            });
        }
    }

    async deletarUsuario(request, response) {
        try {
            const userID = request.usuarioId;// ID from valida token
            const usuario = await Usuario.findByPk(userID);

            const localCadastrado = await Local.findAll({
                where: { usuarioId: userID },
            });

            if (!usuario) {
                return response.status(404).json({
                    message: "Usuário não encontrado",
                });
            }
            
            if (localCadastrado.length > 0) {
                return response.status(400).json({
                    message:
                    "O usuário não pode ser deletado, possui locais cadastrados",
                });
            }

            await usuario.destroy();
            return response.status(204).json();
            //Validation of the logout of the user

        } catch (error) {
            return response.status(500).json({
                mensagem: "Erro ao deletar o usuário",
                error,
            });
        }
    }

}

module.exports = new UsuarioController();