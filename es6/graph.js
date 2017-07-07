'use strict';

const Edge = require('./graph/edge'),
      Vertex = require('./graph/vertex'),
      arrayUtil = require('./util/array');

class Graph {
  constructor (sortedVertices) {
    this.sortedVertices = sortedVertices;
  }

  getSortedVertices() {
    return this.sortedVertices;
  }

  static fromVertexLiterals(vertexLiterals) {
    const vertices = [],
          edges = [];

    verticesAndEdgesFromVertexLiterals(vertexLiterals, vertices, edges);

    const sortedVertices = sortedVerticesFromVerticesAndEdges(vertices, edges),
          graph = new Graph(sortedVertices);
    
    return graph;
  }
}

module.exports = Graph;

function verticesAndEdgesFromVertexLiterals(vertexLiterals, vertices, edges) {
  const vertexMap = {};

  vertexLiterals.forEach(function(vertexLiteral) {
    const firstVertexLiteralElement = arrayUtil.first(vertexLiteral),
          secondVertexLiteralElement = arrayUtil.second(vertexLiteral),
          descendantVertexNames = secondVertexLiteralElement, ///
          vertexName = firstVertexLiteralElement; ///

    let vertex;

    const vertexExists = vertexMap.hasOwnProperty(vertexName);

    if (vertexExists) {
      vertex = vertexMap[vertexName];
    } else {
      vertex = Vertex.fromVertexName(vertexName);

      vertexMap[vertexName] = vertex;

      vertices.push(vertex);
    }

    descendantVertexNames.forEach(function(descendantVertexName) {
      let descendantVertex;

      const descendantVertexExists = vertexMap.hasOwnProperty(descendantVertexName);

      if (descendantVertexExists) {
        descendantVertex = vertexMap[descendantVertexName];
      } else {
        descendantVertex = Vertex.fromVertexName(descendantVertexName);

        vertexMap[descendantVertexName] = descendantVertex;

        vertices.push(descendantVertex);
      }

      const firstVertex = vertex,
            secondVertex = descendantVertex,
            edge = new Edge(firstVertex, secondVertex);

      edges.push(edge);

      const incomingEdge = edge;

      descendantVertex.addIncomingEdge(incomingEdge);
    });
  });
}

function sortedVerticesFromVerticesAndEdges(vertices, edges) {
  let sortedVertices = [];
  
  const startingVertices = vertices.filter(function(vertex) {
          const vertexStarting = vertex.isStarting();
      
          return vertexStarting;
        });

  let startingVerticesLength = startingVertices.length;

  while (startingVerticesLength > 0) {
    const startingVertex = startingVertices.pop(),
          sortedVertex = startingVertex;  ///

    sortedVertices.push(sortedVertex);

    arrayUtil.backwardsForEach(edges, function(edge, index) {
      const firstVertex = edge.getFirstVertex(),
            edgeStarting = (firstVertex === startingVertex);

      if (edgeStarting) {
        edges.splice(index, 1);

        const lastVertex = edge.getLastVertex(),
              incomingEdge = edge;  ///

        lastVertex.removeIncomingEdge(incomingEdge);

        const lastVertexStarting = lastVertex.isStarting();

        if (lastVertexStarting) {
          startingVertices.push(lastVertex);
        }
      }
    });

    startingVerticesLength = startingVertices.length;
  }

  const edgesLength = edges.length;

  if (edgesLength > 0) {
    sortedVertices = null;
  }

  return sortedVertices;
}
