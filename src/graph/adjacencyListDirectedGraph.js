var util = require('../tools/util');

/**
 *
 * @param indx
 * @param adjacentVertexIndices array of adjacent vertex indices.
 * Only the indices, not the actual vertices.
 *
 * @constructor
 */
var Vertex = function(indx, adjacentVertexIndices) {
    this.index = indx;
    this.adjacentVertexIndices = adjacentVertexIndices;
}


/**
 *
 * @param data  2-D array
 * @constructor
 */
exports.AdjacencyListDirectedGraph = function(data) {
    var ajList = [];

    data.forEach(function (el) {
        var indx = el[0],
            outGoingVertexIndx = el[1];

        if(ajList[indx]) {
            ajList[indx].adjacentVertexIndices.push(outGoingVertexIndx) // this is assuming there is no duplicated entry in the
            // original data, which means we are assuming there is no parallel edges
        } else {
            ajList[indx] = new Vertex(indx, outGoingVertexIndx);
        }

    });

    this.getVertexIndicesList = function() {
        return ajList.map(function (vertex) {
            return vertex.index;
        });
    }

    this.getAdjacencyList = function(vertex) {
        vertex.adjacentVertexIndices.map(function (indx) {
            return ajList[indx];
        });
    }

    this.getVertexByIndx = function(indx) {
        return ajList[indx];
    }


}
