const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const colors = require("colors");
const ErrorHandler = require("./middlewares/errorMiddleware");

const userRouter = require("./routes/userRoutes");
const sellerRouter = require("./routes/sellerRoutes");
const productRouter = require("./routes/productRoutes");
const eventRouter = require("./routes/eventRoutes");
const couponRouter = require("./routes/couponRoutes");

// !! MIDDLEWARES
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "http://localhost:5174"],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(morgan("dev"));

// !! ROUTES
app.use("/api/v1/user", userRouter);
app.use("/api/v1/seller", sellerRouter);
app.use("/api/v1/seller/product", productRouter);
app.use("/api/v1/seller/event", eventRouter);
app.use("/api/v1/seller/coupon", couponRouter);

// !! ERROR HANDLERS
app.use(ErrorHandler);

module.exports = app;
