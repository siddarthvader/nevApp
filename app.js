var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var Path = require('path');
var compression = require('compression');

var port = 8080;

app.use(compression({level: 6}));	//6 is default

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname));

// http.listen(port, "192.168.1.124", function () {
// 	console.log('up and running');
// });

http.listen(port, "0.0.0.0", function () {
	console.log('up and running');
});

app.get("*", function (req, res) {
	res.sendFile(__dirname + '/index.html');
});