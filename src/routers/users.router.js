const express = require("express");
var router = express.Router();

var controller = require("../controllers/user.controller");

router.get("/users", controller.get);
router.post("/users", controller.post);
router.put("/users", controller.put);

module.exports = router;