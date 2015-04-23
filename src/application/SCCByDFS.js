var     crTool  = require('../tools/courseraTool'),
        alg     = require('../graph/DFS'),
        aldg    = require('../graph/adjacencyListDirectedGraph'),
        util = require('../tools/util'),

        T = 1,
        S = null,

        DFSLoop = function (graph, vertexIndicesList, beginCallback, endCallback) {
            for(var i = vertexIndicesList.length - 1; i >=0; i--) {
                var indx = vertexIndicesList[i];
                var vertex = graph.getVertexByIndx(indx);

                if(vertex && !vertex.isExplored) {
                    if(beginCallback) {
                        S = indx;
                        console.log("leader : " + S)
                    }

                    alg.DFS( graph, indx, beginCallback, endCallback)
                }
            }
        },

        /**
         * compute strongly connected components (SCCs).
         */
         SCCByDFS = function(data) {

            console.log("1. Got data.");

            var graph = new aldg.AdjacencyListDirectedGraph(data),
                reversedGraph = new aldg.AdjacencyListDirectedGraph(data.map(function (el) {

                    return util.arrySwap(el, 0, 1);
                })),

                finishingTimes = [],
                leaders = [],
                leaderBoard = [];

            // first pass
            DFSLoop(reversedGraph, reversedGraph.getVertexIndicesList(), null, function (indx) {
                finishingTimes[indx] = T++;
            });
            console.log("2. First pass done.");
            console.log("finishingTimes : " + finishingTimes);

            graph.reorder(finishingTimes);
            // second pass
            DFSLoop(graph, graph.getVertexIndicesList(), function (indx) {
                leaders[indx] = S;
            }, null);

            console.log("3. Second pass done.");

            console.log("Leaders : " + leaders);

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
            console.log("leaderBoard : " + leaderBoard);

        }

//crTool.get2DNumberArray('http://spark-public.s3.amazonaws.com/algo1/programming_prob/SCC.txt', SCCByDFS);

SCCByDFS([
    [1, 2],
    [2, 6],
    [2, 3],
    [2, 4],
    [3, 1],
    [3, 4],
    [4, 5],
    [5, 4],
    [6, 5],
    [6, 7],
    [7, 6],
    [7, 8],
    [8, 5],
    [8, 7]]);
