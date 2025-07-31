const express = require("express");
const { getUsers } = require("../controller/usersController");
const decorateHtmlRespons = require("../middlewares/common/decorateHtmlResponse");
const router = express.Router();

// login page
router.get("/", decorateHtmlRespons("Users"), getUsers);

module.exports = router;
