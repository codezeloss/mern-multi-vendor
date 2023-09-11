const express = require("express");
const router = express.Router();
const { upload } = require("../multer");
const {
  createProduct,
  getAllProducts,
  deleteProduct,
} = require("../controllers/productController");
const { isSellerAuthenticated } = require("../middlewares/authMiddleware");

router.post("/create-product", upload.array("images"), createProduct);
router.get("/get-products/:id", getAllProducts);
router.delete("/delete-product/:id", isSellerAuthenticated, deleteProduct);

module.exports = router;
