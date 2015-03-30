require('./adjacencylistUndirectedGraph');
/**
 * For finding minimum cut in a simple undirected graph
 */

exports.randomizedContraction = function(graph) {
    var lastFoundEdge;
    while(graph.size > 2) {
        lastFoundEdge = getRandomEdge(graph);
        if(lastFoundEdge) {
            graph.contract(lastFoundEdge.vertex1, lastFoundEdge.vertex2)
        } else {
            throw new Error("No edge found.");
        }

    }
    if(graph.size === 2) {
        return lastFoundEdge.vertex1.edgeSize();
    }
}

function getRandomEdge(graph) {
    var vertex = getRandomVertex(graph),
        edge;
    while(!edge) {
        edge = getAnEdge(vertex);
    }
    return edge;
}
function getRandomVertex(graph) {
    graph.get( Math.floor( Math.random() * graph.size) - 1 );
}


function getAnEdge(vertex) {
    // TODO is there a better way?
    var el;
    var isFound = vertex.adjacentVertices.some( function(_el) {
        el = _el;
        return graph.get(_el).adjacentVertices.indexOf(vertex.index) !=-1;
    } );
    if(isFound)
        return new Edge(vertex, graph.get(el));
}

/*

console.log(Math.floor( Math.random() * 2) + 1);
console.log([1,2,3,4].slice(1));
console.log("----------");

var obj1 = {prop1 : [1,2,3]};
var returnVal = obj1.prop1.map(function (el) {
    return el + 1;
})
console.log(returnVal);
console.log(obj1.prop1);
console.log("---- test 2 -----");

var obj2 = {prop1 : [1,2,3]};
console.log(obj2.prop1.splice(1, 1));
console.log(obj2.prop1);*/
