const products = require("../modules/products");

exports.getAddProduct = (req, res) => {
  res.render("../views/product.ejs", { pageTitle: "add-product" });
};

exports.postAddProduct = (req, res) => {
  const addProduct = new products(req.body.title);
  addProduct.save();
  res.redirect("/");
};

exports.shopPageMethod = (req, res) => {
  products.fetchAllProducts((prods) => {
    res.render("shop", {
      pageTitle: "shop homepage",
      products: prods,
    });
  });
};

exports.errPage = (req, res, next) => {
  res.status(404).render("notfound", { pageTitle: "404 page not found" });
};
