const Shop = require("../models/ShopModel");
const Coupon = require("../models/CouponModel");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/ErrorHandler");

// !! @desc   Create new Coupon code
// !! @route  POST /create-coupon
// !! @access Private
const createCoupon = asyncHandler(async (req, res, next) => {
  try {
    const couponName = req.body.name;

    // ** Check if the Coupon code already exists
    const couponExists = await Coupon.findOne({ couponName });
    if (couponExists) {
      return next(new ErrorHandler("Coupon code already exists.", 400));
    }

    const coupon = await Coupon.create(req.body);

    res.status(201).json({
      success: true,
      coupon,
    });
  } catch (e) {
    return next(new ErrorHandler(e, 400));
  }
});

module.exports = {
  createCoupon,
};
