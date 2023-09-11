const express = require("express");
const router = express.Router();
const {
  createShop,
  activateShop,
  loginSellerShop,
  getSeller,
  logoutSeller,
} = require("../controllers/sellerController");
const { isSellerAuthenticated } = require("../middlewares/authMiddleware");

router.post("/create-shop", createShop);
router.post("/activate-shop", activateShop);
router.post("/login-shop", loginSellerShop);
router.get("/seller", isSellerAuthenticated, getSeller);
router.get("/logout", isSellerAuthenticated, logoutSeller);

module.exports = router;
