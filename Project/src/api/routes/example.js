const express = require("express");
const router = express.Router();

//Import Example Controllers
const exampleController = require("../controllers/exampleController");

//Example Routes
router.get("/", exampleController.get);
router.post("/", exampleController.post);

module.exports = router;
