'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vertex = function () {
  function Vertex(name, incomingEdges, outgoingEdges, ancestorVertices) {
    _classCallCheck(this, Vertex);

    this.name = name;
    this.incomingEdges = incomingEdges;
    this.outgoingEdges = outgoingEdges;
    this.ancestorVertices = ancestorVertices;
  }

  _createClass(Vertex, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getAncestorVertices',
    value: function getAncestorVertices() {
      return this.ancestorVertices;
    }
  }, {
    key: 'isStarting',
    value: function isStarting() {
      var incomingEdgesLength = this.incomingEdges.length,
          starting = incomingEdgesLength === 0;

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
    key: 'addAncestorVertex',
    value: function addAncestorVertex(ancestorVertex) {
      this.ancestorVertices.push(ancestorVertex);
    }
  }, {
    key: 'removeIncomingEdge',
    value: function removeIncomingEdge(incomingEdge) {
      var index = this.incomingEdges.indexOf(incomingEdge);

      this.incomingEdges.splice(index, 1);
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
          ancestorVertices = [],
          vertex = new Vertex(name, incomingEdges, outgoingEdges, ancestorVertices);

      return vertex;
    }
  }]);

  return Vertex;
}();

module.exports = Vertex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC92ZXJ0ZXguanMiXSwibmFtZXMiOlsiVmVydGV4IiwibmFtZSIsImluY29taW5nRWRnZXMiLCJvdXRnb2luZ0VkZ2VzIiwiYW5jZXN0b3JWZXJ0aWNlcyIsImluY29taW5nRWRnZXNMZW5ndGgiLCJsZW5ndGgiLCJzdGFydGluZyIsImluY29taW5nRWRnZSIsInB1c2giLCJvdXRnb2luZ0VkZ2UiLCJhbmNlc3RvclZlcnRleCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImNhbGxiYWNrIiwiZm9yRWFjaCIsInZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE07QUFDSixrQkFBWUMsSUFBWixFQUFrQkMsYUFBbEIsRUFBaUNDLGFBQWpDLEVBQWdEQyxnQkFBaEQsRUFBa0U7QUFBQTs7QUFDaEUsU0FBS0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0gsSUFBWjtBQUNEOzs7MENBRXFCO0FBQ3BCLGFBQU8sS0FBS0csZ0JBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUMsc0JBQXNCLEtBQUtILGFBQUwsQ0FBbUJJLE1BQS9DO0FBQUEsVUFDTUMsV0FBWUYsd0JBQXdCLENBRDFDOztBQUdBLGFBQU9FLFFBQVA7QUFDRDs7O29DQUVlQyxZLEVBQWM7QUFDNUIsV0FBS04sYUFBTCxDQUFtQk8sSUFBbkIsQ0FBd0JELFlBQXhCO0FBQ0Q7OztvQ0FFZUUsWSxFQUFjO0FBQzVCLFdBQUtQLGFBQUwsQ0FBbUJNLElBQW5CLENBQXdCQyxZQUF4QjtBQUNEOzs7c0NBRWlCQyxjLEVBQWdCO0FBQ2hDLFdBQUtQLGdCQUFMLENBQXNCSyxJQUF0QixDQUEyQkUsY0FBM0I7QUFDRDs7O3VDQUVrQkgsWSxFQUFjO0FBQy9CLFVBQU1JLFFBQVEsS0FBS1YsYUFBTCxDQUFtQlcsT0FBbkIsQ0FBMkJMLFlBQTNCLENBQWQ7O0FBRUEsV0FBS04sYUFBTCxDQUFtQlksTUFBbkIsQ0FBMEJGLEtBQTFCLEVBQWlDLENBQWpDO0FBQ0Q7Ozt3Q0FFbUJHLFEsRUFBVTtBQUM1QixXQUFLWixhQUFMLENBQW1CYSxPQUFuQixDQUEyQkQsUUFBM0I7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQ2hDLFVBQU1oQixPQUFPZ0IsVUFBYjtBQUFBLFVBQTBCO0FBQ3BCZixzQkFBZ0IsRUFEdEI7QUFBQSxVQUVNQyxnQkFBZ0IsRUFGdEI7QUFBQSxVQUdNQyxtQkFBbUIsRUFIekI7QUFBQSxVQUlNYyxTQUFTLElBQUlsQixNQUFKLENBQVdDLElBQVgsRUFBaUJDLGFBQWpCLEVBQWdDQyxhQUFoQyxFQUErQ0MsZ0JBQS9DLENBSmY7O0FBTUEsYUFBT2MsTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnBCLE1BQWpCIiwiZmlsZSI6InZlcnRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5jb21pbmdFZGdlcywgb3V0Z29pbmdFZGdlcywgYW5jZXN0b3JWZXJ0aWNlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzID0gaW5jb21pbmdFZGdlcztcbiAgICB0aGlzLm91dGdvaW5nRWRnZXMgPSBvdXRnb2luZ0VkZ2VzO1xuICAgIHRoaXMuYW5jZXN0b3JWZXJ0aWNlcyA9IGFuY2VzdG9yVmVydGljZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRBbmNlc3RvclZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmFuY2VzdG9yVmVydGljZXM7XG4gIH1cbiAgXG4gIGlzU3RhcnRpbmcoKSB7XG4gICAgY29uc3QgaW5jb21pbmdFZGdlc0xlbmd0aCA9IHRoaXMuaW5jb21pbmdFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgc3RhcnRpbmcgPSAoaW5jb21pbmdFZGdlc0xlbmd0aCA9PT0gMCk7XG4gICAgXG4gICAgcmV0dXJuIHN0YXJ0aW5nO1xuICB9XG5cbiAgYWRkSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSkge1xuICAgIHRoaXMuaW5jb21pbmdFZGdlcy5wdXNoKGluY29taW5nRWRnZSk7XG4gIH1cblxuICBhZGRPdXRnb2luZ0VkZ2Uob3V0Z29pbmdFZGdlKSB7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzLnB1c2gob3V0Z29pbmdFZGdlKTtcbiAgfVxuICBcbiAgYWRkQW5jZXN0b3JWZXJ0ZXgoYW5jZXN0b3JWZXJ0ZXgpIHtcbiAgICB0aGlzLmFuY2VzdG9yVmVydGljZXMucHVzaChhbmNlc3RvclZlcnRleCk7XG4gIH1cblxuICByZW1vdmVJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmluY29taW5nRWRnZXMuaW5kZXhPZihpbmNvbWluZ0VkZ2UpO1xuICAgIFxuICAgIHRoaXMuaW5jb21pbmdFZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgZm9yRWFjaE91dGdvaW5nRWRnZShjYWxsYmFjaykge1xuICAgIHRoaXMub3V0Z29pbmdFZGdlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICBpbmNvbWluZ0VkZ2VzID0gW10sXG4gICAgICAgICAgb3V0Z29pbmdFZGdlcyA9IFtdLFxuICAgICAgICAgIGFuY2VzdG9yVmVydGljZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluY29taW5nRWRnZXMsIG91dGdvaW5nRWRnZXMsIGFuY2VzdG9yVmVydGljZXMpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0ZXg7XG4iXX0=