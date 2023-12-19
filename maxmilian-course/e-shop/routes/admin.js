const express = require("express");
const adminRouter = express.Router();
const productController = require("../controllers/products");

adminRouter
  .get("/add-product", productController.getAddProduct)
  .get("/product/:prodId", productController.productDetails)
  .post("/add-product", productController.postAddProduct);

module.exports = adminRouter;
