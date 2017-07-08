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
    key: 'forEachOutgoingEdge',
    value: function forEachOutgoingEdge(callback) {
      this.outgoingEdges.forEach(callback);
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
    key: 'addAncestorVertices',
    value: function addAncestorVertices(ancestorVertices) {
      arrayUtil.push(this.ancestorVertices, ancestorVertices);
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
          ancestorVertices = [],
          vertex = new Vertex(name, incomingEdges, outgoingEdges, ancestorVertices);

      return vertex;
    }
  }]);

  return Vertex;
}();

module.exports = Vertex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC92ZXJ0ZXguanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIlZlcnRleCIsIm5hbWUiLCJpbmNvbWluZ0VkZ2VzIiwib3V0Z29pbmdFZGdlcyIsImFuY2VzdG9yVmVydGljZXMiLCJpbmNvbWluZ0VkZ2VzTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnRpbmciLCJjYWxsYmFjayIsImZvckVhY2giLCJpbmNvbWluZ0VkZ2UiLCJwdXNoIiwib3V0Z29pbmdFZGdlIiwiYW5jZXN0b3JWZXJ0ZXgiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJ2ZXJ0ZXhOYW1lIiwidmVydGV4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsZUFBUixDQUFsQjs7SUFFTUMsTTtBQUNKLGtCQUFZQyxJQUFaLEVBQWtCQyxhQUFsQixFQUFpQ0MsYUFBakMsRUFBZ0RDLGdCQUFoRCxFQUFrRTtBQUFBOztBQUNoRSxTQUFLSCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLSCxJQUFaO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsYUFBTyxLQUFLRyxnQkFBWjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNQyxzQkFBc0IsS0FBS0gsYUFBTCxDQUFtQkksTUFBL0M7QUFBQSxVQUNNQyxXQUFZRix3QkFBd0IsQ0FEMUM7O0FBR0EsYUFBT0UsUUFBUDtBQUNEOzs7d0NBRW1CQyxRLEVBQVU7QUFDNUIsV0FBS0wsYUFBTCxDQUFtQk0sT0FBbkIsQ0FBMkJELFFBQTNCO0FBQ0Q7OztvQ0FFZUUsWSxFQUFjO0FBQzVCLFdBQUtSLGFBQUwsQ0FBbUJTLElBQW5CLENBQXdCRCxZQUF4QjtBQUNEOzs7b0NBRWVFLFksRUFBYztBQUM1QixXQUFLVCxhQUFMLENBQW1CUSxJQUFuQixDQUF3QkMsWUFBeEI7QUFDRDs7O3NDQUVpQkMsYyxFQUFnQjtBQUNoQyxXQUFLVCxnQkFBTCxDQUFzQk8sSUFBdEIsQ0FBMkJFLGNBQTNCO0FBQ0Q7Ozt3Q0FFbUJULGdCLEVBQWtCO0FBQ3BDTixnQkFBVWEsSUFBVixDQUFlLEtBQUtQLGdCQUFwQixFQUFzQ0EsZ0JBQXRDO0FBQ0Q7Ozt1Q0FFa0JNLFksRUFBYztBQUMvQixVQUFNSSxRQUFRLEtBQUtaLGFBQUwsQ0FBbUJhLE9BQW5CLENBQTJCTCxZQUEzQixDQUFkOztBQUVBLFdBQUtSLGFBQUwsQ0FBbUJjLE1BQW5CLENBQTBCRixLQUExQixFQUFpQyxDQUFqQztBQUNEOzs7bUNBRXFCRyxVLEVBQVk7QUFDaEMsVUFBTWhCLE9BQU9nQixVQUFiO0FBQUEsVUFBMEI7QUFDcEJmLHNCQUFnQixFQUR0QjtBQUFBLFVBRU1DLGdCQUFnQixFQUZ0QjtBQUFBLFVBR01DLG1CQUFtQixFQUh6QjtBQUFBLFVBSU1jLFNBQVMsSUFBSWxCLE1BQUosQ0FBV0MsSUFBWCxFQUFpQkMsYUFBakIsRUFBZ0NDLGFBQWhDLEVBQStDQyxnQkFBL0MsQ0FKZjs7QUFNQSxhQUFPYyxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCcEIsTUFBakIiLCJmaWxlIjoidmVydGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi91dGlsL2FycmF5Jyk7XG5cbmNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGluY29taW5nRWRnZXMsIG91dGdvaW5nRWRnZXMsIGFuY2VzdG9yVmVydGljZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5jb21pbmdFZGdlcyA9IGluY29taW5nRWRnZXM7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzID0gb3V0Z29pbmdFZGdlcztcbiAgICB0aGlzLmFuY2VzdG9yVmVydGljZXMgPSBhbmNlc3RvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBnZXRBbmNlc3RvclZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmFuY2VzdG9yVmVydGljZXM7XG4gIH1cbiAgXG4gIGlzU3RhcnRpbmcoKSB7XG4gICAgY29uc3QgaW5jb21pbmdFZGdlc0xlbmd0aCA9IHRoaXMuaW5jb21pbmdFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgc3RhcnRpbmcgPSAoaW5jb21pbmdFZGdlc0xlbmd0aCA9PT0gMCk7XG4gICAgXG4gICAgcmV0dXJuIHN0YXJ0aW5nO1xuICB9XG5cbiAgZm9yRWFjaE91dGdvaW5nRWRnZShjYWxsYmFjaykge1xuICAgIHRoaXMub3V0Z29pbmdFZGdlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFkZEluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpIHtcbiAgICB0aGlzLmluY29taW5nRWRnZXMucHVzaChpbmNvbWluZ0VkZ2UpO1xuICB9XG5cbiAgYWRkT3V0Z29pbmdFZGdlKG91dGdvaW5nRWRnZSkge1xuICAgIHRoaXMub3V0Z29pbmdFZGdlcy5wdXNoKG91dGdvaW5nRWRnZSk7XG4gIH1cbiAgXG4gIGFkZEFuY2VzdG9yVmVydGV4KGFuY2VzdG9yVmVydGV4KSB7XG4gICAgdGhpcy5hbmNlc3RvclZlcnRpY2VzLnB1c2goYW5jZXN0b3JWZXJ0ZXgpO1xuICB9XG5cbiAgYWRkQW5jZXN0b3JWZXJ0aWNlcyhhbmNlc3RvclZlcnRpY2VzKSB7XG4gICAgYXJyYXlVdGlsLnB1c2godGhpcy5hbmNlc3RvclZlcnRpY2VzLCBhbmNlc3RvclZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5jb21pbmdFZGdlcy5pbmRleE9mKGluY29taW5nRWRnZSk7XG4gICAgXG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgaW5jb21pbmdFZGdlcyA9IFtdLFxuICAgICAgICAgIG91dGdvaW5nRWRnZXMgPSBbXSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRpY2VzID0gW10sXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChuYW1lLCBpbmNvbWluZ0VkZ2VzLCBvdXRnb2luZ0VkZ2VzLCBhbmNlc3RvclZlcnRpY2VzKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGV4O1xuIl19