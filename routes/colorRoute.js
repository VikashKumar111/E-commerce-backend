const express = require("express");
const { createColor, updateColor } = require("../controller/colorCtrl");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createColor);
router.put("/:id",authMiddleware,isAdmin,updateColor)


module.exports = router;