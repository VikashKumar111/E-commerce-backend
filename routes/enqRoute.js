const express = require("express");
const { createEnquiry, updateEnquiry } = require("../controller/enqCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", createEnquiry);
router.put("/:id", authMiddleware, isAdmin, updateEnquiry);

module.exports = router;
