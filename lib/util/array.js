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
  }]);

  return arrayUtil;
}();

module.exports = arrayUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsImFycmF5IiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFM7Ozs7Ozs7MEJBQ1NDLEssRUFBTztBQUFFLGFBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCOzs7MkJBRTFCQSxLLEVBQU87QUFBRSxhQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjs7O29DQUVsQkEsSyxFQUFPQyxRLEVBQVU7QUFDdENELFlBQU1FLE9BQU4sQ0FBYyxVQUFTQyxPQUFULEVBQWtCQyxLQUFsQixFQUF5QjtBQUNyQ0gsaUJBQVNFLE9BQVQsRUFBa0JDLEtBQWxCO0FBQ0QsT0FGRDtBQUdEOzs7cUNBRXVCSixLLEVBQU9DLFEsRUFBVTtBQUN2QyxVQUFNSSxjQUFjTCxNQUFNTSxNQUExQjs7QUFFQSxXQUFLLElBQUlGLFFBQVFDLGNBQWMsQ0FBL0IsRUFBa0NELFNBQVMsQ0FBM0MsRUFBOENBLE9BQTlDLEVBQXVEO0FBQ3JELFlBQU1ELFVBQVVILE1BQU1JLEtBQU4sQ0FBaEI7O0FBRUFILGlCQUFTRSxPQUFULEVBQWtCQyxLQUFsQjtBQUNEO0FBQ0Y7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCVCxTQUFqQiIsImZpbGUiOiJhcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgYXJyYXlVdGlsIHtcbiAgc3RhdGljIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG4gIHN0YXRpYyBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4gIFxuICBzdGF0aWMgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICB9KTtcbiAgfVxuICBcbiAgc3RhdGljIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgXG4gICAgZm9yICh2YXIgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG4gICAgICBcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVV0aWw7XG4iXX0=