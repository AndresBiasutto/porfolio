const { Router } = require("express");
const { verifyToken,
    isModerator,
    isAdmin } = require("../middlewares/index")
const { getProductsHandler,
    createProductHandler,
    deleteProductByIdHandler,
    getProductByIdHandler,
    UpdateProductsByIdHandler } = require("../Handlers/ProductsHandler")

const ProductsRouter = Router();

ProductsRouter.get("/", getProductsHandler);
ProductsRouter.get("/:productId", getProductByIdHandler);
ProductsRouter.post("/", [verifyToken, isModerator], createProductHandler);
ProductsRouter.put("/:productId", [verifyToken, isModerator], UpdateProductsByIdHandler);
ProductsRouter.delete("/:productId", [verifyToken, isAdmin], deleteProductByIdHandler);


module.exports = ProductsRouter;