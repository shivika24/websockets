const User = require("../controllers/user");
var router = require("express").Router();
const signUpValidator = require('../validators/user');
const signInValidator = require('../validators/user');

module.exports = (app) => {
    router.post("/signUp", signUpValidator ,User.registerUser);
    router.post("/signIn", signInValidator ,User.loginUser);
    app.use("/api/user", router);
  };
  