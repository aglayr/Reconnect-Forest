const especieModel = require("../models/especieModel");


const especieController = {
  getAllEspecies: async (req, res) => {
    try {
      const especies = await especieModel.find()
      console.log(especies)
      res.status(200).json({ especies });
    } catch (error) { console.log(error)
      res.status(500).json({ error: "Erro ao buscar os especies." });
    }
  },

  addNewEspecie: async (req, res) => {
    try {
      const {
        nomePopular,
        nomeCientifico,
        altura,
        porte,
        diametroDoCaule,
        folhas,
        folhagemOrmamental,
        flores,
        epocaDeFloracao,
        epocaDeFrutificacao,
        tronco,
        espinhos,
        latex,
        desramaNatural,
        condicaoDeUmidadeDoSolo,
      } = req.body;
      const addEspecie = await especieModel.create({
        nomePopular,
        nomeCientifico,
        altura,
        porte,
        diametroDoCaule,
        folhas,
        folhagemOrmamental,
        flores,
        epocaDeFloracao,
        epocaDeFrutificacao,
        tronco,
        espinhos,
        latex,
        desramaNatural,
        condicaoDeUmidadeDoSolo,
      });
      res
        .status(200)
        .json({ message: "Nova Especie adicionada com sucesso!", addEspecie });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  updateEspecie: async (req, res) => {
    try {
      const especieId = req.params.id;
      const {
        nomePopular,
        nomeCientifico,
        altura,
        porte,
        diametroDoCaule,
        folhas,
        folhagemOrmamental,
        flores,
        epocaDeFloracao,
        epocaDeFrutificacao,
        tronco,
        espinhos,
        latex,
        desramaNatural,
        condicaoDeUmidadeDoSolo,
      } = req.body;
      const upEspecie = await especieModel.findByIdAndUpdate(
        especieId,
        {
          nomePopular,
          nomeCientifico,
          altura,
          porte,
          diametroDoCaule,
          folhas,
          folhagemOrmamental,
          flores,
          epocaDeFloracao,
          epocaDeFrutificacao,
          tronco,
          espinhos,
          latex,
          desramaNatural,
          condicaoDeUmidadeDoSolo,
        },
        { new: true }
      );
      res
        .status(200)
        .json({ message: "Especie alterada com sucesso!", upEspecie });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  deleteEspecie: async (req, res) => {
    try {
      const especieId = req.params.id;
      await especieModel.findByIdAndDelete(especieId);
      res.status(200).json({ message: "Especie deletada com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = especieController;
