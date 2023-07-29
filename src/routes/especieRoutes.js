const especieController = require("../controllers/especieController");
const express = require("express");

const router = express.Router();

router.get("/especie", especieController.getAllEspecies); 
router.post("/add/especie", especieController.addNewEspecie);
router.put("/especie/:id", especieController.updateEspecie);
router.delete("/especie/:id", especieController.deleteEspecie);

module.exports = router;                                                                                                                                