
var express = require("express");
var app     = express();
var path    = require("path");

app.use("/node_modules", express.static('node_modules'));
app.use('/style',express.static(path.join(__dirname, 'webapp/style')));
app.use('/js',express.static(path.join(__dirname, 'webapp/js')));
app.use('/json',express.static(path.join(__dirname, 'webapp/json')));


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/webapp/index.html'));
});

app.listen(3000);