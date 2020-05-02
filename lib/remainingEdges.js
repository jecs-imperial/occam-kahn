"use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbWFpbmluZ0VkZ2VzLmpzIl0sIm5hbWVzIjpbIlJlbWFpbmluZ0VkZ2VzIiwiZWRnZXMiLCJlZGdlc0xlbmd0aCIsImxlbmd0aCIsImN5Y2xlc1ByZXNlbnQiLCJjYWxsYmFjayIsImZvckVhY2giLCJlZGdlIiwic291cmNlVmVydGV4TmFtZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztJQUVNQSxjO0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7dUNBRWtCO0FBQ2pCLFVBQU1DLFdBQVcsR0FBRyxLQUFLRCxLQUFMLENBQVdFLE1BQS9CO0FBQUEsVUFDTUMsYUFBYSxHQUFJRixXQUFXLEtBQUssQ0FEdkM7QUFHQSxhQUFPRSxhQUFQO0FBQ0Q7Ozs2Q0FFd0JDLFEsRUFBVTtBQUNqQyxXQUFLSixLQUFMLENBQVdLLE9BQVgsQ0FBbUIsVUFBU0MsSUFBVCxFQUFlO0FBQ2hDLFlBQU1DLGdCQUFnQixHQUFHRCxJQUFJLENBQUNFLG1CQUFMLEVBQXpCO0FBQUEsWUFDTUMsZ0JBQWdCLEdBQUdILElBQUksQ0FBQ0ksbUJBQUwsRUFEekI7QUFHQU4sUUFBQUEsUUFBUSxDQUFDRyxnQkFBRCxFQUFtQkUsZ0JBQW5CLENBQVI7QUFDRCxPQUxEO0FBTUQ7Ozs7OztBQUdIRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJiLGNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNsYXNzIFJlbWFpbmluZ0VkZ2VzIHtcbiAgY29uc3RydWN0b3IoZWRnZXMpIHtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkge1xuICAgIGNvbnN0IGVkZ2VzTGVuZ3RoID0gdGhpcy5lZGdlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IChlZGdlc0xlbmd0aCAhPT0gMCk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGZvckVhY2hFZGdlQnlWZXJ0ZXhOYW1lcyhjYWxsYmFjaykge1xuICAgIHRoaXMuZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgIGNhbGxiYWNrKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVtYWluaW5nRWRnZXM7XG4iXX0=