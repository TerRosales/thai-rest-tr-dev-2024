const express = require("express");
const router = express.Router();
const { test } = require("../controllers/user.controller.js");

router.get("/", test);

module.exports = router;
