'use strict';

class arrayUtil {
  static first(array) { return array[0]; }

  static second(array) { return array[1]; }
  
  static forwardsForEach(array, callback) {
    array.forEach(function(element, index) {
      callback(element, index);
    });
  }
  
  static backwardsForEach(array, callback) {
    const arrayLength = array.length;
    
    for (var index = arrayLength - 1; index >= 0; index--) {
      const element = array[index];
      
      callback(element, index);
    }
  }
}

module.exports = arrayUtil;
