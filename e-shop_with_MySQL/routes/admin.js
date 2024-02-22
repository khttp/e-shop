const express = require("express");
const adminRouter = express.Router();
const productController = require("../controllers/products");
const product = require("../modules/products");

adminRouter
  .get("/add-product", productController.getAddProduct)
  .get("/product/:prodId", productController.productDetails)
  .post("/add-product", productController.postAddProduct)
  .post('/delete-product', productController.postDeleteProduct)
  .get('/edit_product/:prodId', productController.getUpdateProduct)
  .post('/edit_product', productController.postUpdateProduct)
module.exports = adminRouter;

