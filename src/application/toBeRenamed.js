var     crTool  = require('../tools/courseraTool');


crTool.get2DNumberArray('http://spark-public.s3.amazonaws.com/algo1/programming_prob/SCC.txt', function(data) {

    console.log("Data length : " + data.length);


});
