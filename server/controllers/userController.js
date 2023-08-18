const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/ErrorHandler");
const path = require("path");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const asyncErrorsMiddleware = require("../middlewares/asyncErrorsMiddleware");
const userSendResponse = require("../utils/userSendResponse");

// !! Activation Token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: "5m" });
};

// !! @desc   Create a new User
// !! @route  POST /register
// !! @access Private
const createUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, avatar } = req.body;

  // Check if the user already exists
  const userEmail = await User.findOne({ email });
  if (!userEmail) {
    // Create the new user
    const user = { name, email, password, avatar };
    const activationToken = createActivationToken(user);
    const activationUrl = activationToken.split(".").join(",");

    // Send Activation link
    const html = `Hello, ${user.name}! Please click on the link below to activate your account: <a href="http://localhost:5173/activation/${activationUrl}">link</a>`;
    const data = {
      to: email,
      text: "Hey! Your activation link is here!!",
      subject: "Activate your account",
      html: html,
    };
    await sendMail(data);
    res
      .status(201)
      .json(`Please check your email: ${user.email} to activate your account`);
  } else {
    return next(new ErrorHandler("User already exists", 400));
  }
});

// !! @desc   Activate user
// !! @route  POST /activation
// !! @access Private
const activateUser = asyncHandler(async (req, res, next) => {
  try {
    const { activationToken } = req.body;

    // Check if the user with the same email already exists
    const newUser = jwt.verify(activationToken, process.env.JWT_SECRET_KEY);
    const { name, email, password, avatar } = newUser;
    if (!newUser) {
      return next(new ErrorHandler("Invalid token", 400));
    }

    //  Verify the activation Token
    let userEmail = await User.findOne({ email });
    if (userEmail) {
      return next(new ErrorHandler("User already exists", 400));
    }

    // Create new User
    const user = await User.create({ name, email, password, avatar });
    if (user) {
      userSendResponse(user, 201, res);
    }
  } catch (e) {
    return next(new ErrorHandler(e.message, 500));
  }
});

// !! @desc   Login user
// !! @route  POST /login
// !! @access Private
const loginUser = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorHandler("User doesn't exists!", 400));
    }

    // Check if the password is correct
    const isPasswordValid = user.comparePassword(password, user.password);
    if (!isPasswordValid) {
      return next(new ErrorHandler("The password is not correct!", 400));
    }

    // if the password is valid
    userSendResponse(user, 201, res);
  } catch (e) {
    return next(new ErrorHandler(e.message, 500));
  }
});

// !! @desc   Get the user
// !! @route  GET /user
// !! @access Private
const getUser = asyncHandler(async (req, res, next) => {
  try {
    const { _id } = req.user;

    const user = await User.findById(_id);
    if (!user) {
      return next(new ErrorHandler("User doesn't exists", 400));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (e) {
    return next(new ErrorHandler(e.message, 500));
  }
});

// !! @desc   User Logout
// !! @route  POST /logout
// !! @access Private
const logoutUser = asyncHandler(async (req, res, next) => {
  try {
    res.cookie("userToken", null, {
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
  createUser,
  activateUser,
  loginUser,
  getUser,
  logoutUser,
};
