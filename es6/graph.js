'use strict';

const Edge = require('./graph/edge'),
      Vertex = require('./graph/vertex'),
      arrayUtil = require('./util/array');

class Graph {
  constructor (topologicallySortedVertices, remainingEdges, edges) {
    this.topologicallySortedVertices = topologicallySortedVertices;
    this.remainingEdges = remainingEdges;
    this.edges = edges;
  }

  getTopologicallySortedVertices() {
    return this.topologicallySortedVertices;
  }

  getRemainingEdges() {
    return this.remainingEdges;
  }
  
  getEdges() {
    return this.edges;
  }
  
  areCyclesPresent() {
    const remainingEdgesLength = this.remainingEdges.length,
          cyclesPresent = (remainingEdgesLength !== 0);
    
    return cyclesPresent;
  }

  static fromVertexLiterals(vertexLiterals) {
    const vertexMap = vertexMapFromVertexLiterals(vertexLiterals),
          edges = edgesFromVertexLiteralsAndVertexMap(vertexLiterals, vertexMap),
          topologicallySortedVertices = topologicallySortedVerticesFromVertexMapAndEdges(vertexMap, edges),
          remainingEdges = edges, ///
          graph = new Graph(topologicallySortedVertices, remainingEdges, edges);

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

function topologicallySortedVerticesFromVertexMapAndEdges(vertexMap, edges) {
  let topologicallySortedVertices = [];

  const startingVertices = startingVerticesFromVertexMap(vertexMap),
        removedEdges = [];

  let startingVerticesLength = startingVertices.length;

  while (startingVerticesLength > 0) {
    const startingVertex = startingVertices.pop(),
          topologicallySortedVertex = startingVertex;  ///

    topologicallySortedVertices.push(topologicallySortedVertex);

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
            incomingEdge = removedEdge, ///
            edge = removedEdge; ///
      
      targetVertex.addIncomingEdge(incomingEdge);
      
      edges.push(edge);
    })
  }

  return topologicallySortedVertices;
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
