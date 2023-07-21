const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true
      },
      imgURL: {
        type: String,
      },
    },
    { timestamps: true, versionKey: false }
  );
  
  const Product = new mongoose.model("Product", ProductsSchema);
  
  module.exports = Product;