'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vertex = require('./graph/vertex');

var Graph = function () {
  function Graph(vertices) {
    _classCallCheck(this, Graph);

    this.vertices = vertices;
  }

  _createClass(Graph, [{
    key: 'getVertices',
    value: function getVertices() {
      return this.vertices;
    }
  }], [{
    key: 'fromVertexLiterals',
    value: function fromVertexLiterals(vertexLiterals) {
      var vertices = vertexLiterals.map(function (vertexMap, vertexLiteral) {
        var vertex = Vertex.fromVertexLiteral(vertexLiteral);

        return vertex;
      }),
          graph = new Graph(vertices);

      return graph;
    }
  }]);

  return Graph;
}();

module.exports = Graph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ncmFwaC5qcyJdLCJuYW1lcyI6WyJWZXJ0ZXgiLCJyZXF1aXJlIiwiR3JhcGgiLCJ2ZXJ0aWNlcyIsInZlcnRleExpdGVyYWxzIiwibWFwIiwidmVydGV4TWFwIiwidmVydGV4TGl0ZXJhbCIsInZlcnRleCIsImZyb21WZXJ0ZXhMaXRlcmFsIiwiZ3JhcGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxnQkFBUixDQUFmOztJQUVNQyxLO0FBQ0osaUJBQWFDLFFBQWIsRUFBdUI7QUFBQTs7QUFDckIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0EsUUFBWjtBQUNEOzs7dUNBRXlCQyxjLEVBQWdCO0FBQ3hDLFVBQU1ELFdBQVdDLGVBQWVDLEdBQWYsQ0FBbUIsVUFBU0MsU0FBVCxFQUFvQkMsYUFBcEIsRUFBbUM7QUFDL0QsWUFBTUMsU0FBU1IsT0FBT1MsaUJBQVAsQ0FBeUJGLGFBQXpCLENBQWY7O0FBRUEsZUFBT0MsTUFBUDtBQUNELE9BSlUsQ0FBakI7QUFBQSxVQUtNRSxRQUFRLElBQUlSLEtBQUosQ0FBVUMsUUFBVixDQUxkOztBQU9BLGFBQU9PLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJWLEtBQWpCIiwiZmlsZSI6ImdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWZXJ0ZXggPSByZXF1aXJlKCcuL2dyYXBoL3ZlcnRleCcpO1xuXG5jbGFzcyBHcmFwaCB7XG4gIGNvbnN0cnVjdG9yICh2ZXJ0aWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscykge1xuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGV4TGl0ZXJhbHMubWFwKGZ1bmN0aW9uKHZlcnRleE1hcCwgdmVydGV4TGl0ZXJhbCkge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21WZXJ0ZXhMaXRlcmFsKHZlcnRleExpdGVyYWwpOyAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGdyYXBoID0gbmV3IEdyYXBoKHZlcnRpY2VzKTtcbiAgICBcbiAgICByZXR1cm4gZ3JhcGg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcmFwaDtcbiJdfQ==