'use strict';

const arrayUtil = require('../util/array');

class Vertex {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  static fromVertexLiteral(vertexLiteral) {
    const firstVertexLiteralElement = arrayUtil.first(vertexLiteral),
        secondVertexLiteralElement = arrayUtil.second(vertexLiteral),
        name = firstVertexLiteralElement, ///
        descendantVertexNames = secondVertexLiteralElement; ///
  }
}

module.exports = Vertex;
