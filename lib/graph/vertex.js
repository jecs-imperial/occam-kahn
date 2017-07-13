'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vertex = function () {
  function Vertex(name, index, incomingEdges, outgoingEdges, ancestorVertices) {
    _classCallCheck(this, Vertex);

    this.name = name;
    this.index = index;
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
    key: 'getIndex',
    value: function getIndex() {
      return this.index;
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
    key: 'setIndex',
    value: function setIndex(index) {
      this.index = index;
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
      index = null,
          ///
      incomingEdges = [],
          outgoingEdges = [],
          ancestorVertices = [],
          ///
      vertex = new Vertex(name, index, incomingEdges, outgoingEdges, ancestorVertices);

      return vertex;
    }
  }]);

  return Vertex;
}();

module.exports = Vertex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC92ZXJ0ZXguanMiXSwibmFtZXMiOlsiVmVydGV4IiwibmFtZSIsImluZGV4IiwiaW5jb21pbmdFZGdlcyIsIm91dGdvaW5nRWRnZXMiLCJhbmNlc3RvclZlcnRpY2VzIiwiaW5jb21pbmdFZGdlc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0aW5nIiwiaW5jb21pbmdFZGdlIiwicHVzaCIsIm91dGdvaW5nRWRnZSIsImFuY2VzdG9yVmVydGV4IiwiaW5kZXhPZiIsImZvckVhY2giLCJhZGRBbmNlc3RvclZlcnRleCIsImJpbmQiLCJzcGxpY2UiLCJjYWxsYmFjayIsInZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE07QUFDSixrQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLGFBQXpCLEVBQXdDQyxhQUF4QyxFQUF1REMsZ0JBQXZELEVBQXlFO0FBQUE7O0FBQ3ZFLFNBQUtKLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtKLElBQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsYUFBTyxLQUFLRyxnQkFBWjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNQyxzQkFBc0IsS0FBS0gsYUFBTCxDQUFtQkksTUFBL0M7QUFBQSxVQUNNQyxXQUFZRix3QkFBd0IsQ0FEMUMsQ0FEVyxDQUVtQzs7QUFFOUMsYUFBT0UsUUFBUDtBQUNEOzs7NkJBRVFOLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7b0NBRWVPLFksRUFBYztBQUM1QixXQUFLTixhQUFMLENBQW1CTyxJQUFuQixDQUF3QkQsWUFBeEI7QUFDRDs7O29DQUVlRSxZLEVBQWM7QUFDNUIsV0FBS1AsYUFBTCxDQUFtQk0sSUFBbkIsQ0FBd0JDLFlBQXhCO0FBQ0Q7OztzQ0FFaUJDLGMsRUFBZ0I7QUFDaEMsVUFBTVYsUUFBUSxLQUFLRyxnQkFBTCxDQUFzQlEsT0FBdEIsQ0FBOEJELGNBQTlCLENBQWQ7O0FBRUEsVUFBSVYsVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDaEIsYUFBS0csZ0JBQUwsQ0FBc0JLLElBQXRCLENBQTJCRSxjQUEzQjtBQUNEO0FBQ0Y7Ozt3Q0FFbUJQLGdCLEVBQWtCO0FBQ3BDQSx1QkFBaUJTLE9BQWpCLENBQXlCLFVBQVNGLGNBQVQsRUFBeUI7QUFDaEQsYUFBS0csaUJBQUwsQ0FBdUJILGNBQXZCO0FBQ0QsT0FGd0IsQ0FFdkJJLElBRnVCLENBRWxCLElBRmtCLENBQXpCO0FBR0Q7Ozt1Q0FFa0JQLFksRUFBYztBQUMvQixVQUFNUCxRQUFRLEtBQUtDLGFBQUwsQ0FBbUJVLE9BQW5CLENBQTJCSixZQUEzQixDQUFkOztBQUVBLFdBQUtOLGFBQUwsQ0FBbUJjLE1BQW5CLENBQTBCZixLQUExQixFQUFpQyxDQUFqQztBQUNEOzs7d0NBRW1CZ0IsUSxFQUFVO0FBQzVCLFdBQUtkLGFBQUwsQ0FBbUJVLE9BQW5CLENBQTJCSSxRQUEzQjtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDaEMsVUFBTWxCLE9BQU9rQixVQUFiO0FBQUEsVUFBMEI7QUFDcEJqQixjQUFRLElBRGQ7QUFBQSxVQUNxQjtBQUNmQyxzQkFBZ0IsRUFGdEI7QUFBQSxVQUdNQyxnQkFBZ0IsRUFIdEI7QUFBQSxVQUlNQyxtQkFBbUIsRUFKekI7QUFBQSxVQUk4QjtBQUN4QmUsZUFBUyxJQUFJcEIsTUFBSixDQUFXQyxJQUFYLEVBQWlCQyxLQUFqQixFQUF3QkMsYUFBeEIsRUFBdUNDLGFBQXZDLEVBQXNEQyxnQkFBdEQsQ0FMZjs7QUFPQSxhQUFPZSxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCdEIsTUFBakIiLCJmaWxlIjoidmVydGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbmRleCwgaW5jb21pbmdFZGdlcywgb3V0Z29pbmdFZGdlcywgYW5jZXN0b3JWZXJ0aWNlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuaW5jb21pbmdFZGdlcyA9IGluY29taW5nRWRnZXM7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzID0gb3V0Z29pbmdFZGdlcztcbiAgICB0aGlzLmFuY2VzdG9yVmVydGljZXMgPSBhbmNlc3RvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGdldEFuY2VzdG9yVmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5jZXN0b3JWZXJ0aWNlcztcbiAgfVxuICBcbiAgaXNTdGFydGluZygpIHtcbiAgICBjb25zdCBpbmNvbWluZ0VkZ2VzTGVuZ3RoID0gdGhpcy5pbmNvbWluZ0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBzdGFydGluZyA9IChpbmNvbWluZ0VkZ2VzTGVuZ3RoID09PSAwKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHN0YXJ0aW5nO1xuICB9XG4gIFxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGFkZEluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpIHtcbiAgICB0aGlzLmluY29taW5nRWRnZXMucHVzaChpbmNvbWluZ0VkZ2UpO1xuICB9XG5cbiAgYWRkT3V0Z29pbmdFZGdlKG91dGdvaW5nRWRnZSkge1xuICAgIHRoaXMub3V0Z29pbmdFZGdlcy5wdXNoKG91dGdvaW5nRWRnZSk7XG4gIH1cbiAgXG4gIGFkZEFuY2VzdG9yVmVydGV4KGFuY2VzdG9yVmVydGV4KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmFuY2VzdG9yVmVydGljZXMuaW5kZXhPZihhbmNlc3RvclZlcnRleCk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLmFuY2VzdG9yVmVydGljZXMucHVzaChhbmNlc3RvclZlcnRleCk7XG4gICAgfVxuICB9XG5cbiAgYWRkQW5jZXN0b3JWZXJ0aWNlcyhhbmNlc3RvclZlcnRpY2VzKSB7XG4gICAgYW5jZXN0b3JWZXJ0aWNlcy5mb3JFYWNoKGZ1bmN0aW9uKGFuY2VzdG9yVmVydGV4KSB7XG4gICAgICB0aGlzLmFkZEFuY2VzdG9yVmVydGV4KGFuY2VzdG9yVmVydGV4KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVtb3ZlSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmNvbWluZ0VkZ2VzLmluZGV4T2YoaW5jb21pbmdFZGdlKTtcbiAgICBcbiAgICB0aGlzLmluY29taW5nRWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGZvckVhY2hPdXRnb2luZ0VkZ2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLm91dGdvaW5nRWRnZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgaW5kZXggPSBudWxsLCAgLy8vXG4gICAgICAgICAgaW5jb21pbmdFZGdlcyA9IFtdLFxuICAgICAgICAgIG91dGdvaW5nRWRnZXMgPSBbXSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRpY2VzID0gW10sICAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluZGV4LCBpbmNvbWluZ0VkZ2VzLCBvdXRnb2luZ0VkZ2VzLCBhbmNlc3RvclZlcnRpY2VzKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGV4O1xuIl19