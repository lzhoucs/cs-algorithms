var     crTool  = require('../tools/courseraTool'),
        alg     = require('../graph/DFS');
        aldg    = require('../graph/adjacencyListDirectedGraph')

crTool.get2DNumberArray('http://spark-public.s3.amazonaws.com/algo1/programming_prob/SCC.txt', function(data) {
    var graph = new aldg.AdjacencyListDirectedGraph(data);
    var vertexList = graph.getVertexList();
    for(var i = vertexList.length - 1; i >=0; i--) {
        if(!vertexList[i].isExplored()) {
            //TODO To Be Continued
            alg.DFS( )
        }

    }


});
