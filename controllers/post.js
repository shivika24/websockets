const Post = require('../models/post');
var fs = require('fs');
const { error } = require("../constants/constants");

exports.addPost = async function (req, res) {
    //to validate image upload
    if (req.file === undefined) {
      return res.send({
        success:false,
        message: error.IMAGE_NOT_UPLOADED,
      });
    }
    try {
        const post = {
            email: req.body.email,
            caption: req.body.caption,
            date: Date.now(),
            image: {
                data: fs.readFileSync('../client/public/uploads/' + req.file.filename),
                contentType: req.file.mimetype
            }
        }
        const addedPost = await Post.create(post)
        return res.send({
            success: true,
            message: error.POST_ADDED,
            data: addedPost
          });
       
    } catch (err) {
      return res.send({
        success:false,
        message: error.ERROR_OCCURED,
      });
    }
  };
  
  exports.fetchPost = async function (req, res) {
    try {
        const posts = await Post.find({})
        console.log(posts)
        return res.send({
            success: true,
            message: error.POST_ADDED,
            data: posts
          });
       
    } catch (err) {
      return res.send({
        success:false,
        message: error.ERROR_OCCURED,
      });
    }
  };
  