const { error } = require("../constants/constants");

module.exports = function signUpValidator(req, res, next) {
    if(!req.body.firstname||!req.body.lastname||!req.body.email||!req.body.password){
      return res.send({
        success:false,
        message:error.SCHEMA_STRUCTURE_INVALID
    })
    }
      else
      next();
  };

  module.exports = function signInValidator(req, res, next) {
    if(!req.body.email||!req.body.password){
      return res.send({
        success:false,
        message:error.SCHEMA_STRUCTURE_INVALID
    })
    }
      else
      next();
  };