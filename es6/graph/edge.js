'use strict';

class Edge {
  constructor(sourceVertex, targetVertex) {
    this.sourceVertex = sourceVertex;
    this.targetVertex = targetVertex;
  }

  getSourceVertex() {
    return this.sourceVertex;
  }
  
  getTargetVertex() {
    return this.targetVertex;
  }
}

module.exports = Edge;
