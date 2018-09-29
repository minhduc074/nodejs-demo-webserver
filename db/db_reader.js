var fs = require('fs');
var en_vi = JSON.parse(fs.readFileSync('./db/en-vi.json', 'utf8'));

var fr_en = JSON.parse(fs.readFileSync('./db/fr-en.json', 'utf8'));

exports.find_en_vi = function(word){
    return new Promise(function(resolve, reject) {
        for (var i = 0; i < en_vi.length; i++) {
            if (en_vi[i].word.toString().toLowerCase() === word.toLowerCase())
                resolve(en_vi[i].mean);
        }
        reject("Not Found");
    });
}

exports.find_fr_en = function(word){
    return new Promise(function(resolve, reject) {
        for (var i = 0; i < fr_en.length; i++) {
            if (fr_en[i].word.toString().toLowerCase() === word.toLowerCase())
                resolve(fr_en[i].mean);
        }
        reject("Not Found");
    });
}
