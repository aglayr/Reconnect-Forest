const mongoose = require("mongoose");

const especieSchema = new mongoose.Schema({
  nomePopular: {
    type: String,
    required: false,
  },
  nomeCientifico: {
    type: String,
    required: false,
  },
  altura: {
    type: String,
    required: false,
  },
  porte: {
    type: String,
    required: false,
  },
  diametroDoCaule: {
    type: String,
    required: false,
  },
  folhas: {
    type: String,
    required: false,
  },
  folhagemOrmamental: {
    type: String,
    required: false,
  },
  tipoDeCopa: {
    type: String,
    required: false,
  },

  flores: {
    type: String,
    required: false,
  },

  epocaDeFloracao: {
    type: String,
    required: false,
  },
  epocaDeFrutificacao: {
    type: String,
    required: false,
  },
  tronco: {
    type: String,
    required: false,
  },

  espinhos: {
    type: String,
    required: false,
  },

  latex: {
    type: String,
    required: false,
  },
  desramaNatural: {
    type: String,
    required: false,
  },
  condicaoDeUmidadeDoSolo: {
    type: String,
    required: false,
  },
});

const especieModel = mongoose.model("especie", especieSchema);
especieModel.create({
  nomePopular: ""
})

module.exports = especieModel;
