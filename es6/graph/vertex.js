'use strict';

class Vertex {
  constructor(name, incomingEdges, outgoingEdges) {
    this.name = name;
    this.incomingEdges = incomingEdges;
    this.outgoingEdges = outgoingEdges;
  }

  getName() {
    return this.name;
  }

  getIncomingEdges() {
    return this.incomingEdges;
  }

  getOutgoingEdges() {
    return this.outgoingEdges;
  }
  
  isStarting() {
    const incomingEdgesLength = this.incomingEdges.length,
          starting = (incomingEdgesLength === 0); ///
    
    return starting;
  }
  
  addIncomingEdge(incomingEdge) {
    this.incomingEdges.push(incomingEdge);
  }

  addOutgoingEdge(outgoingEdge) {
    this.outgoingEdges.push(outgoingEdge);
  }

  removeIncomingEdge(incomingEdge) {
    const index = this.incomingEdges.indexOf(incomingEdge);
    
    this.incomingEdges.splice(index, 1);
  }

  forEachIncomingEdge(callback) {
    this.incomingEdges.forEach(callback);
  }

  forEachOutgoingEdge(callback) {
    this.outgoingEdges.forEach(callback);
  }

  static fromVertexName(vertexName) {
    const name = vertexName,  ///
          incomingEdges = [],
          outgoingEdges = [],
          vertex = new Vertex(name, incomingEdges, outgoingEdges);
    
    return vertex;
  }
}

module.exports = Vertex;
