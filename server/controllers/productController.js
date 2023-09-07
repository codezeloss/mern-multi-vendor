const Shop = require("../models/ShopModel");
const Product = require("../models/ProductModel");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/ErrorHandler");

// !! @desc   Create new Product
// !! @route  POST /create-product
// !! @access Private
const createProduct = asyncHandler(async (req, res, next) => {
  try {
    const { shopId } = req.body;

    // ** Check if the Shop with the id exists
    const shop = await Shop.findById(shopId);

    if (shop) {
      // ** Get uploaded files
      const files = req.files;
      const imageURLs = files.map((file) => `${file.fileName}`);

      // ** Get Product Data from body
      const productData = req.body;
      productData.images = imageURLs;
      productData.shop = shop;

      // ** New Product
      const product = await Product.create(productData);

      res.status(201).json({
        success: true,
        product,
      });
    } else {
      return next(new ErrorHandler("Shop Id is invalid!", 400));
    }
  } catch (e) {
    return next(new ErrorHandler(e, 400));
  }
});

module.exports = {
  createProduct,
};
