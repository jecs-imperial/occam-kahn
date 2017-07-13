'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Edge = function () {
  function Edge(sourceVertex, targetVertex) {
    _classCallCheck(this, Edge);

    this.sourceVertex = sourceVertex;
    this.targetVertex = targetVertex;
  }

  _createClass(Edge, [{
    key: 'getSourceVertex',
    value: function getSourceVertex() {
      return this.sourceVertex;
    }
  }, {
    key: 'getTargetVertex',
    value: function getTargetVertex() {
      return this.targetVertex;
    }
  }]);

  return Edge;
}();

module.exports = Edge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9lZGdlLmpzIl0sIm5hbWVzIjpbIkVkZ2UiLCJzb3VyY2VWZXJ0ZXgiLCJ0YXJnZXRWZXJ0ZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEk7QUFDSixnQkFBWUMsWUFBWixFQUEwQkMsWUFBMUIsRUFBd0M7QUFBQTs7QUFDdEMsU0FBS0QsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtELFlBQVo7QUFDRDs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtDLFlBQVo7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJKLElBQWpCIiwiZmlsZSI6ImVkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkge1xuICAgIHRoaXMuc291cmNlVmVydGV4ID0gc291cmNlVmVydGV4O1xuICAgIHRoaXMudGFyZ2V0VmVydGV4ID0gdGFyZ2V0VmVydGV4O1xuICB9XG5cbiAgZ2V0U291cmNlVmVydGV4KCkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZVZlcnRleDtcbiAgfVxuICBcbiAgZ2V0VGFyZ2V0VmVydGV4KCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFZlcnRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVkZ2U7XG4iXX0=