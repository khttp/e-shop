const { Product } = require("../models/product");
const { Category } = require("../models/category");
const mongoose = require('mongoose');

exports.addProduct = async (req, res) => {
  try {
    console.log(req.body.name)
    const category = await Category.findById(req.body.category);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    const createdProduct = await Product.create(
      {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        imgurl: req.body.imgurl,
        noinstock: req.body.noinstock,
        description: req.body.description,
        isfeatured: req.body.isfeatured
      });
    res.json({ message: `${req.body.name} added successfully}` })
    console.log(createdProduct);
  } catch (err) {
    return res.json({ err: err });
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    const delproduct = await Product.findOneAndDelete({ id: { $eq: req.params.prodId } });
    if (!delproduct) {
      return res.json({ message: `Product with id ${req.params.prodId} not found` });
    }
    res.json({ message: `Product with name ${delproduct.name} deleted successfully` });
  } catch (err) {
    return res.json({ err: err });
  }
}

exports.updateProduct = async (req, res) => {
  const updateProd = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    noinstock: req.body.noinstock,
    imgurl: req.body.imgurl,
    Category: req.body.category,
    description: req.body.description,
    isfeatured: req.body.isfeatured,
  }
  try {
    if (req.body.category) {
      const newCategory = await Category.findById(req.body.category);
      if (!newCategory) {
        return res.status(404).send(`category with _id ${req.body.categery} not found`)
      }
    }
    const updatedProd = await Product.findOneAndUpdate(
      { id: { $eq: req.params.prodId } }, updateProd);
    if (updatedProd.length === 0) {
      return res.json({ message: "product not found " })
    }
    res.json({ message: `Product with id ${updatedProd.id} updated successfully` });
  } catch (err) {
    return res.json({ err: err });
  }
}

exports.getAllProducts = async (req, res) => {
  let filter = {};
  if (req.query.categories) {
    filter = { category: req.qurey.categories.split(',') }
  }
  const fetchedProducts = await Product.find(filter).select('id name price description').populate('category')
  try {
    if (fetchedProducts.length === 0) {
      return res.json({ message: "No products found" })
    }
    res.json(fetchedProducts)
  } catch (err) {
    return res.json({ err: err });
  }
};


exports.productDetails = async (req, res) => {
  try {
    console.log(req.params.prodId)
    const selectedProd = await Product.findOne({ id: { $eq: req.params.prodId } }).populate('category');
    res.json(selectedProd)
  } catch (err) {
    return res.json({ err: err });
  }
}

exports.countDocs = async (req, res) => {
  try {
    const productCount = await Product.countDocuments();
    if (!productCount) {
      return res.status(500).json({ message: 'server error' });
    }
    res.status(200).json({ noOfProducts: productCount })
  } catch (err) {
    return res.json({ err: err });
  }

}
exports.getFeaturedProducts = async (req, res) => {

  console.log(req.params.count);
  try {
    const featuredProducts = await Product.find({ isfeatured: { $eq: true } }).limit(+req.params.count);

    if (!featuredProducts) {

      return res.status(500).json({ message: "server error" });
    }

    res.status(200).json(featuredProducts);

  } catch (err) {
    return res.json({ err: err });
  }
}

