var util = require('../tools/util');

var Vertex = function(indx, adjacentVertices) {
    this.index = indx;
    this.adjacentVertices = adjacentVertices;
    this.edgeSize = function() {
        return this.adjacentVertices.length;
    }
}

var Edge = function(vertex1, vertex2) {
    this.vertex1 = vertex1;
    this.vertex2 = vertex2;
}

exports.AdjacencylistUndirectedGraph = function(data) {
    var ajList = data.map(function (el) {
            return new Vertex(el[0], el.slice(1));
        }),
        tmpVertex,
        find = function(indx) {
            return util.arryFind(ajList, function(vertex) {return vertex.index === indx});
        };
    this.size = function() {
        return ajList.length;
    }

    this.getith = function(i) {
        return ajList[i];
    }

    this.get = function(indx) {
        var findResult = find(indx);

        if(findResult)
            return findResult.el;
        else
            throw new Error("Vertex is not found at index : " + indx);
    }

    this.remove = function(indx) {
        var findResult = find(indx);
        if(findResult)
            return ajList.splice(findResult.i, 1); // return removed element
        else
            throw new Error("Cannot delete vertex at index : " + indx + ". Vertex is not found.");
    }

    this.contract = function(vertex1, vertex2) {
        var self = this;

        vertex1.adjacentVertices.forEach(function (el) {

            tmpVertex = self.get(el);
            tmpVertex.adjacentVertices.forEach(function (_el, i) {
                if(_el === vertex1.index) {
                    tmpVertex.adjacentVertices[i] = vertex2.index;
                }

            });

        })

        vertex2.adjacentVertices = vertex2.adjacentVertices.concat(vertex1.adjacentVertices).filter(function (el) {
            return el !== vertex2.index;
        })

        this.remove(vertex1.index);
    }
}

exports.Vertex = Vertex;
exports.Edge = Edge;
