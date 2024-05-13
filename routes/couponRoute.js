const express = require("express");
const { createCoupon, getAllCoupans } = require("../controller/couponCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();


router.post("/", authMiddleware, isAdmin, createCoupon);
router.get("/",authMiddleware, isAdmin, getAllCoupans);


module.exports = router;
