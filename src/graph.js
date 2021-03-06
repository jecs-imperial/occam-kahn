"use strict";

import { arrayUtilities } from "necessary";

import Edge from "./edge";
import Vertex from "./vertex";
import RemainingEdges from "./remainingEdges";

const { first, second, backwardsForEach } = arrayUtilities;

export default class Graph {
  constructor(orderedVertices, remainingEdges) {
    this.orderedVertices = orderedVertices;
    this.remainingEdges = remainingEdges;
  }

  getOrderedVertices() {
    return this.orderedVertices;
  }

  getRemainingEdges() {
    return this.remainingEdges;
  }

  areCyclesPresent() { return this.remainingEdges.areCyclesPresent(); }

  static fromVertexLiterals(vertexLiterals) {
    const vertexMap = vertexMapFromVertexLiterals(vertexLiterals),
          edges = edgesFromVertexLiteralsAndVertexMap(vertexLiterals, vertexMap),
          orderedVertices = orderedVerticesFromVertexMapAndEdges(vertexMap, edges),
          remainingEdges = new RemainingEdges(edges),
          graph = new Graph(orderedVertices, remainingEdges);

    return graph;
  }

  static fromVertexNamesAndEdges(vertexNames, edges) {
    edges = edges.slice();  ///

    const vertexMap = vertexMapFromVertexNamesAndEdges(vertexNames, edges),
          orderedVertices = orderedVerticesFromVertexMapAndEdges(vertexMap, edges),
          remainingEdges = new RemainingEdges(edges),
          graph = new Graph(orderedVertices, remainingEdges);

    return graph;
  }
}

function vertexMapFromVertexNamesAndEdges(vertexNames, edges) {
  const vertexMap = {};

  vertexNames.forEach((vertexName) => {
    const vertexExists = vertexMap.hasOwnProperty(vertexName);

    if (!vertexExists) {
      const vertex = Vertex.fromVertexName(vertexName);

      vertexMap[vertexName] = vertex;
    }
  });

  edges.forEach((edge) => {
    const sourceVertexName = edge.getSourceVertexName(),
          targetVertexName = edge.getTargetVertexName(),
          sourceVertexExists = vertexMap.hasOwnProperty(sourceVertexName),
          targetVertexExists = vertexMap.hasOwnProperty(targetVertexName);

    if (!sourceVertexExists) {
      const sourceVertex = Vertex.fromVertexName(sourceVertexName);

      vertexMap[sourceVertexName] = sourceVertex;
    }

    if (!targetVertexExists) {
      const targetVertex = Vertex.fromVertexName(targetVertexName);

      vertexMap[targetVertexName] = targetVertex;
    }

    const sourceVertex = vertexMap[sourceVertexName],
          targetVertex = vertexMap[targetVertexName],
          incomingEdge = edge,  ///
          outgoingEdge = edge;  ///

    sourceVertex.addOutgoingEdge(outgoingEdge);

    targetVertex.addIncomingEdge(incomingEdge);
  });

  return vertexMap;
}

function vertexMapFromVertexLiterals(vertexLiterals) {
  const vertexMap = {};

  vertexLiterals.forEach((vertexLiteral) => {
    const firstVertexLiteralElement = first(vertexLiteral),
          vertexName = firstVertexLiteralElement, ///
          vertexExists = vertexMap.hasOwnProperty(vertexName);

    if (!vertexExists) {
      const vertex = Vertex.fromVertexName(vertexName);

      vertexMap[vertexName] = vertex;
    }

    const secondVertexLiteralElement = second(vertexLiteral),
          ancestorVertexNames = secondVertexLiteralElement; ///

    ancestorVertexNames.forEach((ancestorVertexName) => {
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

  vertexLiterals.forEach((vertexLiteral) => {
    const firstVertexLiteralElement = first(vertexLiteral),
          secondVertexLiteralElement = second(vertexLiteral),
          ancestorVertexNames = secondVertexLiteralElement, ///
          vertexName = firstVertexLiteralElement; ///

    ancestorVertexNames.forEach((ancestorVertexName) => {
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

function orderedVerticesFromVertexMapAndEdges(vertexMap, edges) {
  const orderedVertexNames = [],
        startingVertexNames = startingVertexNamesFromVertexMap(vertexMap),
        removedEdges = [];

  let startingVertexNamesLength = startingVertexNames.length;

  while (startingVertexNamesLength > 0) {
    const startingVertexName = startingVertexNames.pop(),
          orderedVertexName = startingVertexName;  ///

    orderedVertexNames.push(orderedVertexName);

    backwardsForEach(edges, (edge, index) => {
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
    removedEdges.forEach((removedEdge) => {
      const targetVertexName = removedEdge.getTargetVertexName(),
            targetVertex = vertexMap[targetVertexName],
            incomingEdge = removedEdge; ///
      
      targetVertex.addIncomingEdge(incomingEdge);
    })
  }

  const orderedVertices = orderedVertexNames.map((orderedVertexName) => vertexMap[orderedVertexName]);

  return orderedVertices;
}

function startingVertexNamesFromVertexMap(vertexMap) {
  const vertexNames = Object.keys(vertexMap),
        startingVertexNames = vertexNames.reduce((startingVertexNames, vertexName) => {
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
