const express = require("express");
const router = express.Router();
const {
  createCoupon,
  getAllCoupons,
  deleteCoupon,
} = require("../controllers/couponController");
const { isSellerAuthenticated } = require("../middlewares/authMiddleware");

router.get("/all-coupons/:id", getAllCoupons);
router.post("/create-coupon", isSellerAuthenticated, createCoupon);
router.delete("/delete-coupon/:id", isSellerAuthenticated, deleteCoupon);

module.exports = router;
