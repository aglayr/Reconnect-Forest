const viveiroController = require("../controllers/viveiroController");
const express = require("express");

const router = express.Router();

router.get("/viveiro", viveiroController.allViveiros);
router.post("/addViveiro", viveiroController.addNewViveiro);
router.put("/viveiro/:id", viveiroController.updateViveiro);
router.delete("/viveiro/:id", viveiroController.deleteViveiro);

module.exports = router;
