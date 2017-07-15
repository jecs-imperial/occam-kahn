'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RemainingEdge = function () {
  function RemainingEdge(sourceVertexName, targetVertexName) {
    _classCallCheck(this, RemainingEdge);

    this.sourceVertexName = sourceVertexName;
    this.targetVertexName = targetVertexName;
  }

  _createClass(RemainingEdge, [{
    key: 'getSourceVertexName',
    value: function getSourceVertexName() {
      return this.sourceVertexName;
    }
  }, {
    key: 'getTargetVertexName',
    value: function getTargetVertexName() {
      return this.targetVertexName;
    }
  }]);

  return RemainingEdge;
}();

module.exports = RemainingEdge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9yZW1haW5pbmdFZGdlLmpzIl0sIm5hbWVzIjpbIlJlbWFpbmluZ0VkZ2UiLCJzb3VyY2VWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsYTtBQUNKLHlCQUFZQyxnQkFBWixFQUE4QkMsZ0JBQTlCLEVBQWdEO0FBQUE7O0FBQzlDLFNBQUtELGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7Ozs7MENBRXFCO0FBQ3BCLGFBQU8sS0FBS0QsZ0JBQVo7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtDLGdCQUFaO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCSixhQUFqQiIsImZpbGUiOiJyZW1haW5pbmdFZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZW1haW5pbmdFZGdlIHtcbiAgY29uc3RydWN0b3Ioc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIHRoaXMuc291cmNlVmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleE5hbWU7XG4gICAgdGhpcy50YXJnZXRWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuXG4gIGdldFNvdXJjZVZlcnRleE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlVmVydGV4TmFtZTtcbiAgfVxuXG4gIGdldFRhcmdldFZlcnRleE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbWFpbmluZ0VkZ2U7XG4iXX0=