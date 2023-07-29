const viveiroModel = require("../models/viveiroModel");


  const allViveiros = async (req, res) => {
    try {
      const vivieiros = await viveiroModel.find();
      res.status(200).json({ vivieiros });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar os viveiros.' });
    }
  }

  const addNewViveiro = async (req, res) => {
    try {
      const { cidade, endereco, contato, email, senha } = req.body;
      const addViveiro = await viveiroModel.create({ cidade, endereco, contato, email, senha });
      res
        .status(200)
        .json({ message: "Novo Viveiro adicionado com sucesso!", addViveiro });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    };
  }
  
  const updateViveiro= async (req, res) => {
    try {
      const viveiroId = req.params.id;
      const { cidade, endereco, contato, email, senha } = req.body;
      const upViveiro = await viveiroModel.findByIdAndUpdate(viveiroId,
        {
          cidade,
          endereco,
          contato,
          email,
          senha,
        },
        { new: true });
      res
        .status(200)
        .json({ message: "Viveiro alterado com sucesso!", upViveiro });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  const deleteViveiro = async (req, res) => {
    try {
      const viveiroId = req.params.id;
      await viveiroModel.findByIdAndDelete(
        viveiroId
      );
      res.status(200).json({ message: "Viveiro deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }


  module.exports = {
  allViveiros,
  addNewViveiro,
  updateViveiro,
  deleteViveiro,

}