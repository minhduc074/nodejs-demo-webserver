var express = require('express');

var translate = express.Router();

var directory = require('../db/db_reader');

translate.get("/translate/en-vi/:word", function (req, res) {
    var word = req.params.word;
    console.log(word);

    directory.find_en_vi(word).then(function (ret) {
        console.log("200");
        res.writeHead(200, {
            'Content-Type': 'text/json'
        });
        var body = {
            "word": word,
            "mean": ret
        }
        res.end(JSON.stringify(body));
    }).catch(function (reason) {
        console.log("400");
        res.writeHead(400, {
            'Content-Type': 'text/json'
        });
        var body = {
            "word": word,
            "mean": reason
        }
        res.end(JSON.stringify(body));
    });
});

translate.get("/translate/fr-en/:word", function (req, res) {
    var word = req.params.word;
    console.log(word);

    directory.find_fr_en(word).then(function (ret) {
        console.log("200");
        res.writeHead(200, {
            'Content-Type': 'text/json'
        });
        var body = {
            "word": word,
            "mean": ret
        }
        res.end(JSON.stringify(body));
    }).catch(function (reason) {
        console.log("400");
        res.writeHead(400, {
            'Content-Type': 'text/json'
        });
        var body = {
            "word": word,
            "mean": reason
        }
        res.end(JSON.stringify(body));
    });
});

translate.get("/translate", function (req, res) {
    console.log("200");
    res.writeHead(200, {
        'Content-Type': 'text/json'
    });
    var body = {
        "fr-en": "/translate/fr-en/:word",
        "en-vi": "/translate/en-vi/:word"
    }
    res.end(JSON.stringify(body));
});

module.exports = translate;