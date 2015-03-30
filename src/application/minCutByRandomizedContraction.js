var     crTool  = require('../tools/courseraSampleToArray'),
        alg     = require('../graph/randomizedContraction');
        graph   = require('../graph/adjacencylistUndirectedGraph')


crTool.getAdjacencylist('http://spark-public.s3.amazonaws.com/algo1/programming_prob/kargerMinCut.txt', function(data) {

    alg.randomizedContraction( new Graph() );
});