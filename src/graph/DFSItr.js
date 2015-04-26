/**
 * Iterative version of Depth First Search
 * @param graph
 * @param vertexIndx
 * @param beginCallback
 * @param endCallback
 * @constructor
 */
exports.DFSItr = function (graph, vertexIndx, beginCallback, endCallback){

    /*var _DFS = function(_vertexIndx) {
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
    }*/
    var stack = [vertexIndx],
        vertex;

    while(stack.length > 0) {
        var _vertexIndx = stack.pop();
        if(beginCallback)
            beginCallback(_vertexIndx);

        vertex = graph.getVertexByIndx(_vertexIndx);
        if(vertex.isExplored) {
            if(endCallback)
                endCallback(_vertexIndx);
        } else {
            vertex.isExplored = true;
            stack.push(_vertexIndx);
        }

        graph.getAdjacencyIndicesList(_vertexIndx).forEach(function (indx) {
            var vertex = graph.getVertexByIndx(indx);

            if(vertex && !vertex.isExplored)
                stack.push(indx);
        });


    }
}
