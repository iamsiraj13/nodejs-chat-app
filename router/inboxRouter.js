const express = require("express");
const { getInbox } = require("../controller/inboxController");
const decorateHtmlRespons = require("../middlewares/common/decorateHtmlResponse");
const router = express.Router();

// login page
router.get("/", decorateHtmlRespons("Inbox Page"), getInbox);

module.exports = router;
