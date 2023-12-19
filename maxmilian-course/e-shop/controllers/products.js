const products = require("../modules/products");

exports.getAddProduct = (req, res) => {
  res.render("product", { pageTitle: "add-product" });
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

exports.productDetails = (req, res) => {
  const prod = req.params.prodId;
  products.fetchById(prod, (pro) => {
    console.log(pro);
    res.render("product_details", {
      pageTitle: "detail page",
      product: pro.title,
    });
  });
};
