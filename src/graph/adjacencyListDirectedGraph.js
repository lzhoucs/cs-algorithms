/**
 *
 * @param data  2-D array
 * @constructor
 */
exports.AdjacencyListDirectedGraph = function (data) {
  var ajList = [];

  data.forEach(function (el) {
    var indx = el[0],
      outGoingVertexIndx = el[1];

    if (ajList[indx]) {
      ajList[indx].adjacentVertexIndices.push(outGoingVertexIndx) // this is assuming there is no duplicated entry in the
      // original data, which means we are assuming there is no parallel edges
    } else {
      ajList[indx] = {
        index: indx,
        adjacentVertexIndices: [outGoingVertexIndx],
        toString: function () {
          return this.index + " -> [" + this.adjacentVertexIndices + "]"
        }
      };
    }

  });

  this.getVertexIndicesList = function () {
    return ajList.map(function (vertex) {
      if (vertex)return vertex.index;
    });
  }

  this.getAdjacencyIndicesList = function (indx) {
    return ajList[indx].adjacentVertexIndices;
  }

  this.getVertexByIndx = function (indx) {
    return ajList[indx];
  }

  this.reorder = function (orderArry) {

    function resetVertex(vertex) {
      if (vertex && !vertex.isReordered) {
        var oriIndex = vertex.index;
        vertex.index = orderArry[vertex.index];
        vertex.adjacentVertexIndices = vertex.adjacentVertexIndices.map(function (indx) {
          return orderArry[indx];
        })
        vertex.isReordered = true;

        var nextVertex = ajList[vertex.index];
        if (nextVertex !== vertex) {
          ajList[vertex.index] = vertex;

          if (ajList[oriIndex] === vertex)
            ajList[oriIndex] = null;
          resetVertex(nextVertex)
        }

      }

    }

    for (var i = 1; i < ajList.length; i++) {
      resetVertex(ajList[i]);
    }
  }

}
