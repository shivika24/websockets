const User = require("../models/user");
const bcrypt = require("bcrypt");
const { error } = require("../constants/constants");
const jwt = require('jsonwebtoken');
require("dotenv").config();

//register user
exports.registerUser = async function (req, res) {
  try {
    // to generate salt
    const salt = await bcrypt.genSalt(10);
    // encrypt password
    const encryptedPassword = await bcrypt.hash(req.body.password, salt);
    const findUser = await User.findOne({ email: req.body.email });
    if (findUser) {
      return res.send({
        success: false,
        message: error.USER_EXISTS,
      });
    }
    const user = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: encryptedPassword,
    };
    await User.create(user);
    return res.send({
      success: true,
      message: error.USER_REGISTERED,
    });
  } catch (err) {
    return res.send({
      success: false,
      message: error.ERROR_OCCURED,
    });
  }
};

//login user
exports.loginUser = async function (req, res) {
  try {
    let findUser = await User.findOne({ email: req.body.email });
    if (findUser) {
      //to compare both the passwords
      let comparision = await bcrypt.compare(
        req.body.password,
        findUser.password
      );
      if (comparision) {
        //generate token if password match
        let accessToken = jwt.sign(
          { email: req.body.email },
          process.env.ACCESS_TOKEN_LIFE,
          {
            algorithm: process.env.ALGORITHM,
            expiresIn: process.env.ACCESS_TOKEN_LIFE,
          }
        );
        return res.send({
          email: req.body.email,
          success: true,
          message: error.LOGIN_SUCCESSFULL,
          token: accessToken,
        });
      } else {
        //password incorrect
        return res.send({
          success: false,
          message: error.PASSWORD_INCORRECT,
        });
      }
    } else {
      // user not registered
      return res.send({
        success: false,
        message: error.USER_NOT_REGISTERED,
      });
    }
  } catch (err) {
    return res.send({
      success: false,
      message: error.ERROR_OCCURED,
    });
  }
};
