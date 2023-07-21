const Product = require("../../models/Products");

const getProductById = (productId) => {
  const product = Product.findById(productId)
  return product;
};

module.exports = getProductById;