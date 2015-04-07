exports.DFS = function (graph, vertex, beginCallback, endCallback){

    var _DFS = function(v) {
        if(beginCallback)
            beginCallback(v);
        v.setExplored(true);
        graph.getAdjacencyList(v).forEach(function (el) {
            if(!el.isExplored())
                _DFS(el);
        });
        if(endCallback)
            endCallback(v);
    }

    _DFS(vertex)
}
