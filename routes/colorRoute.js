const express = require("express");
const { createColor, updateColor, deleteColor } = require("../controller/colorCtrl");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createColor);
router.put("/:id",authMiddleware,isAdmin,updateColor)
router.delete("/:id", authMiddleware, isAdmin, deleteColor);


module.exports = router;