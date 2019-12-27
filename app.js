var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(__dirname + "/app"));
app.use(bodyParser.urlencoded({ extended: false }));

http.createServer(app).listen(3030);
