const Shop = require("../models/ShopModel");
const Coupon = require("../models/CouponModel");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/ErrorHandler");
const Product = require("../models/ProductModel");

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

    res.status(201).json(coupon);
  } catch (e) {
    return next(new ErrorHandler(e, 400));
  }
});

// !! @desc   Get All Coupons
// !! @route  GET /all-coupons/:id (shop Id)
// !! @access Private
const getAllCoupons = asyncHandler(async (req, res, next) => {
  try {
    const shopId = req.params.id;

    const coupons = await Coupon.find({ shopId });

    res.status(201).json(coupons);
  } catch (e) {
    return next(new ErrorHandler(e, 400));
  }
});

// !! @desc   Delete Coupon
// !! @route  DELETE /delete-coupon/:id (shop Id)
// !! @access Private
const deleteCoupon = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;

    const coupon = await Coupon.findByIdAndDelete(id);

    if (!coupon) {
      return next(new ErrorHandler("Coupon Not Found with this ID!", 400));
    }

    res.status(201).json(coupon._id);
  } catch (e) {
    return next(new ErrorHandler(e, 400));
  }
});

module.exports = {
  createCoupon,
  getAllCoupons,
  deleteCoupon,
};
