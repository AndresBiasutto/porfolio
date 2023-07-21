const { Router } = require("express");
const UsersRouter = require("./UsersRouter");
const AuthRouter = require("./AuthRouter");
const ProductsRouter = require("./ProductsRouter");
const router = Router();

router.use("/user", UsersRouter);
router.use("/auth", AuthRouter);
router.use("/products", ProductsRouter);

module.exports = router;