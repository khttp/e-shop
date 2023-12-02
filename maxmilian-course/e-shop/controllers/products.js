const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("../views/product.ejs", { pageTitle: "add-product" });
};

exports.postAddProduct = (req, res, next) => {
  products.push(req.body.title);
  res.redirect("/");
};

exports.shopPageMethod = (req, res, next) => {
  res.render("shop", {
    pageTitle: "shop homepage",
    products: products,
  });
};
