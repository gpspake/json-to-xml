import fs from 'fs';
import xml2js from 'xml2js';

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/books.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.log(JSON.stringify(result.catalog.book, null, ' '));
    });
});

