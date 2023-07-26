const User = require("../../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const userFound = require("../../libs/userFound");
const Role = require("../../models/Role");

const signUp = async (username, email, password, roles) => {
  const SECRET = process.env.SECRET;

  // Check if the user with the given email already exists
  const isUserExist = await userFound(email);
  if (isUserExist) {
    return "user already exists";
  }

  const newUser = new User({
    username,
    email,
    password: await User.encriptPassword(password),
  });

  if (roles && roles.length > 0) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
  }

  const theUser = await newUser.save();
  const token = jwt.sign({ id: theUser._id }, SECRET, { expiresIn: 84600 });

  return token;
};

module.exports = signUp;