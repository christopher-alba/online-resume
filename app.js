const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
  res.render("aboutMe");
})

app.listen(process.env.PORT || 3000,function(){
  console.log("listening on port 3000");
});
