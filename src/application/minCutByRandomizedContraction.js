var     crTool  = require('../tools/courseraSampleToArray'),
        alg     = require('../graph/randomizedContraction');
        alug   = require('../graph/adjacencylistUndirectedGraph')


crTool.getAdjacencylist('http://spark-public.s3.amazonaws.com/algo1/programming_prob/kargerMinCut.txt', function(data) {

    console.log("data : " + data);
    var result = alg.randomizedContraction( new alug.AdjacencylistUndirectedGraph(data) );
    console.log("result : " + result);
});