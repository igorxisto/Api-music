const express = require("express");
var router = express.Router();

var controller = require("../controllers/musics.controller");

router.get("/musics", controller.get);
router.post("/musics", controller.post);
router.put("/musics", controller.put);

module.exports = router;