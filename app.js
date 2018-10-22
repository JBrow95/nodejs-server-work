var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// Body Parser Middleware
app.use(bodyParser.jason());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  res.send("Hello World");
});

app.listen(3000, function(){
  console.log('Server is currently running..');
})