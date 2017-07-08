'use strict';

const arrayUtil = require('../util/array');

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
          starting = (incomingEdgesLength === 0);
    
    return starting;
  }

  forEachOutgoingEdge(callback) {
    this.outgoingEdges.forEach(callback);
  }

  addIncomingEdge(incomingEdge) {
    this.incomingEdges.push(incomingEdge);
  }

  addOutgoingEdge(outgoingEdge) {
    this.outgoingEdges.push(outgoingEdge);
  }
  
  addAncestorVertex(ancestorVertex) {
    this.ancestorVertices.push(ancestorVertex);
  }

  addAncestorVertices(ancestorVertices) {
    arrayUtil.push(this.ancestorVertices, ancestorVertices);
  }

  removeIncomingEdge(incomingEdge) {
    const index = this.incomingEdges.indexOf(incomingEdge);
    
    this.incomingEdges.splice(index, 1);
  }

  static fromVertexName(vertexName) {
    const name = vertexName,  ///
          incomingEdges = [],
          outgoingEdges = [],
          ancestorVertices = [],
          vertex = new Vertex(name, incomingEdges, outgoingEdges, ancestorVertices);
    
    return vertex;
  }
}

module.exports = Vertex;
