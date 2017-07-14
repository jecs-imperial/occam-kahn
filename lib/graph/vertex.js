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
    key: 'getIncomingEdges',
    value: function getIncomingEdges() {
      return this.incomingEdges;
    }
  }, {
    key: 'getOutgoingEdges',
    value: function getOutgoingEdges() {
      return this.outgoingEdges;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC92ZXJ0ZXguanMiXSwibmFtZXMiOlsiVmVydGV4IiwibmFtZSIsImluY29taW5nRWRnZXMiLCJvdXRnb2luZ0VkZ2VzIiwiaW5jb21pbmdFZGdlc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0aW5nIiwiaW5jb21pbmdFZGdlIiwicHVzaCIsIm91dGdvaW5nRWRnZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE07QUFDSixrQkFBWUMsSUFBWixFQUFrQkMsYUFBbEIsRUFBaUNDLGFBQWpDLEVBQWdEO0FBQUE7O0FBQzlDLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7dUNBRWtCO0FBQ2pCLGFBQU8sS0FBS0MsYUFBWjtBQUNEOzs7dUNBRWtCO0FBQ2pCLGFBQU8sS0FBS0MsYUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNQyxzQkFBc0IsS0FBS0YsYUFBTCxDQUFtQkcsTUFBL0M7QUFBQSxVQUNNQyxXQUFZRix3QkFBd0IsQ0FEMUMsQ0FEVyxDQUVtQzs7QUFFOUMsYUFBT0UsUUFBUDtBQUNEOzs7b0NBRWVDLFksRUFBYztBQUM1QixXQUFLTCxhQUFMLENBQW1CTSxJQUFuQixDQUF3QkQsWUFBeEI7QUFDRDs7O29DQUVlRSxZLEVBQWM7QUFDNUIsV0FBS04sYUFBTCxDQUFtQkssSUFBbkIsQ0FBd0JDLFlBQXhCO0FBQ0Q7Ozt1Q0FFa0JGLFksRUFBYztBQUMvQixVQUFNRyxRQUFRLEtBQUtSLGFBQUwsQ0FBbUJTLE9BQW5CLENBQTJCSixZQUEzQixDQUFkOztBQUVBLFdBQUtMLGFBQUwsQ0FBbUJVLE1BQW5CLENBQTBCRixLQUExQixFQUFpQyxDQUFqQztBQUNEOzs7bUNBRXFCRyxVLEVBQVk7QUFDaEMsVUFBTVosT0FBT1ksVUFBYjtBQUFBLFVBQTBCO0FBQ3BCWCxzQkFBZ0IsRUFEdEI7QUFBQSxVQUVNQyxnQkFBZ0IsRUFGdEI7QUFBQSxVQUdNVyxTQUFTLElBQUlkLE1BQUosQ0FBV0MsSUFBWCxFQUFpQkMsYUFBakIsRUFBZ0NDLGFBQWhDLENBSGY7O0FBS0EsYUFBT1csTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmhCLE1BQWpCIiwiZmlsZSI6InZlcnRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5jb21pbmdFZGdlcywgb3V0Z29pbmdFZGdlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzID0gaW5jb21pbmdFZGdlcztcbiAgICB0aGlzLm91dGdvaW5nRWRnZXMgPSBvdXRnb2luZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SW5jb21pbmdFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNvbWluZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0T3V0Z29pbmdFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRnb2luZ0VkZ2VzO1xuICB9XG4gIFxuICBpc1N0YXJ0aW5nKCkge1xuICAgIGNvbnN0IGluY29taW5nRWRnZXNMZW5ndGggPSB0aGlzLmluY29taW5nRWRnZXMubGVuZ3RoLFxuICAgICAgICAgIHN0YXJ0aW5nID0gKGluY29taW5nRWRnZXNMZW5ndGggPT09IDApOyAvLy9cbiAgICBcbiAgICByZXR1cm4gc3RhcnRpbmc7XG4gIH1cbiAgXG4gIGFkZEluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpIHtcbiAgICB0aGlzLmluY29taW5nRWRnZXMucHVzaChpbmNvbWluZ0VkZ2UpO1xuICB9XG5cbiAgYWRkT3V0Z29pbmdFZGdlKG91dGdvaW5nRWRnZSkge1xuICAgIHRoaXMub3V0Z29pbmdFZGdlcy5wdXNoKG91dGdvaW5nRWRnZSk7XG4gIH1cblxuICByZW1vdmVJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmluY29taW5nRWRnZXMuaW5kZXhPZihpbmNvbWluZ0VkZ2UpO1xuICAgIFxuICAgIHRoaXMuaW5jb21pbmdFZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIGluY29taW5nRWRnZXMgPSBbXSxcbiAgICAgICAgICBvdXRnb2luZ0VkZ2VzID0gW10sXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChuYW1lLCBpbmNvbWluZ0VkZ2VzLCBvdXRnb2luZ0VkZ2VzKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGV4O1xuIl19