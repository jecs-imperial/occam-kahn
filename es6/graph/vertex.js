'use strict';

class Vertex {
  constructor(name, incomingEdges) {
    this.name = name;
    this.incomingEdges = incomingEdges;
  }

  getName() {
    return this.name;
  }
  
  isStarting() {
    const incomingEdgesLength = this.incomingEdges.length,
          starting = (incomingEdgesLength === 0);
    
    return starting;
  }

  addIncomingEdge(incomingEdge) {
    this.incomingEdges.push(incomingEdge);
  }
  
  removeIncomingEdge(incomingEdge) {
    const index = this.incomingEdges.indexOf(incomingEdge);
    
    this.incomingEdges.splice(index, 1);
  }

  static fromVertexName(vertexName) {
    const name = vertexName,  ///
          incomingEdges = [],
          vertex = new Vertex(name, incomingEdges);
    
    return vertex;
  }
}

module.exports = Vertex;
