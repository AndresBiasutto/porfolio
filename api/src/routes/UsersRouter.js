const { Router } = require("express");
const UsersRouter = Router();

const {
    getUserHandler,
  } = require("../Handlers/UsersHandlers");

UsersRouter.get("/", getUserHandler);
// UsersRouter.post("/", postCLevelHandler);
// UsersRouter.put("/", updateCLevelHandler);
// UsersRouter.delete("/", updateCLevelHandler);


module.exports = UsersRouter;