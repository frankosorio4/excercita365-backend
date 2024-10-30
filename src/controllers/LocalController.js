const Local = require("../models/Local");
const Usuario = require("../models/Usuario");
const Atividade = require("../models/Atividade");
const {
  getLatitudeLongitude,
  getLinkGoogleMaps,
} = require("../services/mapaService");
const LocalAtividade = require("../models/LocalAtividade");
const { Op } = require("sequelize");

class LocalController {
  async cadastrarLocal(request, response) {
    try {
      const dados = request.body;

      if (!dados.nome) {
        return response
          .status(400)
          .json({ mensagem: "O nome do local é obrigatório" });
      }

      if (!dados.cep) {
        return response.status(400).json({ mensagem: "O CEP é obrigatório" });
      }

      if (!dados.logradouro) {
        return response
          .status(400)
          .json({ mensagem: "O logradouro é obrigatório" });
      }

      if (!dados.municipio) {
        return response
          .status(400)
          .json({ mensagem: "O municipio é obrigatório" });
      }

      if (!dados.uf) {
        return response.status(400).json({ mensagem: "O UF é obrigatório" });
      }

      //validar latitude e longitude

      const { lat, lng } = await getLatitudeLongitude(dados.cep);

      const linkGoogleMaps = await getLinkGoogleMaps({ lat, lng });

      const local = await Local.create({
        ...dados,
        usuarioId: parseInt(request.usuarioId),
        // usuarioId: parseInt(usuario.id),
        latitude: lat,
        longitude: lng,
        linkmap: linkGoogleMaps,
      });

      if (dados.atividades) {
        const atividadesTrue = Object.entries(dados.atividades)
          .filter(([key, value]) => value === true)
          .map(([key]) => key);

        //search the activity id in 'atividades' table
        const atividadesEncontradas = await Atividade.findAll({
          where: {
            nomeAtividade: {
              [Op.in]: atividadesTrue,
            },
          },
          attributes: ["id"],
        });

        // Extract the IDs from the 'atividadesEncontradas'
        const atividadesIds = atividadesEncontradas.map(
          (atividade) => atividade.id
        );

        await local.addAtividades(atividadesEncontradas);
      }

      return response.status(201).json({
        message: "Local criado com sucesso",
        nome: local.nome,
        id: local.id,
        linkmap: local.linkmap,
        usuarioId: local.usuarioId,
      });
    } catch (error) {
      console.log(error);
      response.status(500).json({
        mensagem: "Erro ao cadastrar o local: ",
        error,
      });
    }
  }
  async listarPorId(request, response) {
    try {
      const { id } = request.params;
      if (!id) {
        return response
          .status(400)
          .json({ mensagem: "O ID do local é obrigatório" });
      }
      const local = await Local.findOne({
        where: { id, usuarioId: request.usuarioId },
        include: {
          model: Atividade,
          attributes: ["nomeAtividade"],
          through: { attributes: [] },
        },
      });
      if (!local) {
        return response.status(404).json({
          message: "Local não encontrado",
        });
      }
      return response.status(200).json(local);
    } catch (error) {
      response.status(500).json({
        mensagem: "Erro ao buscar o local: ",
        error,
      });
    }
  }
  async listarLocaisPorUsuario(request, response) {
    // Rota privada(com token)  path: /locais/usuario/:id
    try {
      const id = request.usuarioId;

      if (!id) {
        return response
          .status(400)
          .json({ mensagem: "O ID do usuario é obrigatório" });
      }

      const locais = await Local.findAll({
        where: { usuarioId: id },
        include: {
          model: Atividade,
          attributes: ["nomeAtividade"],
          through: { attributes: [] },
        },
      });
      return response.status(200).json(locais);
    } catch (error) {
      response.status(500).json({
        mensagem: "Erro ao buscar os locais: ",
        error,
      });
    }
  }

  async pegarUrlMapa(request, response) {
    try {
      const { id } = request.params;
      const local = await Local.findOne({ where: { id } });

      if (!local) {
        return response.status(404).json({
          message: "Local não encontrado",
        });
      }

      if (local.linkmap === null || local.linkmap === undefined) {
        return response.status(404).json({
          message: "Local não possui link de mapas",
        });
      }

      return response.status(200).json({ urlLocal: local.linkmap });
    } catch (error) {
      response.status(500).json({
        mensagem: "Erro ao buscar o local: ",
        error,
      });
    }
  }

  async deletarLocal(request, response) {
    try {
      const { id } = request.params;

      const local = await Local.findOne({ where: { id } });

      if (!local) {
        return response.status(404).json({
          message: "Local não encontrado",
        });
      }

      await Local.destroy({ where: { id } });

      return response.status(204).json({
        message: "",
      });
    } catch (error) {
      response.status(500).json({
        mensagem: "Erro ao excluir o local: ",
        error,
      });
    }
  }

  async atualizarLocal(request, response) {
    try {
      const { id } = request.params;
      const dados = request.body;

      const localAtualizar = await Local.findOne({
        where: { id },
        include: {
          model: Atividade,
          through: { attributes: [] },
        },
      });

      if (!localAtualizar) {
        return response.status(404).json({
          message: "Local não encontrado",
        });
      }

      await Local.update(dados, { where: { id } });

      //Removing atividades marked as false from table
      if (dados.atividades) {
        // Get the list of activities that are marked as false
        const atividadesFalse = Object.entries(dados.atividades)
          .filter(([key, value]) => value === false)
          .map(([key]) => key);

        if (atividadesFalse.length > 0) {
          // Find the activities currently associated with the local that should be removed
          const atividadesARemover = localAtualizar.atividades.filter(
            (atividade) => atividadesFalse.includes(atividade.nomeAtividade)
          );

          // Remove these activities from the local
          await localAtualizar.removeAtividades(atividadesARemover);
        }
      }

      //Adding atividades marked as true to the table
      if (dados.atividades) {
        // Get the list of activities that are marked as true
        const atividadesTrue = Object.entries(dados.atividades)
          .filter(([key, value]) => value === true)
          .map(([key]) => key);

        //search the activity id in 'atividades' table
        const atividadesEncontradas = await Atividade.findAll({
          where: {
            nomeAtividade: {
              [Op.in]: atividadesTrue,
            },
          },
          attributes: ["id"],
        });

        // Update the local with the activities that are marked as true
        await localAtualizar.setAtividades(atividadesEncontradas);
      }

      const local = await Local.findOne({
        where: { id, usuarioId: request.usuarioId },
        include: {
          model: Atividade,
          attributes: ["nomeAtividade"],
          through: { attributes: [] },
        },
      });

      return response.status(200).json({
        message: "Local atualizado com sucesso",
        local,
      });
    } catch (error) {
      response.status(500).json({
        mensagem: "Erro ao atualizar o local: ",
        error,
      });
    }
  }
}

module.exports = new LocalController();
