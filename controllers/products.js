const products = require("../modules/products");

exports.getAddProduct = (req, res) => {
  res.render("product", { pageTitle: "add-product" });
};

exports.postAddProduct = (req, res) => {
  products.create(
    {
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    }
  ).then((result) => {
    console.log(result)
    res.redirect("/");
  }).catch((err) => {
    console.log(err)
  })
};

//  addProduct.save().then(() => {
//    console.log("product added")
//    res.redirect("/");
//  });
//};


exports.postDeleteProduct = (req, res) => {
  console.log(products.id)
  products.destroy({ where: { id: req.body.id } })
    .then(() => {
      res.redirect("/")
    })
    .catch((err) => {
      console.log(err)
    })
}
//  products.deleteById(req.body.id).then(() => {
//    res.redirect("/");
//  })
exports.getUpdateProduct = (req, res) => {
  res.render("product_edit", { pageTitle: 'edit-product', prodId: req.params.prodId })
}
exports.postUpdateProduct = (req, res) => {
  products.findByPk(req.body.id).then((product) => {
    product.title = req.body.title;
    product.price = req.body.price;
    product.description = req.body.description;
    return product.save().then(() => {
      res.redirect("/")
    }
    )
  })
    .catch((err) => {
      console.log(err)
    })
}
//  products.editProduct(
//    req.body.id,
//    req.body.title,
//    req.body.price,
//    req.body.description
//  ).then(() => {
//    res.redirect('/')
//  })
//}

exports.shopPageMethod = (req, res) => {

  products.findAll().then((result) => {
    res.render('shop', {
      pageTitle: "shop",
      products: result,
    })
  })
    .catch((err) => {
      console.log(err)
    })
};
//  products.fetchAllProducts().then(resutls => {
//    res.render('shop', {
//      pageTitle: "shop",
//      products: resutls[0],
//    }
//    )
//  })
//}
exports.productDetails = (req, res) => {
  const prod = req.params.prodId;
  // products.fetchById(prod).then((result) => {
  products.findByPk(prod).then((result) => {
    res.render('product_details', {
      pageTitle: result.title,
      product: result,
    })
  })
}
