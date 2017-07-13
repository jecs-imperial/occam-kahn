'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vertex = function () {
  function Vertex(name, label, incomingEdges, outgoingEdges, ancestorVertices) {
    _classCallCheck(this, Vertex);

    this.name = name;
    this.label = label;
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
    key: 'getLabel',
    value: function getLabel() {
      return this.label;
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
    key: 'setLabel',
    value: function setLabel(label) {
      this.label = label;
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
      label = null,
          ///
      incomingEdges = [],
          outgoingEdges = [],
          ancestorVertices = [],
          ///
      vertex = new Vertex(name, label, incomingEdges, outgoingEdges, ancestorVertices);

      return vertex;
    }
  }]);

  return Vertex;
}();

module.exports = Vertex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC92ZXJ0ZXguanMiXSwibmFtZXMiOlsiVmVydGV4IiwibmFtZSIsImxhYmVsIiwiaW5jb21pbmdFZGdlcyIsIm91dGdvaW5nRWRnZXMiLCJhbmNlc3RvclZlcnRpY2VzIiwiaW5jb21pbmdFZGdlc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0aW5nIiwiaW5jb21pbmdFZGdlIiwicHVzaCIsIm91dGdvaW5nRWRnZSIsImFuY2VzdG9yVmVydGV4IiwiaW5kZXgiLCJpbmRleE9mIiwiZm9yRWFjaCIsImFkZEFuY2VzdG9yVmVydGV4IiwiYmluZCIsInNwbGljZSIsImNhbGxiYWNrIiwidmVydGV4TmFtZSIsInZlcnRleCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTTtBQUNKLGtCQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsYUFBekIsRUFBd0NDLGFBQXhDLEVBQXVEQyxnQkFBdkQsRUFBeUU7QUFBQTs7QUFDdkUsU0FBS0osSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0osSUFBWjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtHLGdCQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1DLHNCQUFzQixLQUFLSCxhQUFMLENBQW1CSSxNQUEvQztBQUFBLFVBQ01DLFdBQVlGLHdCQUF3QixDQUQxQyxDQURXLENBRW1DOztBQUU5QyxhQUFPRSxRQUFQO0FBQ0Q7Ozs2QkFFUU4sSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7OztvQ0FFZU8sWSxFQUFjO0FBQzVCLFdBQUtOLGFBQUwsQ0FBbUJPLElBQW5CLENBQXdCRCxZQUF4QjtBQUNEOzs7b0NBRWVFLFksRUFBYztBQUM1QixXQUFLUCxhQUFMLENBQW1CTSxJQUFuQixDQUF3QkMsWUFBeEI7QUFDRDs7O3NDQUVpQkMsYyxFQUFnQjtBQUNoQyxVQUFNQyxRQUFRLEtBQUtSLGdCQUFMLENBQXNCUyxPQUF0QixDQUE4QkYsY0FBOUIsQ0FBZDs7QUFFQSxVQUFJQyxVQUFVLENBQUMsQ0FBZixFQUFrQjtBQUNoQixhQUFLUixnQkFBTCxDQUFzQkssSUFBdEIsQ0FBMkJFLGNBQTNCO0FBQ0Q7QUFDRjs7O3dDQUVtQlAsZ0IsRUFBa0I7QUFDcENBLHVCQUFpQlUsT0FBakIsQ0FBeUIsVUFBU0gsY0FBVCxFQUF5QjtBQUNoRCxhQUFLSSxpQkFBTCxDQUF1QkosY0FBdkI7QUFDRCxPQUZ3QixDQUV2QkssSUFGdUIsQ0FFbEIsSUFGa0IsQ0FBekI7QUFHRDs7O3VDQUVrQlIsWSxFQUFjO0FBQy9CLFVBQU1JLFFBQVEsS0FBS1YsYUFBTCxDQUFtQlcsT0FBbkIsQ0FBMkJMLFlBQTNCLENBQWQ7O0FBRUEsV0FBS04sYUFBTCxDQUFtQmUsTUFBbkIsQ0FBMEJMLEtBQTFCLEVBQWlDLENBQWpDO0FBQ0Q7Ozt3Q0FFbUJNLFEsRUFBVTtBQUM1QixXQUFLZixhQUFMLENBQW1CVyxPQUFuQixDQUEyQkksUUFBM0I7QUFDRDs7O21DQUVxQkMsVSxFQUFZO0FBQ2hDLFVBQU1uQixPQUFPbUIsVUFBYjtBQUFBLFVBQTBCO0FBQ3BCbEIsY0FBUSxJQURkO0FBQUEsVUFDcUI7QUFDZkMsc0JBQWdCLEVBRnRCO0FBQUEsVUFHTUMsZ0JBQWdCLEVBSHRCO0FBQUEsVUFJTUMsbUJBQW1CLEVBSnpCO0FBQUEsVUFJOEI7QUFDeEJnQixlQUFTLElBQUlyQixNQUFKLENBQVdDLElBQVgsRUFBaUJDLEtBQWpCLEVBQXdCQyxhQUF4QixFQUF1Q0MsYUFBdkMsRUFBc0RDLGdCQUF0RCxDQUxmOztBQU9BLGFBQU9nQixNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCdkIsTUFBakIiLCJmaWxlIjoidmVydGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBsYWJlbCwgaW5jb21pbmdFZGdlcywgb3V0Z29pbmdFZGdlcywgYW5jZXN0b3JWZXJ0aWNlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMuaW5jb21pbmdFZGdlcyA9IGluY29taW5nRWRnZXM7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzID0gb3V0Z29pbmdFZGdlcztcbiAgICB0aGlzLmFuY2VzdG9yVmVydGljZXMgPSBhbmNlc3RvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIGdldEFuY2VzdG9yVmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5jZXN0b3JWZXJ0aWNlcztcbiAgfVxuICBcbiAgaXNTdGFydGluZygpIHtcbiAgICBjb25zdCBpbmNvbWluZ0VkZ2VzTGVuZ3RoID0gdGhpcy5pbmNvbWluZ0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBzdGFydGluZyA9IChpbmNvbWluZ0VkZ2VzTGVuZ3RoID09PSAwKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHN0YXJ0aW5nO1xuICB9XG4gIFxuICBzZXRMYWJlbChsYWJlbCkge1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgfVxuXG4gIGFkZEluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpIHtcbiAgICB0aGlzLmluY29taW5nRWRnZXMucHVzaChpbmNvbWluZ0VkZ2UpO1xuICB9XG5cbiAgYWRkT3V0Z29pbmdFZGdlKG91dGdvaW5nRWRnZSkge1xuICAgIHRoaXMub3V0Z29pbmdFZGdlcy5wdXNoKG91dGdvaW5nRWRnZSk7XG4gIH1cbiAgXG4gIGFkZEFuY2VzdG9yVmVydGV4KGFuY2VzdG9yVmVydGV4KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmFuY2VzdG9yVmVydGljZXMuaW5kZXhPZihhbmNlc3RvclZlcnRleCk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLmFuY2VzdG9yVmVydGljZXMucHVzaChhbmNlc3RvclZlcnRleCk7XG4gICAgfVxuICB9XG5cbiAgYWRkQW5jZXN0b3JWZXJ0aWNlcyhhbmNlc3RvclZlcnRpY2VzKSB7XG4gICAgYW5jZXN0b3JWZXJ0aWNlcy5mb3JFYWNoKGZ1bmN0aW9uKGFuY2VzdG9yVmVydGV4KSB7XG4gICAgICB0aGlzLmFkZEFuY2VzdG9yVmVydGV4KGFuY2VzdG9yVmVydGV4KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVtb3ZlSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmNvbWluZ0VkZ2VzLmluZGV4T2YoaW5jb21pbmdFZGdlKTtcbiAgICBcbiAgICB0aGlzLmluY29taW5nRWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGZvckVhY2hPdXRnb2luZ0VkZ2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLm91dGdvaW5nRWRnZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgbGFiZWwgPSBudWxsLCAgLy8vXG4gICAgICAgICAgaW5jb21pbmdFZGdlcyA9IFtdLFxuICAgICAgICAgIG91dGdvaW5nRWRnZXMgPSBbXSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRpY2VzID0gW10sICAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGxhYmVsLCBpbmNvbWluZ0VkZ2VzLCBvdXRnb2luZ0VkZ2VzLCBhbmNlc3RvclZlcnRpY2VzKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGV4O1xuIl19