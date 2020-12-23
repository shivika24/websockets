const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  date: {
    type: Date,
    required: true
  },
  comments: {
    type: [{postId:String, comment: String, date: Date, email: String }],
    required: true
  }
});

module.exports =  mongoose.models.Post || mongoose.model('Post', postSchema);

//{type: Schema.ObjectId, ref: 'Comment'}