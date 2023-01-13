const express = require("express");
var router = express.Router();

var controller = require("../controllers/favorites.controller");

router.get("/favorites", controller.get);
router.post("/favorites", controller.post);
router.put("/favorites", controller.put);
router.delete("/favorites", controller.delete);

module.exports = router;