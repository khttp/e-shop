const express = require("express");

const adminRouter = express.Router();
const productController = require("../controllers/product");

adminRouter
  .get("/", productController.getAllProducts)
  .get("/:prodId", productController.productDetails)
  .post("/add-product", productController.addProduct)
  .delete("/delete-product/:prodId", productController.deleteProduct)
  .patch("/update-product/:prodId", productController.updateProduct)
  .get("/get/featured", productController.getFeaturedProducts)
  .get("/get/countDocs", productController.countDocs)

module.exports = adminRouter;

