exports.DFS = function (graph, vertexIndx, beginCallback, endCallback){

    var _DFS = function(_vertexIndx) {
        if(beginCallback)
            beginCallback(_vertexIndx);

        graph.getVertexByIndx(_vertexIndx).isExplored = true;

        graph.getAdjacencyIndicesList(_vertexIndx).forEach(function (indx) {
            if(!graph.getVertexByIndx(indx).isExplored)
                _DFS(indx);
        });

        if(endCallback)
            endCallback(_vertexIndx);
    }

    _DFS(vertexIndx)
}
