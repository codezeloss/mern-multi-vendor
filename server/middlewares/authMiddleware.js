const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./asyncErrorsMiddleware");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const Shop = require("../models/ShopModel");

// **
const isUserAuthenticated = asyncHandler(async (req, res, next) => {
  const { userToken: token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please login to continue!", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);
  next();
});

// **
const isSellerAuthenticated = asyncHandler(async (req, res, next) => {
  const { sellerToken: token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please login to continue!", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await Shop.findById(decoded.id);
  next();
});

const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email });
  if (adminUser.role !== "admin") {
    throw new Error("You are not an admin");
  } else {
    next();
  }
});

module.exports = { isUserAuthenticated, isSellerAuthenticated, isAdmin };
