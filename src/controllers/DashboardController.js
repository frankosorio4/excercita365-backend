const Local = require("../models/Local");
const Atividade = require("../models/Atividade");

class DashboardController {
  async listarLocais(request, response) { // Rota Publica(sem tokem) path: /dashboard
    try {
      const locais = await Local.findAll({
        attributes: [
          "id",
          "nome",
          "descricao",
          "cep",
          "logradouro",
          "municipio",
          "uf",
          "latitude",
          "longitude",
          "linkmap",
          "usuarioId",
        ],
        include: {
          model: Atividade,
          attributes: ["nomeAtividade"],
          through: { attributes: [] },
        },
      });

      return response.status(200).json(locais);
    } catch (error) {
      console.log(error);
      response.status(500).json({
        mensagem: "Erro ao listar os locais: ",
        error,
      });
    }
  }
}

module.exports = new DashboardController();
