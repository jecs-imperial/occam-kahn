'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RemainingEdges = function () {
  function RemainingEdges(edges) {
    _classCallCheck(this, RemainingEdges);

    this.edges = edges;
  }

  _createClass(RemainingEdges, [{
    key: 'areCyclesPresent',
    value: function areCyclesPresent() {
      var edgesLength = this.edges.length,
          cyclesPresent = edgesLength !== 0;

      return cyclesPresent;
    }
  }, {
    key: 'forEachEdgeByVertexNames',
    value: function forEachEdgeByVertexNames(callback) {
      this.edges.forEach(function (edge) {
        var sourceVertex = edge.getSourceVertex(),
            targetVertex = edge.getTargetVertex(),
            sourceVertexName = sourceVertex.getName(),
            targetVertexName = targetVertex.getName();

        callback(sourceVertexName, targetVertexName);
      });
    }
  }]);

  return RemainingEdges;
}();

module.exports = RemainingEdges;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9yZW1haW5pbmdFZGdlcy5qcyJdLCJuYW1lcyI6WyJSZW1haW5pbmdFZGdlcyIsImVkZ2VzIiwiZWRnZXNMZW5ndGgiLCJsZW5ndGgiLCJjeWNsZXNQcmVzZW50IiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZWRnZSIsInNvdXJjZVZlcnRleCIsImdldFNvdXJjZVZlcnRleCIsInRhcmdldFZlcnRleCIsImdldFRhcmdldFZlcnRleCIsInNvdXJjZVZlcnRleE5hbWUiLCJnZXROYW1lIiwidGFyZ2V0VmVydGV4TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsYztBQUNKLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7O3VDQUVrQjtBQUNqQixVQUFNQyxjQUFjLEtBQUtELEtBQUwsQ0FBV0UsTUFBL0I7QUFBQSxVQUNNQyxnQkFBaUJGLGdCQUFnQixDQUR2Qzs7QUFHQSxhQUFPRSxhQUFQO0FBQ0Q7Ozs2Q0FFd0JDLFEsRUFBVTtBQUNqQyxXQUFLSixLQUFMLENBQVdLLE9BQVgsQ0FBbUIsVUFBU0MsSUFBVCxFQUFlO0FBQ2hDLFlBQU1DLGVBQWVELEtBQUtFLGVBQUwsRUFBckI7QUFBQSxZQUNNQyxlQUFlSCxLQUFLSSxlQUFMLEVBRHJCO0FBQUEsWUFFTUMsbUJBQW1CSixhQUFhSyxPQUFiLEVBRnpCO0FBQUEsWUFHTUMsbUJBQW1CSixhQUFhRyxPQUFiLEVBSHpCOztBQUtBUixpQkFBU08sZ0JBQVQsRUFBMkJFLGdCQUEzQjtBQUNELE9BUEQ7QUFRRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJoQixjQUFqQiIsImZpbGUiOiJyZW1haW5pbmdFZGdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVtYWluaW5nRWRnZXMge1xuICBjb25zdHJ1Y3RvcihlZGdlcykge1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgZWRnZXNMZW5ndGggPSB0aGlzLmVkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gKGVkZ2VzTGVuZ3RoICE9PSAwKTtcblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgZm9yRWFjaEVkZ2VCeVZlcnRleE5hbWVzKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IGVkZ2UuZ2V0U291cmNlVmVydGV4KCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSBlZGdlLmdldFRhcmdldFZlcnRleCgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgY2FsbGJhY2soc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZW1haW5pbmdFZGdlcztcbiJdfQ==