var     crTool  = require('../tools/courseraTool'),
        alg     = require('../graph/DFS'),
        aldg    = require('../graph/adjacencyListDirectedGraph');

/**
 * compute strongly connected components (SCCs).
 */
crTool.get2DNumberArray('http://spark-public.s3.amazonaws.com/algo1/programming_prob/SCC.txt', function(data) {
    var graph = new aldg.AdjacencyListDirectedGraph(data);
    var verticesList = graph.getVertexIndicesList();
    for(var i = verticesList.length - 1; i >=0; i--) {
        if(!verticesList[i].isExplored) {
            //TODO To Be Continued
            alg.DFS( graph, verticesList[i], function (vertex) {

            }, function (vertex) {

            })
        }

    }


});
