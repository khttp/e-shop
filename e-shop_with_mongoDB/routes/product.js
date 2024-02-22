const express = require("express");
const adminRouter = express.Router();
const productController = require("../controllers/product");
/// order matters
adminRouter
  .get("/", productController.getAllProducts)
  .get("/featured/:count", productController.getFeaturedProducts)
  .get("/countDocs", productController.countDocs)
  .get("/details/:prodId", productController.productDetails)
  .post("/add-product", productController.addProduct)
  .patch("/update-product/:prodId", productController.updateProduct)
  .delete("/delete-product/:prodId", productController.deleteProduct)

module.exports = adminRouter;

