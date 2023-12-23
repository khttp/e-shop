const product = require("../modules/products");
const products = require("../modules/products");

exports.getAddProduct = (req, res) => {
  res.render("product", { pageTitle: "add-product" });
};

exports.postAddProduct = (req, res) => {
  const addProduct = new products(req.body.id, req.body.title, req.body.price, req.body.description);
  addProduct.save().then(() => {
    console.log("product added")
    res.redirect("/");
  });
};

exports.postDeleteProduct = (req, res) => {
  console.log(req.params.id)
  products.deleteById(req.body.id).then(() => {
    res.redirect("/");
  })
}
exports.getUpdateProduct = (req, res) => {
  res.render("product_edit", { pageTitle: 'edit-product', prodId: req.params.prodId })
}
exports.postUpdateProduct = (req, res) => {
  products.editProduct(
    req.body.id,
    req.body.title,
    req.body.price,
    req.body.description
  ).then(() => {
    res.redirect('/')
  })
}

exports.shopPageMethod = (req, res) => {
  products.fetchAllProducts().then(resutls => {
    res.render('shop', {
      pageTitle: "shop",
      products: resutls[0],
    }
    )
  })
}
exports.productDetails = (req, res) => {
  const prod = req.params.prodId;
  products.fetchById(prod).then((result) => {
    res.render('product_details', {
      pageTitle: result[0][0].title,
      product: result[0][0],
    })
  })
}

