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

  static fromVertexNamesAndEdges(vertexNames, edges) {
    const vertexMap = vertexMapFromVertexNames(vertexNames),
          topologicallyOrderedVertices = topologicallyOrderedVerticesFromVertexMapAndEdges(vertexMap, edges),
          remainingEdges = new RemainingEdges(edges),
          graph = new Graph(topologicallyOrderedVertices, remainingEdges);

    return graph;
  }

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

function vertexMapFromVertexNames(vertexNames) {
  const vertexMap = {};

  vertexNames.forEach(function(vertexName) {
    const vertexExists = vertexMap.hasOwnProperty(vertexName);

    if (!vertexExists) {
      const vertex = Vertex.fromVertexName(vertexName);

      vertexMap[vertexName] = vertex;
    }
  });

  return vertexMap;
}

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
          vertexName = firstVertexLiteralElement; ///

    ancestorVertexNames.forEach(function(ancestorVertexName) {
      const sourceVertexName = ancestorVertexName, ///
            targetVertexName = vertexName,  ///
            sourceVertex = vertexMap[sourceVertexName],
            targetVertex = vertexMap[targetVertexName],
            edge = new Edge(sourceVertexName, targetVertexName),
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
  const topologicallyOrderedVertexNames = [],
        startingVertexNames = startingVertexNamesFromVertexMap(vertexMap),
        removedEdges = [];

  let startingVertexNamesLength = startingVertexNames.length;

  while (startingVertexNamesLength > 0) {
    const startingVertexName = startingVertexNames.pop(),
          topologicallyOrderedVertexName = startingVertexName;  ///

    topologicallyOrderedVertexNames.push(topologicallyOrderedVertexName);

    arrayUtil.backwardsForEach(edges, function(edge, index) {
      const sourceVertexName = edge.getSourceVertexName(),
            edgeStarting = (sourceVertexName === startingVertexName); ///

      if (edgeStarting) {
        edges.splice(index, 1);

        const targetVertexName = edge.getTargetVertexName(),
              targetVertex = vertexMap[targetVertexName],
              incomingEdge = edge, ///
              removedEdge = edge;  ///

        targetVertex.removeIncomingEdge(incomingEdge);

        removedEdges.push(removedEdge);

        const targetVertexStarting = targetVertex.isStarting();

        if (targetVertexStarting) {
          const startingVertexName = targetVertexName;  ///

          startingVertexNames.push(startingVertexName);
        }
      }
    });

    startingVertexNamesLength = startingVertexNames.length;
  }

  const edgesLength = edges.length;

  if (edgesLength === 0) {
    removedEdges.forEach(function(removedEdge) {
      const targetVertexName = removedEdge.getTargetVertexName(),
            targetVertex = vertexMap[targetVertexName],
            incomingEdge = removedEdge; ///
      
      targetVertex.addIncomingEdge(incomingEdge);
    })
  }

  const topologicallySortedVertices = topologicallyOrderedVertexNames.map(function(topologicallyOrderedVertexName) {
    const topologicallyOrderedVertex = vertexMap[topologicallyOrderedVertexName];

    return topologicallyOrderedVertex;
  });

  return topologicallySortedVertices;
}

function startingVertexNamesFromVertexMap(vertexMap) {
  const vertexNames = Object.keys(vertexMap),
        startingVertexNames = vertexNames.reduce(function(startingVertexNames, vertexName) {
          const vertex = vertexMap[vertexName],
                vertexStarting = vertex.isStarting();

          if (vertexStarting) {
            const startingVertexName = vertexName;  ///

            startingVertexNames.push(startingVertexName);
          }

          return startingVertexNames
        }, []);

  return startingVertexNames;
}
