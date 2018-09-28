var express = require('express');
var fs = require('fs');
var en_vi = JSON.parse(fs.readFileSync('./db/en-vi.json', 'utf8'));

var fr_en = JSON.parse(fs.readFileSync('./db/fr-en.json', 'utf8'));


var translate = express.Router();

var translate_word = function trans(dir, word) {
    return new Promise(function(resolve, reject) {
        for (var i = 0; i < dir.length; i++) {
            if (dir[i].word.toString().toLowerCase() === word.toLowerCase())
                resolve(dir[i].mean);
        }
        reject("Not Found");
    });
};

translate.get("/translate/en-vi/:word", function(req, res) {
    var word = req.params.word;
    console.log(word);

    translate_word(en_vi, word).then(function(ret) {
        console.log("200");
        res.writeHead(200, { 'Content-Type': 'text/json' });
        var body = { "word": word, "mean": ret }
        res.end(JSON.stringify(body));
    }).catch(function(reason) {
        console.log("400");
        res.writeHead(400, { 'Content-Type': 'text/json' });
        var body = { "word": word, "mean": reason }
        res.end(JSON.stringify(body));
    });
});

translate.get("/translate/fr-en/:word", function(req, res) {
    var word = req.params.word;
    console.log(word);

    translate_word(fr_en, word).then(function(ret) {
        console.log("200");
        res.writeHead(200, { 'Content-Type': 'text/json' });
        var body = { "word": word, "mean": ret }
        res.end(JSON.stringify(body));
    }).catch(function(reason) {
        console.log("400");
        res.writeHead(400, { 'Content-Type': 'text/json' });
        var body = { "word": word, "mean": reason }
        res.end(JSON.stringify(body));
    });
});

translate.get("/translate", function(req, res) {
    console.log(en_vi);
    res.send(en_vi);
});

module.exports = translate;