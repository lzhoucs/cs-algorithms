var http = require('http');

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
var strToArray = function(str) {
    return str.trim().split('\r\n').map(function (elStr) {
        return parseInt(elStr);
    })
}

function simpleHttpHandler(url, callback) {
    http.get(url, function(response) {
        var str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });
        response.on('end', function () {
            callback( str )
        });
    });
}

exports.getNumberArray = function (url, callback) {
    simpleHttpHandler(url, function (str) {
        var numberArry = str.trim().split('\r\n').map(function (elStr) {
            return parseInt(elStr);
        })
        callback(numberArry);
    });

};