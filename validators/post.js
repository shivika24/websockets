const { error } = require("../constants/constants");
module.exports = function postValidator(req, res, next) {
    if(!req.body.caption||!req.body.email){
      return res.send({
        success:false,
        message:error.SCHEMA_STRUCTURE_INVALID
    })
    }
      else
      next();
  };