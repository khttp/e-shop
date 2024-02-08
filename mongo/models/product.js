const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    autoIncrement: true,
  },
  name: {
    type: String,
    required: true,
  },
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
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  noinstock: {
    type: Number,
    required: true
  }
});

exports.Product = mongoose.model('Product', productSchema);



