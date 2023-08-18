const Shop = require("../models/ShopModel");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/ErrorHandler");
const path = require("path");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const asyncErrorsMiddleware = require("../middlewares/asyncErrorsMiddleware");
const sellerSendResponse = require("../utils/sellerSendResponse");

// !! Activation Token
const createActivationToken = (seller) => {
  return jwt.sign(seller, process.env.JWT_SECRET_KEY, { expiresIn: "5m" });
};

// !! @desc   Create new Shop
// !! @route  POST /create-shop
// !! @access Private
const createShop = asyncHandler(async (req, res, next) => {
  try {
    const { shopName, email, password, phoneNumber, address, avatar, zipCode } =
      req.body;

    // Check if the shop with the same email already exists
    const sellerEmail = await Shop.findOne({ email });
    if (!sellerEmail) {
      // Create the new seller shop
      const seller = {
        shopName,
        email,
        password,
        phoneNumber,
        address,
        avatar,
        zipCode,
      };
      const activationToken = createActivationToken(seller);
      const activationUrl = activationToken.split(".").join(",");

      // Send Activation link
      const html = `Hello ${seller.shopName}! Please click on the link below to activate your shop: <a href="http://localhost:5173/seller/activation/${activationUrl}">link</a>`;
      const data = {
        to: email,
        text: "Hey! Your activation link is here!!",
        subject: "Activate your shop",
        html: html,
      };
      await sendMail(data);
      res
        .status(201)
        .json(
          `Please check your email: ${seller.email} to activate your account`
        );
    } else {
      return next(new ErrorHandler("Shop already exists", 400));
    }
  } catch (e) {
    return next(new ErrorHandler(e.message, 500));
  }
});

// !! @desc   Activate Seller Shop
// !! @route  POST /activate-shop
// !! @access Private
const activateShop = asyncHandler(async (req, res, next) => {
  try {
    const { activationToken } = req.body;

    //  Verify the activation Token
    const newSeller = jwt.verify(activationToken, process.env.JWT_SECRET_KEY);
    const { shopName, email, password, phoneNumber, address, avatar, zipCode } =
      newSeller;
    if (!newSeller) {
      return next(new ErrorHandler("Invalid token", 400));
    }

    // Check if the seller with the same email already exists
    let sellerEmail = await Shop.findOne({ email });
    if (sellerEmail) {
      return next(new ErrorHandler("Seller already exists", 400));
    }

    // Create new Shop
    const seller = await Shop.create({
      shopName,
      email,
      password,
      phoneNumber,
      address,
      avatar,
      zipCode,
    });
    sellerSendResponse(seller, 201, res);
  } catch (e) {
    return next(new ErrorHandler(e.message, 500));
  }
});

// !! @desc   Login seller
// !! @route  POST /seller/login
// !! @access Private
const loginSellerShop = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if the shop exists
    const seller = await Shop.findOne({ email }).select("+password");
    if (!seller) {
      return next(new ErrorHandler("Shop doesn't exists!", 400));
    }

    // Check if the password is correct
    const isPasswordValid = seller.comparePassword(password, seller.password);
    if (!isPasswordValid) {
      return next(new ErrorHandler("The password is not correct!", 400));
    }

    // if the password is valid
    sellerSendResponse(seller, 201, res);
  } catch (e) {
    return next(new ErrorHandler(e.message, 500));
  }
});

// !! @desc   Get the seller
// !! @route  GET /seller
// !! @access Private
const getSeller = asyncHandler(async (req, res, next) => {
  try {
    const { _id } = req.seller;

    const seller = await Shop.findById(_id);
    if (!seller) {
      return next(new ErrorHandler("Shop doesn't exists", 400));
    }

    res.status(200).json({
      success: true,
      seller,
    });
  } catch (e) {
    return next(new ErrorHandler(e.message, 500));
  }
});

// !! @desc   User Logout
// !! @route  POST /logout
// !! @access Private
const logoutSeller = asyncHandler(async (req, res, next) => {
  try {
    res.cookie("user-token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(201).json({
      success: true,
      message: "Logout Successfully!",
    });
  } catch (e) {
    return next(new ErrorHandler(e.message, 500));
  }
});

module.exports = {
  createShop,
  activateShop,
  loginSellerShop,
  getSeller,
};
