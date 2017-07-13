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
    key: 'addAncestorVertex',
    value: function addAncestorVertex(ancestorVertex) {
      var index = this.ancestorVertices.indexOf(ancestorVertex);

      if (index === -1) {
        this.ancestorVertices.push(ancestorVertex);
      }
    }
  }, {
    key: 'addAncestorVertices',
    value: function addAncestorVertices(ancestorVertices) {
      ancestorVertices.forEach(function (ancestorVertex) {
        this.addAncestorVertex(ancestorVertex);
      }.bind(this));
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
          ///
      vertex = new Vertex(name, incomingEdges, outgoingEdges, ancestorVertices);

      return vertex;
    }
  }]);

  return Vertex;
}();

module.exports = Vertex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC92ZXJ0ZXguanMiXSwibmFtZXMiOlsiVmVydGV4IiwibmFtZSIsImluY29taW5nRWRnZXMiLCJvdXRnb2luZ0VkZ2VzIiwiYW5jZXN0b3JWZXJ0aWNlcyIsImluY29taW5nRWRnZXNMZW5ndGgiLCJsZW5ndGgiLCJzdGFydGluZyIsImluY29taW5nRWRnZSIsInB1c2giLCJvdXRnb2luZ0VkZ2UiLCJhbmNlc3RvclZlcnRleCIsImluZGV4IiwiaW5kZXhPZiIsImZvckVhY2giLCJhZGRBbmNlc3RvclZlcnRleCIsImJpbmQiLCJzcGxpY2UiLCJjYWxsYmFjayIsInZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE07QUFDSixrQkFBWUMsSUFBWixFQUFrQkMsYUFBbEIsRUFBaUNDLGFBQWpDLEVBQWdEQyxnQkFBaEQsRUFBa0U7QUFBQTs7QUFDaEUsU0FBS0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0gsSUFBWjtBQUNEOzs7MENBRXFCO0FBQ3BCLGFBQU8sS0FBS0csZ0JBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUMsc0JBQXNCLEtBQUtILGFBQUwsQ0FBbUJJLE1BQS9DO0FBQUEsVUFDTUMsV0FBWUYsd0JBQXdCLENBRDFDLENBRFcsQ0FFbUM7O0FBRTlDLGFBQU9FLFFBQVA7QUFDRDs7O29DQUVlQyxZLEVBQWM7QUFDNUIsV0FBS04sYUFBTCxDQUFtQk8sSUFBbkIsQ0FBd0JELFlBQXhCO0FBQ0Q7OztvQ0FFZUUsWSxFQUFjO0FBQzVCLFdBQUtQLGFBQUwsQ0FBbUJNLElBQW5CLENBQXdCQyxZQUF4QjtBQUNEOzs7c0NBRWlCQyxjLEVBQWdCO0FBQ2hDLFVBQU1DLFFBQVEsS0FBS1IsZ0JBQUwsQ0FBc0JTLE9BQXRCLENBQThCRixjQUE5QixDQUFkOztBQUVBLFVBQUlDLFVBQVUsQ0FBQyxDQUFmLEVBQWtCO0FBQ2hCLGFBQUtSLGdCQUFMLENBQXNCSyxJQUF0QixDQUEyQkUsY0FBM0I7QUFDRDtBQUNGOzs7d0NBRW1CUCxnQixFQUFrQjtBQUNwQ0EsdUJBQWlCVSxPQUFqQixDQUF5QixVQUFTSCxjQUFULEVBQXlCO0FBQ2hELGFBQUtJLGlCQUFMLENBQXVCSixjQUF2QjtBQUNELE9BRndCLENBRXZCSyxJQUZ1QixDQUVsQixJQUZrQixDQUF6QjtBQUdEOzs7dUNBRWtCUixZLEVBQWM7QUFDL0IsVUFBTUksUUFBUSxLQUFLVixhQUFMLENBQW1CVyxPQUFuQixDQUEyQkwsWUFBM0IsQ0FBZDs7QUFFQSxXQUFLTixhQUFMLENBQW1CZSxNQUFuQixDQUEwQkwsS0FBMUIsRUFBaUMsQ0FBakM7QUFDRDs7O3dDQUVtQk0sUSxFQUFVO0FBQzVCLFdBQUtmLGFBQUwsQ0FBbUJXLE9BQW5CLENBQTJCSSxRQUEzQjtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDaEMsVUFBTWxCLE9BQU9rQixVQUFiO0FBQUEsVUFBMEI7QUFDcEJqQixzQkFBZ0IsRUFEdEI7QUFBQSxVQUVNQyxnQkFBZ0IsRUFGdEI7QUFBQSxVQUdNQyxtQkFBbUIsRUFIekI7QUFBQSxVQUc4QjtBQUN4QmdCLGVBQVMsSUFBSXBCLE1BQUosQ0FBV0MsSUFBWCxFQUFpQkMsYUFBakIsRUFBZ0NDLGFBQWhDLEVBQStDQyxnQkFBL0MsQ0FKZjs7QUFNQSxhQUFPZ0IsTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnRCLE1BQWpCIiwiZmlsZSI6InZlcnRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5jb21pbmdFZGdlcywgb3V0Z29pbmdFZGdlcywgYW5jZXN0b3JWZXJ0aWNlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzID0gaW5jb21pbmdFZGdlcztcbiAgICB0aGlzLm91dGdvaW5nRWRnZXMgPSBvdXRnb2luZ0VkZ2VzO1xuICAgIHRoaXMuYW5jZXN0b3JWZXJ0aWNlcyA9IGFuY2VzdG9yVmVydGljZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRBbmNlc3RvclZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmFuY2VzdG9yVmVydGljZXM7XG4gIH1cbiAgXG4gIGlzU3RhcnRpbmcoKSB7XG4gICAgY29uc3QgaW5jb21pbmdFZGdlc0xlbmd0aCA9IHRoaXMuaW5jb21pbmdFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgc3RhcnRpbmcgPSAoaW5jb21pbmdFZGdlc0xlbmd0aCA9PT0gMCk7IC8vL1xuICAgIFxuICAgIHJldHVybiBzdGFydGluZztcbiAgfVxuXG4gIGFkZEluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpIHtcbiAgICB0aGlzLmluY29taW5nRWRnZXMucHVzaChpbmNvbWluZ0VkZ2UpO1xuICB9XG5cbiAgYWRkT3V0Z29pbmdFZGdlKG91dGdvaW5nRWRnZSkge1xuICAgIHRoaXMub3V0Z29pbmdFZGdlcy5wdXNoKG91dGdvaW5nRWRnZSk7XG4gIH1cbiAgXG4gIGFkZEFuY2VzdG9yVmVydGV4KGFuY2VzdG9yVmVydGV4KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmFuY2VzdG9yVmVydGljZXMuaW5kZXhPZihhbmNlc3RvclZlcnRleCk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLmFuY2VzdG9yVmVydGljZXMucHVzaChhbmNlc3RvclZlcnRleCk7XG4gICAgfVxuICB9XG5cbiAgYWRkQW5jZXN0b3JWZXJ0aWNlcyhhbmNlc3RvclZlcnRpY2VzKSB7XG4gICAgYW5jZXN0b3JWZXJ0aWNlcy5mb3JFYWNoKGZ1bmN0aW9uKGFuY2VzdG9yVmVydGV4KSB7XG4gICAgICB0aGlzLmFkZEFuY2VzdG9yVmVydGV4KGFuY2VzdG9yVmVydGV4KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVtb3ZlSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmNvbWluZ0VkZ2VzLmluZGV4T2YoaW5jb21pbmdFZGdlKTtcbiAgICBcbiAgICB0aGlzLmluY29taW5nRWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGZvckVhY2hPdXRnb2luZ0VkZ2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLm91dGdvaW5nRWRnZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgaW5jb21pbmdFZGdlcyA9IFtdLFxuICAgICAgICAgIG91dGdvaW5nRWRnZXMgPSBbXSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRpY2VzID0gW10sICAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluY29taW5nRWRnZXMsIG91dGdvaW5nRWRnZXMsIGFuY2VzdG9yVmVydGljZXMpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0ZXg7XG4iXX0=