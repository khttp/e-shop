const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  color: String
});

exports.Category = mongoose.model("Category", categorySchema);
