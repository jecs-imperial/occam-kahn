'use strict';

const Edge = require('./graph/edge'),
      Vertex = require('./graph/vertex'),
      arrayUtil = require('./util/array');

class Graph {
  constructor (topologicallySortedVertices) {
    this.topologicallySortedVertices = topologicallySortedVertices;
  }

  getTopologicallySortedVertices() {
    return this.topologicallySortedVertices;
  }

  static fromVertexLiterals(vertexLiterals) {
    const vertices = [],
          edges = [];

    verticesAndEdgesFromVertexLiterals(vertexLiterals, vertices, edges);

    const topologicallySortedVertices = topologicallySortedVerticesFromVerticesAndEdges(vertices, edges);
    
    addAncestorVerticesToSortedVertices(topologicallySortedVertices);
    
    const graph = new Graph(topologicallySortedVertices);
    
    return graph;
  }
}

module.exports = Graph;

function verticesAndEdgesFromVertexLiterals(vertexLiterals, vertices, edges) {
  const vertexMap = {};

  vertexLiterals.forEach(function(vertexLiteral) {
    const firstVertexLiteralElement = arrayUtil.first(vertexLiteral),
          secondVertexLiteralElement = arrayUtil.second(vertexLiteral),
          ancestorVertexNames = secondVertexLiteralElement, ///
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

    ancestorVertexNames.forEach(function(ancestorVertexName) {
      let ancestorVertex;

      const ancestorVertexExists = vertexMap.hasOwnProperty(ancestorVertexName);

      if (ancestorVertexExists) {
        ancestorVertex = vertexMap[ancestorVertexName];
      } else {
        ancestorVertex = Vertex.fromVertexName(ancestorVertexName);

        vertexMap[ancestorVertexName] = ancestorVertex;

        vertices.push(ancestorVertex);
      }

      const firstVertex = ancestorVertex, ///
            secondVertex = vertex,  ///
            edge = new Edge(firstVertex, secondVertex);

      edges.push(edge);

      const incomingEdge = edge,  ///
            outgoingEdge = edge;  ///

      vertex.addIncomingEdge(incomingEdge);

      ancestorVertex.addOutgoingEdge(outgoingEdge);
    });
  });
}

function topologicallySortedVerticesFromVerticesAndEdges(vertices, edges) {
  let topologicallySortedVertices = [];
  
  const startingVertices = vertices.filter(function(vertex) {
          const vertexStarting = vertex.isStarting();
      
          return vertexStarting;
        });

  let startingVerticesLength = startingVertices.length;

  while (startingVerticesLength > 0) {
    const startingVertex = startingVertices.pop(),
          topologicallySortedVertex = startingVertex;  ///

    topologicallySortedVertices.push(topologicallySortedVertex);

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
    topologicallySortedVertices = null;
  }

  return topologicallySortedVertices;
}

function addAncestorVerticesToSortedVertices(topologicallySortedVertices) {
  if (topologicallySortedVertices !== null) {
    topologicallySortedVertices.forEach(function(topologicallySortedVertex) {
      topologicallySortedVertex.forEachOutgoingEdge(function(outgoingEdge) {
        const outgoingEdgeLastVertex = outgoingEdge.getLastVertex(),
              descendantVertex = outgoingEdgeLastVertex,  ///
              ancestorVertex = topologicallySortedVertex;  ///

        descendantVertex.addAncestorVertex(ancestorVertex);
      })
    });
  }
}
