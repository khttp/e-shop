const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    autoIncrement: true,
  },
  name: String,
  price: {
    type: Number,
    required: true,
  },
  imgurl: {
    type: String,
    default: "No image available"
  },
  description: {
    type: String,
    default: "No description available"
  },
  noinstock: {
    type: Number,
    required: true
  }
});

exports.Product = mongoose.model('Product', productSchema);



