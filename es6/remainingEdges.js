"use strict";

export default class RemainingEdges {
  constructor(edges) {
    this.edges = edges;
  }

  areCyclesPresent() {
    const edgesLength = this.edges.length,
          cyclesPresent = (edgesLength !== 0);

    return cyclesPresent;
  }

  forEachEdgeByVertexNames(callback) {
    this.edges.forEach(function(edge) {
      const sourceVertexName = edge.getSourceVertexName(),
            targetVertexName = edge.getTargetVertexName();

      callback(sourceVertexName, targetVertexName);
    });
  }
}
