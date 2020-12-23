const mongoose = require('mongoose');


//Initialize connection to MongoDB
module.exports.initMongo = async () => {
    try {
        mongoose.connect("mongodb://localhost/postsApp",{useNewUrlParser:true,useUnifiedTopology:false})
    }catch(err){
        console.log('err',err);
    }
 
}