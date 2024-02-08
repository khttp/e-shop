const { Product } = require("../models/product");
const { Category } = require("../models/category");

exports.addProduct = async (req, res) => {
  try {
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
      });
    res.json({ message: `${req.body.name} added successfully}` })
    console.log(createdProduct);
  } catch (err) {
    console.error(err);
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
    console.error(err);
  }
}

exports.updateProduct = async (req, res) => {
  const updateProd = {
    name: req.body.name,
    price: req.body.price,
    imgurl: req.body.imgurl,
    noinstock: req.body.noinstock,
    description: req.body.description
  }
  try {
    const updatedProd = await Product.findOneAndUpdate(
      { id: { $eq: req.params.prodId } }, updateProd)
    if (updatedProd.length === 0) {
      return res.json({ message: "product not found " })
    }
    res.json({ message: `Product with id ${updatedProd.id} updated successfully` });
  } catch (err) {
    console.error(err)
  }
}

exports.getAllProducts = async (req, res) => {
  const fetchedProducts = await Product.find({})
  try {
    if (fetchedProducts.length === 0) {
      return res.json({ message: "No products found" })
    }
    res.json(fetchedProducts)
  } catch (err) {
    console.error(err)
  }
};


exports.productDetails = async (req, res) => {
  try {
    const selectedProd = await Product.findOne({ id: { $eq: req.params.prodId } });
    res.json(selectedProd)
  } catch (err) {
    console.error(err)
  }
}
