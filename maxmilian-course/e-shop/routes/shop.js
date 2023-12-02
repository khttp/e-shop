const express = require("express");
const shopRoutes = express.Router();
const adminRoutes = require("./admin");
const productController = require("../controllers/products");

shopRoutes.get("/", productController.shopPageMethod);

module.exports = shopRoutes;
