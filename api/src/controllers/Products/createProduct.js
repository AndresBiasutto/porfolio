const Product = require("../../models/Products");

const createProduct = async ({name, category, price, imgURL}) => {
  const product=  await Product.create({
    name, category, price, imgURL
  });
  return product;
};

module.exports = createProduct;