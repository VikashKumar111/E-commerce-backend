const express = require("express");
const { createColor } = require("../controller/colorCtrl");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createColor);


module.exports = router;