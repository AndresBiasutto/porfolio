require("dotenv").config();
const server = require("./app.js");
const port = process.env.PORT || 3001;
server.listen(3001, () => {
  console.log(`Server listening at ${port}`);
});
