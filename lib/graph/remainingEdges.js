'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RemainingEdges = function () {
  function RemainingEdges(edges) {
    _classCallCheck(this, RemainingEdges);

    this.edges = edges;
  }

  _createClass(RemainingEdges, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9yZW1haW5pbmdFZGdlcy5qcyJdLCJuYW1lcyI6WyJSZW1haW5pbmdFZGdlcyIsImVkZ2VzIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZWRnZSIsInNvdXJjZVZlcnRleCIsImdldFNvdXJjZVZlcnRleCIsInRhcmdldFZlcnRleCIsImdldFRhcmdldFZlcnRleCIsInNvdXJjZVZlcnRleE5hbWUiLCJnZXROYW1lIiwidGFyZ2V0VmVydGV4TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsYztBQUNKLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzZDQUV3QkMsUSxFQUFVO0FBQ2pDLFdBQUtELEtBQUwsQ0FBV0UsT0FBWCxDQUFtQixVQUFTQyxJQUFULEVBQWU7QUFDaEMsWUFBTUMsZUFBZUQsS0FBS0UsZUFBTCxFQUFyQjtBQUFBLFlBQ01DLGVBQWVILEtBQUtJLGVBQUwsRUFEckI7QUFBQSxZQUVNQyxtQkFBbUJKLGFBQWFLLE9BQWIsRUFGekI7QUFBQSxZQUdNQyxtQkFBbUJKLGFBQWFHLE9BQWIsRUFIekI7O0FBS0FSLGlCQUFTTyxnQkFBVCxFQUEyQkUsZ0JBQTNCO0FBQ0QsT0FQRDtBQVFEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmIsY0FBakIiLCJmaWxlIjoicmVtYWluaW5nRWRnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlbWFpbmluZ0VkZ2VzIHtcbiAgY29uc3RydWN0b3IoZWRnZXMpIHtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBmb3JFYWNoRWRnZUJ5VmVydGV4TmFtZXMoY2FsbGJhY2spIHtcbiAgICB0aGlzLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24oZWRnZSkge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXgoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4KCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSB0YXJnZXRWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICBjYWxsYmFjayhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbWFpbmluZ0VkZ2VzO1xuIl19