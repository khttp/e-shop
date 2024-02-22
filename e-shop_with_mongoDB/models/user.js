const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }

});

exports.userModel = mongoose.model('User', userSchema);
