'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vertex = function () {
  function Vertex(name, incomingEdges) {
    _classCallCheck(this, Vertex);

    this.name = name;
    this.incomingEdges = incomingEdges;
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
          vertex = new Vertex(name, incomingEdges);

      return vertex;
    }
  }]);

  return Vertex;
}();

module.exports = Vertex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC92ZXJ0ZXguanMiXSwibmFtZXMiOlsiVmVydGV4IiwibmFtZSIsImluY29taW5nRWRnZXMiLCJpbmNvbWluZ0VkZ2VzTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnRpbmciLCJpbmNvbWluZ0VkZ2UiLCJwdXNoIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwidmVydGV4TmFtZSIsInZlcnRleCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTTtBQUNKLGtCQUFZQyxJQUFaLEVBQWtCQyxhQUFsQixFQUFpQztBQUFBOztBQUMvQixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRCxJQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1FLHNCQUFzQixLQUFLRCxhQUFMLENBQW1CRSxNQUEvQztBQUFBLFVBQ01DLFdBQVlGLHdCQUF3QixDQUQxQzs7QUFHQSxhQUFPRSxRQUFQO0FBQ0Q7OztvQ0FFZUMsWSxFQUFjO0FBQzVCLFdBQUtKLGFBQUwsQ0FBbUJLLElBQW5CLENBQXdCRCxZQUF4QjtBQUNEOzs7dUNBRWtCQSxZLEVBQWM7QUFDL0IsVUFBTUUsUUFBUSxLQUFLTixhQUFMLENBQW1CTyxPQUFuQixDQUEyQkgsWUFBM0IsQ0FBZDs7QUFFQSxXQUFLSixhQUFMLENBQW1CUSxNQUFuQixDQUEwQkYsS0FBMUIsRUFBaUMsQ0FBakM7QUFDRDs7O21DQUVxQkcsVSxFQUFZO0FBQ2hDLFVBQU1WLE9BQU9VLFVBQWI7QUFBQSxVQUEwQjtBQUNwQlQsc0JBQWdCLEVBRHRCO0FBQUEsVUFFTVUsU0FBUyxJQUFJWixNQUFKLENBQVdDLElBQVgsRUFBaUJDLGFBQWpCLENBRmY7O0FBSUEsYUFBT1UsTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmQsTUFBakIiLCJmaWxlIjoidmVydGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbmNvbWluZ0VkZ2VzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmluY29taW5nRWRnZXMgPSBpbmNvbWluZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBpc1N0YXJ0aW5nKCkge1xuICAgIGNvbnN0IGluY29taW5nRWRnZXNMZW5ndGggPSB0aGlzLmluY29taW5nRWRnZXMubGVuZ3RoLFxuICAgICAgICAgIHN0YXJ0aW5nID0gKGluY29taW5nRWRnZXNMZW5ndGggPT09IDApO1xuICAgIFxuICAgIHJldHVybiBzdGFydGluZztcbiAgfVxuXG4gIGFkZEluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpIHtcbiAgICB0aGlzLmluY29taW5nRWRnZXMucHVzaChpbmNvbWluZ0VkZ2UpO1xuICB9XG4gIFxuICByZW1vdmVJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmluY29taW5nRWRnZXMuaW5kZXhPZihpbmNvbWluZ0VkZ2UpO1xuICAgIFxuICAgIHRoaXMuaW5jb21pbmdFZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIGluY29taW5nRWRnZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluY29taW5nRWRnZXMpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0ZXg7XG4iXX0=