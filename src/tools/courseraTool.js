var http = require('http');


var courseraHttpHandler = function (url, lineProcessor, callback) {
  http.get(url, function (response) {
    var str = '';
    response.on('data', function (chunk) {
      str += chunk;
    });
    response.on('end', function () {
      //TODO some data ends with \n (problem 4), some data ends with \r\n. Needs a better solution.
      var data = str.trim().split('\n').map(lineProcessor);
      callback(data);
    });
  });
}

var strToInt = function (str) {
  return parseInt(str);
}

var lineToIntArry = function (line) {
  return line.trim().split(/\s+/).map(strToInt);
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

/*
 * Convert from coursera sample format to javascript 2-dimensional array.
 * e.g :
 *
 * a.txt :
 *
 * 111 112
 * 222 223
 * 333 334
 * 444 445
 *
 * converts to
 *
 * [ [111, 112], [222, 223], [333, 334], [444, 445] ]
 * */
exports.get2DNumberArray = function (url, callback) {
  courseraHttpHandler(url, lineToIntArry, callback);
}

