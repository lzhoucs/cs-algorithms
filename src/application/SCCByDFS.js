var     crTool  = require('../tools/courseraTool'),
        alg     = require('../graph/DFS'),
        aldg    = require('../graph/adjacencyListDirectedGraph'),
        util = require('../tools/util'),

        T = 1,
        S = null,

        SCCByDFS = function (graph, vertexIndicesList, beginCallback, endCallback) {
            for(var i = vertexIndicesList.length - 1; i >=0; i--) {
                if(!graph.getVertexByIndx(vertexIndicesList[i]).isExplored) {
                    if(beginCallback)
                        S = vertexIndicesList[i];
                    alg.DFS( graph, vertexIndicesList[i], beginCallback, endCallback)
                }
            }
        }


/**
 * compute strongly connected components (SCCs).
 */
crTool.get2DNumberArray('http://spark-public.s3.amazonaws.com/algo1/programming_prob/SCC.txt', function(data) {

    console.log("1. Got data.");

    var graph = new aldg.AdjacencyListDirectedGraph(data),
        reversedGraph = new aldg.AdjacencyListDirectedGraph(data.map(function (el) {

            return util.arrySwap(el, 0, 1);
        })),

        finishingTimes = [],
        leaders = [],
        leaderBoard = [];

    // first pass
    SCCByDFS(reversedGraph.getVertexIndicesList(), null, function (indx) {
        finishingTimes[indx] = T++;
    });
    console.log("2. First pass done.");

    graph.reorder(finishingTimes);
    // second pass
    SCCByDFS(graph.getVertexIndicesList(), function (indx) {
        leaders[indx] = S;
    }, null);

    console.log("3. Second pass done.");

    leaders.forEach(function (indx) {
        var score = leaderBoard[indx];
        if(score)
            score++;
        else
            score = 1;
        leaderBoard[indx] = score;

    })

    //descending order
    leaderBoard.sort(function (a, b) {
        return b - a;
    });
    console.log(leaderBoard);

});

