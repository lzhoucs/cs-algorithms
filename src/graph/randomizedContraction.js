var alug = require('./adjacencylistUndirectedGraph');

/**
 * For finding minimum cut in a simple undirected graph
 */

exports.randomizedContraction = function (graph) {
  var lastFoundEdge;
  while (graph.size() > 2) {
    lastFoundEdge = getRandomEdge(graph);
    if (lastFoundEdge) {
      graph.contract(lastFoundEdge.vertex1, lastFoundEdge.vertex2)
    } else {
      throw new Error("No edge found.");
    }

  }
  if (graph.size() === 2) {
    return lastFoundEdge.vertex1.edgeSize();
  }
}

function getRandomEdge(graph) {
  var vertex = getRandomVertex(graph),
    edge;

  while (!edge) {
    edge = getAnEdge(graph, vertex);
  }
  return edge;
}
function getRandomVertex(graph) {
  return graph.getith(Math.floor(Math.random() * graph.size()));
}


function getAnEdge(graph, vertex) {
  // TODO is there a better way?
  //TODO Refactor array.find(), or at least util.arryFind()?
  var el;
  var isFound = vertex.adjacentVertices.some(function (_el) {
    el = _el;
    return graph.get(_el).adjacentVertices.indexOf(vertex.index) != -1;
  });

  if (isFound) {
    // if it is not this line, this module would not depend on 'adjacencylistUndirectedGraph'
    return new alug.Edge(vertex, graph.get(el));
  }

}
