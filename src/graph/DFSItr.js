/**
 * Iterative version of Depth First Search
 * @param graph
 * @param vertexIndx
 * @param beginCallback
 * @param endCallback
 * @constructor
 */
exports.DFSItr = function (graph, vertexIndx, beginCallback, endCallback){

    var stack = [vertexIndx],
        vertex;

    while(stack.length > 0) {
        var _vertexIndx = stack.pop();

        vertex = graph.getVertexByIndx(_vertexIndx);
        if(vertex.isExplored) {
            if(endCallback)
                endCallback(_vertexIndx);
        } else {
            vertex.isExplored = true;

            if(beginCallback)
                beginCallback(_vertexIndx);

            stack.push(_vertexIndx);
        }

        graph.getAdjacencyIndicesList(_vertexIndx).forEach(function (indx) {
            var vertex = graph.getVertexByIndx(indx);

            if(vertex && !vertex.isExplored)
                stack.push(indx);
        });


    }
}
