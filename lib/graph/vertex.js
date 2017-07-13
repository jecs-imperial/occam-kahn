'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vertex = function () {
  function Vertex(name, incomingEdges, outgoingEdges) {
    _classCallCheck(this, Vertex);

    this.name = name;
    this.incomingEdges = incomingEdges;
    this.outgoingEdges = outgoingEdges;
  }

  _createClass(Vertex, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'isStarting',
    value: function isStarting() {
      var incomingEdgesLength = this.incomingEdges.length,
          starting = incomingEdgesLength === 0; ///

      return starting;
    }
  }, {
    key: 'addIncomingEdge',
    value: function addIncomingEdge(incomingEdge) {
      this.incomingEdges.push(incomingEdge);
    }
  }, {
    key: 'addOutgoingEdge',
    value: function addOutgoingEdge(outgoingEdge) {
      this.outgoingEdges.push(outgoingEdge);
    }
  }, {
    key: 'removeIncomingEdge',
    value: function removeIncomingEdge(incomingEdge) {
      var index = this.incomingEdges.indexOf(incomingEdge);

      this.incomingEdges.splice(index, 1);
    }
  }, {
    key: 'forEachIncomingEdge',
    value: function forEachIncomingEdge(callback) {
      this.incomingEdges.forEach(callback);
    }
  }, {
    key: 'forEachOutgoingEdge',
    value: function forEachOutgoingEdge(callback) {
      this.outgoingEdges.forEach(callback);
    }
  }], [{
    key: 'fromVertexName',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC92ZXJ0ZXguanMiXSwibmFtZXMiOlsiVmVydGV4IiwibmFtZSIsImluY29taW5nRWRnZXMiLCJvdXRnb2luZ0VkZ2VzIiwiaW5jb21pbmdFZGdlc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0aW5nIiwiaW5jb21pbmdFZGdlIiwicHVzaCIsIm91dGdvaW5nRWRnZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImNhbGxiYWNrIiwiZm9yRWFjaCIsInZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE07QUFDSixrQkFBWUMsSUFBWixFQUFrQkMsYUFBbEIsRUFBaUNDLGFBQWpDLEVBQWdEO0FBQUE7O0FBQzlDLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNRyxzQkFBc0IsS0FBS0YsYUFBTCxDQUFtQkcsTUFBL0M7QUFBQSxVQUNNQyxXQUFZRix3QkFBd0IsQ0FEMUMsQ0FEVyxDQUVtQzs7QUFFOUMsYUFBT0UsUUFBUDtBQUNEOzs7b0NBRWVDLFksRUFBYztBQUM1QixXQUFLTCxhQUFMLENBQW1CTSxJQUFuQixDQUF3QkQsWUFBeEI7QUFDRDs7O29DQUVlRSxZLEVBQWM7QUFDNUIsV0FBS04sYUFBTCxDQUFtQkssSUFBbkIsQ0FBd0JDLFlBQXhCO0FBQ0Q7Ozt1Q0FFa0JGLFksRUFBYztBQUMvQixVQUFNRyxRQUFRLEtBQUtSLGFBQUwsQ0FBbUJTLE9BQW5CLENBQTJCSixZQUEzQixDQUFkOztBQUVBLFdBQUtMLGFBQUwsQ0FBbUJVLE1BQW5CLENBQTBCRixLQUExQixFQUFpQyxDQUFqQztBQUNEOzs7d0NBRW1CRyxRLEVBQVU7QUFDNUIsV0FBS1gsYUFBTCxDQUFtQlksT0FBbkIsQ0FBMkJELFFBQTNCO0FBQ0Q7Ozt3Q0FFbUJBLFEsRUFBVTtBQUM1QixXQUFLVixhQUFMLENBQW1CVyxPQUFuQixDQUEyQkQsUUFBM0I7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQ2hDLFVBQU1kLE9BQU9jLFVBQWI7QUFBQSxVQUEwQjtBQUNwQmIsc0JBQWdCLEVBRHRCO0FBQUEsVUFFTUMsZ0JBQWdCLEVBRnRCO0FBQUEsVUFHTWEsU0FBUyxJQUFJaEIsTUFBSixDQUFXQyxJQUFYLEVBQWlCQyxhQUFqQixFQUFnQ0MsYUFBaEMsQ0FIZjs7QUFLQSxhQUFPYSxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEIsTUFBakIiLCJmaWxlIjoidmVydGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbmNvbWluZ0VkZ2VzLCBvdXRnb2luZ0VkZ2VzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmluY29taW5nRWRnZXMgPSBpbmNvbWluZ0VkZ2VzO1xuICAgIHRoaXMub3V0Z29pbmdFZGdlcyA9IG91dGdvaW5nRWRnZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIGlzU3RhcnRpbmcoKSB7XG4gICAgY29uc3QgaW5jb21pbmdFZGdlc0xlbmd0aCA9IHRoaXMuaW5jb21pbmdFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgc3RhcnRpbmcgPSAoaW5jb21pbmdFZGdlc0xlbmd0aCA9PT0gMCk7IC8vL1xuICAgIFxuICAgIHJldHVybiBzdGFydGluZztcbiAgfVxuICBcbiAgYWRkSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSkge1xuICAgIHRoaXMuaW5jb21pbmdFZGdlcy5wdXNoKGluY29taW5nRWRnZSk7XG4gIH1cblxuICBhZGRPdXRnb2luZ0VkZ2Uob3V0Z29pbmdFZGdlKSB7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzLnB1c2gob3V0Z29pbmdFZGdlKTtcbiAgfVxuXG4gIHJlbW92ZUluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5jb21pbmdFZGdlcy5pbmRleE9mKGluY29taW5nRWRnZSk7XG4gICAgXG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBmb3JFYWNoSW5jb21pbmdFZGdlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgZm9yRWFjaE91dGdvaW5nRWRnZShjYWxsYmFjaykge1xuICAgIHRoaXMub3V0Z29pbmdFZGdlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICBpbmNvbWluZ0VkZ2VzID0gW10sXG4gICAgICAgICAgb3V0Z29pbmdFZGdlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgobmFtZSwgaW5jb21pbmdFZGdlcywgb3V0Z29pbmdFZGdlcyk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRleDtcbiJdfQ==