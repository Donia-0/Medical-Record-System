const express = require("express");
const router = express.Router();
const Auth = require("../middlewares/Auth");

//Import Example Controllers
const authController = require("../controllers/authController");

//Example Routes
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/me", Auth, authController.profile);
router.post("/logout", Auth, authController.logout);

module.exports = router;
