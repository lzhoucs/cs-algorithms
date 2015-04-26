/**
 * Recursive version of Depth First Search
 * @param graph
 * @param vertexIndx
 * @param beginCallback
 * @param endCallback
 * @constructor
 */
exports.DFS = function (graph, vertexIndx, beginCallback, endCallback){

    var _DFS = function(_vertexIndx) {
        if(beginCallback)
            beginCallback(_vertexIndx);

        graph.getVertexByIndx(_vertexIndx).isExplored = true;

        graph.getAdjacencyIndicesList(_vertexIndx).forEach(function (indx) {
            var vertex = graph.getVertexByIndx(indx);

            if(vertex && !vertex.isExplored)
                _DFS(indx);
        });

        if(endCallback)
            endCallback(_vertexIndx);
    }

    _DFS(vertexIndx)
}
