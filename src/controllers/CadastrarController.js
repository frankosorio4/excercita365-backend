const padraoEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const padraoDataNascimento = /^\d{4}-\d{2}-\d{2}$/;
const padraoCPF = new RegExp(/^\d{11}$/);
const padraoCEP = new RegExp(/^\d{8}$/);
const Usuario = require("../models/Usuario");
const Local = require("../models/Local");

class UsuarioController {
    async cadastrarUsuario(request, response) {
        try {
            const dados = request.body;

            if (!dados.nome || !dados.sexo || !dados.cpf || !dados.dataNascimento || !dados.email || !dados.password || !dados.cep || !dados.logradouro || !dados.bairro || !dados.cidade || !dados.estado) {
                return response.
                    status(400).
                    json({ mensagem: 'Um o mais dados faltantes. O nome, sexo, cpf, email, password, cep, logradouro, bairro, cidade, estado e data de nascimento são obrigatórios.' })
            }

            if (typeof dados.nome !== "string") {
                return response
                    .status(400)
                    .json({ mensagem: "O nome deve ser uma string" });
            }

            const valoresSexo = ['Masculino', 'Feminino', 'Nao especificado'];
            if (!valoresSexo.includes(dados.sexo)) {
                return response
                    .status(400)
                    .json({ mensagem: 'O valor de sexo é inválido. Os valores permitidos são: \"Masculino\", \"Feminino\", ou \"Nao especificado\".' })
            }

            if (!padraoCPF.test(dados.cpf)) {
                return response
                    .status(400)
                    .json({ mensagem: 'O CPF deve conter somente números e ter 11 dígitos.' });
            }

            if (padraoDataNascimento.test(dados.dataNascimento) === false) {
                return response.status(400).json({
                    mensagem:
                        "A data de nascimento deve estar no formato YYYY-MM-DD",
                });
            }

            if (padraoEmail.test(dados.email) === false) {
                return response
                    .status(400)
                    .json({ mensagem: "O email está no formato inválido" });
            }

            if (
                !(dados.password?.length >= 8 && dados.password?.length <= 16)
            ) {
                return response.status(400).json({
                    mensagem: "A senha deve ter entre 8 e 16 dígitos",
                });
            }

            if (!padraoCEP.test(dados.cep)) {
                return response
                    .status(400)
                    .json({ mensagem: 'O CEP deve conter somente números e ter 8 dígitos.' });
            }

            const emailExistente = await Usuario.findOne({
                where: {
                    email: dados.email,
                },
            });

            if (emailExistente) {
                return response
                    .status(409)
                    .json({ mensagem: "Email já cadastrado" });
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

            if (isNaN(dados.numeroCasa)) {
                return response
                    .status(400)
                    .json({ mensagem: 'O número da casa deve ser numérico.' });
            }

            const usuario = await Usuario.create({
                nome: dados.nome,
                sexo: dados.sexo,
                cpf: dados.cpf,
                dataNascimento: dados.dataNascimento,
                email: dados.email,
                password: dados.password,
                cep: dados.cep,
                logradouro: dados.logradouro,
                bairro: dados.bairro,
                cidade: dados.cidade,
                estado: dados.estado,
                numeroCasa: dados.numeroCasa,
                complemento: dados.complemento,
                isOnline: dados.isOnline
            });

            response.status(201).json({
                mensagem: "Conta criada com sucesso",
                nome: usuario.nome,
                email: usuario.email,
                createdAt: usuario.createdAt,
            });
        } catch (error) {
            console.log(error)
            response.status(500).json({
                mensagem: "Não foi possivel criar a conta: ",
                error,
            });
        }
    }
}

module.exports = new UsuarioController();