var translate = require("./controller/translate.js");
var express = require('express');


var app = express();
var http = require("http").createServer(app);
http.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.get("/", function(req, res) {
    console.log("hello");
});

app.get("/translate/en-vi/:word", translate);
app.get("/translate/fr-en/:word", translate);
app.get("/translate", translate);