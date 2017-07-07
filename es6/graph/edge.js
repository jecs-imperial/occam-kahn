'use strict';

class Edge {
  constructor(firstVertex, lastVertex) {
    this.firstVertex = firstVertex;
    this.lastVertex = lastVertex;
  }

  getFirstVertex() {
    return this.firstVertex;
  }
  
  getLastVertex() {
    return this.lastVertex;
  }
}

module.exports = Edge;
