const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const colors = require("colors");
const ErrorHandler = require("./middlewares/errorMiddleware");
const userRouter = require("./routes/userRoutes");
const shopRouter = require("./routes/shopRoutes");

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
app.use("/api/v1/seller", shopRouter);

// !! ERROR HANDLERS
app.use(ErrorHandler);

module.exports = app;
