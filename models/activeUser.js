const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activeUserSchema = new Schema({
  connectionID: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  domainName: {
    type: String,
    required: true
  },
  stage: {
    type: String,
    required: true
  },
});

module.exports =  mongoose.models.ActiveUser || mongoose.model('ActiveUser', activeUserSchema);
