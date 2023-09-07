const express = require("express");
const router = express.Router();
const { createProduct } = require("../controllers/productController");
const { upload } = require("../multer");

router.post("/create-product", upload.array("images"), createProduct);

module.exports = router;
