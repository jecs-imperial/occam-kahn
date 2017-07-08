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
  }]);

  return arrayUtil;
}();

module.exports = arrayUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsImFycmF5IiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJlbGVtZW50cyIsIkFycmF5IiwicHJvdG90eXBlIiwicHVzaCIsImFwcGx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxTOzs7Ozs7OzBCQUNTQyxLLEVBQU87QUFBRSxhQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjs7OzJCQUUxQkEsSyxFQUFPO0FBQUUsYUFBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7OztvQ0FFbEJBLEssRUFBT0MsUSxFQUFVO0FBQ3RDRCxZQUFNRSxPQUFOLENBQWMsVUFBU0MsT0FBVCxFQUFrQkMsS0FBbEIsRUFBeUI7QUFDckNILGlCQUFTRSxPQUFULEVBQWtCQyxLQUFsQjtBQUNELE9BRkQ7QUFHRDs7O3FDQUV1QkosSyxFQUFPQyxRLEVBQVU7QUFDdkMsVUFBTUksY0FBY0wsTUFBTU0sTUFBMUI7O0FBRUEsV0FBSyxJQUFJRixRQUFRQyxjQUFjLENBQS9CLEVBQWtDRCxTQUFTLENBQTNDLEVBQThDQSxPQUE5QyxFQUF1RDtBQUNyRCxZQUFNRCxVQUFVSCxNQUFNSSxLQUFOLENBQWhCOztBQUVBSCxpQkFBU0UsT0FBVCxFQUFrQkMsS0FBbEI7QUFDRDtBQUNGOzs7eUJBRVdKLEssRUFBT08sUSxFQUFVO0FBQzNCQyxZQUFNQyxTQUFOLENBQWdCQyxJQUFoQixDQUFxQkMsS0FBckIsQ0FBMkJYLEtBQTNCLEVBQWtDTyxRQUFsQztBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQmQsU0FBakIiLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIGFycmF5VXRpbCB7XG4gIHN0YXRpYyBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuICBzdGF0aWMgc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuICBcbiAgc3RhdGljIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIFxuICAgIGZvciAodmFyIGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuICAgICAgXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHB1c2goYXJyYXksIGVsZW1lbnRzKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXksIGVsZW1lbnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlVdGlsO1xuIl19