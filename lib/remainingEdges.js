'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RemainingEdges = /*#__PURE__*/function () {
  function RemainingEdges(edges) {
    _classCallCheck(this, RemainingEdges);

    this.edges = edges;
  }

  _createClass(RemainingEdges, [{
    key: "areCyclesPresent",
    value: function areCyclesPresent() {
      var edgesLength = this.edges.length,
          cyclesPresent = edgesLength !== 0;
      return cyclesPresent;
    }
  }, {
    key: "forEachEdgeByVertexNames",
    value: function forEachEdgeByVertexNames(callback) {
      this.edges.forEach(function (edge) {
        var sourceVertexName = edge.getSourceVertexName(),
            targetVertexName = edge.getTargetVertexName();
        callback(sourceVertexName, targetVertexName);
      });
    }
  }]);

  return RemainingEdges;
}();

module.exports = RemainingEdges;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbWFpbmluZ0VkZ2VzLmpzIl0sIm5hbWVzIjpbIlJlbWFpbmluZ0VkZ2VzIiwiZWRnZXMiLCJlZGdlc0xlbmd0aCIsImxlbmd0aCIsImN5Y2xlc1ByZXNlbnQiLCJjYWxsYmFjayIsImZvckVhY2giLCJlZGdlIiwic291cmNlVmVydGV4TmFtZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztJQUVNQSxjO0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7dUNBRWtCO0FBQ2pCLFVBQU1DLFdBQVcsR0FBRyxLQUFLRCxLQUFMLENBQVdFLE1BQS9CO0FBQUEsVUFDTUMsYUFBYSxHQUFJRixXQUFXLEtBQUssQ0FEdkM7QUFHQSxhQUFPRSxhQUFQO0FBQ0Q7Ozs2Q0FFd0JDLFEsRUFBVTtBQUNqQyxXQUFLSixLQUFMLENBQVdLLE9BQVgsQ0FBbUIsVUFBU0MsSUFBVCxFQUFlO0FBQ2hDLFlBQU1DLGdCQUFnQixHQUFHRCxJQUFJLENBQUNFLG1CQUFMLEVBQXpCO0FBQUEsWUFDTUMsZ0JBQWdCLEdBQUdILElBQUksQ0FBQ0ksbUJBQUwsRUFEekI7QUFHQU4sUUFBQUEsUUFBUSxDQUFDRyxnQkFBRCxFQUFtQkUsZ0JBQW5CLENBQVI7QUFDRCxPQUxEO0FBTUQ7Ozs7OztBQUdIRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJiLGNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZW1haW5pbmdFZGdlcyB7XG4gIGNvbnN0cnVjdG9yKGVkZ2VzKSB7XG4gICAgdGhpcy5lZGdlcyA9IGVkZ2VzO1xuICB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudCgpIHtcbiAgICBjb25zdCBlZGdlc0xlbmd0aCA9IHRoaXMuZWRnZXMubGVuZ3RoLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoZWRnZXNMZW5ndGggIT09IDApO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBmb3JFYWNoRWRnZUJ5VmVydGV4TmFtZXMoY2FsbGJhY2spIHtcbiAgICB0aGlzLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24oZWRnZSkge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICBjYWxsYmFjayhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbWFpbmluZ0VkZ2VzO1xuIl19