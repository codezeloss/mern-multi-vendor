const ErrorHandler = require("../utils/ErrorHandler");

const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server Error";

  // !! Wrong MongoDB Id errorMiddleware
  if (err.name === "CastError") {
    const message = `Resources Not Found with this ID. Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // !! duplicate key Error
  if (err.code === 11000) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  // !! Wrong JWT errorMiddleware
  if (err.name === "JsonWebTokenError") {
    const message = `Your URL is Invalid. Please try again!`;
    err = new ErrorHandler(message, 400);
  }

  // !! JWT Expired
  if (err.name === "TokenExpiredError") {
    const message = `Your URL is expired. Please try again!`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

module.exports = errorMiddleware;
