const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin',"*")
    res.setHeader("Access-Control-Allow-Headers","Content-Type,Acess-Control-Allow-Headers,Authorization,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","*");
    next();
});

// mongoose.connect('mongodb+srv://shivika:Shivika24.@cluster0.lm1dp.mongodb.net/postsApp>?retryWrites=true&w=majority',{ useUnifiedTopology: true , useNewUrlParser: true });
mongoose.connect("mongodb://localhost/postsApp",{useNewUrlParser:true,useUnifiedTopology:false})
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

require("./routes/post")(app);
require("./routes/user")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}); 