var http = require('http');


var courseraHttpHandler = function(url, lineProcessor, callback) {
    http.get(url, function(response) {
        var str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });
        response.on('end', function () {
            var processedStr = str.trim().split('\r\n').map( lineProcessor );
            callback( processedStr );
        });
    });
}

var strToInt = function (str) {
    return parseInt(str);
}
/*
 * Convert from coursera sample format to javascript array.
 * e.g :
 *
 * a.txt :
 *
 * 111
 * 222
 * 333
 * 444
 *
 * converts to
 *
 * [111,222,333,444]
 * */

exports.getNumberArray = function (url, callback) {
    courseraHttpHandler(url, strToInt, callback);

};

exports.getAdjacencylist = function (url, callback) {
    courseraHttpHandler(url, function (str) {
        return str.trim().split(/\s+/).map( strToInt );
    }, callback);
}
