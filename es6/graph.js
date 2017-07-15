'use strict';

const arrayUtil = require('./util/array'),
      Edge = require('./graph/edge'),
      Vertex = require('./graph/vertex'),
      RemainingEdges = require('./graph/remainingEdges');

class Graph {
  constructor (topologicallyOrderedVertices, remainingEdges) {
    this.topologicallyOrderedVertices = topologicallyOrderedVertices;
    this.remainingEdges = remainingEdges;
  }

  getTopologicallyOrderedVertices() {
    return this.topologicallyOrderedVertices;
  }

  getRemainingEdges() {
    return this.remainingEdges;
  }

  areCyclesPresent() { return this.remainingEdges.areCyclesPresent(); }

  static fromVertexLiterals(vertexLiterals) {
    const vertexMap = vertexMapFromVertexLiterals(vertexLiterals),
          edges = edgesFromVertexLiteralsAndVertexMap(vertexLiterals, vertexMap),
          topologicallyOrderedVertices = topologicallyOrderedVerticesFromVertexMapAndEdges(vertexMap, edges),
          remainingEdges = new RemainingEdges(edges),
          graph = new Graph(topologicallyOrderedVertices, remainingEdges);

    return graph;
  }
}

module.exports = Graph;

function vertexMapFromVertexLiterals(vertexLiterals) {
  const vertexMap = {};

  vertexLiterals.forEach(function(vertexLiteral) {
    const firstVertexLiteralElement = arrayUtil.first(vertexLiteral),
          vertexName = firstVertexLiteralElement, ///
          vertexExists = vertexMap.hasOwnProperty(vertexName);

    if (!vertexExists) {
      const vertex = Vertex.fromVertexName(vertexName);

      vertexMap[vertexName] = vertex;
    }

    const secondVertexLiteralElement = arrayUtil.second(vertexLiteral),
          ancestorVertexNames = secondVertexLiteralElement; ///

    ancestorVertexNames.forEach(function(ancestorVertexName) {
      const ancestorVertexExists = vertexMap.hasOwnProperty(ancestorVertexName);

      if (!ancestorVertexExists) {
        const ancestorVertex = Vertex.fromVertexName(ancestorVertexName);

        vertexMap[ancestorVertexName] = ancestorVertex;
      }
    });
  });

  return vertexMap;
}

function edgesFromVertexLiteralsAndVertexMap(vertexLiterals, vertexMap) {
  const edges = [];

  vertexLiterals.forEach(function(vertexLiteral) {
    const firstVertexLiteralElement = arrayUtil.first(vertexLiteral),
          secondVertexLiteralElement = arrayUtil.second(vertexLiteral),
          ancestorVertexNames = secondVertexLiteralElement, ///
          vertexName = firstVertexLiteralElement, ///
          vertex = vertexMap[vertexName];

    ancestorVertexNames.forEach(function(ancestorVertexName) {
      const ancestorVertex = vertexMap[ancestorVertexName],
            sourceVertex = ancestorVertex, ///
            targetVertex = vertex,  ///
            edge = new Edge(sourceVertex, targetVertex),
            incomingEdge = edge,  ///
            outgoingEdge = edge;  ///

      edges.push(edge);

      sourceVertex.addOutgoingEdge(outgoingEdge);

      targetVertex.addIncomingEdge(incomingEdge);
    });
  });

  return edges;
}

function topologicallyOrderedVerticesFromVertexMapAndEdges(vertexMap, edges) {
  let topologicallyOrderedVertices = [];

  const startingVertices = startingVerticesFromVertexMap(vertexMap),
        removedEdges = [];

  let startingVerticesLength = startingVertices.length;

  while (startingVerticesLength > 0) {
    const startingVertex = startingVertices.pop(),
          topologicallyOrderedVertex = startingVertex;  ///

    topologicallyOrderedVertices.push(topologicallyOrderedVertex);

    arrayUtil.backwardsForEach(edges, function(edge, index) {
      const sourceVertex = edge.getSourceVertex(),
            edgeStarting = (sourceVertex === startingVertex); ///

      if (edgeStarting) {
        edges.splice(index, 1);

        const targetVertex = edge.getTargetVertex(),
              incomingEdge = edge, ///
              removedEdge = edge;  ///

        targetVertex.removeIncomingEdge(incomingEdge);

        removedEdges.push(removedEdge);

        const targetVertexStarting = targetVertex.isStarting();

        if (targetVertexStarting) {
          const startingVertex = targetVertex;  ///

          startingVertices.push(startingVertex);
        }
      }
    });

    startingVerticesLength = startingVertices.length;
  }

  const edgesLength = edges.length;

  if (edgesLength === 0) {
    removedEdges.forEach(function(removedEdge) {
      const targetVertex = removedEdge.getTargetVertex(),
            incomingEdge = removedEdge; ///
      
      targetVertex.addIncomingEdge(incomingEdge);
    })
  }

  return topologicallyOrderedVertices;
}

function startingVerticesFromVertexMap(vertexMap) {
  const vertexNames = Object.keys(vertexMap),
        startingVertices = vertexNames.reduce(function(startingVertices, vertexName) {
          const vertex = vertexMap[vertexName],
                vertexStarting = vertex.isStarting();

          if (vertexStarting) {
            const startingVertex = vertex;  ///

            startingVertices.push(startingVertex);
          }

          return startingVertices
        }, []);

  return startingVertices;
}
