function AdjacencylistUndirectedGraph(data) {
    var ajList = data,
        tmpVertex;
    this.size = function() {
        return ajList.length;
    }

    this.get = function(indx) {
        var row = ajList[indx - 1];
        return new Vertex(row[0], row.slice(1));
    }

    this.contract = function(vertex1, vertex2) {

        vertex1.adjacentVertices.forEach(function (el) {

            tmpVertex = this.get(el);
            tmpVertex.adjacentVertices.forEach(function (_el, i) {
                if(_el === vertex1.index)
                    tmpVertex.adjacentVertices[i] = vertex2.index;
            });

        })

        vertex2.adjacentVertices = vertex2.adjacentVertices.concat(vertex1.adjacentVertices).filter(function (el) {
            el !== vertex2.index;
        })

        ajList[vertex1.index - 1] = null;
    }
}

function Vertex(indx, adjacentVertices) {
    this.index = indx;
    this.adjacentVertices = adjacentVertices;
    this.edgeSize = function() {
        return this.adjacentVertices.length;
    }
}

function Edge(vertex1, vertex2) {
    this.vertex1 = vertex1;
    this.vertex2 = vertex2;
}