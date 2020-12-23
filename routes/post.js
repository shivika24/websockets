const posts = require("../controllers/post.js");
var router = require("express").Router();
const upload = require("../middleware/upload");
const postValidator = require('../validators/post')

module.exports = (app) => {
    router.post("/addPost", upload.single("image"), postValidator ,posts.addPost);
    router.get("/fetchPosts",posts.fetchPost);
    app.use("/api/posts", router);
  };
  