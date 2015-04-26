var     alg     = require('../graph/DFSItr'),
        aldg    = require('../graph/adjacencyListDirectedGraph'),
        util = require('../tools/util'),
        T,
        S = null,

        DFSLoop = function (graph, vertexIndicesList, beginCallback, endCallback) {
            for(var i = vertexIndicesList.length - 1; i >=0; i--) {
                var indx = vertexIndicesList[i];
                var vertex = graph.getVertexByIndx(indx);

                if(vertex && !vertex.isExplored) {
                    if(beginCallback) {
                        S = indx;
                    }

                    alg.DFSItr( graph, indx, beginCallback, endCallback)
                }
            }
        },

        /**
         * compute strongly connected components (SCCs).
         */
         SCCByDFS = function(data) {

            console.log("Got data.");

            var graph = new aldg.AdjacencyListDirectedGraph(data),
                reversedGraph = new aldg.AdjacencyListDirectedGraph(data.map(function (el) {

                    return util.arrySwap(el, 0, 1);
                })),

                T = 1,
                finishingTimes = [],
                leaders = [],
                leaderBoard = [];

            console.log("First pass start.");
            // first pass
            DFSLoop(reversedGraph, reversedGraph.getVertexIndicesList(), null, function (indx) {
                finishingTimes[indx] = T++;
            });
            console.log("First pass done.");

            graph.reorder(finishingTimes);
            // second pass
            DFSLoop(graph, graph.getVertexIndicesList(), function (indx) {
                leaders[indx] = S;
            }, null);

            console.log("Second pass done.");

            leaders.forEach(function (indx) {
                var score = leaderBoard[indx];
                if(score)
                    score++;
                else
                    score = 1;
                leaderBoard[indx] = score;

            })
            console.log("Aggregate result done.");

            //descending order
            leaderBoard.sort(function (a, b) {
                return b - a;
            });
            console.log("Sort result done.");

            return util.getTopN(leaderBoard, 5);

        }

exports.SCCByDFS = SCCByDFS;
