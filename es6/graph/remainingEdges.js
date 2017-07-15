'use strict';

class RemainingEdges {
  constructor(edges) {
    this.edges = edges;
  }

  forEachEdgeByVertexNames(callback) {
    this.edges.forEach(function(edge) {
      const sourceVertex = edge.getSourceVertex(),
            targetVertex = edge.getTargetVertex(),
            sourceVertexName = sourceVertex.getName(),
            targetVertexName = targetVertex.getName();

      callback(sourceVertexName, targetVertexName);
    });
  }
}

module.exports = RemainingEdges;
