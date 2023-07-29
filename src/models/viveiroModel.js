const mongoose = require("mongoose");

const ViveiroSchema = new mongoose.Schema(
  {
    cidade: {
      type: String,
      required: true,
     
    },
    endereco: {
      type: String,
      required: true,
    },
    contato: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    }
    
});

const viveiroModel = mongoose.model("viveiroModel", ViveiroSchema);


module.exports = viveiroModel;