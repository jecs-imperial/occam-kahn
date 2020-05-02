"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vertex = /*#__PURE__*/function () {
  function Vertex(name, incomingEdges, outgoingEdges) {
    _classCallCheck(this, Vertex);

    this.name = name;
    this.incomingEdges = incomingEdges;
    this.outgoingEdges = outgoingEdges;
  }

  _createClass(Vertex, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getIncomingEdges",
    value: function getIncomingEdges() {
      return this.incomingEdges;
    }
  }, {
    key: "getOutgoingEdges",
    value: function getOutgoingEdges() {
      return this.outgoingEdges;
    }
  }, {
    key: "isStarting",
    value: function isStarting() {
      var incomingEdgesLength = this.incomingEdges.length,
          starting = incomingEdgesLength === 0; ///

      return starting;
    }
  }, {
    key: "addIncomingEdge",
    value: function addIncomingEdge(incomingEdge) {
      this.incomingEdges.push(incomingEdge);
    }
  }, {
    key: "addOutgoingEdge",
    value: function addOutgoingEdge(outgoingEdge) {
      this.outgoingEdges.push(outgoingEdge);
    }
  }, {
    key: "removeIncomingEdge",
    value: function removeIncomingEdge(incomingEdge) {
      var index = this.incomingEdges.indexOf(incomingEdge);
      this.incomingEdges.splice(index, 1);
    }
  }, {
    key: "forEachIncomingEdge",
    value: function forEachIncomingEdge(callback) {
      this.incomingEdges.forEach(callback);
    }
  }, {
    key: "forEachOutgoingEdge",
    value: function forEachOutgoingEdge(callback) {
      this.outgoingEdges.forEach(callback);
    }
  }], [{
    key: "fromVertexName",
    value: function fromVertexName(vertexName) {
      var name = vertexName,
          ///
      incomingEdges = [],
          outgoingEdges = [],
          vertex = new Vertex(name, incomingEdges, outgoingEdges);
      return vertex;
    }
  }]);

  return Vertex;
}();

module.exports = Vertex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRleC5qcyJdLCJuYW1lcyI6WyJWZXJ0ZXgiLCJuYW1lIiwiaW5jb21pbmdFZGdlcyIsIm91dGdvaW5nRWRnZXMiLCJpbmNvbWluZ0VkZ2VzTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnRpbmciLCJpbmNvbWluZ0VkZ2UiLCJwdXNoIiwib3V0Z29pbmdFZGdlIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwidmVydGV4TmFtZSIsInZlcnRleCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztJQUVNQSxNO0FBQ0osa0JBQVlDLElBQVosRUFBa0JDLGFBQWxCLEVBQWlDQyxhQUFqQyxFQUFnRDtBQUFBOztBQUM5QyxTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtGLElBQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixhQUFPLEtBQUtDLGFBQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixhQUFPLEtBQUtDLGFBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUMsbUJBQW1CLEdBQUcsS0FBS0YsYUFBTCxDQUFtQkcsTUFBL0M7QUFBQSxVQUNNQyxRQUFRLEdBQUlGLG1CQUFtQixLQUFLLENBRDFDLENBRFcsQ0FFbUM7O0FBRTlDLGFBQU9FLFFBQVA7QUFDRDs7O29DQUVlQyxZLEVBQWM7QUFDNUIsV0FBS0wsYUFBTCxDQUFtQk0sSUFBbkIsQ0FBd0JELFlBQXhCO0FBQ0Q7OztvQ0FFZUUsWSxFQUFjO0FBQzVCLFdBQUtOLGFBQUwsQ0FBbUJLLElBQW5CLENBQXdCQyxZQUF4QjtBQUNEOzs7dUNBRWtCRixZLEVBQWM7QUFDL0IsVUFBTUcsS0FBSyxHQUFHLEtBQUtSLGFBQUwsQ0FBbUJTLE9BQW5CLENBQTJCSixZQUEzQixDQUFkO0FBRUEsV0FBS0wsYUFBTCxDQUFtQlUsTUFBbkIsQ0FBMEJGLEtBQTFCLEVBQWlDLENBQWpDO0FBQ0Q7Ozt3Q0FFbUJHLFEsRUFBVTtBQUM1QixXQUFLWCxhQUFMLENBQW1CWSxPQUFuQixDQUEyQkQsUUFBM0I7QUFDRDs7O3dDQUVtQkEsUSxFQUFVO0FBQzVCLFdBQUtWLGFBQUwsQ0FBbUJXLE9BQW5CLENBQTJCRCxRQUEzQjtBQUNEOzs7bUNBRXFCRSxVLEVBQVk7QUFDaEMsVUFBTWQsSUFBSSxHQUFHYyxVQUFiO0FBQUEsVUFBMEI7QUFDcEJiLE1BQUFBLGFBQWEsR0FBRyxFQUR0QjtBQUFBLFVBRU1DLGFBQWEsR0FBRyxFQUZ0QjtBQUFBLFVBR01hLE1BQU0sR0FBRyxJQUFJaEIsTUFBSixDQUFXQyxJQUFYLEVBQWlCQyxhQUFqQixFQUFnQ0MsYUFBaEMsQ0FIZjtBQUtBLGFBQU9hLE1BQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxCLE1BQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGluY29taW5nRWRnZXMsIG91dGdvaW5nRWRnZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5jb21pbmdFZGdlcyA9IGluY29taW5nRWRnZXM7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzID0gb3V0Z29pbmdFZGdlcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEluY29taW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jb21pbmdFZGdlcztcbiAgfVxuXG4gIGdldE91dGdvaW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3V0Z29pbmdFZGdlcztcbiAgfVxuICBcbiAgaXNTdGFydGluZygpIHtcbiAgICBjb25zdCBpbmNvbWluZ0VkZ2VzTGVuZ3RoID0gdGhpcy5pbmNvbWluZ0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBzdGFydGluZyA9IChpbmNvbWluZ0VkZ2VzTGVuZ3RoID09PSAwKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHN0YXJ0aW5nO1xuICB9XG4gIFxuICBhZGRJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKSB7XG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzLnB1c2goaW5jb21pbmdFZGdlKTtcbiAgfVxuXG4gIGFkZE91dGdvaW5nRWRnZShvdXRnb2luZ0VkZ2UpIHtcbiAgICB0aGlzLm91dGdvaW5nRWRnZXMucHVzaChvdXRnb2luZ0VkZ2UpO1xuICB9XG5cbiAgcmVtb3ZlSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmNvbWluZ0VkZ2VzLmluZGV4T2YoaW5jb21pbmdFZGdlKTtcbiAgICBcbiAgICB0aGlzLmluY29taW5nRWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGZvckVhY2hJbmNvbWluZ0VkZ2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLmluY29taW5nRWRnZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoT3V0Z29pbmdFZGdlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIGluY29taW5nRWRnZXMgPSBbXSxcbiAgICAgICAgICBvdXRnb2luZ0VkZ2VzID0gW10sXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChuYW1lLCBpbmNvbWluZ0VkZ2VzLCBvdXRnb2luZ0VkZ2VzKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGV4O1xuIl19