const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  postId: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

module.exports =  mongoose.models.Comment || mongoose.model('Comment', commentSchema);
