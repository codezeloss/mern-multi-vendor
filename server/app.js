const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const colors = require("colors");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

// ** MIDDLEWARES
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "http://localhost:5174"],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// ** ROUTES
app.use("/api/user", authRouter);

// ** ERROR HANDLERS
app.use(notFound);
app.use(errorHandler);

module.exports = app;
