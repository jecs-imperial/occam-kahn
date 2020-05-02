"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = RemainingEdges;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbWFpbmluZ0VkZ2VzLmpzIl0sIm5hbWVzIjpbIlJlbWFpbmluZ0VkZ2VzIiwiZWRnZXMiLCJlZGdlc0xlbmd0aCIsImxlbmd0aCIsImN5Y2xlc1ByZXNlbnQiLCJjYWxsYmFjayIsImZvckVhY2giLCJlZGdlIiwic291cmNlVmVydGV4TmFtZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGM7QUFDbkIsMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7dUNBRWtCO0FBQ2pCLFVBQU1DLFdBQVcsR0FBRyxLQUFLRCxLQUFMLENBQVdFLE1BQS9CO0FBQUEsVUFDTUMsYUFBYSxHQUFJRixXQUFXLEtBQUssQ0FEdkM7QUFHQSxhQUFPRSxhQUFQO0FBQ0Q7Ozs2Q0FFd0JDLFEsRUFBVTtBQUNqQyxXQUFLSixLQUFMLENBQVdLLE9BQVgsQ0FBbUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzNCLFlBQU1DLGdCQUFnQixHQUFHRCxJQUFJLENBQUNFLG1CQUFMLEVBQXpCO0FBQUEsWUFDTUMsZ0JBQWdCLEdBQUdILElBQUksQ0FBQ0ksbUJBQUwsRUFEekI7QUFHQU4sUUFBQUEsUUFBUSxDQUFDRyxnQkFBRCxFQUFtQkUsZ0JBQW5CLENBQVI7QUFDRCxPQUxEO0FBTUQiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVtYWluaW5nRWRnZXMge1xuICBjb25zdHJ1Y3RvcihlZGdlcykge1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgZWRnZXNMZW5ndGggPSB0aGlzLmVkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gKGVkZ2VzTGVuZ3RoICE9PSAwKTtcblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgZm9yRWFjaEVkZ2VCeVZlcnRleE5hbWVzKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5lZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgIGNhbGxiYWNrKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=