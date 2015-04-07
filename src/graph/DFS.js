function DFS(graph, vertex){

    var _DFS = function(v) {
        v.setExplored(true);
        graph.getAdjaccencyList(v).forEach(function (el) {
            if(!el.isExplored())
                _DFS(el);
        });
    }
    _DFS(vertex)
}