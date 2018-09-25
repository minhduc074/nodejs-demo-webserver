var translate = require("./controller/translate.js");
var express = require('express');


var app = express();
var http = require("http").createServer(app);
http.listen(3000);

app.get("/", function(req, res) {
    console.log("hello");
});

app.get("/translate/en/:word", translate);
app.get("/translate/fr/:word", translate);
app.get("/translate", translate);