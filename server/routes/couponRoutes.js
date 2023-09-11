const express = require("express");
const router = express.Router();
const { createCoupon } = require("../controllers/couponController");
const { isSellerAuthenticated } = require("../middlewares/authMiddleware");

router.post("/create-coupon", isSellerAuthenticated, createCoupon);

module.exports = router;
