const express = require("express");
const router = express.Router();
const { upload } = require("../multer");
const {
  createUser,
  activateUser,
  loginUser,
  getUser,
  logoutUser,
} = require("../controllers/userController");
const { isUserAuthenticated } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.post("/activation", activateUser);
router.post("/login", loginUser);
router.get("/user", isUserAuthenticated, getUser);
router.get("/logout", isUserAuthenticated, logoutUser);

module.exports = router;
