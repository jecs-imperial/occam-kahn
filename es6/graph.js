'use strict';

const Vertex = require('./graph/vertex');

class Graph {
  constructor (vertices) {
    this.vertices = vertices;
  }

  getVertices() {
    return this.vertices;
  }

  static fromVertexLiterals(vertexLiterals) {
    const vertices = vertexLiterals.map(function(vertexMap, vertexLiteral) {
            const vertex = Vertex.fromVertexLiteral(vertexLiteral);         
            
            return vertex;
          }),
          graph = new Graph(vertices);
    
    return graph;
  }
}

module.exports = Graph;
