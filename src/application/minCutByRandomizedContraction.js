var     crTool  = require('../tools/courseraTool'),
        alg     = require('../graph/randomizedContraction'),
        alug   = require('../graph/adjacencylistUndirectedGraph'),

        times = 400;


crTool.get2DNumberArray('http://spark-public.s3.amazonaws.com/algo1/programming_prob/kargerMinCut.txt', function(data) {
    var min = Number.MAX_VALUE;

    for(var i = 0 ; i < times; i++) {
        var result = alg.randomizedContraction( new alug.AdjacencylistUndirectedGraph(data) );
        console.log((i+1) + "th result : " + result);

        if(result < min)
            min = result;
    }
    console.log("final min cut : " + min);


});