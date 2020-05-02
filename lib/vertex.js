"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = Vertex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRleC5qcyJdLCJuYW1lcyI6WyJWZXJ0ZXgiLCJuYW1lIiwiaW5jb21pbmdFZGdlcyIsIm91dGdvaW5nRWRnZXMiLCJpbmNvbWluZ0VkZ2VzTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnRpbmciLCJpbmNvbWluZ0VkZ2UiLCJwdXNoIiwib3V0Z29pbmdFZGdlIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwidmVydGV4TmFtZSIsInZlcnRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE07QUFDbkIsa0JBQVlDLElBQVosRUFBa0JDLGFBQWxCLEVBQWlDQyxhQUFqQyxFQUFnRDtBQUFBOztBQUM5QyxTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtGLElBQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixhQUFPLEtBQUtDLGFBQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixhQUFPLEtBQUtDLGFBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUMsbUJBQW1CLEdBQUcsS0FBS0YsYUFBTCxDQUFtQkcsTUFBL0M7QUFBQSxVQUNNQyxRQUFRLEdBQUlGLG1CQUFtQixLQUFLLENBRDFDLENBRFcsQ0FFbUM7O0FBRTlDLGFBQU9FLFFBQVA7QUFDRDs7O29DQUVlQyxZLEVBQWM7QUFDNUIsV0FBS0wsYUFBTCxDQUFtQk0sSUFBbkIsQ0FBd0JELFlBQXhCO0FBQ0Q7OztvQ0FFZUUsWSxFQUFjO0FBQzVCLFdBQUtOLGFBQUwsQ0FBbUJLLElBQW5CLENBQXdCQyxZQUF4QjtBQUNEOzs7dUNBRWtCRixZLEVBQWM7QUFDL0IsVUFBTUcsS0FBSyxHQUFHLEtBQUtSLGFBQUwsQ0FBbUJTLE9BQW5CLENBQTJCSixZQUEzQixDQUFkO0FBRUEsV0FBS0wsYUFBTCxDQUFtQlUsTUFBbkIsQ0FBMEJGLEtBQTFCLEVBQWlDLENBQWpDO0FBQ0Q7Ozt3Q0FFbUJHLFEsRUFBVTtBQUM1QixXQUFLWCxhQUFMLENBQW1CWSxPQUFuQixDQUEyQkQsUUFBM0I7QUFDRDs7O3dDQUVtQkEsUSxFQUFVO0FBQzVCLFdBQUtWLGFBQUwsQ0FBbUJXLE9BQW5CLENBQTJCRCxRQUEzQjtBQUNEOzs7bUNBRXFCRSxVLEVBQVk7QUFDaEMsVUFBTWQsSUFBSSxHQUFHYyxVQUFiO0FBQUEsVUFBMEI7QUFDcEJiLE1BQUFBLGFBQWEsR0FBRyxFQUR0QjtBQUFBLFVBRU1DLGFBQWEsR0FBRyxFQUZ0QjtBQUFBLFVBR01hLE1BQU0sR0FBRyxJQUFJaEIsTUFBSixDQUFXQyxJQUFYLEVBQWlCQyxhQUFqQixFQUFnQ0MsYUFBaEMsQ0FIZjtBQUtBLGFBQU9hLE1BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbmNvbWluZ0VkZ2VzLCBvdXRnb2luZ0VkZ2VzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmluY29taW5nRWRnZXMgPSBpbmNvbWluZ0VkZ2VzO1xuICAgIHRoaXMub3V0Z29pbmdFZGdlcyA9IG91dGdvaW5nRWRnZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRJbmNvbWluZ0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmluY29taW5nRWRnZXM7XG4gIH1cblxuICBnZXRPdXRnb2luZ0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLm91dGdvaW5nRWRnZXM7XG4gIH1cbiAgXG4gIGlzU3RhcnRpbmcoKSB7XG4gICAgY29uc3QgaW5jb21pbmdFZGdlc0xlbmd0aCA9IHRoaXMuaW5jb21pbmdFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgc3RhcnRpbmcgPSAoaW5jb21pbmdFZGdlc0xlbmd0aCA9PT0gMCk7IC8vL1xuICAgIFxuICAgIHJldHVybiBzdGFydGluZztcbiAgfVxuICBcbiAgYWRkSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSkge1xuICAgIHRoaXMuaW5jb21pbmdFZGdlcy5wdXNoKGluY29taW5nRWRnZSk7XG4gIH1cblxuICBhZGRPdXRnb2luZ0VkZ2Uob3V0Z29pbmdFZGdlKSB7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzLnB1c2gob3V0Z29pbmdFZGdlKTtcbiAgfVxuXG4gIHJlbW92ZUluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5jb21pbmdFZGdlcy5pbmRleE9mKGluY29taW5nRWRnZSk7XG4gICAgXG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBmb3JFYWNoSW5jb21pbmdFZGdlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgZm9yRWFjaE91dGdvaW5nRWRnZShjYWxsYmFjaykge1xuICAgIHRoaXMub3V0Z29pbmdFZGdlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICBpbmNvbWluZ0VkZ2VzID0gW10sXG4gICAgICAgICAgb3V0Z29pbmdFZGdlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgobmFtZSwgaW5jb21pbmdFZGdlcywgb3V0Z29pbmdFZGdlcyk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuIl19