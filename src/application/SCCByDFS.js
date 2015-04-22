var     crTool  = require('../tools/courseraTool'),
        alg     = require('../graph/DFS'),
        aldg    = require('../graph/adjacencyListDirectedGraph'),
        util = require('../tools/util'),

        SCCByDFS = function (graph, vertexIndicesList, beginCallback, endCallback) {
            for(var i = vertexIndicesList.length - 1; i >=0; i--) {
                if(!graph.getVertexByIndx(vertexIndicesList[i]).isExplored) {
                    alg.DFS( graph, vertexIndicesList[i], beginCallback, endCallback)
                }
            }
        }


/**
 * compute strongly connected components (SCCs).
 */
crTool.get2DNumberArray('http://spark-public.s3.amazonaws.com/algo1/programming_prob/SCC.txt', function(data) {
    var graph = new aldg.AdjacencyListDirectedGraph(data),
        reversedGraph = new aldg.AdjacencyListDirectedGraph(data.map(function (el) {

            return util.arrySwap(el, 0, 1);
        })),
        finishingTime = 0,
        leader = null;

    // first pass
    SCCByDFS(reversedGraph.getVertexIndicesList(), null, function () {

    });

    // second pass
    SCCByDFS(reversedGraph.getVertexIndicesList(), function () {

    }, null);

});
