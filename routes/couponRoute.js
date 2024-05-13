const express = require("express");
const { createCoupon, getAllCoupans, getCoupan } = require("../controller/couponCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();


router.post("/", authMiddleware, isAdmin, createCoupon);
router.get("/", authMiddleware, isAdmin, getAllCoupans);
router.get("/:id",authMiddleware, isAdmin, getCoupan);


module.exports = router;
