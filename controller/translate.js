var express = require('express');
var fs = require('fs');
var eng_vie = JSON.parse(fs.readFileSync('./db/eng-vie.json', 'utf8'));

var fr_vi = JSON.parse(fs.readFileSync('./db/fr-vi.json', 'utf8'));


var translate = express.Router();

function trans(dir, word) {

    for (var i = 0; i < dir.length; i++) {
        if (dir[i].word.toString() === word)
            return dir[i].mean;
    }
}

translate.get("/translate/en/:word", function(req, res) {
    var word = req.params.word;
    console.log(word);

    var ret = trans(eng_vie, word);

    res.send(ret);
});

translate.get("/translate/fr/:word", function(req, res) {
    var word = req.params.word;
    console.log(word);

    var ret = trans(fr_vi, word);

    res.send(ret);
});

translate.get("/translate", function(req, res) {
    console.log(eng_vie);
    res.send(eng_vie);
});

module.exports = translate;