'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../util/array');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC92ZXJ0ZXguanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIlZlcnRleCIsIm5hbWUiLCJpbmNvbWluZ0VkZ2VzIiwib3V0Z29pbmdFZGdlcyIsImFuY2VzdG9yVmVydGljZXMiLCJpbmNvbWluZ0VkZ2VzTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnRpbmciLCJpbmNvbWluZ0VkZ2UiLCJwdXNoIiwib3V0Z29pbmdFZGdlIiwiYW5jZXN0b3JWZXJ0ZXgiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJjYWxsYmFjayIsImZvckVhY2giLCJ2ZXJ0ZXhOYW1lIiwidmVydGV4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsZUFBUixDQUFsQjs7SUFFTUMsTTtBQUNKLGtCQUFZQyxJQUFaLEVBQWtCQyxhQUFsQixFQUFpQ0MsYUFBakMsRUFBZ0RDLGdCQUFoRCxFQUFrRTtBQUFBOztBQUNoRSxTQUFLSCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLSCxJQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1JLHNCQUFzQixLQUFLSCxhQUFMLENBQW1CSSxNQUEvQztBQUFBLFVBQ01DLFdBQVlGLHdCQUF3QixDQUQxQzs7QUFHQSxhQUFPRSxRQUFQO0FBQ0Q7OztvQ0FFZUMsWSxFQUFjO0FBQzVCLFdBQUtOLGFBQUwsQ0FBbUJPLElBQW5CLENBQXdCRCxZQUF4QjtBQUNEOzs7b0NBRWVFLFksRUFBYztBQUM1QixXQUFLUCxhQUFMLENBQW1CTSxJQUFuQixDQUF3QkMsWUFBeEI7QUFDRDs7O3NDQUVpQkMsYyxFQUFnQjtBQUNoQyxXQUFLUCxnQkFBTCxDQUFzQkssSUFBdEIsQ0FBMkJFLGNBQTNCO0FBQ0Q7Ozt1Q0FFa0JILFksRUFBYztBQUMvQixVQUFNSSxRQUFRLEtBQUtWLGFBQUwsQ0FBbUJXLE9BQW5CLENBQTJCTCxZQUEzQixDQUFkOztBQUVBLFdBQUtOLGFBQUwsQ0FBbUJZLE1BQW5CLENBQTBCRixLQUExQixFQUFpQyxDQUFqQztBQUNEOzs7d0NBRW1CRyxRLEVBQVU7QUFDNUIsV0FBS1osYUFBTCxDQUFtQmEsT0FBbkIsQ0FBMkJELFFBQTNCO0FBQ0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUNoQyxVQUFNaEIsT0FBT2dCLFVBQWI7QUFBQSxVQUEwQjtBQUNwQmYsc0JBQWdCLEVBRHRCO0FBQUEsVUFFTUMsZ0JBQWdCLEVBRnRCO0FBQUEsVUFHTUMsbUJBQW1CLEVBSHpCO0FBQUEsVUFJTWMsU0FBUyxJQUFJbEIsTUFBSixDQUFXQyxJQUFYLEVBQWlCQyxhQUFqQixFQUFnQ0MsYUFBaEMsRUFBK0NDLGdCQUEvQyxDQUpmOztBQU1BLGFBQU9jLE1BQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJwQixNQUFqQiIsImZpbGUiOiJ2ZXJ0ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKTtcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5jb21pbmdFZGdlcywgb3V0Z29pbmdFZGdlcywgYW5jZXN0b3JWZXJ0aWNlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzID0gaW5jb21pbmdFZGdlcztcbiAgICB0aGlzLm91dGdvaW5nRWRnZXMgPSBvdXRnb2luZ0VkZ2VzO1xuICAgIHRoaXMuYW5jZXN0b3JWZXJ0aWNlcyA9IGFuY2VzdG9yVmVydGljZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIGlzU3RhcnRpbmcoKSB7XG4gICAgY29uc3QgaW5jb21pbmdFZGdlc0xlbmd0aCA9IHRoaXMuaW5jb21pbmdFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgc3RhcnRpbmcgPSAoaW5jb21pbmdFZGdlc0xlbmd0aCA9PT0gMCk7XG4gICAgXG4gICAgcmV0dXJuIHN0YXJ0aW5nO1xuICB9XG5cbiAgYWRkSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSkge1xuICAgIHRoaXMuaW5jb21pbmdFZGdlcy5wdXNoKGluY29taW5nRWRnZSk7XG4gIH1cblxuICBhZGRPdXRnb2luZ0VkZ2Uob3V0Z29pbmdFZGdlKSB7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzLnB1c2gob3V0Z29pbmdFZGdlKTtcbiAgfVxuICBcbiAgYWRkQW5jZXN0b3JWZXJ0ZXgoYW5jZXN0b3JWZXJ0ZXgpIHtcbiAgICB0aGlzLmFuY2VzdG9yVmVydGljZXMucHVzaChhbmNlc3RvclZlcnRleCk7XG4gIH1cblxuICByZW1vdmVJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmluY29taW5nRWRnZXMuaW5kZXhPZihpbmNvbWluZ0VkZ2UpO1xuICAgIFxuICAgIHRoaXMuaW5jb21pbmdFZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgZm9yRWFjaE91dGdvaW5nRWRnZShjYWxsYmFjaykge1xuICAgIHRoaXMub3V0Z29pbmdFZGdlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICBpbmNvbWluZ0VkZ2VzID0gW10sXG4gICAgICAgICAgb3V0Z29pbmdFZGdlcyA9IFtdLFxuICAgICAgICAgIGFuY2VzdG9yVmVydGljZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluY29taW5nRWRnZXMsIG91dGdvaW5nRWRnZXMsIGFuY2VzdG9yVmVydGljZXMpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0ZXg7XG4iXX0=