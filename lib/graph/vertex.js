'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../util/array');

var Vertex = function () {
  function Vertex(name) {
    _classCallCheck(this, Vertex);

    this.name = name;
  }

  _createClass(Vertex, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }], [{
    key: 'fromVertexLiteral',
    value: function fromVertexLiteral(vertexLiteral) {
      var firstVertexLiteralElement = arrayUtil.first(vertexLiteral),
          secondVertexLiteralElement = arrayUtil.second(vertexLiteral),
          name = firstVertexLiteralElement,
          ///
      descendantVertexNames = secondVertexLiteralElement; ///
    }
  }]);

  return Vertex;
}();

module.exports = Vertex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC92ZXJ0ZXguanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIlZlcnRleCIsIm5hbWUiLCJ2ZXJ0ZXhMaXRlcmFsIiwiZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCIsImZpcnN0Iiwic2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQiLCJzZWNvbmQiLCJkZXNjZW5kYW50VmVydGV4TmFtZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxlQUFSLENBQWxCOztJQUVNQyxNO0FBQ0osa0JBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7O3NDQUV3QkMsYSxFQUFlO0FBQ3RDLFVBQU1DLDRCQUE0QkwsVUFBVU0sS0FBVixDQUFnQkYsYUFBaEIsQ0FBbEM7QUFBQSxVQUNJRyw2QkFBNkJQLFVBQVVRLE1BQVYsQ0FBaUJKLGFBQWpCLENBRGpDO0FBQUEsVUFFSUQsT0FBT0UseUJBRlg7QUFBQSxVQUVzQztBQUNsQ0ksOEJBQXdCRiwwQkFINUIsQ0FEc0MsQ0FJa0I7QUFDekQ7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCVCxNQUFqQiIsImZpbGUiOiJ2ZXJ0ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKTtcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleExpdGVyYWwodmVydGV4TGl0ZXJhbCkge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBhcnJheVV0aWwuZmlyc3QodmVydGV4TGl0ZXJhbCksXG4gICAgICAgIHNlY29uZFZlcnRleExpdGVyYWxFbGVtZW50ID0gYXJyYXlVdGlsLnNlY29uZCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgbmFtZSA9IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQsIC8vL1xuICAgICAgICBkZXNjZW5kYW50VmVydGV4TmFtZXMgPSBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudDsgLy8vXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0ZXg7XG4iXX0=