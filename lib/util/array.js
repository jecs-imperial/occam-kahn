'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = function () {
  function arrayUtil() {
    _classCallCheck(this, arrayUtil);
  }

  _createClass(arrayUtil, null, [{
    key: 'first',
    value: function first(array) {
      return array[0];
    }
  }, {
    key: 'second',
    value: function second(array) {
      return array[1];
    }
  }, {
    key: 'forwardsForEach',
    value: function forwardsForEach(array, callback) {
      array.forEach(function (element, index) {
        callback(element, index);
      });
    }
  }, {
    key: 'backwardsForEach',
    value: function backwardsForEach(array, callback) {
      var arrayLength = array.length;

      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index];

        callback(element, index);
      }
    }
  }, {
    key: 'push',
    value: function push(array, elements) {
      Array.prototype.push.apply(array, elements);
    }
  }, {
    key: 'unshift',
    value: function unshift(array, elements) {
      Array.prototype.unshift.apply(array, elements);
    }
  }]);

  return arrayUtil;
}();

module.exports = arrayUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsImFycmF5IiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJlbGVtZW50cyIsIkFycmF5IiwicHJvdG90eXBlIiwicHVzaCIsImFwcGx5IiwidW5zaGlmdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsUzs7Ozs7OzswQkFDU0MsSyxFQUFPO0FBQUUsYUFBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7OzsyQkFFMUJBLEssRUFBTztBQUFFLGFBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCOzs7b0NBRWxCQSxLLEVBQU9DLFEsRUFBVTtBQUN0Q0QsWUFBTUUsT0FBTixDQUFjLFVBQVNDLE9BQVQsRUFBa0JDLEtBQWxCLEVBQXlCO0FBQ3JDSCxpQkFBU0UsT0FBVCxFQUFrQkMsS0FBbEI7QUFDRCxPQUZEO0FBR0Q7OztxQ0FFdUJKLEssRUFBT0MsUSxFQUFVO0FBQ3ZDLFVBQU1JLGNBQWNMLE1BQU1NLE1BQTFCOztBQUVBLFdBQUssSUFBSUYsUUFBUUMsY0FBYyxDQUEvQixFQUFrQ0QsU0FBUyxDQUEzQyxFQUE4Q0EsT0FBOUMsRUFBdUQ7QUFDckQsWUFBTUQsVUFBVUgsTUFBTUksS0FBTixDQUFoQjs7QUFFQUgsaUJBQVNFLE9BQVQsRUFBa0JDLEtBQWxCO0FBQ0Q7QUFDRjs7O3lCQUVXSixLLEVBQU9PLFEsRUFBVTtBQUMzQkMsWUFBTUMsU0FBTixDQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCWCxLQUEzQixFQUFrQ08sUUFBbEM7QUFDRDs7OzRCQUVjUCxLLEVBQU9PLFEsRUFBVTtBQUM5QkMsWUFBTUMsU0FBTixDQUFnQkcsT0FBaEIsQ0FBd0JELEtBQXhCLENBQThCWCxLQUE5QixFQUFxQ08sUUFBckM7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJmLFNBQWpCIiwiZmlsZSI6ImFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBhcnJheVV0aWwge1xuICBzdGF0aWMgZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbiAgc3RhdGljIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiAgXG4gIHN0YXRpYyBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIH0pO1xuICB9XG4gIFxuICBzdGF0aWMgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICBcbiAgICBmb3IgKHZhciBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcbiAgICAgIFxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBwdXNoKGFycmF5LCBlbGVtZW50cykge1xuICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5LCBlbGVtZW50cylcbiAgfVxuXG4gIHN0YXRpYyB1bnNoaWZ0KGFycmF5LCBlbGVtZW50cykge1xuICAgIEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5LCBlbGVtZW50cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5VXRpbDtcbiJdfQ==