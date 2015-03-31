
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
    var ajList = data,
        tmpVertex;
    this.size = function() {
        return ajList.length;
    }

    this.get = function(indx) {
        //console.log("Getting : " + indx);
        var row = ajList[indx - 1];
        return new Vertex(row[0], row.slice(1));
    }

    this.contract = function(vertex1, vertex2) {
        console.log("Contracting vertices : " + vertex1.index + " and " + vertex2.index);
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
        /*var al = vertex2.adjacentVertices.concat(vertex1.adjacentVertices);
        console.log("Debug 1 : " + al);

        al = al.filter(function (el) {
            el !== vertex2.index;
        });
        console.log("Debug 2 : " + al);

        vertex2.adjacentVertices = al;
        */
        ajList[vertex1.index - 1] = null;

        console.log("Contracted adjacencylist : " + vertex2.adjacentVertices);
    }
}

exports.Vertex = Vertex;
exports.Edge = Edge;
