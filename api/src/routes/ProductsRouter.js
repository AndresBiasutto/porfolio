const { Router } = require("express");
const { getProductsHandler,
    createProductHandler ,
    deleteProductByIdHandler,
    getProductByIdHandler,
    UpdateProductsByIdHandler } = require("../Handlers/ProductsHandler")

const ProductsRouter = Router();

ProductsRouter.get("/", getProductsHandler);
ProductsRouter.get("/:productId", getProductByIdHandler);
ProductsRouter.post("/", createProductHandler );
ProductsRouter.put("/:productId", UpdateProductsByIdHandler);
ProductsRouter.delete("/:productId", deleteProductByIdHandler);


module.exports = ProductsRouter;