const Product = require("../../models/Products");

const getProduct = async () => {
  const product = await Product.find();
  return product;
};

module.exports = getProduct;