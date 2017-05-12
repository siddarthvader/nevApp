
var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var Path = require('path');
var compression = require('compression');

var listen_IP='127.0.0.1';
// var listen_IP='192.168.1.79';
// var listen_IP='192.168.1.124';

var port =8080;

app.use(compression({
  level: 6
})); //6 is default

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(__dirname));


http.listen(port, listen_IP, function() {
  console.log('up and running');
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
