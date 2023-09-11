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
      console.log(files);
      const imageURLs = files.map((file) => `${file.filename}`);

      // ** Get Product Data from body
      const productData = req.body;
      productData.images = imageURLs;
      productData.shop = shop;

      // ** New Product
      const product = await Product.create(productData);

      if (product) res.status(201).json(product);
    } else {
      return next(new ErrorHandler("Shop Id is invalid!", 400));
    }
  } catch (e) {
    return next(new ErrorHandler(e, 400));
  }
});

// !! @desc   All Products
// !! @route  GET /get-products/:id
// !! @access Private
const getAllProducts = asyncHandler(async (req, res, next) => {
  try {
    const shopId = req.params.id;

    const products = await Product.find({ shopId });

    res.status(201).json(products);
  } catch (e) {
    return next(new ErrorHandler(e, 400));
  }
});

// !! @desc   Delete product
// !! @route  DELETE /delete-product/:id
// !! @access Private
const deleteProduct = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return next(new ErrorHandler("Product Not Found with this ID!", 400));
    }

    res.status(201).json(product._id);
  } catch (e) {
    return next(new ErrorHandler(e, 400));
  }
});

module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct,
};
