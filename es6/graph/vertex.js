'use strict';

class Vertex {
  constructor(name, incomingEdges, outgoingEdges, ancestorVertices) {
    this.name = name;
    this.incomingEdges = incomingEdges;
    this.outgoingEdges = outgoingEdges;
    this.ancestorVertices = ancestorVertices;
  }

  getName() {
    return this.name;
  }

  getAncestorVertices() {
    return this.ancestorVertices;
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
  
  addAncestorVertex(ancestorVertex) {
    const index = this.ancestorVertices.indexOf(ancestorVertex);

    if (index === -1) {
      this.ancestorVertices.push(ancestorVertex);
    }
  }

  addAncestorVertices(ancestorVertices) {
    ancestorVertices.forEach(function(ancestorVertex) {
      this.addAncestorVertex(ancestorVertex);
    }.bind(this));
  }

  removeIncomingEdge(incomingEdge) {
    const index = this.incomingEdges.indexOf(incomingEdge);
    
    this.incomingEdges.splice(index, 1);
  }

  forEachOutgoingEdge(callback) {
    this.outgoingEdges.forEach(callback);
  }

  static fromVertexName(vertexName) {
    const name = vertexName,  ///
          incomingEdges = [],
          outgoingEdges = [],
          ancestorVertices = [],  ///
          vertex = new Vertex(name, incomingEdges, outgoingEdges, ancestorVertices);
    
    return vertex;
  }
}

module.exports = Vertex;
