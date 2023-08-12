const express = require("express");
const router = express.Router();
const { upload } = require("../multer");
const {
  createUser,
  activateUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const { isAuthenticated } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.post("/activation", activateUser);
router.post("/login", loginUser);
router.get("/user", isAuthenticated, getUser);

module.exports = router;
