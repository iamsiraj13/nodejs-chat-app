const express = require("express");
const { getLogin } = require("../controller/loginController");
const decorateHtmlRespons = require("../middlewares/common/decorateHtmlResponse");
const router = express.Router();

// login page
router.get("/", decorateHtmlRespons("Login page"), getLogin);

module.exports = router;
