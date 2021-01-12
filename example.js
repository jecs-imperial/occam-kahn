(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Edge = /*#__PURE__*/function () {
  function Edge(sourceVertexName, targetVertexName) {
    _classCallCheck(this, Edge);

    this.sourceVertexName = sourceVertexName;
    this.targetVertexName = targetVertexName;
  }

  _createClass(Edge, [{
    key: "getSourceVertexName",
    value: function getSourceVertexName() {
      return this.sourceVertexName;
    }
  }, {
    key: "getTargetVertexName",
    value: function getTargetVertexName() {
      return this.targetVertexName;
    }
  }]);

  return Edge;
}();

exports["default"] = Edge;

},{}],2:[function(require,module,exports){
"use strict";

var _index = require("./index");

///
var graph = _index.Graph.fromVertexLiterals([["a", ["b"]], ["b", ["c"]], ["d", ["c"]], ["e", []], ["f", ["g"]], ["h", ["g"]]]);

var cyclesPresent = graph.areCyclesPresent(),
    remainingEdges = graph.getRemainingEdges(),
    orderedVertices = graph.getOrderedVertices();

},{"./index":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

var _edge = _interopRequireDefault(require("./edge"));

var _vertex = _interopRequireDefault(require("./vertex"));

var _remainingEdges = _interopRequireDefault(require("./remainingEdges"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var first = _necessary.arrayUtilities.first,
    second = _necessary.arrayUtilities.second,
    backwardsForEach = _necessary.arrayUtilities.backwardsForEach;

var Graph = /*#__PURE__*/function () {
  function Graph(orderedVertices, remainingEdges) {
    _classCallCheck(this, Graph);

    this.orderedVertices = orderedVertices;
    this.remainingEdges = remainingEdges;
  }

  _createClass(Graph, [{
    key: "getOrderedVertices",
    value: function getOrderedVertices() {
      return this.orderedVertices;
    }
  }, {
    key: "getRemainingEdges",
    value: function getRemainingEdges() {
      return this.remainingEdges;
    }
  }, {
    key: "areCyclesPresent",
    value: function areCyclesPresent() {
      return this.remainingEdges.areCyclesPresent();
    }
  }], [{
    key: "fromVertexLiterals",
    value: function fromVertexLiterals(vertexLiterals) {
      var vertexMap = vertexMapFromVertexLiterals(vertexLiterals),
          edges = edgesFromVertexLiteralsAndVertexMap(vertexLiterals, vertexMap),
          orderedVertices = orderedVerticesFromVertexMapAndEdges(vertexMap, edges),
          remainingEdges = new _remainingEdges["default"](edges),
          graph = new Graph(orderedVertices, remainingEdges);
      return graph;
    }
  }, {
    key: "fromVertexNamesAndEdges",
    value: function fromVertexNamesAndEdges(vertexNames, edges) {
      edges = edges.slice(); ///

      var vertexMap = vertexMapFromVertexNamesAndEdges(vertexNames, edges),
          orderedVertices = orderedVerticesFromVertexMapAndEdges(vertexMap, edges),
          remainingEdges = new _remainingEdges["default"](edges),
          graph = new Graph(orderedVertices, remainingEdges);
      return graph;
    }
  }]);

  return Graph;
}();

exports["default"] = Graph;

function vertexMapFromVertexNamesAndEdges(vertexNames, edges) {
  var vertexMap = {};
  vertexNames.forEach(function (vertexName) {
    var vertexExists = vertexMap.hasOwnProperty(vertexName);

    if (!vertexExists) {
      var vertex = _vertex["default"].fromVertexName(vertexName);

      vertexMap[vertexName] = vertex;
    }
  });
  edges.forEach(function (edge) {
    var sourceVertexName = edge.getSourceVertexName(),
        targetVertexName = edge.getTargetVertexName(),
        sourceVertexExists = vertexMap.hasOwnProperty(sourceVertexName),
        targetVertexExists = vertexMap.hasOwnProperty(targetVertexName);

    if (!sourceVertexExists) {
      var _sourceVertex = _vertex["default"].fromVertexName(sourceVertexName);

      vertexMap[sourceVertexName] = _sourceVertex;
    }

    if (!targetVertexExists) {
      var _targetVertex = _vertex["default"].fromVertexName(targetVertexName);

      vertexMap[targetVertexName] = _targetVertex;
    }

    var sourceVertex = vertexMap[sourceVertexName],
        targetVertex = vertexMap[targetVertexName],
        incomingEdge = edge,
        ///
    outgoingEdge = edge; ///

    sourceVertex.addOutgoingEdge(outgoingEdge);
    targetVertex.addIncomingEdge(incomingEdge);
  });
  return vertexMap;
}

function vertexMapFromVertexLiterals(vertexLiterals) {
  var vertexMap = {};
  vertexLiterals.forEach(function (vertexLiteral) {
    var firstVertexLiteralElement = first(vertexLiteral),
        vertexName = firstVertexLiteralElement,
        ///
    vertexExists = vertexMap.hasOwnProperty(vertexName);

    if (!vertexExists) {
      var vertex = _vertex["default"].fromVertexName(vertexName);

      vertexMap[vertexName] = vertex;
    }

    var secondVertexLiteralElement = second(vertexLiteral),
        ancestorVertexNames = secondVertexLiteralElement; ///

    ancestorVertexNames.forEach(function (ancestorVertexName) {
      var ancestorVertexExists = vertexMap.hasOwnProperty(ancestorVertexName);

      if (!ancestorVertexExists) {
        var ancestorVertex = _vertex["default"].fromVertexName(ancestorVertexName);

        vertexMap[ancestorVertexName] = ancestorVertex;
      }
    });
  });
  return vertexMap;
}

function edgesFromVertexLiteralsAndVertexMap(vertexLiterals, vertexMap) {
  var edges = [];
  vertexLiterals.forEach(function (vertexLiteral) {
    var firstVertexLiteralElement = first(vertexLiteral),
        secondVertexLiteralElement = second(vertexLiteral),
        ancestorVertexNames = secondVertexLiteralElement,
        ///
    vertexName = firstVertexLiteralElement; ///

    ancestorVertexNames.forEach(function (ancestorVertexName) {
      var sourceVertexName = ancestorVertexName,
          ///
      targetVertexName = vertexName,
          ///
      sourceVertex = vertexMap[sourceVertexName],
          targetVertex = vertexMap[targetVertexName],
          edge = new _edge["default"](sourceVertexName, targetVertexName),
          incomingEdge = edge,
          ///
      outgoingEdge = edge; ///

      edges.push(edge);
      sourceVertex.addOutgoingEdge(outgoingEdge);
      targetVertex.addIncomingEdge(incomingEdge);
    });
  });
  return edges;
}

function orderedVerticesFromVertexMapAndEdges(vertexMap, edges) {
  var orderedVertexNames = [],
      startingVertexNames = startingVertexNamesFromVertexMap(vertexMap),
      removedEdges = [];
  var startingVertexNamesLength = startingVertexNames.length;

  var _loop = function _loop() {
    var startingVertexName = startingVertexNames.pop(),
        orderedVertexName = startingVertexName; ///

    orderedVertexNames.push(orderedVertexName);
    backwardsForEach(edges, function (edge, index) {
      var sourceVertexName = edge.getSourceVertexName(),
          edgeStarting = sourceVertexName === startingVertexName; ///

      if (edgeStarting) {
        edges.splice(index, 1);
        var targetVertexName = edge.getTargetVertexName(),
            targetVertex = vertexMap[targetVertexName],
            incomingEdge = edge,
            ///
        removedEdge = edge; ///

        targetVertex.removeIncomingEdge(incomingEdge);
        removedEdges.push(removedEdge);
        var targetVertexStarting = targetVertex.isStarting();

        if (targetVertexStarting) {
          var _startingVertexName = targetVertexName; ///

          startingVertexNames.push(_startingVertexName);
        }
      }
    });
    startingVertexNamesLength = startingVertexNames.length;
  };

  while (startingVertexNamesLength > 0) {
    _loop();
  }

  var edgesLength = edges.length;

  if (edgesLength === 0) {
    removedEdges.forEach(function (removedEdge) {
      var targetVertexName = removedEdge.getTargetVertexName(),
          targetVertex = vertexMap[targetVertexName],
          incomingEdge = removedEdge; ///

      targetVertex.addIncomingEdge(incomingEdge);
    });
  }

  var orderedVertices = orderedVertexNames.map(function (orderedVertexName) {
    return vertexMap[orderedVertexName];
  });
  return orderedVertices;
}

function startingVertexNamesFromVertexMap(vertexMap) {
  var vertexNames = Object.keys(vertexMap),
      startingVertexNames = vertexNames.reduce(function (startingVertexNames, vertexName) {
    var vertex = vertexMap[vertexName],
        vertexStarting = vertex.isStarting();

    if (vertexStarting) {
      var startingVertexName = vertexName; ///

      startingVertexNames.push(startingVertexName);
    }

    return startingVertexNames;
  }, []);
  return startingVertexNames;
}

},{"./edge":1,"./remainingEdges":5,"./vertex":6,"necessary":9}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Graph", {
  enumerable: true,
  get: function get() {
    return _graph["default"];
  }
});

var _graph = _interopRequireDefault(require("./graph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./graph":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RemainingEdges = /*#__PURE__*/function () {
  function RemainingEdges(edges) {
    _classCallCheck(this, RemainingEdges);

    this.edges = edges;
  }

  _createClass(RemainingEdges, [{
    key: "areCyclesPresent",
    value: function areCyclesPresent() {
      var edgesLength = this.edges.length,
          cyclesPresent = edgesLength !== 0;
      return cyclesPresent;
    }
  }, {
    key: "forEachEdgeByVertexNames",
    value: function forEachEdgeByVertexNames(callback) {
      this.edges.forEach(function (edge) {
        var sourceVertexName = edge.getSourceVertexName(),
            targetVertexName = edge.getTargetVertexName();
        callback(sourceVertexName, targetVertexName);
      });
    }
  }]);

  return RemainingEdges;
}();

exports["default"] = RemainingEdges;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vertex = /*#__PURE__*/function () {
  function Vertex(name, incomingEdges, outgoingEdges) {
    _classCallCheck(this, Vertex);

    this.name = name;
    this.incomingEdges = incomingEdges;
    this.outgoingEdges = outgoingEdges;
  }

  _createClass(Vertex, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getIncomingEdges",
    value: function getIncomingEdges() {
      return this.incomingEdges;
    }
  }, {
    key: "getOutgoingEdges",
    value: function getOutgoingEdges() {
      return this.outgoingEdges;
    }
  }, {
    key: "isStarting",
    value: function isStarting() {
      var incomingEdgesLength = this.incomingEdges.length,
          starting = incomingEdgesLength === 0; ///

      return starting;
    }
  }, {
    key: "addIncomingEdge",
    value: function addIncomingEdge(incomingEdge) {
      this.incomingEdges.push(incomingEdge);
    }
  }, {
    key: "addOutgoingEdge",
    value: function addOutgoingEdge(outgoingEdge) {
      this.outgoingEdges.push(outgoingEdge);
    }
  }, {
    key: "removeIncomingEdge",
    value: function removeIncomingEdge(incomingEdge) {
      var index = this.incomingEdges.indexOf(incomingEdge);
      this.incomingEdges.splice(index, 1);
    }
  }, {
    key: "forEachIncomingEdge",
    value: function forEachIncomingEdge(callback) {
      this.incomingEdges.forEach(callback);
    }
  }, {
    key: "forEachOutgoingEdge",
    value: function forEachOutgoingEdge(callback) {
      this.outgoingEdges.forEach(callback);
    }
  }], [{
    key: "fromVertexName",
    value: function fromVertexName(vertexName) {
      var name = vertexName,
          ///
      incomingEdges = [],
          outgoingEdges = [],
          vertex = new Vertex(name, incomingEdges, outgoingEdges);
      return vertex;
    }
  }]);

  return Vertex;
}();

exports["default"] = Vertex;

},{}],7:[function(require,module,exports){

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_RC_BASE_EXTENSION = exports.CARRIAGE_RETURN_CHARACTER = exports.LINE_FEED_CHARACTER = exports.BACKSPACE_CHARACTER = exports.ETX_CHARACTER = exports.CTRL_C = exports.UTF8_ENCODING = exports.DATA_EVENT = exports.APPLICATION_JSON_CONTENT_TYPE = exports.APPLICATION_JSON_ACCEPT = exports.POST_METHOD = exports.GET_METHOD = exports.DEFAULT_LOG_FILE_BASE_NAME = exports.DEFAULT_LOG_DIRECTORY_PATH = exports.DEFAULT_LOG_LEVEL = exports.DEFAULT_ATTEMPTS = exports.FATAL = exports.ERROR = exports.WARNING = exports.INFO = exports.DEBUG = exports.TRACE = void 0;
var TRACE = "TRACE";
exports.TRACE = TRACE;
var DEBUG = "DEBUG";
exports.DEBUG = DEBUG;
var INFO = "INFO";
exports.INFO = INFO;
var WARNING = "WARNING";
exports.WARNING = WARNING;
var ERROR = "ERROR";
exports.ERROR = ERROR;
var FATAL = "FATAL";
exports.FATAL = FATAL;
var DEFAULT_ATTEMPTS = 3;
exports.DEFAULT_ATTEMPTS = DEFAULT_ATTEMPTS;
var DEFAULT_LOG_LEVEL = WARNING; ///

exports.DEFAULT_LOG_LEVEL = DEFAULT_LOG_LEVEL;
var DEFAULT_LOG_DIRECTORY_PATH = null;
exports.DEFAULT_LOG_DIRECTORY_PATH = DEFAULT_LOG_DIRECTORY_PATH;
var DEFAULT_LOG_FILE_BASE_NAME = "default";
exports.DEFAULT_LOG_FILE_BASE_NAME = DEFAULT_LOG_FILE_BASE_NAME;
var GET_METHOD = "GET";
exports.GET_METHOD = GET_METHOD;
var POST_METHOD = "POST";
exports.POST_METHOD = POST_METHOD;
var APPLICATION_JSON_ACCEPT = "application/json";
exports.APPLICATION_JSON_ACCEPT = APPLICATION_JSON_ACCEPT;
var APPLICATION_JSON_CONTENT_TYPE = "application/json";
exports.APPLICATION_JSON_CONTENT_TYPE = APPLICATION_JSON_CONTENT_TYPE;
var DATA_EVENT = "data";
exports.DATA_EVENT = DATA_EVENT;
var UTF8_ENCODING = "utf8";
exports.UTF8_ENCODING = UTF8_ENCODING;
var CTRL_C = "^C";
exports.CTRL_C = CTRL_C;
var ETX_CHARACTER = "\x03";
exports.ETX_CHARACTER = ETX_CHARACTER;
var BACKSPACE_CHARACTER = String.fromCharCode(127);
exports.BACKSPACE_CHARACTER = BACKSPACE_CHARACTER;
var LINE_FEED_CHARACTER = "\n";
exports.LINE_FEED_CHARACTER = LINE_FEED_CHARACTER;
var CARRIAGE_RETURN_CHARACTER = "\r";
exports.CARRIAGE_RETURN_CHARACTER = CARRIAGE_RETURN_CHARACTER;
var DEFAULT_RC_BASE_EXTENSION = "";
exports.DEFAULT_RC_BASE_EXTENSION = DEFAULT_RC_BASE_EXTENSION;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "pathUtilities", {
  enumerable: true,
  get: function get() {
    return _path["default"];
  }
});
Object.defineProperty(exports, "arrayUtilities", {
  enumerable: true,
  get: function get() {
    return _array["default"];
  }
});
Object.defineProperty(exports, "templateUtilities", {
  enumerable: true,
  get: function get() {
    return _template["default"];
  }
});
Object.defineProperty(exports, "fileSystemUtilities", {
  enumerable: true,
  get: function get() {
    return _fileSystem["default"];
  }
});
Object.defineProperty(exports, "asynchronousUtilities", {
  enumerable: true,
  get: function get() {
    return _asynchronous["default"];
  }
});
Object.defineProperty(exports, "miscellaneousUtilities", {
  enumerable: true,
  get: function get() {
    return _miscellaneous["default"];
  }
});

var _path = _interopRequireDefault(require("./utilities/path"));

var _array = _interopRequireDefault(require("./utilities/array"));

var _template = _interopRequireDefault(require("./utilities/template"));

var _fileSystem = _interopRequireDefault(require("./utilities/fileSystem"));

var _asynchronous = _interopRequireDefault(require("./utilities/asynchronous"));

var _miscellaneous = _interopRequireDefault(require("./utilities/miscellaneous"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./utilities/array":10,"./utilities/asynchronous":11,"./utilities/fileSystem":12,"./utilities/miscellaneous":13,"./utilities/path":19,"./utilities/template":20}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.first = first;
exports.second = second;
exports.third = third;
exports.fourth = fourth;
exports.fifth = fifth;
exports.fifthLast = fifthLast;
exports.fourthLast = fourthLast;
exports.thirdLast = thirdLast;
exports.secondLast = secondLast;
exports.last = last;
exports.head = head;
exports.tail = tail;
exports.push = push;
exports.unshift = unshift;
exports.concat = concat;
exports.clear = clear;
exports.copy = copy;
exports.merge = merge;
exports.splice = splice;
exports.replace = replace;
exports.filter = filter;
exports.find = find;
exports.prune = prune;
exports.patch = patch;
exports.augment = augment;
exports.separate = separate;
exports.forwardsSome = forwardsSome;
exports.backwardsSome = backwardsSome;
exports.forwardsEvery = forwardsEvery;
exports.backwardsEvery = backwardsEvery;
exports.forwardsReduce = forwardsReduce;
exports.backwardsReduce = backwardsReduce;
exports.forwardsForEach = forwardsForEach;
exports.backwardsForEach = backwardsForEach;
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function first(array) {
  return array[0];
}

function second(array) {
  return array[1];
}

function third(array) {
  return array[2];
}

function fourth(array) {
  return array[3];
}

function fifth(array) {
  return array[4];
}

function fifthLast(array) {
  return array[array.length - 5];
}

function fourthLast(array) {
  return array[array.length - 4];
}

function thirdLast(array) {
  return array[array.length - 3];
}

function secondLast(array) {
  return array[array.length - 2];
}

function last(array) {
  return array[array.length - 1];
}

function head(array) {
  return array.slice(0, 1);
}

function tail(array) {
  return array.slice(1);
}

function push(array1, array2) {
  Array.prototype.push.apply(array1, array2);
}

function unshift(array1, array2) {
  Array.prototype.unshift.apply(array1, array2);
}

function concat(array1, elementOrArray2) {
  var array2 = elementOrArray2 instanceof Array ? elementOrArray2 : [elementOrArray2];
  push(array1, array2);
}

function clear(array) {
  var start = 0;
  return array.splice(start);
}

function copy(array1, array2) {
  var start = 0,
      deleteCount = array2.length; ///

  splice(array1, start, deleteCount, array2);
}

function merge(array1, array2) {
  Array.prototype.push.apply(array1, array2);
}

function splice(array1, start) {
  var deleteCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
  var array2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var args = [start, deleteCount].concat(_toConsumableArray(array2)),
      deletedItemsArray = Array.prototype.splice.apply(array1, args);
  return deletedItemsArray;
}

function replace(array, element, test) {
  var start;
  var found = array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      start = index; ///

      return true;
    }
  });

  if (found) {
    var deleteCount = 1;
    array.splice(start, deleteCount, element);
  }

  return found;
}

function filter(array, test) {
  var filteredElements = [];
  backwardsForEach(array, function (element, index) {
    var passed = test(element, index);

    if (!passed) {
      var start = index,
          ///
      deleteCount = 1,
          deletedElements = array.splice(start, deleteCount),
          firstDeletedElement = first(deletedElements);
      filteredElements.unshift(firstDeletedElement); ///
    }
  });
  return filteredElements;
}

function find(array, test) {
  var elements = [];
  forwardsForEach(array, function (element, index) {
    var passed = test(element, index);

    if (passed) {
      elements.push(element);
    }
  });
  return elements;
}

function prune(array, test) {
  var prunedElement = undefined;
  array.some(function (element, index) {
    var passed = test(element, index);

    if (!passed) {
      var start = index,
          ///
      deleteCount = 1,
          deletedElements = array.splice(start, deleteCount),
          firstDeletedElement = first(deletedElements);
      prunedElement = firstDeletedElement; ///

      return true;
    }
  });
  return prunedElement;
}

function patch(array, element, test) {
  var found = array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      return true;
    }
  });

  if (found) {
    array.push(element);
  }

  return found;
}

function augment(array1, array2, test) {
  array2.forEach(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      array1.push(element);
    }
  });
}

function separate(array, array1, array2, test) {
  array.forEach(function (element, index) {
    var passed = test(element, index);
    passed ? array1.push(element) : array2.push(element);
  });
}

function forwardsSome(array, callback) {
  var arrayLength = array.length;

  for (var index = 0; index < arrayLength; index++) {
    var element = array[index],
        result = callback(element, index);

    if (result) {
      return true;
    }
  }

  return false;
}

function backwardsSome(array, callback) {
  var arrayLength = array.length;

  for (var index = arrayLength - 1; index >= 0; index--) {
    var element = array[index],
        result = callback(element, index);

    if (result) {
      return true;
    }
  }

  return false;
}

function forwardsEvery(array, callback) {
  var arrayLength = array.length;

  for (var index = 0; index < arrayLength; index++) {
    var element = array[index],
        result = callback(element, index);

    if (!result) {
      return false;
    }
  }

  return true;
}

function backwardsEvery(array, callback) {
  var arrayLength = array.length;

  for (var index = arrayLength - 1; index >= 0; index--) {
    var element = array[index],
        result = callback(element, index);

    if (!result) {
      return false;
    }
  }

  return true;
}

function forwardsReduce(array, callback, initialValue) {
  var value = initialValue;
  forwardsForEach(array, function (element, index) {
    value = callback(value, element, index);
  });
  return value;
}

function backwardsReduce(array, callback, initialValue) {
  var value = initialValue;
  backwardsForEach(array, function (element, index) {
    value = callback(value, element, index);
  });
  return value;
}

function forwardsForEach(array, callback) {
  var arrayLength = array.length;

  for (var index = 0; index < arrayLength; index++) {
    var element = array[index];
    callback(element, index);
  }
}

function backwardsForEach(array, callback) {
  var arrayLength = array.length;

  for (var index = arrayLength - 1; index >= 0; index--) {
    var element = array[index];
    callback(element, index);
  }
}

var _default = {
  first: first,
  second: second,
  third: third,
  fourth: fourth,
  fifth: fifth,
  fifthLast: fifthLast,
  fourthLast: fourthLast,
  thirdLast: thirdLast,
  secondLast: secondLast,
  last: last,
  head: head,
  tail: tail,
  push: push,
  unshift: unshift,
  concat: concat,
  clear: clear,
  copy: copy,
  merge: merge,
  splice: splice,
  replace: replace,
  filter: filter,
  find: find,
  prune: prune,
  patch: patch,
  augment: augment,
  separate: separate,
  forwardsSome: forwardsSome,
  backwardsSome: backwardsSome,
  forwardsEvery: forwardsEvery,
  backwardsEvery: backwardsEvery,
  forwardsReduce: forwardsReduce,
  backwardsReduce: backwardsReduce,
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};
exports["default"] = _default;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whilst = whilst;
exports.forEach = forEach;
exports.sequence = sequence;
exports.eventually = eventually;
exports.repeatedly = repeatedly;
exports.forwardsForEach = forwardsForEach;
exports.backwardsForEach = backwardsForEach;
exports["default"] = void 0;

function whilst(callback, done, context) {
  var count = -1;

  function next() {
    count++;
    var index = count,
        ///
    terminate = callback(next, done, context, index);

    if (terminate) {
      done();
    }
  }

  next();
}

function forEach(array, callback, done, context) {
  var length = array.length; ///

  var count = -1;

  function next() {
    count++;
    var terminate = count === length;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      element = array[index];
      callback(element, next, done, context, index);
    }
  }

  next();
}

function sequence(callbacks, done, context) {
  var length = callbacks.length; ///

  var count = -1;

  function next() {
    count++;
    var terminate = count === length;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      callback = callbacks[index];
      callback(next, done, context, index);
    }
  }

  next();
}

function eventually(callbacks, done, context) {
  var length = callbacks.length; ///

  var count = 0;

  function next() {
    count++;
    var terminate = count === length;

    if (terminate) {
      done();
    }
  }

  callbacks.forEach(function (callback, index) {
    callback(next, done, context, index);
  });
}

function repeatedly(callback, length, done, context) {
  var count = 0;

  function next() {
    count++;
    var terminate = count === length;

    if (terminate) {
      done();
    }
  }

  for (var index = 0; index < length; index++) {
    callback(next, done, context, index);
  }
}

function forwardsForEach(array, callback, done, context) {
  var length = array.length; ///

  var count = -1;

  function next() {
    count++;
    var terminate = count === length;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      element = array[index];
      callback(element, next, done, context, index);
    }
  }

  next();
}

function backwardsForEach(array, callback, done, context) {
  var length = array.length; ///

  var count = length;

  function next() {
    count--;
    var terminate = count === -1;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      element = array[index];
      callback(element, next, done, context, index);
    }
  }

  next();
}

var _default = {
  whilst: whilst,
  forEach: forEach,
  sequence: sequence,
  eventually: eventually,
  repeatedly: repeatedly,
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};
exports["default"] = _default;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkEntryExists = checkEntryExists;
exports.checkFileExists = checkFileExists;
exports.checkDirectoryExists = checkDirectoryExists;
exports.isEntryFile = isEntryFile;
exports.isEntryDirectory = isEntryDirectory;
exports.isDirectoryEmpty = isDirectoryEmpty;
exports.readDirectory = readDirectory;
exports.readFile = readFile;
exports.writeFile = writeFile;
exports.appendToFile = appendToFile;
exports.createDirectory = createDirectory;
exports.renameFile = renameFile;
exports.getStats = getStats;
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _constants = require("../constants");

var _path = require("../utilities/path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function checkEntryExists(entryPath) {
  var entryExists = _fs["default"].existsSync(entryPath);

  return entryExists;
}

function checkFileExists(filePath) {
  var fileExists = false;
  var entryPath = filePath,
      ///
  entryExists = checkEntryExists(entryPath);

  if (entryExists) {
    var entryFile = isEntryFile(entryPath);

    if (entryFile) {
      fileExists = true;
    }
  }

  return fileExists;
}

function checkDirectoryExists(directoryPath) {
  var directoryExists = false;
  var entryPath = directoryPath,
      ///
  entryExists = checkEntryExists(entryPath);

  if (entryExists) {
    var entryDirectory = isEntryDirectory(entryPath);

    if (entryDirectory) {
      directoryExists = true;
    }
  }

  return directoryExists;
}

function isEntryFile(entryPath) {
  var stat = _fs["default"].statSync(entryPath),
      entryDirectory = stat.isDirectory(),
      entryFile = !entryDirectory;

  return entryFile;
}

function isEntryDirectory(entryPath) {
  var stat = _fs["default"].statSync(entryPath),
      entryDirectory = stat.isDirectory();

  return entryDirectory;
}

function isDirectoryEmpty(directoryPath) {
  var subEntryNames = readDirectory(directoryPath),
      subEntryNamesLength = subEntryNames.length,
      directoryEmpty = subEntryNamesLength === 0;
  return directoryEmpty;
}

function readDirectory(directoryPath) {
  var subEntryNames = _fs["default"].readdirSync(directoryPath);

  return subEntryNames;
}

function readFile(filePath) {
  var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.UTF8_ENCODING;

  var options = {
    encoding: encoding
  },
      content = _fs["default"].readFileSync(filePath, options);

  return content;
}

function writeFile(filePath, content) {
  _fs["default"].writeFileSync(filePath, content);
}

function appendToFile(filePath, content) {
  _fs["default"].appendFileSync(filePath, content);
}

function createDirectory(directoryPath) {
  var directoryPathWithoutBottommostName = (0, _path.pathWithoutBottommostNameFromPath)(directoryPath);

  if (directoryPathWithoutBottommostName !== "." && directoryPathWithoutBottommostName !== null) {
    var parentDirectoryPath = directoryPathWithoutBottommostName,
        ///
    parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);

    if (!parentDirectoryExists) {
      createDirectory(parentDirectoryPath);
    }
  }

  _fs["default"].mkdirSync(directoryPath);
}

function renameFile(oldFilePath, newFilePath) {
  _fs["default"].renameSync(oldFilePath, newFilePath);
}

function getStats(filePath) {
  return _fs["default"].statSync(filePath);
}

var _default = {
  checkEntryExists: checkEntryExists,
  checkFileExists: checkFileExists,
  checkDirectoryExists: checkDirectoryExists,
  isEntryFile: isEntryFile,
  isEntryDirectory: isEntryDirectory,
  isDirectoryEmpty: isDirectoryEmpty,
  readDirectory: readDirectory,
  readFile: readFile,
  writeFile: writeFile,
  appendToFile: appendToFile,
  createDirectory: createDirectory,
  renameFile: renameFile,
  getStats: getStats
};
exports["default"] = _default;

},{"../constants":8,"../utilities/path":19,"fs":7}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rc = _interopRequireDefault(require("./miscellaneous/rc"));

var _log = _interopRequireDefault(require("./miscellaneous/log"));

var _onETX = _interopRequireDefault(require("./miscellaneous/onETX"));

var _prompt = _interopRequireDefault(require("./miscellaneous/prompt"));

var _ajax = require("./miscellaneous/ajax");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  log: _log["default"],
  rc: _rc["default"],
  get: _ajax.get,
  post: _ajax.post,
  onETX: _onETX["default"],
  prompt: _prompt["default"],
  request: _ajax.request
};
exports["default"] = _default;

},{"./miscellaneous/ajax":14,"./miscellaneous/log":15,"./miscellaneous/onETX":16,"./miscellaneous/prompt":17,"./miscellaneous/rc":18}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.post = post;
exports.request = request;

var _constants = require("../../constants");

function get(host, path, parameters, callback) {
  if (callback === undefined) {
    callback = parameters; ///

    parameters = {};
  }

  var method = _constants.GET_METHOD,
      body = undefined;
  request(host, path, parameters, method, body, callback);
}

function post(host, path, json, parameters, callback) {
  if (callback === undefined) {
    callback = parameters; ///

    parameters = {};
  }

  var method = _constants.POST_METHOD,
      body = JSON.stringify(json);
  request(host, path, parameters, method, body, callback);
}

function request(host, path, parameters, method, body, callback) {
  var url = urlFromHostPathAndParameters(host, path, parameters),
      accept = _constants.APPLICATION_JSON_ACCEPT,
      xmlHttpRequest = new XMLHttpRequest();

  xmlHttpRequest.onreadystatechange = function () {
    var readyState = xmlHttpRequest.readyState,
        status = xmlHttpRequest.status,
        responseText = xmlHttpRequest.responseText;

    if (readyState == 4) {
      var json = null;

      if (status == 200) {
        var jsonString = responseText; ///

        try {
          json = JSON.parse(jsonString);
        } catch (error) {///
        }
      }

      callback(json, status);
    }
  };

  xmlHttpRequest.open(method, url);
  xmlHttpRequest.setRequestHeader("accept", accept);

  if (method === _constants.POST_METHOD) {
    var contentType = _constants.APPLICATION_JSON_CONTENT_TYPE;
    xmlHttpRequest.setRequestHeader("content-type", contentType);
  }

  xmlHttpRequest.send(body);
}

function queryStringFromParameters(parameters) {
  var names = Object.keys(parameters),
      namesLength = names.length,
      lastIndex = namesLength - 1,
      queryString = names.reduce(function (queryString, name, index) {
    var value = parameters[name],
        encodedName = encodeURIComponent(name),
        encodedValue = encodeURIComponent(value),
        ampersandOrNothing = index !== lastIndex ? "&" : "";
    queryString += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
    return queryString;
  }, "");
  return queryString;
}

function urlFromHostPathAndParameters(host, path, parameters) {
  var queryString = queryStringFromParameters(parameters),
      url = queryString === "" ? "".concat(host).concat(path) : "".concat(host).concat(path, "?").concat(queryString);
  return url;
}

},{"../../constants":8}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = log;

var _path = _interopRequireDefault(require("path"));

var _array = require("../../utilities/array");

var _path2 = require("../../utilities/path");

var _fileSystem = require("../../utilities/fileSystem");

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var levels = [_constants.TRACE, _constants.DEBUG, _constants.INFO, _constants.WARNING, _constants.ERROR, _constants.FATAL];
var logLevel = _constants.DEFAULT_LOG_LEVEL,
    logFileBaseName = _constants.DEFAULT_LOG_FILE_BASE_NAME,
    logDirectoryPath = _constants.DEFAULT_LOG_DIRECTORY_PATH;

function log(messageOrError) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var salientStackMessageIndex = 1;

  if (level !== "") {
    var levelIndex = levels.indexOf(level),
        logLevelIndex = levels.indexOf(logLevel);

    if (levelIndex < logLevelIndex) {
      return;
    }

    salientStackMessageIndex += 1;
    level = "".concat(level, " "); ///
  }

  var error, message;

  if (messageOrError instanceof Error) {
    error = messageOrError; ///

    var _error = error;
    message = _error.message;
  } else {
    message = messageOrError; ///

    error = new Error(message);
  }

  var _error2 = error,
      stack = _error2.stack,
      stackMessages = stackMessagesFromStack(stack),
      pertinentStackMessage = stackMessages[salientStackMessageIndex],
      stackMessage = pertinentStackMessage,
      currentDateAndTimeString = getCurrentDateAndTimeString(),
      filePath = filePathFromStackMessage(stackMessage),
      lineNumber = lineNumberFromStackMessage(stackMessage),
      logMessage = "".concat(level).concat(currentDateAndTimeString, " ").concat(filePath, "(").concat(lineNumber, ") ").concat(message);
  console.log(logMessage);

  if (logDirectoryPath !== null) {
    rollOverLogFile();
    var logFilePath = getLogFilePath(),
        logFileContent = "".concat(logMessage, "\n");
    (0, _fileSystem.appendToFile)(logFilePath, logFileContent);
  }

  return logMessage;
}

function trace(message) {
  return log(message, _constants.TRACE);
}

function debug(message) {
  return log(message, _constants.DEBUG);
}

function info(message) {
  return log(message, _constants.INFO);
}

function warning(message) {
  return log(message, _constants.WARNING);
}

function error(message) {
  return log(message, _constants.ERROR);
}

function fatal(message) {
  return log(message, _constants.FATAL);
}

function setLogLevel(level) {
  logLevel = level;
}

function setLogFileBaseName(fileBaseName) {
  logFileBaseName = fileBaseName;
}

function setLogDirectoryPath(directoryPath) {
  logDirectoryPath = directoryPath;
}

function setLogOptions(logOptions) {
  var level = logOptions.level,
      fileBaseName = logOptions.fileBaseName,
      directoryPath = logOptions.directoryPath;
  setLogLevel(level);
  setLogFileBaseName(fileBaseName);
  setLogDirectoryPath(directoryPath);
}

function getLogFileContent() {
  var logFilePath = getLogFilePath(),
      logFileContent = (0, _fileSystem.readFile)(logFilePath);
  return logFileContent;
}

Object.assign(log, {
  TRACE: _constants.TRACE,
  DEBUG: _constants.DEBUG,
  INFO: _constants.INFO,
  WARNING: _constants.WARNING,
  ERROR: _constants.ERROR,
  FATAL: _constants.FATAL,
  trace: trace,
  debug: debug,
  info: info,
  warning: warning,
  error: error,
  fatal: fatal,
  setLogLevel: setLogLevel,
  setLogFileBaseName: setLogFileBaseName,
  setLogDirectoryPath: setLogDirectoryPath,
  setLogOptions: setLogOptions,
  getLogFileContent: getLogFileContent
});

function getLogFilePath() {
  var logFileName = "".concat(logFileBaseName, ".log"),
      logFilePath = (0, _path2.concatenatePaths)(logDirectoryPath, logFileName);
  return logFilePath;
}

function getRolledOverLogFilePath() {
  var currentDateString = getCurrentDateString(),
      rolledOverLogFileName = "".concat(logFileBaseName, ".").concat(currentDateString, ".log"),
      rolledOverLogFilePath = (0, _path2.concatenatePaths)(logDirectoryPath, rolledOverLogFileName);
  return rolledOverLogFilePath;
}

function getLogFileLastModifiedDate() {
  var logFilePath = getLogFilePath(),
      logFileStats = (0, _fileSystem.getStats)(logFilePath),
      mtime = logFileStats.mtime,
      logFileLastModifiedDate = new Date(mtime); ///

  return logFileLastModifiedDate;
}

function rollOverLogFile() {
  var logFilePath = getLogFilePath(),
      logFileExists = (0, _fileSystem.checkFileExists)(logFilePath);

  if (!logFileExists) {
    return;
  }

  var logFileLastModifiedDate = getLogFileLastModifiedDate(),
      logFileLastModifiedDateCurrentDate = isDateCurrentDate(logFileLastModifiedDate);

  if (!logFileLastModifiedDateCurrentDate) {
    var rolledOverLogFilePath = getRolledOverLogFilePath();
    (0, _fileSystem.renameFile)(logFilePath, rolledOverLogFilePath);
  }
}

function isDateCurrentDate(date) {
  var currentDate = new Date(),
      dateString = date.toDateString(),
      currentDateString = currentDate.toDateString(),
      dateCurrentDate = dateString === currentDateString;
  return dateCurrentDate;
}

function getCurrentDateString() {
  var date = new Date(),
      day = padStartWithZeroes(date.getDate(), 2),
      ///
  month = padStartWithZeroes(date.getMonth() + 1, 2),
      ///
  year = date.getFullYear(),
      currentDateAndTimeString = "".concat(day, "-").concat(month, "-").concat(year);
  return currentDateAndTimeString;
}

function getCurrentDateAndTimeString() {
  var date = new Date(),
      day = padStartWithZeroes(date.getDate(), 2),
      ///
  month = padStartWithZeroes(date.getMonth() + 1, 2),
      ///
  year = date.getFullYear(),
      hours = padStartWithZeroes(date.getHours(), 2),
      minutes = padStartWithZeroes(date.getMinutes(), 2),
      seconds = padStartWithZeroes(date.getSeconds(), 2),
      milliseconds = padStartWithZeroes(date.getMilliseconds(), 3),
      currentDateAndTimeString = "".concat(day, "-").concat(month, "-").concat(year, " ").concat(hours, ":").concat(minutes, ":").concat(seconds, ".").concat(milliseconds);
  return currentDateAndTimeString;
}

function stackMessagesFromStack(stack) {
  var stackMessages = [],
      stackLines = stack.split(/\r\n|\n/);
  var stackMessage = "";
  stackLines.forEach(function (stackLine) {
    var matches = /^\s*at.*/.test(stackLine);
    stackMessage = stackMessage === "" ? stackLine : "".concat(stackMessage, "\n").concat(stackLine);

    if (matches) {
      stackMessages.push(stackMessage);
      stackMessage = "";
    }
  });
  return stackMessages;
}

function filePathFromStackMessage(stackMessage) {
  var matches = stackMessage.match(/(\/.+):\d+:\d+/m),
      secondMatch = (0, _array.second)(matches),
      absoluteFilePath = secondMatch,
      ///
  currentWorkingDirectoryPath = _path["default"].resolve("."),
      ///
  currentWorkingDirectoryPathLength = currentWorkingDirectoryPath.length,
      start = currentWorkingDirectoryPathLength + 1,
      ///
  filePath = absoluteFilePath.substr(start);

  return filePath;
}

function lineNumberFromStackMessage(stackMessage) {
  var matches = stackMessage.match(/:(\d+)/m),
      secondMatch = (0, _array.second)(matches),
      lineNumber = secondMatch; ///

  return lineNumber;
}

function padStartWithZeroes(string, targetLength) {
  var padString = "0",
      paddedString = padStart(string, targetLength, padString);
  return paddedString;
}

function padStart(string, targetLength, padString) {
  var padding = "";

  for (var index = 0; index < targetLength; index++) {
    padding += padString;
  }

  var paddedString = "".concat(padding).concat(string).substr(-targetLength);
  return paddedString;
}

},{"../../constants":8,"../../utilities/array":10,"../../utilities/fileSystem":12,"../../utilities/path":19,"path":21}],16:[function(require,module,exports){
(function (process){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = onETX;

var _constants = require("../../constants");

function onETX(handler) {
  var event = _constants.DATA_EVENT;

  if (process.stdin.setRawMode) {
    var rawMode = true,
        encoding = _constants.UTF8_ENCODING;
    process.stdin.setRawMode(rawMode);
    process.stdin.setEncoding(encoding);
    process.stdin.resume();
    process.stdin.addListener(event, dataHandler);
    return offExt;
  }

  function offExt() {
    process.stdin.removeListener(event, dataHandler);
  }

  function dataHandler(character) {
    if (character === _constants.ETX_CHARACTER) {
      handler();
    }
  }
}

}).call(this)}).call(this,require('_process'))

},{"../../constants":8,"_process":22}],17:[function(require,module,exports){
(function (process){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = prompt;

var _onETX = _interopRequireDefault(require("./onETX"));

var _asynchronous = require("../../utilities/asynchronous");

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function prompt(options, callback) {
  var force = options.force;

  if (force) {
    var _value = force; ///

    callback(_value);
    return;
  }

  var value = null,
      _options$attempts = options.attempts,
      attempts = _options$attempts === void 0 ? _constants.DEFAULT_ATTEMPTS : _options$attempts,
      context = {
    value: value,
    attempts: attempts,
    options: options
  };
  (0, _asynchronous.whilst)(attempt, function () {
    var value = context.value;
    callback(value);
  }, context);
}

function attempt(next, done, context) {
  var attempts = context.attempts;
  var terminate = attempts-- === 0;

  if (terminate) {
    done();
    return;
  }

  var options = context.options,
      _options$hidden = options.hidden,
      hidden = _options$hidden === void 0 ? false : _options$hidden,
      _options$encoding = options.encoding,
      encoding = _options$encoding === void 0 ? "utf8" : _options$encoding,
      description = options.description,
      _options$initialValue = options.initialValue,
      initialValue = _options$initialValue === void 0 ? "" : _options$initialValue,
      errorMessage = options.errorMessage,
      validationPattern = options.validationPattern,
      validationFunction = options.validationFunction;
  input(description, initialValue, encoding, hidden, callback);

  function callback(value) {
    var valid = validationFunction ? ///
    validationFunction(value) : validationPattern.test(value);

    if (valid) {
      Object.assign(context, {
        value: value
      });
      done();
    } else {
      console.log(errorMessage);
      Object.assign(context, {
        attempts: attempts
      });
      next();
    }
  }
}

function input(description, initialValue, encoding, hidden, callback) {
  var value = initialValue; ///

  var event = _constants.DATA_EVENT,
      rawMode = true,
      offETX = (0, _onETX["default"])(function () {
    console.log(_constants.CTRL_C);
    process.exit();
  });
  process.stdin.setEncoding(encoding);
  process.stdin.setRawMode(rawMode);
  process.stdout.write(description);

  if (!hidden) {
    process.stdout.write(value);
  }

  process.stdin.resume();
  process.stdin.on(event, listener);

  function listener(chunk) {
    var character = chunk.toString(encoding);

    switch (character) {
      case _constants.LINE_FEED_CHARACTER:
      case _constants.CARRIAGE_RETURN_CHARACTER:
        process.stdout.write(_constants.LINE_FEED_CHARACTER);
        process.stdin.removeListener(event, listener);
        process.stdin.pause();
        offETX();
        callback(value);
        break;

      case _constants.BACKSPACE_CHARACTER:
        value = value.slice(0, value.length - 1);
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(description);

        if (!hidden) {
          process.stdout.write(value);
        }

        break;

      default:
        value += character;

        if (!hidden) {
          process.stdout.clearLine();
          process.stdout.cursorTo(0);
          process.stdout.write(description);
          process.stdout.write(value);
        }

        break;
    }
  }
}

}).call(this)}).call(this,require('_process'))

},{"../../constants":8,"../../utilities/asynchronous":11,"./onETX":16,"_process":22}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rc;

var _path = _interopRequireDefault(require("path"));

var _array = require("../../utilities/array");

var _constants = require("../../constants");

var _fileSystem = require("../../utilities/fileSystem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pathResolver = _path["default"].resolve,
    baseExtension = _constants.DEFAULT_RC_BASE_EXTENSION;

function rc() {
  var environmentNameOrArgv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var environment,
      environmentName,
      environmentNameOrArgvArgv = environmentNameOrArgv instanceof Array;

  if (environmentNameOrArgvArgv) {
    var argv = environmentNameOrArgv; ///

    environmentName = environmentNameFromArgv(argv);
  } else {
    environmentName = environmentNameOrArgv; ///
  }

  var json = readRCFile(),
      environments = json.environments;

  if (environmentName === null) {
    var firstEnvironment = (0, _array.first)(environments);
    environment = firstEnvironment; ///
  } else {
    environment = environments.find(function (environment) {
      var name = environment.name,
          found = name === environmentName;
      return found;
    });
  }

  delete environment.name;
  Object.assign(rc, environment);
  return environment;
}

function readRCFile() {
  var absoluteRCFilePath = absoluteRCFilePathFromNothing(),
      fileContent = (0, _fileSystem.readFile)(absoluteRCFilePath),
      json = JSON.parse(fileContent);
  return json;
}

function writeRCFile(json) {
  var absoluteRCFilePath = absoluteRCFilePathFromNothing(),
      fileContent = JSON.stringify(json, null, "\t");
  (0, _fileSystem.writeFile)(absoluteRCFilePath, fileContent);
}

function updateRCFile(addedProperties) {
  var json = readRCFile();

  if (addedProperties) {
    Object.assign(json, addedProperties);
  }

  for (var _len = arguments.length, deletedPropertyNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    deletedPropertyNames[_key - 1] = arguments[_key];
  }

  deletedPropertyNames.forEach(function (deletedPropertyName) {
    delete json[deletedPropertyName];
  });
  writeRCFile(json);
}

function checkRCFileExists() {
  var absoluteRCFilePath = absoluteRCFilePathFromNothing(),
      rcFileExists = (0, _fileSystem.checkFileExists)(absoluteRCFilePath);
  return rcFileExists;
}

function createVacuousRCFile() {
  var json = {
    "environments": [{}]
  };
  writeRCFile(json);
}

function setRCBaseExtension(rcBaseExtension) {
  baseExtension = rcBaseExtension;
}

function setRCPathResolver(rcPathResolver) {
  pathResolver = rcPathResolver;
}

Object.assign(rc, {
  readRCFile: readRCFile,
  writeRCFile: writeRCFile,
  updateRCFile: updateRCFile,
  checkRCFileExists: checkRCFileExists,
  createVacuousRCFile: createVacuousRCFile,
  setRCBaseExtension: setRCBaseExtension,
  setRCPathResolver: setRCPathResolver
});

function environmentNameFromArgv(argv) {
  var environmentName = null;
  argv.find(function (argument) {
    ///
    var matches = argument.match(/--environment=(.+)/),
        found = matches !== null;

    if (found) {
      var secondMatch = (0, _array.second)(matches);
      environmentName = secondMatch;
    }

    return found;
  });
  return environmentName;
}

function absoluteRCFilePathFromNothing() {
  var filePath = "./.".concat(baseExtension, "rc"),
      absoluteRCFilePath = pathResolver(filePath);
  return absoluteRCFilePath;
}

},{"../../constants":8,"../../utilities/array":10,"../../utilities/fileSystem":12,"path":21}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPathName = isPathName;
exports.isPathTopmostName = isPathTopmostName;
exports.isPathRelativePath = isPathRelativePath;
exports.isPathAbsolutePath = isPathAbsolutePath;
exports.isTopmostNameInAbsolutePath = isTopmostNameInAbsolutePath;
exports.combinePaths = combinePaths;
exports.concatenatePaths = concatenatePaths;
exports.bottommostNameFromPath = bottommostNameFromPath;
exports.topmostDirectoryPathFromPath = topmostDirectoryPathFromPath;
exports.topmostDirectoryNameFromPath = topmostDirectoryNameFromPath;
exports.pathWithoutBottommostNameFromPath = pathWithoutBottommostNameFromPath;
exports.pathWithoutTopmostDirectoryNameFromPath = pathWithoutTopmostDirectoryNameFromPath;
exports["default"] = void 0;

var _array = require("../utilities/array");

function isPathName(path) {
  path = path.replace(/^\//, "").replace(/\/$/, ""); ///

  var pathName = /\//.test(path) === false;
  return pathName;
}

function isPathTopmostName(path) {
  var pathName = isPathName(path),
      pathAbsolutePath = isPathAbsolutePath(path),
      pathTopmostName = pathName && pathAbsolutePath;
  return pathTopmostName;
}

function isPathRelativePath(path) {
  var pathRelativePath = !/^\//.test(path);
  return pathRelativePath;
}

function isPathAbsolutePath(path) {
  var pathAbsolutePath = /^\//.test(path);
  return pathAbsolutePath;
}

function isTopmostNameInAbsolutePath(topmostName, absolutePath) {
  var regExp = new RegExp("^".concat(topmostName, "(?:\\/.+)?$")),
      topmostNameInAbsolutePath = regExp.test(absolutePath);
  return topmostNameInAbsolutePath;
}

function combinePaths(path, relativePath) {
  var combinedPath = null;
  var pathNames = path.split(/\//),
      relativePathNames = relativePath.split(/\//);
  var lastPathName,
      firstRelativePathName = (0, _array.first)(relativePathNames);

  if (firstRelativePathName === ".") {
    relativePathNames.shift();
  }

  firstRelativePathName = (0, _array.first)(relativePathNames);
  lastPathName = (0, _array.last)(pathNames);

  while (firstRelativePathName === ".." && lastPathName !== undefined) {
    relativePathNames.shift();
    pathNames.pop();
    firstRelativePathName = (0, _array.first)(relativePathNames);
    lastPathName = (0, _array.last)(pathNames);
  }

  if (lastPathName !== undefined) {
    var combinedPathNames = [].concat(pathNames).concat(relativePathNames);
    combinedPath = combinedPathNames.join("/");
  }

  return combinedPath;
}

function concatenatePaths(path, relativePath) {
  path = path.replace(/\/$/, ""); ///

  var concatenatedPath = "".concat(path, "/").concat(relativePath);
  return concatenatedPath;
}

function bottommostNameFromPath(path) {
  var bottommostName = null;
  var matches = path.match(/^.*\/([^\/]+\/?)$/);

  if (matches !== null) {
    var secondMatch = (0, _array.second)(matches);
    bottommostName = secondMatch; ///
  }

  return bottommostName;
}

function topmostDirectoryPathFromPath(path) {
  var matches = path.match(/^(.+)\/[^\/]+\/?$/),
      secondMatch = (0, _array.second)(matches),
      topmostDirectoryPath = secondMatch; ///

  return topmostDirectoryPath;
}

function topmostDirectoryNameFromPath(path) {
  var topmostDirectoryName = null;
  var matches = path.match(/^([^\/]+)\/.+$/);

  if (matches !== null) {
    var secondMatch = (0, _array.second)(matches);
    topmostDirectoryName = secondMatch; ///
  }

  return topmostDirectoryName;
}

function pathWithoutBottommostNameFromPath(path) {
  var pathWithoutBottommostName = null;
  var matches = path.match(/^(.*)\/[^\/]+\/?$/);

  if (matches !== null) {
    var secondMatch = (0, _array.second)(matches);
    pathWithoutBottommostName = secondMatch; ///
  }

  return pathWithoutBottommostName;
}

function pathWithoutTopmostDirectoryNameFromPath(path) {
  var pathWithoutTopmostDirectoryName = null;
  var matches = path.match(/^[^\/]+\/(.+)$/);

  if (matches !== null) {
    var secondMatch = (0, _array.second)(matches);
    pathWithoutTopmostDirectoryName = secondMatch;
  }

  return pathWithoutTopmostDirectoryName;
}

var _default = {
  isPathName: isPathName,
  isPathTopmostName: isPathTopmostName,
  isPathRelativePath: isPathRelativePath,
  isPathAbsolutePath: isPathAbsolutePath,
  isTopmostNameInAbsolutePath: isTopmostNameInAbsolutePath,
  combinePaths: combinePaths,
  concatenatePaths: concatenatePaths,
  bottommostNameFromPath: bottommostNameFromPath,
  topmostDirectoryPathFromPath: topmostDirectoryPathFromPath,
  topmostDirectoryNameFromPath: topmostDirectoryNameFromPath,
  pathWithoutBottommostNameFromPath: pathWithoutBottommostNameFromPath,
  pathWithoutTopmostDirectoryNameFromPath: pathWithoutTopmostDirectoryNameFromPath
};
exports["default"] = _default;

},{"../utilities/array":10}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFile = parseFile;
exports.parseContent = parseContent;
exports.parseLine = parseLine;
exports["default"] = void 0;

var _fileSystem = require("../utilities/fileSystem");

function parseFile(filePath, args, regex) {
  var content = (0, _fileSystem.readFile)(filePath),
      parsedContent = parseContent(content, args, regex);
  return parsedContent;
}

function parseContent(content, args, regex) {
  var lines = content.split("\n"),
      parsedLines = parseLines(lines, args, regex),
      parsedContent = parsedLines.join("\n");
  return parsedContent;
}

function parseLine(line, args) {
  var regex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : /\${(.+?)}/g;
  var parsedLine = line.replace(regex, function (match, token) {
    var parsedToken = parseToken(token, args);
    return parsedToken;
  });
  return parsedLine;
}

var _default = {
  parseFile: parseFile,
  parseContent: parseContent,
  parseLine: parseLine
};
exports["default"] = _default;

function parseLines(lines, args, regex) {
  var parsedLines = lines.map(function (line) {
    var parsedLine = parseLine(line, args, regex);
    return parsedLine;
  });
  return parsedLines;
}

function parseToken(token, args) {
  var parsedToken = "";

  if (args.hasOwnProperty(token)) {
    parsedToken = args[token];
  }

  return parsedToken;
}

},{"../utilities/fileSystem":12}],21:[function(require,module,exports){
(function (process){(function (){
// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this)}).call(this,require('_process'))

},{"_process":22}],22:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvZWRnZS5qcyIsImxpYi9leGFtcGxlLmpzIiwibGliL2dyYXBoLmpzIiwibGliL2luZGV4LmpzIiwibGliL3JlbWFpbmluZ0VkZ2VzLmpzIiwibGliL3ZlcnRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L2xpYi9fZW1wdHkuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi9jb25zdGFudHMuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMvYWpheC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL2xvZy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL29uRVRYLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMvcHJvbXB0LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMvcmMuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvcGF0aC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy90ZW1wbGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7Ozs7Ozs7SUFFcUIsSTtBQUNuQixnQkFBWSxnQkFBWixFQUE4QixnQkFBOUIsRUFBZ0Q7QUFBQTs7QUFDOUMsU0FBSyxnQkFBTCxHQUF3QixnQkFBeEI7QUFDQSxTQUFLLGdCQUFMLEdBQXdCLGdCQUF4QjtBQUNEOzs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUssZ0JBQVo7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUssZ0JBQVo7QUFDRDs7Ozs7Ozs7O0FDZEg7O0FBRUE7O0FBQWdDO0FBRWhDLElBQU0sS0FBSyxHQUFHLGFBQU0sa0JBQU4sQ0FBeUIsQ0FFckMsQ0FBQyxHQUFELEVBQU0sQ0FBQyxHQUFELENBQU4sQ0FGcUMsRUFHckMsQ0FBQyxHQUFELEVBQU0sQ0FBQyxHQUFELENBQU4sQ0FIcUMsRUFJckMsQ0FBQyxHQUFELEVBQU0sQ0FBQyxHQUFELENBQU4sQ0FKcUMsRUFLckMsQ0FBQyxHQUFELEVBQU0sRUFBTixDQUxxQyxFQU1yQyxDQUFDLEdBQUQsRUFBTSxDQUFDLEdBQUQsQ0FBTixDQU5xQyxFQU9yQyxDQUFDLEdBQUQsRUFBTSxDQUFDLEdBQUQsQ0FBTixDQVBxQyxDQUF6QixDQUFkOztBQVdBLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxnQkFBTixFQUF0QjtBQUFBLElBQ00sY0FBYyxHQUFHLEtBQUssQ0FBQyxpQkFBTixFQUR2QjtBQUFBLElBRU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxrQkFBTixFQUZ4Qjs7O0FDZkE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVRLEssR0FBb0MseUIsQ0FBcEMsSztJQUFPLE0sR0FBNkIseUIsQ0FBN0IsTTtJQUFRLGdCLEdBQXFCLHlCLENBQXJCLGdCOztJQUVGLEs7QUFDbkIsaUJBQVksZUFBWixFQUE2QixjQUE3QixFQUE2QztBQUFBOztBQUMzQyxTQUFLLGVBQUwsR0FBdUIsZUFBdkI7QUFDQSxTQUFLLGNBQUwsR0FBc0IsY0FBdEI7QUFDRDs7Ozt5Q0FFb0I7QUFDbkIsYUFBTyxLQUFLLGVBQVo7QUFDRDs7O3dDQUVtQjtBQUNsQixhQUFPLEtBQUssY0FBWjtBQUNEOzs7dUNBRWtCO0FBQUUsYUFBTyxLQUFLLGNBQUwsQ0FBb0IsZ0JBQXBCLEVBQVA7QUFBZ0Q7Ozt1Q0FFM0MsYyxFQUFnQjtBQUN4QyxVQUFNLFNBQVMsR0FBRywyQkFBMkIsQ0FBQyxjQUFELENBQTdDO0FBQUEsVUFDTSxLQUFLLEdBQUcsbUNBQW1DLENBQUMsY0FBRCxFQUFpQixTQUFqQixDQURqRDtBQUFBLFVBRU0sZUFBZSxHQUFHLG9DQUFvQyxDQUFDLFNBQUQsRUFBWSxLQUFaLENBRjVEO0FBQUEsVUFHTSxjQUFjLEdBQUcsSUFBSSwwQkFBSixDQUFtQixLQUFuQixDQUh2QjtBQUFBLFVBSU0sS0FBSyxHQUFHLElBQUksS0FBSixDQUFVLGVBQVYsRUFBMkIsY0FBM0IsQ0FKZDtBQU1BLGFBQU8sS0FBUDtBQUNEOzs7NENBRThCLFcsRUFBYSxLLEVBQU87QUFDakQsTUFBQSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQU4sRUFBUixDQURpRCxDQUN6Qjs7QUFFeEIsVUFBTSxTQUFTLEdBQUcsZ0NBQWdDLENBQUMsV0FBRCxFQUFjLEtBQWQsQ0FBbEQ7QUFBQSxVQUNNLGVBQWUsR0FBRyxvQ0FBb0MsQ0FBQyxTQUFELEVBQVksS0FBWixDQUQ1RDtBQUFBLFVBRU0sY0FBYyxHQUFHLElBQUksMEJBQUosQ0FBbUIsS0FBbkIsQ0FGdkI7QUFBQSxVQUdNLEtBQUssR0FBRyxJQUFJLEtBQUosQ0FBVSxlQUFWLEVBQTJCLGNBQTNCLENBSGQ7QUFLQSxhQUFPLEtBQVA7QUFDRDs7Ozs7Ozs7QUFHSCxTQUFTLGdDQUFULENBQTBDLFdBQTFDLEVBQXVELEtBQXZELEVBQThEO0FBQzVELE1BQU0sU0FBUyxHQUFHLEVBQWxCO0FBRUEsRUFBQSxXQUFXLENBQUMsT0FBWixDQUFvQixVQUFDLFVBQUQsRUFBZ0I7QUFDbEMsUUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLGNBQVYsQ0FBeUIsVUFBekIsQ0FBckI7O0FBRUEsUUFBSSxDQUFDLFlBQUwsRUFBbUI7QUFDakIsVUFBTSxNQUFNLEdBQUcsbUJBQU8sY0FBUCxDQUFzQixVQUF0QixDQUFmOztBQUVBLE1BQUEsU0FBUyxDQUFDLFVBQUQsQ0FBVCxHQUF3QixNQUF4QjtBQUNEO0FBQ0YsR0FSRDtBQVVBLEVBQUEsS0FBSyxDQUFDLE9BQU4sQ0FBYyxVQUFDLElBQUQsRUFBVTtBQUN0QixRQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBTCxFQUF6QjtBQUFBLFFBQ00sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFMLEVBRHpCO0FBQUEsUUFFTSxrQkFBa0IsR0FBRyxTQUFTLENBQUMsY0FBVixDQUF5QixnQkFBekIsQ0FGM0I7QUFBQSxRQUdNLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxjQUFWLENBQXlCLGdCQUF6QixDQUgzQjs7QUFLQSxRQUFJLENBQUMsa0JBQUwsRUFBeUI7QUFDdkIsVUFBTSxhQUFZLEdBQUcsbUJBQU8sY0FBUCxDQUFzQixnQkFBdEIsQ0FBckI7O0FBRUEsTUFBQSxTQUFTLENBQUMsZ0JBQUQsQ0FBVCxHQUE4QixhQUE5QjtBQUNEOztBQUVELFFBQUksQ0FBQyxrQkFBTCxFQUF5QjtBQUN2QixVQUFNLGFBQVksR0FBRyxtQkFBTyxjQUFQLENBQXNCLGdCQUF0QixDQUFyQjs7QUFFQSxNQUFBLFNBQVMsQ0FBQyxnQkFBRCxDQUFULEdBQThCLGFBQTlCO0FBQ0Q7O0FBRUQsUUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLGdCQUFELENBQTlCO0FBQUEsUUFDTSxZQUFZLEdBQUcsU0FBUyxDQUFDLGdCQUFELENBRDlCO0FBQUEsUUFFTSxZQUFZLEdBQUcsSUFGckI7QUFBQSxRQUU0QjtBQUN0QixJQUFBLFlBQVksR0FBRyxJQUhyQixDQWxCc0IsQ0FxQk07O0FBRTVCLElBQUEsWUFBWSxDQUFDLGVBQWIsQ0FBNkIsWUFBN0I7QUFFQSxJQUFBLFlBQVksQ0FBQyxlQUFiLENBQTZCLFlBQTdCO0FBQ0QsR0ExQkQ7QUE0QkEsU0FBTyxTQUFQO0FBQ0Q7O0FBRUQsU0FBUywyQkFBVCxDQUFxQyxjQUFyQyxFQUFxRDtBQUNuRCxNQUFNLFNBQVMsR0FBRyxFQUFsQjtBQUVBLEVBQUEsY0FBYyxDQUFDLE9BQWYsQ0FBdUIsVUFBQyxhQUFELEVBQW1CO0FBQ3hDLFFBQU0seUJBQXlCLEdBQUcsS0FBSyxDQUFDLGFBQUQsQ0FBdkM7QUFBQSxRQUNNLFVBQVUsR0FBRyx5QkFEbkI7QUFBQSxRQUM4QztBQUN4QyxJQUFBLFlBQVksR0FBRyxTQUFTLENBQUMsY0FBVixDQUF5QixVQUF6QixDQUZyQjs7QUFJQSxRQUFJLENBQUMsWUFBTCxFQUFtQjtBQUNqQixVQUFNLE1BQU0sR0FBRyxtQkFBTyxjQUFQLENBQXNCLFVBQXRCLENBQWY7O0FBRUEsTUFBQSxTQUFTLENBQUMsVUFBRCxDQUFULEdBQXdCLE1BQXhCO0FBQ0Q7O0FBRUQsUUFBTSwwQkFBMEIsR0FBRyxNQUFNLENBQUMsYUFBRCxDQUF6QztBQUFBLFFBQ00sbUJBQW1CLEdBQUcsMEJBRDVCLENBWHdDLENBWWdCOztBQUV4RCxJQUFBLG1CQUFtQixDQUFDLE9BQXBCLENBQTRCLFVBQUMsa0JBQUQsRUFBd0I7QUFDbEQsVUFBTSxvQkFBb0IsR0FBRyxTQUFTLENBQUMsY0FBVixDQUF5QixrQkFBekIsQ0FBN0I7O0FBRUEsVUFBSSxDQUFDLG9CQUFMLEVBQTJCO0FBQ3pCLFlBQU0sY0FBYyxHQUFHLG1CQUFPLGNBQVAsQ0FBc0Isa0JBQXRCLENBQXZCOztBQUVBLFFBQUEsU0FBUyxDQUFDLGtCQUFELENBQVQsR0FBZ0MsY0FBaEM7QUFDRDtBQUNGLEtBUkQ7QUFTRCxHQXZCRDtBQXlCQSxTQUFPLFNBQVA7QUFDRDs7QUFFRCxTQUFTLG1DQUFULENBQTZDLGNBQTdDLEVBQTZELFNBQTdELEVBQXdFO0FBQ3RFLE1BQU0sS0FBSyxHQUFHLEVBQWQ7QUFFQSxFQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLFVBQUMsYUFBRCxFQUFtQjtBQUN4QyxRQUFNLHlCQUF5QixHQUFHLEtBQUssQ0FBQyxhQUFELENBQXZDO0FBQUEsUUFDTSwwQkFBMEIsR0FBRyxNQUFNLENBQUMsYUFBRCxDQUR6QztBQUFBLFFBRU0sbUJBQW1CLEdBQUcsMEJBRjVCO0FBQUEsUUFFd0Q7QUFDbEQsSUFBQSxVQUFVLEdBQUcseUJBSG5CLENBRHdDLENBSU07O0FBRTlDLElBQUEsbUJBQW1CLENBQUMsT0FBcEIsQ0FBNEIsVUFBQyxrQkFBRCxFQUF3QjtBQUNsRCxVQUFNLGdCQUFnQixHQUFHLGtCQUF6QjtBQUFBLFVBQTZDO0FBQ3ZDLE1BQUEsZ0JBQWdCLEdBQUcsVUFEekI7QUFBQSxVQUNzQztBQUNoQyxNQUFBLFlBQVksR0FBRyxTQUFTLENBQUMsZ0JBQUQsQ0FGOUI7QUFBQSxVQUdNLFlBQVksR0FBRyxTQUFTLENBQUMsZ0JBQUQsQ0FIOUI7QUFBQSxVQUlNLElBQUksR0FBRyxJQUFJLGdCQUFKLENBQVMsZ0JBQVQsRUFBMkIsZ0JBQTNCLENBSmI7QUFBQSxVQUtNLFlBQVksR0FBRyxJQUxyQjtBQUFBLFVBSzRCO0FBQ3RCLE1BQUEsWUFBWSxHQUFHLElBTnJCLENBRGtELENBT3RCOztBQUU1QixNQUFBLEtBQUssQ0FBQyxJQUFOLENBQVcsSUFBWDtBQUVBLE1BQUEsWUFBWSxDQUFDLGVBQWIsQ0FBNkIsWUFBN0I7QUFFQSxNQUFBLFlBQVksQ0FBQyxlQUFiLENBQTZCLFlBQTdCO0FBQ0QsS0FkRDtBQWVELEdBckJEO0FBdUJBLFNBQU8sS0FBUDtBQUNEOztBQUVELFNBQVMsb0NBQVQsQ0FBOEMsU0FBOUMsRUFBeUQsS0FBekQsRUFBZ0U7QUFDOUQsTUFBTSxrQkFBa0IsR0FBRyxFQUEzQjtBQUFBLE1BQ00sbUJBQW1CLEdBQUcsZ0NBQWdDLENBQUMsU0FBRCxDQUQ1RDtBQUFBLE1BRU0sWUFBWSxHQUFHLEVBRnJCO0FBSUEsTUFBSSx5QkFBeUIsR0FBRyxtQkFBbUIsQ0FBQyxNQUFwRDs7QUFMOEQ7QUFRNUQsUUFBTSxrQkFBa0IsR0FBRyxtQkFBbUIsQ0FBQyxHQUFwQixFQUEzQjtBQUFBLFFBQ00saUJBQWlCLEdBQUcsa0JBRDFCLENBUjRELENBU2I7O0FBRS9DLElBQUEsa0JBQWtCLENBQUMsSUFBbkIsQ0FBd0IsaUJBQXhCO0FBRUEsSUFBQSxnQkFBZ0IsQ0FBQyxLQUFELEVBQVEsVUFBQyxJQUFELEVBQU8sS0FBUCxFQUFpQjtBQUN2QyxVQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBTCxFQUF6QjtBQUFBLFVBQ00sWUFBWSxHQUFJLGdCQUFnQixLQUFLLGtCQUQzQyxDQUR1QyxDQUV5Qjs7QUFFaEUsVUFBSSxZQUFKLEVBQWtCO0FBQ2hCLFFBQUEsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFiLEVBQW9CLENBQXBCO0FBRUEsWUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQUwsRUFBekI7QUFBQSxZQUNNLFlBQVksR0FBRyxTQUFTLENBQUMsZ0JBQUQsQ0FEOUI7QUFBQSxZQUVNLFlBQVksR0FBRyxJQUZyQjtBQUFBLFlBRTJCO0FBQ3JCLFFBQUEsV0FBVyxHQUFHLElBSHBCLENBSGdCLENBTVc7O0FBRTNCLFFBQUEsWUFBWSxDQUFDLGtCQUFiLENBQWdDLFlBQWhDO0FBRUEsUUFBQSxZQUFZLENBQUMsSUFBYixDQUFrQixXQUFsQjtBQUVBLFlBQU0sb0JBQW9CLEdBQUcsWUFBWSxDQUFDLFVBQWIsRUFBN0I7O0FBRUEsWUFBSSxvQkFBSixFQUEwQjtBQUN4QixjQUFNLG1CQUFrQixHQUFHLGdCQUEzQixDQUR3QixDQUNzQjs7QUFFOUMsVUFBQSxtQkFBbUIsQ0FBQyxJQUFwQixDQUF5QixtQkFBekI7QUFDRDtBQUNGO0FBQ0YsS0F4QmUsQ0FBaEI7QUEwQkEsSUFBQSx5QkFBeUIsR0FBRyxtQkFBbUIsQ0FBQyxNQUFoRDtBQXZDNEQ7O0FBTzlELFNBQU8seUJBQXlCLEdBQUcsQ0FBbkMsRUFBc0M7QUFBQTtBQWlDckM7O0FBRUQsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQTFCOztBQUVBLE1BQUksV0FBVyxLQUFLLENBQXBCLEVBQXVCO0FBQ3JCLElBQUEsWUFBWSxDQUFDLE9BQWIsQ0FBcUIsVUFBQyxXQUFELEVBQWlCO0FBQ3BDLFVBQU0sZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLG1CQUFaLEVBQXpCO0FBQUEsVUFDTSxZQUFZLEdBQUcsU0FBUyxDQUFDLGdCQUFELENBRDlCO0FBQUEsVUFFTSxZQUFZLEdBQUcsV0FGckIsQ0FEb0MsQ0FHRjs7QUFFbEMsTUFBQSxZQUFZLENBQUMsZUFBYixDQUE2QixZQUE3QjtBQUNELEtBTkQ7QUFPRDs7QUFFRCxNQUFNLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxHQUFuQixDQUF1QixVQUFDLGlCQUFEO0FBQUEsV0FBdUIsU0FBUyxDQUFDLGlCQUFELENBQWhDO0FBQUEsR0FBdkIsQ0FBeEI7QUFFQSxTQUFPLGVBQVA7QUFDRDs7QUFFRCxTQUFTLGdDQUFULENBQTBDLFNBQTFDLEVBQXFEO0FBQ25ELE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFQLENBQVksU0FBWixDQUFwQjtBQUFBLE1BQ00sbUJBQW1CLEdBQUcsV0FBVyxDQUFDLE1BQVosQ0FBbUIsVUFBQyxtQkFBRCxFQUFzQixVQUF0QixFQUFxQztBQUM1RSxRQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsVUFBRCxDQUF4QjtBQUFBLFFBQ00sY0FBYyxHQUFHLE1BQU0sQ0FBQyxVQUFQLEVBRHZCOztBQUdBLFFBQUksY0FBSixFQUFvQjtBQUNsQixVQUFNLGtCQUFrQixHQUFHLFVBQTNCLENBRGtCLENBQ3NCOztBQUV4QyxNQUFBLG1CQUFtQixDQUFDLElBQXBCLENBQXlCLGtCQUF6QjtBQUNEOztBQUVELFdBQU8sbUJBQVA7QUFDRCxHQVhxQixFQVduQixFQVhtQixDQUQ1QjtBQWNBLFNBQU8sbUJBQVA7QUFDRDs7O0FDbk9EOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7QUNGQTs7Ozs7Ozs7Ozs7OztJQUVxQixjO0FBQ25CLDBCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNEOzs7O3VDQUVrQjtBQUNqQixVQUFNLFdBQVcsR0FBRyxLQUFLLEtBQUwsQ0FBVyxNQUEvQjtBQUFBLFVBQ00sYUFBYSxHQUFJLFdBQVcsS0FBSyxDQUR2QztBQUdBLGFBQU8sYUFBUDtBQUNEOzs7NkNBRXdCLFEsRUFBVTtBQUNqQyxXQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLFVBQUMsSUFBRCxFQUFVO0FBQzNCLFlBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFMLEVBQXpCO0FBQUEsWUFDTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQUwsRUFEekI7QUFHQSxRQUFBLFFBQVEsQ0FBQyxnQkFBRCxFQUFtQixnQkFBbkIsQ0FBUjtBQUNELE9BTEQ7QUFNRDs7Ozs7Ozs7O0FDckJIOzs7Ozs7Ozs7Ozs7O0lBRXFCLE07QUFDbkIsa0JBQVksSUFBWixFQUFrQixhQUFsQixFQUFpQyxhQUFqQyxFQUFnRDtBQUFBOztBQUM5QyxTQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBSyxhQUFMLEdBQXFCLGFBQXJCO0FBQ0EsU0FBSyxhQUFMLEdBQXFCLGFBQXJCO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUssSUFBWjtBQUNEOzs7dUNBRWtCO0FBQ2pCLGFBQU8sS0FBSyxhQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLLGFBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTSxtQkFBbUIsR0FBRyxLQUFLLGFBQUwsQ0FBbUIsTUFBL0M7QUFBQSxVQUNNLFFBQVEsR0FBSSxtQkFBbUIsS0FBSyxDQUQxQyxDQURXLENBRW1DOztBQUU5QyxhQUFPLFFBQVA7QUFDRDs7O29DQUVlLFksRUFBYztBQUM1QixXQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsWUFBeEI7QUFDRDs7O29DQUVlLFksRUFBYztBQUM1QixXQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsWUFBeEI7QUFDRDs7O3VDQUVrQixZLEVBQWM7QUFDL0IsVUFBTSxLQUFLLEdBQUcsS0FBSyxhQUFMLENBQW1CLE9BQW5CLENBQTJCLFlBQTNCLENBQWQ7QUFFQSxXQUFLLGFBQUwsQ0FBbUIsTUFBbkIsQ0FBMEIsS0FBMUIsRUFBaUMsQ0FBakM7QUFDRDs7O3dDQUVtQixRLEVBQVU7QUFDNUIsV0FBSyxhQUFMLENBQW1CLE9BQW5CLENBQTJCLFFBQTNCO0FBQ0Q7Ozt3Q0FFbUIsUSxFQUFVO0FBQzVCLFdBQUssYUFBTCxDQUFtQixPQUFuQixDQUEyQixRQUEzQjtBQUNEOzs7bUNBRXFCLFUsRUFBWTtBQUNoQyxVQUFNLElBQUksR0FBRyxVQUFiO0FBQUEsVUFBMEI7QUFDcEIsTUFBQSxhQUFhLEdBQUcsRUFEdEI7QUFBQSxVQUVNLGFBQWEsR0FBRyxFQUZ0QjtBQUFBLFVBR00sTUFBTSxHQUFHLElBQUksTUFBSixDQUFXLElBQVgsRUFBaUIsYUFBakIsRUFBZ0MsYUFBaEMsQ0FIZjtBQUtBLGFBQU8sTUFBUDtBQUNEOzs7Ozs7Ozs7QUN6REg7O0FDQUE7Ozs7OztBQUVPLElBQU0sS0FBSyxHQUFHLE9BQWQ7O0FBQ0EsSUFBTSxLQUFLLEdBQUcsT0FBZDs7QUFDQSxJQUFNLElBQUksR0FBRyxNQUFiOztBQUNBLElBQU0sT0FBTyxHQUFHLFNBQWhCOztBQUNBLElBQU0sS0FBSyxHQUFHLE9BQWQ7O0FBQ0EsSUFBTSxLQUFLLEdBQUcsT0FBZDs7QUFDQSxJQUFNLGdCQUFnQixHQUFHLENBQXpCOztBQUNBLElBQU0saUJBQWlCLEdBQUcsT0FBMUIsQyxDQUFtQzs7O0FBQ25DLElBQU0sMEJBQTBCLEdBQUcsSUFBbkM7O0FBQ0EsSUFBTSwwQkFBMEIsR0FBRyxTQUFuQzs7QUFFQSxJQUFNLFVBQVUsR0FBRyxLQUFuQjs7QUFDQSxJQUFNLFdBQVcsR0FBRyxNQUFwQjs7QUFDQSxJQUFNLHVCQUF1QixHQUFHLGtCQUFoQzs7QUFDQSxJQUFNLDZCQUE2QixHQUFHLGtCQUF0Qzs7QUFFQSxJQUFNLFVBQVUsR0FBRyxNQUFuQjs7QUFDQSxJQUFNLGFBQWEsR0FBRyxNQUF0Qjs7QUFFQSxJQUFNLE1BQU0sR0FBRyxJQUFmOztBQUNBLElBQU0sYUFBYSxHQUFHLE1BQXRCOztBQUNBLElBQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsR0FBcEIsQ0FBNUI7O0FBQ0EsSUFBTSxtQkFBbUIsR0FBRyxJQUE1Qjs7QUFDQSxJQUFNLHlCQUF5QixHQUFHLElBQWxDOztBQUVBLElBQU0seUJBQXlCLEdBQUcsRUFBbEM7Ozs7QUMzQlA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7OztBQ1BBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUFFLFNBQU8sS0FBSyxDQUFDLENBQUQsQ0FBWjtBQUFpQjs7QUFFekMsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQUUsU0FBTyxLQUFLLENBQUMsQ0FBRCxDQUFaO0FBQWtCOztBQUUzQyxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCO0FBQUUsU0FBTyxLQUFLLENBQUMsQ0FBRCxDQUFaO0FBQWtCOztBQUUxQyxTQUFTLE1BQVQsQ0FBZ0IsS0FBaEIsRUFBdUI7QUFBRSxTQUFPLEtBQUssQ0FBQyxDQUFELENBQVo7QUFBa0I7O0FBRTNDLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFBRSxTQUFPLEtBQUssQ0FBQyxDQUFELENBQVo7QUFBa0I7O0FBRTFDLFNBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQjtBQUFFLFNBQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFOLEdBQWUsQ0FBaEIsQ0FBWjtBQUFpQzs7QUFFN0QsU0FBUyxVQUFULENBQW9CLEtBQXBCLEVBQTJCO0FBQUUsU0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU4sR0FBZSxDQUFoQixDQUFaO0FBQWlDOztBQUU5RCxTQUFTLFNBQVQsQ0FBbUIsS0FBbkIsRUFBMEI7QUFBRSxTQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTixHQUFlLENBQWhCLENBQVo7QUFBaUM7O0FBRTdELFNBQVMsVUFBVCxDQUFvQixLQUFwQixFQUEyQjtBQUFFLFNBQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFOLEdBQWUsQ0FBaEIsQ0FBWjtBQUFpQzs7QUFFOUQsU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUFFLFNBQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFOLEdBQWUsQ0FBaEIsQ0FBWjtBQUFpQzs7QUFFeEQsU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUFFLFNBQU8sS0FBSyxDQUFDLEtBQU4sQ0FBWSxDQUFaLEVBQWUsQ0FBZixDQUFQO0FBQTJCOztBQUVsRCxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQUUsU0FBTyxLQUFLLENBQUMsS0FBTixDQUFZLENBQVosQ0FBUDtBQUF3Qjs7QUFFL0MsU0FBUyxJQUFULENBQWMsTUFBZCxFQUFzQixNQUF0QixFQUE4QjtBQUFFLEVBQUEsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBcUIsS0FBckIsQ0FBMkIsTUFBM0IsRUFBbUMsTUFBbkM7QUFBNkM7O0FBRTdFLFNBQVMsT0FBVCxDQUFpQixNQUFqQixFQUF5QixNQUF6QixFQUFpQztBQUFFLEVBQUEsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsT0FBaEIsQ0FBd0IsS0FBeEIsQ0FBOEIsTUFBOUIsRUFBc0MsTUFBdEM7QUFBZ0Q7O0FBRW5GLFNBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QixlQUF4QixFQUF5QztBQUM5QyxNQUFNLE1BQU0sR0FBSSxlQUFlLFlBQVksS0FBNUIsR0FDRyxlQURILEdBRUksQ0FBQyxlQUFELENBRm5CO0FBSUEsRUFBQSxJQUFJLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FBSjtBQUNEOztBQUVNLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFDM0IsTUFBTSxLQUFLLEdBQUcsQ0FBZDtBQUVBLFNBQU8sS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFiLENBQVA7QUFDRDs7QUFFTSxTQUFTLElBQVQsQ0FBYyxNQUFkLEVBQXNCLE1BQXRCLEVBQThCO0FBQ25DLE1BQU0sS0FBSyxHQUFHLENBQWQ7QUFBQSxNQUNNLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFEM0IsQ0FEbUMsQ0FFQzs7QUFFcEMsRUFBQSxNQUFNLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsV0FBaEIsRUFBNkIsTUFBN0IsQ0FBTjtBQUNEOztBQUVNLFNBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUIsTUFBdkIsRUFBK0I7QUFBRSxFQUFBLEtBQUssQ0FBQyxTQUFOLENBQWdCLElBQWhCLENBQXFCLEtBQXJCLENBQTJCLE1BQTNCLEVBQW1DLE1BQW5DO0FBQTZDOztBQUU5RSxTQUFTLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0IsS0FBeEIsRUFBb0U7QUFBQSxNQUFyQyxXQUFxQyx1RUFBdkIsUUFBdUI7QUFBQSxNQUFiLE1BQWEsdUVBQUosRUFBSTtBQUN6RSxNQUFNLElBQUksSUFBSSxLQUFKLEVBQVcsV0FBWCw0QkFBMkIsTUFBM0IsRUFBVjtBQUFBLE1BQ00saUJBQWlCLEdBQUcsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsS0FBdkIsQ0FBNkIsTUFBN0IsRUFBcUMsSUFBckMsQ0FEMUI7QUFHQSxTQUFPLGlCQUFQO0FBQ0Q7O0FBRU0sU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLE9BQXhCLEVBQWlDLElBQWpDLEVBQXVDO0FBQzVDLE1BQUksS0FBSjtBQUVBLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFOLENBQVcsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFvQjtBQUMzQyxRQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBRCxFQUFVLEtBQVYsQ0FBbkI7O0FBRUEsUUFBSSxNQUFKLEVBQVk7QUFDVixNQUFBLEtBQUssR0FBRyxLQUFSLENBRFUsQ0FDTTs7QUFFaEIsYUFBTyxJQUFQO0FBQ0Q7QUFDRixHQVJhLENBQWQ7O0FBVUEsTUFBSSxLQUFKLEVBQVc7QUFDVCxRQUFNLFdBQVcsR0FBRyxDQUFwQjtBQUVBLElBQUEsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFiLEVBQW9CLFdBQXBCLEVBQWlDLE9BQWpDO0FBQ0Q7O0FBRUQsU0FBTyxLQUFQO0FBQ0Q7O0FBRU0sU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCLElBQXZCLEVBQTZCO0FBQ2xDLE1BQU0sZ0JBQWdCLEdBQUcsRUFBekI7QUFFQSxFQUFBLGdCQUFnQixDQUFDLEtBQUQsRUFBUSxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQW9CO0FBQzFDLFFBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFELEVBQVUsS0FBVixDQUFuQjs7QUFFQSxRQUFJLENBQUMsTUFBTCxFQUFhO0FBQ1gsVUFBTSxLQUFLLEdBQUcsS0FBZDtBQUFBLFVBQXNCO0FBQ2hCLE1BQUEsV0FBVyxHQUFHLENBRHBCO0FBQUEsVUFFTSxlQUFlLEdBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFiLEVBQW9CLFdBQXBCLENBRnhCO0FBQUEsVUFHTSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsZUFBRCxDQUhqQztBQUtBLE1BQUEsZ0JBQWdCLENBQUMsT0FBakIsQ0FBeUIsbUJBQXpCLEVBTlcsQ0FNcUM7QUFDakQ7QUFDRixHQVhlLENBQWhCO0FBYUEsU0FBTyxnQkFBUDtBQUNEOztBQUVNLFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUIsSUFBckIsRUFBMkI7QUFDaEMsTUFBTSxRQUFRLEdBQUcsRUFBakI7QUFFQSxFQUFBLGVBQWUsQ0FBQyxLQUFELEVBQVEsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFvQjtBQUN6QyxRQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBRCxFQUFVLEtBQVYsQ0FBbkI7O0FBRUEsUUFBSSxNQUFKLEVBQVk7QUFDVixNQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsT0FBZDtBQUNEO0FBQ0YsR0FOYyxDQUFmO0FBUUEsU0FBTyxRQUFQO0FBQ0Q7O0FBRU0sU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQixJQUF0QixFQUE0QjtBQUNqQyxNQUFJLGFBQWEsR0FBRyxTQUFwQjtBQUVBLEVBQUEsS0FBSyxDQUFDLElBQU4sQ0FBVyxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQW9CO0FBQzdCLFFBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFELEVBQVUsS0FBVixDQUFuQjs7QUFFQSxRQUFJLENBQUMsTUFBTCxFQUFhO0FBQ1gsVUFBTSxLQUFLLEdBQUcsS0FBZDtBQUFBLFVBQXNCO0FBQ2hCLE1BQUEsV0FBVyxHQUFHLENBRHBCO0FBQUEsVUFFTSxlQUFlLEdBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFiLEVBQW9CLFdBQXBCLENBRnhCO0FBQUEsVUFHTSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsZUFBRCxDQUhqQztBQUtBLE1BQUEsYUFBYSxHQUFHLG1CQUFoQixDQU5XLENBTTJCOztBQUV0QyxhQUFPLElBQVA7QUFDRDtBQUNGLEdBYkQ7QUFlQSxTQUFPLGFBQVA7QUFDRDs7QUFFTSxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCLE9BQXRCLEVBQStCLElBQS9CLEVBQXFDO0FBQzFDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFOLENBQVcsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFvQjtBQUMzQyxRQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBRCxFQUFVLEtBQVYsQ0FBbkI7O0FBRUEsUUFBSSxNQUFKLEVBQVk7QUFDVixhQUFPLElBQVA7QUFDRDtBQUNGLEdBTmEsQ0FBZDs7QUFTQSxNQUFJLEtBQUosRUFBVztBQUNULElBQUEsS0FBSyxDQUFDLElBQU4sQ0FBVyxPQUFYO0FBQ0Q7O0FBRUQsU0FBTyxLQUFQO0FBQ0Q7O0FBRU0sU0FBUyxPQUFULENBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLElBQWpDLEVBQXVDO0FBQzVDLEVBQUEsTUFBTSxDQUFDLE9BQVAsQ0FBZSxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQW9CO0FBQ2pDLFFBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFELEVBQVUsS0FBVixDQUFuQjs7QUFFQSxRQUFJLE1BQUosRUFBWTtBQUNWLE1BQUEsTUFBTSxDQUFDLElBQVAsQ0FBWSxPQUFaO0FBQ0Q7QUFDRixHQU5EO0FBT0Q7O0FBRU0sU0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCLE1BQXpCLEVBQWlDLE1BQWpDLEVBQXlDLElBQXpDLEVBQStDO0FBQ3BELEVBQUEsS0FBSyxDQUFDLE9BQU4sQ0FBYyxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQW9CO0FBQ2hDLFFBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFELEVBQVUsS0FBVixDQUFuQjtBQUVBLElBQUEsTUFBTSxHQUNKLE1BQU0sQ0FBQyxJQUFQLENBQVksT0FBWixDQURJLEdBRUYsTUFBTSxDQUFDLElBQVAsQ0FBWSxPQUFaLENBRko7QUFHRCxHQU5EO0FBT0Q7O0FBRU0sU0FBUyxZQUFULENBQXNCLEtBQXRCLEVBQTZCLFFBQTdCLEVBQXVDO0FBQzVDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUExQjs7QUFFQSxPQUFLLElBQUksS0FBSyxHQUFHLENBQWpCLEVBQW9CLEtBQUssR0FBRyxXQUE1QixFQUF5QyxLQUFLLEVBQTlDLEVBQWtEO0FBQ2hELFFBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFELENBQXJCO0FBQUEsUUFDTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQUQsRUFBVSxLQUFWLENBRHZCOztBQUdBLFFBQUksTUFBSixFQUFZO0FBQ1YsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLEtBQVA7QUFDRDs7QUFFTSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEIsUUFBOUIsRUFBd0M7QUFDN0MsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQTFCOztBQUVBLE9BQUssSUFBSSxLQUFLLEdBQUcsV0FBVyxHQUFHLENBQS9CLEVBQWtDLEtBQUssSUFBSSxDQUEzQyxFQUE4QyxLQUFLLEVBQW5ELEVBQXVEO0FBQ3JELFFBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFELENBQXJCO0FBQUEsUUFDTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQUQsRUFBVSxLQUFWLENBRHZCOztBQUdBLFFBQUksTUFBSixFQUFZO0FBQ1YsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLEtBQVA7QUFDRDs7QUFFTSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEIsUUFBOUIsRUFBd0M7QUFDN0MsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQTFCOztBQUVBLE9BQUssSUFBSSxLQUFLLEdBQUcsQ0FBakIsRUFBb0IsS0FBSyxHQUFHLFdBQTVCLEVBQXlDLEtBQUssRUFBOUMsRUFBa0Q7QUFDaEQsUUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUQsQ0FBckI7QUFBQSxRQUNNLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBRCxFQUFVLEtBQVYsQ0FEdkI7O0FBR0EsUUFBSSxDQUFDLE1BQUwsRUFBYTtBQUNYLGFBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxJQUFQO0FBQ0Q7O0FBRU0sU0FBUyxjQUFULENBQXdCLEtBQXhCLEVBQStCLFFBQS9CLEVBQXlDO0FBQzlDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUExQjs7QUFFQSxPQUFLLElBQUksS0FBSyxHQUFHLFdBQVcsR0FBRyxDQUEvQixFQUFrQyxLQUFLLElBQUksQ0FBM0MsRUFBOEMsS0FBSyxFQUFuRCxFQUF1RDtBQUNyRCxRQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBRCxDQUFyQjtBQUFBLFFBQ00sTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFELEVBQVUsS0FBVixDQUR2Qjs7QUFHQSxRQUFJLENBQUMsTUFBTCxFQUFhO0FBQ1gsYUFBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRDs7QUFFTSxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0IsUUFBL0IsRUFBeUMsWUFBekMsRUFBdUQ7QUFDNUQsTUFBSSxLQUFLLEdBQUcsWUFBWjtBQUVBLEVBQUEsZUFBZSxDQUFDLEtBQUQsRUFBUSxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQW9CO0FBQ3pDLElBQUEsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixLQUFqQixDQUFoQjtBQUNELEdBRmMsQ0FBZjtBQUlBLFNBQU8sS0FBUDtBQUNEOztBQUVNLFNBQVMsZUFBVCxDQUF5QixLQUF6QixFQUFnQyxRQUFoQyxFQUEwQyxZQUExQyxFQUF3RDtBQUM3RCxNQUFJLEtBQUssR0FBRyxZQUFaO0FBRUEsRUFBQSxnQkFBZ0IsQ0FBQyxLQUFELEVBQVEsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFvQjtBQUMxQyxJQUFBLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsS0FBakIsQ0FBaEI7QUFDRCxHQUZlLENBQWhCO0FBSUEsU0FBTyxLQUFQO0FBQ0Q7O0FBRU0sU0FBUyxlQUFULENBQXlCLEtBQXpCLEVBQWdDLFFBQWhDLEVBQTBDO0FBQy9DLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUExQjs7QUFFQSxPQUFLLElBQUksS0FBSyxHQUFHLENBQWpCLEVBQW9CLEtBQUssR0FBRyxXQUE1QixFQUF5QyxLQUFLLEVBQTlDLEVBQWtEO0FBQ2hELFFBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFELENBQXJCO0FBRUEsSUFBQSxRQUFRLENBQUMsT0FBRCxFQUFVLEtBQVYsQ0FBUjtBQUNEO0FBQ0Y7O0FBRU0sU0FBUyxnQkFBVCxDQUEwQixLQUExQixFQUFpQyxRQUFqQyxFQUEyQztBQUNoRCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBMUI7O0FBRUEsT0FBSyxJQUFJLEtBQUssR0FBRyxXQUFXLEdBQUcsQ0FBL0IsRUFBa0MsS0FBSyxJQUFJLENBQTNDLEVBQThDLEtBQUssRUFBbkQsRUFBdUQ7QUFDckQsUUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUQsQ0FBckI7QUFFQSxJQUFBLFFBQVEsQ0FBQyxPQUFELEVBQVUsS0FBVixDQUFSO0FBQ0Q7QUFDRjs7ZUFFYztBQUNiLEVBQUEsS0FBSyxFQUFMLEtBRGE7QUFFYixFQUFBLE1BQU0sRUFBTixNQUZhO0FBR2IsRUFBQSxLQUFLLEVBQUwsS0FIYTtBQUliLEVBQUEsTUFBTSxFQUFOLE1BSmE7QUFLYixFQUFBLEtBQUssRUFBTCxLQUxhO0FBTWIsRUFBQSxTQUFTLEVBQVQsU0FOYTtBQU9iLEVBQUEsVUFBVSxFQUFWLFVBUGE7QUFRYixFQUFBLFNBQVMsRUFBVCxTQVJhO0FBU2IsRUFBQSxVQUFVLEVBQVYsVUFUYTtBQVViLEVBQUEsSUFBSSxFQUFKLElBVmE7QUFXYixFQUFBLElBQUksRUFBSixJQVhhO0FBWWIsRUFBQSxJQUFJLEVBQUosSUFaYTtBQWFiLEVBQUEsSUFBSSxFQUFKLElBYmE7QUFjYixFQUFBLE9BQU8sRUFBUCxPQWRhO0FBZWIsRUFBQSxNQUFNLEVBQU4sTUFmYTtBQWdCYixFQUFBLEtBQUssRUFBTCxLQWhCYTtBQWlCYixFQUFBLElBQUksRUFBSixJQWpCYTtBQWtCYixFQUFBLEtBQUssRUFBTCxLQWxCYTtBQW1CYixFQUFBLE1BQU0sRUFBTixNQW5CYTtBQW9CYixFQUFBLE9BQU8sRUFBUCxPQXBCYTtBQXFCYixFQUFBLE1BQU0sRUFBTixNQXJCYTtBQXNCYixFQUFBLElBQUksRUFBSixJQXRCYTtBQXVCYixFQUFBLEtBQUssRUFBTCxLQXZCYTtBQXdCYixFQUFBLEtBQUssRUFBTCxLQXhCYTtBQXlCYixFQUFBLE9BQU8sRUFBUCxPQXpCYTtBQTBCYixFQUFBLFFBQVEsRUFBUixRQTFCYTtBQTJCYixFQUFBLFlBQVksRUFBWixZQTNCYTtBQTRCYixFQUFBLGFBQWEsRUFBYixhQTVCYTtBQTZCYixFQUFBLGFBQWEsRUFBYixhQTdCYTtBQThCYixFQUFBLGNBQWMsRUFBZCxjQTlCYTtBQStCYixFQUFBLGNBQWMsRUFBZCxjQS9CYTtBQWdDYixFQUFBLGVBQWUsRUFBZixlQWhDYTtBQWlDYixFQUFBLGVBQWUsRUFBZixlQWpDYTtBQWtDYixFQUFBLGdCQUFnQixFQUFoQjtBQWxDYSxDOzs7O0FDalJmOzs7Ozs7Ozs7Ozs7OztBQUVPLFNBQVMsTUFBVCxDQUFnQixRQUFoQixFQUEwQixJQUExQixFQUFnQyxPQUFoQyxFQUF5QztBQUM5QyxNQUFJLEtBQUssR0FBRyxDQUFDLENBQWI7O0FBRUEsV0FBUyxJQUFULEdBQWdCO0FBQ2QsSUFBQSxLQUFLO0FBRUwsUUFBTSxLQUFLLEdBQUcsS0FBZDtBQUFBLFFBQXNCO0FBQ2hCLElBQUEsU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLE9BQWIsRUFBc0IsS0FBdEIsQ0FEMUI7O0FBR0EsUUFBSSxTQUFKLEVBQWU7QUFDYixNQUFBLElBQUk7QUFDTDtBQUNGOztBQUVELEVBQUEsSUFBSTtBQUNMOztBQUVNLFNBQVMsT0FBVCxDQUFpQixLQUFqQixFQUF3QixRQUF4QixFQUFrQyxJQUFsQyxFQUF3QyxPQUF4QyxFQUFpRDtBQUN0RCxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBckIsQ0FEc0QsQ0FDeEI7O0FBRTlCLE1BQUksS0FBSyxHQUFHLENBQUMsQ0FBYjs7QUFFQSxXQUFTLElBQVQsR0FBZ0I7QUFDZCxJQUFBLEtBQUs7QUFFTCxRQUFNLFNBQVMsR0FBSSxLQUFLLEtBQUssTUFBN0I7O0FBRUEsUUFBSSxTQUFKLEVBQWU7QUFDYixNQUFBLElBQUk7QUFDTCxLQUZELE1BRU87QUFDTCxVQUFNLEtBQUssR0FBRyxLQUFkO0FBQUEsVUFBc0I7QUFDaEIsTUFBQSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUQsQ0FEckI7QUFHQSxNQUFBLFFBQVEsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixPQUF0QixFQUErQixLQUEvQixDQUFSO0FBQ0Q7QUFDRjs7QUFFRCxFQUFBLElBQUk7QUFDTDs7QUFFTSxTQUFTLFFBQVQsQ0FBa0IsU0FBbEIsRUFBNkIsSUFBN0IsRUFBbUMsT0FBbkMsRUFBNEM7QUFDakQsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQXpCLENBRGlELENBQ2Y7O0FBRWxDLE1BQUksS0FBSyxHQUFHLENBQUMsQ0FBYjs7QUFFQSxXQUFTLElBQVQsR0FBZ0I7QUFDZCxJQUFBLEtBQUs7QUFFTCxRQUFNLFNBQVMsR0FBSSxLQUFLLEtBQUssTUFBN0I7O0FBRUEsUUFBSSxTQUFKLEVBQWU7QUFDYixNQUFBLElBQUk7QUFDTCxLQUZELE1BRU87QUFDTCxVQUFNLEtBQUssR0FBRyxLQUFkO0FBQUEsVUFBc0I7QUFDaEIsTUFBQSxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUQsQ0FEMUI7QUFHQSxNQUFBLFFBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLE9BQWIsRUFBc0IsS0FBdEIsQ0FBUjtBQUNEO0FBQ0Y7O0FBRUQsRUFBQSxJQUFJO0FBQ0w7O0FBRU0sU0FBUyxVQUFULENBQW9CLFNBQXBCLEVBQStCLElBQS9CLEVBQXFDLE9BQXJDLEVBQThDO0FBQ25ELE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUF6QixDQURtRCxDQUNqQjs7QUFFbEMsTUFBSSxLQUFLLEdBQUcsQ0FBWjs7QUFFQSxXQUFTLElBQVQsR0FBZ0I7QUFDZCxJQUFBLEtBQUs7QUFFTCxRQUFNLFNBQVMsR0FBSSxLQUFLLEtBQUssTUFBN0I7O0FBRUEsUUFBSSxTQUFKLEVBQWU7QUFDYixNQUFBLElBQUk7QUFDTDtBQUNGOztBQUVELEVBQUEsU0FBUyxDQUFDLE9BQVYsQ0FBa0IsVUFBQyxRQUFELEVBQVcsS0FBWCxFQUFxQjtBQUNyQyxJQUFBLFFBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLE9BQWIsRUFBc0IsS0FBdEIsQ0FBUjtBQUNELEdBRkQ7QUFHRDs7QUFFTSxTQUFTLFVBQVQsQ0FBb0IsUUFBcEIsRUFBOEIsTUFBOUIsRUFBc0MsSUFBdEMsRUFBNEMsT0FBNUMsRUFBcUQ7QUFDMUQsTUFBSSxLQUFLLEdBQUcsQ0FBWjs7QUFFQSxXQUFTLElBQVQsR0FBZ0I7QUFDZCxJQUFBLEtBQUs7QUFFTCxRQUFNLFNBQVMsR0FBSSxLQUFLLEtBQUssTUFBN0I7O0FBRUEsUUFBSSxTQUFKLEVBQWU7QUFDYixNQUFBLElBQUk7QUFDTDtBQUNGOztBQUVELE9BQUssSUFBSSxLQUFLLEdBQUcsQ0FBakIsRUFBb0IsS0FBSyxHQUFHLE1BQTVCLEVBQW9DLEtBQUssRUFBekMsRUFBNkM7QUFDM0MsSUFBQSxRQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxPQUFiLEVBQXNCLEtBQXRCLENBQVI7QUFDRDtBQUNGOztBQUVNLFNBQVMsZUFBVCxDQUF5QixLQUF6QixFQUFnQyxRQUFoQyxFQUEwQyxJQUExQyxFQUFnRCxPQUFoRCxFQUF5RDtBQUM5RCxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBckIsQ0FEOEQsQ0FDaEM7O0FBRTlCLE1BQUksS0FBSyxHQUFHLENBQUMsQ0FBYjs7QUFFQSxXQUFTLElBQVQsR0FBZ0I7QUFDZCxJQUFBLEtBQUs7QUFFTCxRQUFNLFNBQVMsR0FBSSxLQUFLLEtBQUssTUFBN0I7O0FBRUEsUUFBSSxTQUFKLEVBQWU7QUFDYixNQUFBLElBQUk7QUFDTCxLQUZELE1BRU87QUFDTCxVQUFNLEtBQUssR0FBRyxLQUFkO0FBQUEsVUFBc0I7QUFDaEIsTUFBQSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUQsQ0FEckI7QUFHQSxNQUFBLFFBQVEsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixPQUF0QixFQUErQixLQUEvQixDQUFSO0FBQ0Q7QUFDRjs7QUFFRCxFQUFBLElBQUk7QUFDTDs7QUFFTSxTQUFTLGdCQUFULENBQTBCLEtBQTFCLEVBQWlDLFFBQWpDLEVBQTJDLElBQTNDLEVBQWlELE9BQWpELEVBQTBEO0FBQy9ELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFyQixDQUQrRCxDQUNqQzs7QUFFOUIsTUFBSSxLQUFLLEdBQUcsTUFBWjs7QUFFQSxXQUFTLElBQVQsR0FBZ0I7QUFDZCxJQUFBLEtBQUs7QUFFTCxRQUFNLFNBQVMsR0FBSSxLQUFLLEtBQUssQ0FBQyxDQUE5Qjs7QUFFQSxRQUFJLFNBQUosRUFBZTtBQUNiLE1BQUEsSUFBSTtBQUNMLEtBRkQsTUFFTztBQUNMLFVBQU0sS0FBSyxHQUFHLEtBQWQ7QUFBQSxVQUFzQjtBQUNoQixNQUFBLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBRCxDQURyQjtBQUdBLE1BQUEsUUFBUSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLE9BQXRCLEVBQStCLEtBQS9CLENBQVI7QUFDRDtBQUNGOztBQUVELEVBQUEsSUFBSTtBQUNMOztlQUVjO0FBQ2IsRUFBQSxNQUFNLEVBQU4sTUFEYTtBQUViLEVBQUEsT0FBTyxFQUFQLE9BRmE7QUFHYixFQUFBLFFBQVEsRUFBUixRQUhhO0FBSWIsRUFBQSxVQUFVLEVBQVYsVUFKYTtBQUtiLEVBQUEsVUFBVSxFQUFWLFVBTGE7QUFNYixFQUFBLGVBQWUsRUFBZixlQU5hO0FBT2IsRUFBQSxnQkFBZ0IsRUFBaEI7QUFQYSxDOzs7O0FDckpmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7O0FBRU8sU0FBUyxnQkFBVCxDQUEwQixTQUExQixFQUFxQztBQUMxQyxNQUFNLFdBQVcsR0FBRyxlQUFHLFVBQUgsQ0FBYyxTQUFkLENBQXBCOztBQUVBLFNBQU8sV0FBUDtBQUNEOztBQUVNLFNBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQztBQUN4QyxNQUFJLFVBQVUsR0FBRyxLQUFqQjtBQUVBLE1BQU0sU0FBUyxHQUFHLFFBQWxCO0FBQUEsTUFBNEI7QUFDdEIsRUFBQSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsU0FBRCxDQURwQzs7QUFHQSxNQUFJLFdBQUosRUFBaUI7QUFDZixRQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBRCxDQUE3Qjs7QUFFQSxRQUFJLFNBQUosRUFBZTtBQUNiLE1BQUEsVUFBVSxHQUFHLElBQWI7QUFDRDtBQUNGOztBQUVELFNBQU8sVUFBUDtBQUNEOztBQUVNLFNBQVMsb0JBQVQsQ0FBOEIsYUFBOUIsRUFBNkM7QUFDbEQsTUFBSSxlQUFlLEdBQUcsS0FBdEI7QUFFQSxNQUFNLFNBQVMsR0FBRyxhQUFsQjtBQUFBLE1BQWlDO0FBQzNCLEVBQUEsV0FBVyxHQUFHLGdCQUFnQixDQUFDLFNBQUQsQ0FEcEM7O0FBR0EsTUFBSSxXQUFKLEVBQWlCO0FBQ2YsUUFBTSxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsU0FBRCxDQUF2Qzs7QUFFQSxRQUFJLGNBQUosRUFBb0I7QUFDbEIsTUFBQSxlQUFlLEdBQUcsSUFBbEI7QUFDRDtBQUNGOztBQUVELFNBQU8sZUFBUDtBQUNEOztBQUVNLFNBQVMsV0FBVCxDQUFxQixTQUFyQixFQUFnQztBQUNyQyxNQUFNLElBQUksR0FBRyxlQUFHLFFBQUgsQ0FBWSxTQUFaLENBQWI7QUFBQSxNQUNNLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBTCxFQUR2QjtBQUFBLE1BRU0sU0FBUyxHQUFHLENBQUMsY0FGbkI7O0FBSUEsU0FBTyxTQUFQO0FBQ0Q7O0FBRU0sU0FBUyxnQkFBVCxDQUEwQixTQUExQixFQUFxQztBQUMxQyxNQUFNLElBQUksR0FBRyxlQUFHLFFBQUgsQ0FBWSxTQUFaLENBQWI7QUFBQSxNQUNNLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBTCxFQUR2Qjs7QUFHQSxTQUFPLGNBQVA7QUFDRDs7QUFFTSxTQUFTLGdCQUFULENBQTBCLGFBQTFCLEVBQXlDO0FBQzlDLE1BQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQyxhQUFELENBQW5DO0FBQUEsTUFDTSxtQkFBbUIsR0FBRyxhQUFhLENBQUMsTUFEMUM7QUFBQSxNQUVNLGNBQWMsR0FBSSxtQkFBbUIsS0FBSyxDQUZoRDtBQUlBLFNBQU8sY0FBUDtBQUNEOztBQUVNLFNBQVMsYUFBVCxDQUF1QixhQUF2QixFQUFzQztBQUMzQyxNQUFNLGFBQWEsR0FBRyxlQUFHLFdBQUgsQ0FBZSxhQUFmLENBQXRCOztBQUVBLFNBQU8sYUFBUDtBQUNEOztBQUVNLFNBQVMsUUFBVCxDQUFrQixRQUFsQixFQUFzRDtBQUFBLE1BQTFCLFFBQTBCLHVFQUFmLHdCQUFlOztBQUMzRCxNQUFNLE9BQU8sR0FBRztBQUNSLElBQUEsUUFBUSxFQUFSO0FBRFEsR0FBaEI7QUFBQSxNQUdNLE9BQU8sR0FBRyxlQUFHLFlBQUgsQ0FBZ0IsUUFBaEIsRUFBMEIsT0FBMUIsQ0FIaEI7O0FBS0EsU0FBTyxPQUFQO0FBQ0Q7O0FBRU0sU0FBUyxTQUFULENBQW1CLFFBQW5CLEVBQTZCLE9BQTdCLEVBQXNDO0FBQzNDLGlCQUFHLGFBQUgsQ0FBaUIsUUFBakIsRUFBMkIsT0FBM0I7QUFDRDs7QUFFTSxTQUFTLFlBQVQsQ0FBc0IsUUFBdEIsRUFBZ0MsT0FBaEMsRUFBeUM7QUFDOUMsaUJBQUcsY0FBSCxDQUFrQixRQUFsQixFQUE0QixPQUE1QjtBQUNEOztBQUVNLFNBQVMsZUFBVCxDQUF5QixhQUF6QixFQUF3QztBQUM3QyxNQUFNLGtDQUFrQyxHQUFHLDZDQUFrQyxhQUFsQyxDQUEzQzs7QUFFQSxNQUFLLGtDQUFrQyxLQUFLLEdBQXhDLElBQWlELGtDQUFrQyxLQUFLLElBQTVGLEVBQW1HO0FBQ2pHLFFBQU0sbUJBQW1CLEdBQUcsa0NBQTVCO0FBQUEsUUFBaUU7QUFDM0QsSUFBQSxxQkFBcUIsR0FBRyxvQkFBb0IsQ0FBQyxtQkFBRCxDQURsRDs7QUFHQSxRQUFJLENBQUMscUJBQUwsRUFBNEI7QUFDMUIsTUFBQSxlQUFlLENBQUMsbUJBQUQsQ0FBZjtBQUNEO0FBQ0Y7O0FBRUQsaUJBQUcsU0FBSCxDQUFhLGFBQWI7QUFDRDs7QUFFTSxTQUFTLFVBQVQsQ0FBb0IsV0FBcEIsRUFBaUMsV0FBakMsRUFBOEM7QUFDbkQsaUJBQUcsVUFBSCxDQUFjLFdBQWQsRUFBMkIsV0FBM0I7QUFDRDs7QUFFTSxTQUFTLFFBQVQsQ0FBa0IsUUFBbEIsRUFBNEI7QUFDakMsU0FBTyxlQUFHLFFBQUgsQ0FBWSxRQUFaLENBQVA7QUFDRDs7ZUFFYztBQUNiLEVBQUEsZ0JBQWdCLEVBQWhCLGdCQURhO0FBRWIsRUFBQSxlQUFlLEVBQWYsZUFGYTtBQUdiLEVBQUEsb0JBQW9CLEVBQXBCLG9CQUhhO0FBSWIsRUFBQSxXQUFXLEVBQVgsV0FKYTtBQUtiLEVBQUEsZ0JBQWdCLEVBQWhCLGdCQUxhO0FBTWIsRUFBQSxnQkFBZ0IsRUFBaEIsZ0JBTmE7QUFPYixFQUFBLGFBQWEsRUFBYixhQVBhO0FBUWIsRUFBQSxRQUFRLEVBQVIsUUFSYTtBQVNiLEVBQUEsU0FBUyxFQUFULFNBVGE7QUFVYixFQUFBLFlBQVksRUFBWixZQVZhO0FBV2IsRUFBQSxlQUFlLEVBQWYsZUFYYTtBQVliLEVBQUEsVUFBVSxFQUFWLFVBWmE7QUFhYixFQUFBLFFBQVEsRUFBUjtBQWJhLEM7Ozs7QUNwSGY7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztlQUVlO0FBQ2IsRUFBQSxHQUFHLEVBQUgsZUFEYTtBQUViLEVBQUEsRUFBRSxFQUFGLGNBRmE7QUFHYixFQUFBLEdBQUcsRUFBSCxTQUhhO0FBSWIsRUFBQSxJQUFJLEVBQUosVUFKYTtBQUtiLEVBQUEsS0FBSyxFQUFMLGlCQUxhO0FBTWIsRUFBQSxNQUFNLEVBQU4sa0JBTmE7QUFPYixFQUFBLE9BQU8sRUFBUDtBQVBhLEM7Ozs7QUNUZjs7Ozs7Ozs7O0FBRUE7O0FBRU8sU0FBUyxHQUFULENBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixVQUF6QixFQUFxQyxRQUFyQyxFQUErQztBQUNwRCxNQUFJLFFBQVEsS0FBSyxTQUFqQixFQUE0QjtBQUMxQixJQUFBLFFBQVEsR0FBRyxVQUFYLENBRDBCLENBQ0g7O0FBQ3ZCLElBQUEsVUFBVSxHQUFHLEVBQWI7QUFDRDs7QUFFRCxNQUFNLE1BQU0sR0FBRyxxQkFBZjtBQUFBLE1BQ00sSUFBSSxHQUFHLFNBRGI7QUFHQSxFQUFBLE9BQU8sQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLFVBQWIsRUFBeUIsTUFBekIsRUFBaUMsSUFBakMsRUFBdUMsUUFBdkMsQ0FBUDtBQUNEOztBQUVNLFNBQVMsSUFBVCxDQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MsVUFBaEMsRUFBNEMsUUFBNUMsRUFBc0Q7QUFDM0QsTUFBSSxRQUFRLEtBQUssU0FBakIsRUFBNEI7QUFDMUIsSUFBQSxRQUFRLEdBQUcsVUFBWCxDQUQwQixDQUNIOztBQUN2QixJQUFBLFVBQVUsR0FBRyxFQUFiO0FBQ0Q7O0FBRUQsTUFBTSxNQUFNLEdBQUcsc0JBQWY7QUFBQSxNQUNNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBTCxDQUFlLElBQWYsQ0FEYjtBQUdBLEVBQUEsT0FBTyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsVUFBYixFQUF5QixNQUF6QixFQUFpQyxJQUFqQyxFQUF1QyxRQUF2QyxDQUFQO0FBQ0Q7O0FBRU0sU0FBUyxPQUFULENBQWlCLElBQWpCLEVBQXVCLElBQXZCLEVBQTZCLFVBQTdCLEVBQXlDLE1BQXpDLEVBQWlELElBQWpELEVBQXVELFFBQXZELEVBQWlFO0FBQ3RFLE1BQU0sR0FBRyxHQUFHLDRCQUE0QixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsVUFBYixDQUF4QztBQUFBLE1BQ00sTUFBTSxHQUFHLGtDQURmO0FBQUEsTUFFTSxjQUFjLEdBQUcsSUFBSSxjQUFKLEVBRnZCOztBQUlBLEVBQUEsY0FBYyxDQUFDLGtCQUFmLEdBQW9DLFlBQU07QUFBQSxRQUNoQyxVQURnQyxHQUNLLGNBREwsQ0FDaEMsVUFEZ0M7QUFBQSxRQUNwQixNQURvQixHQUNLLGNBREwsQ0FDcEIsTUFEb0I7QUFBQSxRQUNaLFlBRFksR0FDSyxjQURMLENBQ1osWUFEWTs7QUFHeEMsUUFBSSxVQUFVLElBQUksQ0FBbEIsRUFBcUI7QUFDbkIsVUFBSSxJQUFJLEdBQUcsSUFBWDs7QUFFQSxVQUFJLE1BQU0sSUFBSSxHQUFkLEVBQW1CO0FBQ2pCLFlBQU0sVUFBVSxHQUFHLFlBQW5CLENBRGlCLENBQ2dCOztBQUVqQyxZQUFJO0FBQ0YsVUFBQSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxVQUFYLENBQVA7QUFDRCxTQUZELENBRUUsT0FBTyxLQUFQLEVBQWMsQ0FDZDtBQUNEO0FBQ0Y7O0FBRUQsTUFBQSxRQUFRLENBQUMsSUFBRCxFQUFPLE1BQVAsQ0FBUjtBQUNEO0FBQ0YsR0FsQkQ7O0FBb0JBLEVBQUEsY0FBYyxDQUFDLElBQWYsQ0FBb0IsTUFBcEIsRUFBNEIsR0FBNUI7QUFFQSxFQUFBLGNBQWMsQ0FBQyxnQkFBZixDQUFnQyxRQUFoQyxFQUEwQyxNQUExQzs7QUFFQSxNQUFJLE1BQU0sS0FBSyxzQkFBZixFQUE0QjtBQUMxQixRQUFNLFdBQVcsR0FBRyx3Q0FBcEI7QUFFQSxJQUFBLGNBQWMsQ0FBQyxnQkFBZixDQUFnQyxjQUFoQyxFQUFnRCxXQUFoRDtBQUNEOztBQUVELEVBQUEsY0FBYyxDQUFDLElBQWYsQ0FBb0IsSUFBcEI7QUFDRDs7QUFFRCxTQUFTLHlCQUFULENBQW1DLFVBQW5DLEVBQStDO0FBQzdDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFQLENBQVksVUFBWixDQUFkO0FBQUEsTUFDTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BRDFCO0FBQUEsTUFFTSxTQUFTLEdBQUcsV0FBVyxHQUFHLENBRmhDO0FBQUEsTUFHTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxVQUFDLFdBQUQsRUFBYyxJQUFkLEVBQW9CLEtBQXBCLEVBQThCO0FBQ3ZELFFBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFELENBQXhCO0FBQUEsUUFDTSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsSUFBRCxDQUR0QztBQUFBLFFBRU0sWUFBWSxHQUFHLGtCQUFrQixDQUFDLEtBQUQsQ0FGdkM7QUFBQSxRQUdNLGtCQUFrQixHQUFJLEtBQUssS0FBSyxTQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBSHpEO0FBS0EsSUFBQSxXQUFXLGNBQU8sV0FBUCxjQUFzQixZQUF0QixTQUFxQyxrQkFBckMsQ0FBWDtBQUVBLFdBQU8sV0FBUDtBQUNELEdBVGEsRUFTWCxFQVRXLENBSHBCO0FBY0EsU0FBTyxXQUFQO0FBQ0Q7O0FBRUQsU0FBUyw0QkFBVCxDQUFzQyxJQUF0QyxFQUE0QyxJQUE1QyxFQUFrRCxVQUFsRCxFQUE4RDtBQUM1RCxNQUFNLFdBQVcsR0FBRyx5QkFBeUIsQ0FBQyxVQUFELENBQTdDO0FBQUEsTUFDTSxHQUFHLEdBQUksV0FBVyxLQUFLLEVBQWpCLGFBQ0csSUFESCxTQUNVLElBRFYsY0FFSyxJQUZMLFNBRVksSUFGWixjQUVvQixXQUZwQixDQURaO0FBS0EsU0FBTyxHQUFQO0FBQ0Q7OztBQzNGRDs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTSxNQUFNLEdBQUcsQ0FDYixnQkFEYSxFQUViLGdCQUZhLEVBR2IsZUFIYSxFQUliLGtCQUphLEVBS2IsZ0JBTGEsRUFNYixnQkFOYSxDQUFmO0FBU0EsSUFBSSxRQUFRLEdBQUcsNEJBQWY7QUFBQSxJQUNJLGVBQWUsR0FBRyxxQ0FEdEI7QUFBQSxJQUVJLGdCQUFnQixHQUFHLHFDQUZ2Qjs7QUFJZSxTQUFTLEdBQVQsQ0FBYSxjQUFiLEVBQXlDO0FBQUEsTUFBWixLQUFZLHVFQUFKLEVBQUk7QUFDdEQsTUFBSSx3QkFBd0IsR0FBRyxDQUEvQjs7QUFFQSxNQUFJLEtBQUssS0FBSyxFQUFkLEVBQWtCO0FBQ2hCLFFBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFQLENBQWUsS0FBZixDQUFuQjtBQUFBLFFBQ00sYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFQLENBQWUsUUFBZixDQUR0Qjs7QUFHQSxRQUFJLFVBQVUsR0FBRyxhQUFqQixFQUFnQztBQUM5QjtBQUNEOztBQUVELElBQUEsd0JBQXdCLElBQUksQ0FBNUI7QUFFQSxJQUFBLEtBQUssYUFBTSxLQUFOLE1BQUwsQ0FWZ0IsQ0FVTTtBQUN2Qjs7QUFFRCxNQUFJLEtBQUosRUFDSSxPQURKOztBQUdBLE1BQUksY0FBYyxZQUFZLEtBQTlCLEVBQXFDO0FBQ25DLElBQUEsS0FBSyxHQUFHLGNBQVIsQ0FEbUMsQ0FDWDs7QUFEVyxpQkFHcEIsS0FIb0I7QUFHaEMsSUFBQSxPQUhnQyxVQUdoQyxPQUhnQztBQUlwQyxHQUpELE1BSU87QUFDTCxJQUFBLE9BQU8sR0FBRyxjQUFWLENBREssQ0FDcUI7O0FBRTFCLElBQUEsS0FBSyxHQUFHLElBQUksS0FBSixDQUFVLE9BQVYsQ0FBUjtBQUNEOztBQTNCcUQsZ0JBNkJwQyxLQTdCb0M7QUFBQSxNQTZCOUMsS0E3QjhDLFdBNkI5QyxLQTdCOEM7QUFBQSxNQThCaEQsYUE5QmdELEdBOEJoQyxzQkFBc0IsQ0FBQyxLQUFELENBOUJVO0FBQUEsTUErQmhELHFCQS9CZ0QsR0ErQnhCLGFBQWEsQ0FBQyx3QkFBRCxDQS9CVztBQUFBLE1BZ0NoRCxZQWhDZ0QsR0FnQ2pDLHFCQWhDaUM7QUFBQSxNQWlDaEQsd0JBakNnRCxHQWlDckIsMkJBQTJCLEVBakNOO0FBQUEsTUFrQ2hELFFBbENnRCxHQWtDckMsd0JBQXdCLENBQUMsWUFBRCxDQWxDYTtBQUFBLE1BbUNoRCxVQW5DZ0QsR0FtQ25DLDBCQUEwQixDQUFDLFlBQUQsQ0FuQ1M7QUFBQSxNQW9DaEQsVUFwQ2dELGFBb0NoQyxLQXBDZ0MsU0FvQ3hCLHdCQXBDd0IsY0FvQ0ksUUFwQ0osY0FvQ2dCLFVBcENoQixlQW9DK0IsT0FwQy9CO0FBc0N0RCxFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksVUFBWjs7QUFFQSxNQUFJLGdCQUFnQixLQUFLLElBQXpCLEVBQStCO0FBQzdCLElBQUEsZUFBZTtBQUVmLFFBQU0sV0FBVyxHQUFHLGNBQWMsRUFBbEM7QUFBQSxRQUNNLGNBQWMsYUFBTSxVQUFOLE9BRHBCO0FBR0Esa0NBQWEsV0FBYixFQUEwQixjQUExQjtBQUNEOztBQUVELFNBQU8sVUFBUDtBQUNEOztBQUVELFNBQVMsS0FBVCxDQUFlLE9BQWYsRUFBd0I7QUFBRSxTQUFPLEdBQUcsQ0FBQyxPQUFELEVBQVUsZ0JBQVYsQ0FBVjtBQUE2Qjs7QUFFdkQsU0FBUyxLQUFULENBQWUsT0FBZixFQUF3QjtBQUFFLFNBQU8sR0FBRyxDQUFDLE9BQUQsRUFBVSxnQkFBVixDQUFWO0FBQTZCOztBQUV2RCxTQUFTLElBQVQsQ0FBYyxPQUFkLEVBQXVCO0FBQUUsU0FBTyxHQUFHLENBQUMsT0FBRCxFQUFVLGVBQVYsQ0FBVjtBQUE0Qjs7QUFFckQsU0FBUyxPQUFULENBQWlCLE9BQWpCLEVBQTBCO0FBQUUsU0FBTyxHQUFHLENBQUMsT0FBRCxFQUFVLGtCQUFWLENBQVY7QUFBK0I7O0FBRTNELFNBQVMsS0FBVCxDQUFlLE9BQWYsRUFBd0I7QUFBRSxTQUFPLEdBQUcsQ0FBQyxPQUFELEVBQVUsZ0JBQVYsQ0FBVjtBQUE2Qjs7QUFFdkQsU0FBUyxLQUFULENBQWUsT0FBZixFQUF3QjtBQUFFLFNBQU8sR0FBRyxDQUFDLE9BQUQsRUFBVSxnQkFBVixDQUFWO0FBQTZCOztBQUV2RCxTQUFTLFdBQVQsQ0FBcUIsS0FBckIsRUFBNEI7QUFBRSxFQUFBLFFBQVEsR0FBRyxLQUFYO0FBQW1COztBQUVqRCxTQUFTLGtCQUFULENBQTRCLFlBQTVCLEVBQTBDO0FBQUUsRUFBQSxlQUFlLEdBQUcsWUFBbEI7QUFBaUM7O0FBRTdFLFNBQVMsbUJBQVQsQ0FBNkIsYUFBN0IsRUFBNEM7QUFBRSxFQUFBLGdCQUFnQixHQUFHLGFBQW5CO0FBQW1DOztBQUVqRixTQUFTLGFBQVQsQ0FBdUIsVUFBdkIsRUFBbUM7QUFBQSxNQUN6QixLQUR5QixHQUNjLFVBRGQsQ0FDekIsS0FEeUI7QUFBQSxNQUNsQixZQURrQixHQUNjLFVBRGQsQ0FDbEIsWUFEa0I7QUFBQSxNQUNKLGFBREksR0FDYyxVQURkLENBQ0osYUFESTtBQUdqQyxFQUFBLFdBQVcsQ0FBQyxLQUFELENBQVg7QUFFQSxFQUFBLGtCQUFrQixDQUFDLFlBQUQsQ0FBbEI7QUFFQSxFQUFBLG1CQUFtQixDQUFDLGFBQUQsQ0FBbkI7QUFDRDs7QUFFRCxTQUFTLGlCQUFULEdBQTZCO0FBQzNCLE1BQU0sV0FBVyxHQUFHLGNBQWMsRUFBbEM7QUFBQSxNQUNNLGNBQWMsR0FBRywwQkFBUyxXQUFULENBRHZCO0FBR0EsU0FBTyxjQUFQO0FBQ0Q7O0FBRUQsTUFBTSxDQUFDLE1BQVAsQ0FBYyxHQUFkLEVBQW1CO0FBQ2pCLEVBQUEsS0FBSyxFQUFMLGdCQURpQjtBQUVqQixFQUFBLEtBQUssRUFBTCxnQkFGaUI7QUFHakIsRUFBQSxJQUFJLEVBQUosZUFIaUI7QUFJakIsRUFBQSxPQUFPLEVBQVAsa0JBSmlCO0FBS2pCLEVBQUEsS0FBSyxFQUFMLGdCQUxpQjtBQU1qQixFQUFBLEtBQUssRUFBTCxnQkFOaUI7QUFPakIsRUFBQSxLQUFLLEVBQUwsS0FQaUI7QUFRakIsRUFBQSxLQUFLLEVBQUwsS0FSaUI7QUFTakIsRUFBQSxJQUFJLEVBQUosSUFUaUI7QUFVakIsRUFBQSxPQUFPLEVBQVAsT0FWaUI7QUFXakIsRUFBQSxLQUFLLEVBQUwsS0FYaUI7QUFZakIsRUFBQSxLQUFLLEVBQUwsS0FaaUI7QUFhakIsRUFBQSxXQUFXLEVBQVgsV0FiaUI7QUFjakIsRUFBQSxrQkFBa0IsRUFBbEIsa0JBZGlCO0FBZWpCLEVBQUEsbUJBQW1CLEVBQW5CLG1CQWZpQjtBQWdCakIsRUFBQSxhQUFhLEVBQWIsYUFoQmlCO0FBaUJqQixFQUFBLGlCQUFpQixFQUFqQjtBQWpCaUIsQ0FBbkI7O0FBb0JBLFNBQVMsY0FBVCxHQUEwQjtBQUN4QixNQUFNLFdBQVcsYUFBTSxlQUFOLFNBQWpCO0FBQUEsTUFDTSxXQUFXLEdBQUcsNkJBQWlCLGdCQUFqQixFQUFtQyxXQUFuQyxDQURwQjtBQUdBLFNBQU8sV0FBUDtBQUNEOztBQUVELFNBQVMsd0JBQVQsR0FBb0M7QUFDbEMsTUFBTSxpQkFBaUIsR0FBRyxvQkFBb0IsRUFBOUM7QUFBQSxNQUNNLHFCQUFxQixhQUFNLGVBQU4sY0FBeUIsaUJBQXpCLFNBRDNCO0FBQUEsTUFFTSxxQkFBcUIsR0FBRyw2QkFBaUIsZ0JBQWpCLEVBQW1DLHFCQUFuQyxDQUY5QjtBQUlBLFNBQU8scUJBQVA7QUFDRDs7QUFFRCxTQUFTLDBCQUFULEdBQXNDO0FBQzlCLE1BQUEsV0FBVyxHQUFHLGNBQWMsRUFBNUI7QUFBQSxNQUNBLFlBREEsR0FDZSwwQkFBUyxXQUFULENBRGY7QUFBQSxNQUVFLEtBRkYsR0FFWSxZQUZaLENBRUUsS0FGRjtBQUFBLE1BR0EsdUJBSEEsR0FHMEIsSUFBSSxJQUFKLENBQVMsS0FBVCxDQUgxQixDQUQ4QixDQUljOztBQUVsRCxTQUFPLHVCQUFQO0FBQ0Q7O0FBRUQsU0FBUyxlQUFULEdBQTJCO0FBQ3pCLE1BQU0sV0FBVyxHQUFHLGNBQWMsRUFBbEM7QUFBQSxNQUNNLGFBQWEsR0FBRyxpQ0FBZ0IsV0FBaEIsQ0FEdEI7O0FBR0EsTUFBSSxDQUFDLGFBQUwsRUFBb0I7QUFDbEI7QUFDRDs7QUFFRCxNQUFNLHVCQUF1QixHQUFHLDBCQUEwQixFQUExRDtBQUFBLE1BQ00sa0NBQWtDLEdBQUcsaUJBQWlCLENBQUMsdUJBQUQsQ0FENUQ7O0FBR0EsTUFBSSxDQUFDLGtDQUFMLEVBQXlDO0FBQ3ZDLFFBQU0scUJBQXFCLEdBQUcsd0JBQXdCLEVBQXREO0FBRUEsZ0NBQVcsV0FBWCxFQUF3QixxQkFBeEI7QUFDRDtBQUNGOztBQUVELFNBQVMsaUJBQVQsQ0FBMkIsSUFBM0IsRUFBaUM7QUFDL0IsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFKLEVBQXBCO0FBQUEsTUFDTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQUwsRUFEbkI7QUFBQSxNQUVNLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxZQUFaLEVBRjFCO0FBQUEsTUFHTSxlQUFlLEdBQUksVUFBVSxLQUFLLGlCQUh4QztBQUtBLFNBQU8sZUFBUDtBQUNEOztBQUVELFNBQVMsb0JBQVQsR0FBZ0M7QUFDOUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFKLEVBQWI7QUFBQSxNQUNNLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTCxFQUFELEVBQWlCLENBQWpCLENBRDlCO0FBQUEsTUFDb0Q7QUFDOUMsRUFBQSxLQUFLLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQUwsS0FBa0IsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FGaEM7QUFBQSxNQUUwRDtBQUNwRCxFQUFBLElBQUksR0FBRyxJQUFJLENBQUMsV0FBTCxFQUhiO0FBQUEsTUFJTSx3QkFBd0IsYUFBTSxHQUFOLGNBQWEsS0FBYixjQUFzQixJQUF0QixDQUo5QjtBQU1BLFNBQU8sd0JBQVA7QUFDRDs7QUFFRCxTQUFTLDJCQUFULEdBQXVDO0FBQ3JDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSixFQUFiO0FBQUEsTUFDTSxHQUFHLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQUwsRUFBRCxFQUFpQixDQUFqQixDQUQ5QjtBQUFBLE1BQ29EO0FBQzlDLEVBQUEsS0FBSyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFMLEtBQWtCLENBQW5CLEVBQXNCLENBQXRCLENBRmhDO0FBQUEsTUFFMEQ7QUFDcEQsRUFBQSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQUwsRUFIYjtBQUFBLE1BSU0sS0FBSyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFMLEVBQUQsRUFBa0IsQ0FBbEIsQ0FKaEM7QUFBQSxNQUtNLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBTCxFQUFELEVBQW9CLENBQXBCLENBTGxDO0FBQUEsTUFNTSxPQUFPLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQUwsRUFBRCxFQUFvQixDQUFwQixDQU5sQztBQUFBLE1BT00sWUFBWSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFMLEVBQUQsRUFBeUIsQ0FBekIsQ0FQdkM7QUFBQSxNQVFNLHdCQUF3QixhQUFNLEdBQU4sY0FBYSxLQUFiLGNBQXNCLElBQXRCLGNBQThCLEtBQTlCLGNBQXVDLE9BQXZDLGNBQWtELE9BQWxELGNBQTZELFlBQTdELENBUjlCO0FBVUEsU0FBTyx3QkFBUDtBQUNEOztBQUVELFNBQVMsc0JBQVQsQ0FBZ0MsS0FBaEMsRUFBdUM7QUFDckMsTUFBTSxhQUFhLEdBQUcsRUFBdEI7QUFBQSxNQUNNLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBTixDQUFZLFNBQVosQ0FEbkI7QUFHQSxNQUFJLFlBQVksR0FBRyxFQUFuQjtBQUVBLEVBQUEsVUFBVSxDQUFDLE9BQVgsQ0FBbUIsVUFBQyxTQUFELEVBQWU7QUFDaEMsUUFBTSxPQUFPLEdBQUcsV0FBVyxJQUFYLENBQWdCLFNBQWhCLENBQWhCO0FBRUEsSUFBQSxZQUFZLEdBQUksWUFBWSxLQUFLLEVBQWxCLEdBQ0csU0FESCxhQUVRLFlBRlIsZUFFeUIsU0FGekIsQ0FBZjs7QUFJQSxRQUFJLE9BQUosRUFBYTtBQUNYLE1BQUEsYUFBYSxDQUFDLElBQWQsQ0FBbUIsWUFBbkI7QUFFQSxNQUFBLFlBQVksR0FBRyxFQUFmO0FBQ0Q7QUFDRixHQVpEO0FBY0EsU0FBTyxhQUFQO0FBQ0Q7O0FBRUQsU0FBUyx3QkFBVCxDQUFrQyxZQUFsQyxFQUFnRDtBQUM5QyxNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsS0FBYixDQUFtQixpQkFBbkIsQ0FBaEI7QUFBQSxNQUNNLFdBQVcsR0FBRyxtQkFBTyxPQUFQLENBRHBCO0FBQUEsTUFFTSxnQkFBZ0IsR0FBRyxXQUZ6QjtBQUFBLE1BRXVDO0FBQ2pDLEVBQUEsMkJBQTJCLEdBQUcsaUJBQUssT0FBTCxDQUFhLEdBQWIsQ0FIcEM7QUFBQSxNQUd3RDtBQUNsRCxFQUFBLGlDQUFpQyxHQUFHLDJCQUEyQixDQUFDLE1BSnRFO0FBQUEsTUFLTSxLQUFLLEdBQUcsaUNBQWlDLEdBQUcsQ0FMbEQ7QUFBQSxNQUtzRDtBQUNoRCxFQUFBLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFqQixDQUF3QixLQUF4QixDQU5qQjs7QUFRQSxTQUFPLFFBQVA7QUFDRDs7QUFFRCxTQUFTLDBCQUFULENBQW9DLFlBQXBDLEVBQWtEO0FBQ2hELE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxLQUFiLENBQW1CLFNBQW5CLENBQWhCO0FBQUEsTUFDTSxXQUFXLEdBQUcsbUJBQU8sT0FBUCxDQURwQjtBQUFBLE1BRU0sVUFBVSxHQUFHLFdBRm5CLENBRGdELENBR2hCOztBQUVoQyxTQUFPLFVBQVA7QUFDRDs7QUFFRCxTQUFTLGtCQUFULENBQTRCLE1BQTVCLEVBQW9DLFlBQXBDLEVBQWtEO0FBQ2hELE1BQU0sU0FBUyxHQUFHLEdBQWxCO0FBQUEsTUFDTSxZQUFZLEdBQUcsUUFBUSxDQUFDLE1BQUQsRUFBUyxZQUFULEVBQXVCLFNBQXZCLENBRDdCO0FBR0EsU0FBTyxZQUFQO0FBQ0Q7O0FBRUQsU0FBUyxRQUFULENBQWtCLE1BQWxCLEVBQTBCLFlBQTFCLEVBQXdDLFNBQXhDLEVBQW1EO0FBQ2pELE1BQUksT0FBTyxHQUFHLEVBQWQ7O0FBRUEsT0FBSyxJQUFJLEtBQUssR0FBRyxDQUFqQixFQUFvQixLQUFLLEdBQUcsWUFBNUIsRUFBMEMsS0FBSyxFQUEvQyxFQUFtRDtBQUNqRCxJQUFBLE9BQU8sSUFBSSxTQUFYO0FBQ0Q7O0FBRUQsTUFBTSxZQUFZLEdBQUcsVUFBRyxPQUFILFNBQWEsTUFBYixFQUFzQixNQUF0QixDQUE2QixDQUFDLFlBQTlCLENBQXJCO0FBRUEsU0FBTyxZQUFQO0FBQ0Q7Ozs7QUN4UUQ7Ozs7Ozs7QUFFQTs7QUFFZSxTQUFTLEtBQVQsQ0FBZSxPQUFmLEVBQXdCO0FBQ3JDLE1BQU0sS0FBSyxHQUFHLHFCQUFkOztBQUVBLE1BQUksT0FBTyxDQUFDLEtBQVIsQ0FBYyxVQUFsQixFQUE4QjtBQUM1QixRQUFNLE9BQU8sR0FBRyxJQUFoQjtBQUFBLFFBQ00sUUFBUSxHQUFHLHdCQURqQjtBQUdBLElBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxVQUFkLENBQXlCLE9BQXpCO0FBQ0EsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLFdBQWQsQ0FBMEIsUUFBMUI7QUFFQSxJQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsTUFBZDtBQUVBLElBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxXQUFkLENBQTBCLEtBQTFCLEVBQWlDLFdBQWpDO0FBRUEsV0FBTyxNQUFQO0FBQ0Q7O0FBRUQsV0FBUyxNQUFULEdBQWtCO0FBQ2hCLElBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxjQUFkLENBQTZCLEtBQTdCLEVBQW9DLFdBQXBDO0FBQ0Q7O0FBRUQsV0FBUyxXQUFULENBQXFCLFNBQXJCLEVBQWdDO0FBQzlCLFFBQUksU0FBUyxLQUFLLHdCQUFsQixFQUFpQztBQUMvQixNQUFBLE9BQU87QUFDUjtBQUNGO0FBQ0Y7Ozs7OztBQzlCRDs7Ozs7OztBQUVBOztBQUVBOztBQUVBOzs7O0FBRWUsU0FBUyxNQUFULENBQWdCLE9BQWhCLEVBQXlCLFFBQXpCLEVBQW1DO0FBQUEsTUFDeEMsS0FEd0MsR0FDOUIsT0FEOEIsQ0FDeEMsS0FEd0M7O0FBR2hELE1BQUksS0FBSixFQUFXO0FBQ1QsUUFBTSxNQUFLLEdBQUcsS0FBZCxDQURTLENBQ2E7O0FBRXRCLElBQUEsUUFBUSxDQUFDLE1BQUQsQ0FBUjtBQUVBO0FBQ0Q7O0FBRUssTUFBQSxLQUFLLEdBQUcsSUFBUjtBQUFBLDBCQUNrQyxPQURsQyxDQUNFLFFBREY7QUFBQSxNQUNFLFFBREYsa0NBQ2EsMkJBRGI7QUFBQSxNQUVBLE9BRkEsR0FFVTtBQUNSLElBQUEsS0FBSyxFQUFMLEtBRFE7QUFFUixJQUFBLFFBQVEsRUFBUixRQUZRO0FBR1IsSUFBQSxPQUFPLEVBQVA7QUFIUSxHQUZWO0FBUU4sNEJBQU8sT0FBUCxFQUFnQixZQUFNO0FBQUEsUUFDWixLQURZLEdBQ0YsT0FERSxDQUNaLEtBRFk7QUFHcEIsSUFBQSxRQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0QsR0FKRCxFQUlHLE9BSkg7QUFLRDs7QUFFRCxTQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkIsT0FBN0IsRUFBc0M7QUFBQSxNQUM5QixRQUQ4QixHQUNqQixPQURpQixDQUM5QixRQUQ4QjtBQUdwQyxNQUFNLFNBQVMsR0FBSSxRQUFRLE9BQU8sQ0FBbEM7O0FBRUEsTUFBSSxTQUFKLEVBQWU7QUFDYixJQUFBLElBQUk7QUFFSjtBQUNEOztBQUVLLE1BQUUsT0FBRixHQUFjLE9BQWQsQ0FBRSxPQUFGO0FBQUEsd0JBT3lCLE9BUHpCLENBQ0UsTUFERjtBQUFBLE1BQ0UsTUFERixnQ0FDVyxLQURYO0FBQUEsMEJBT3lCLE9BUHpCLENBRUUsUUFGRjtBQUFBLE1BRUUsUUFGRixrQ0FFYSxNQUZiO0FBQUEsTUFHRSxXQUhGLEdBT3lCLE9BUHpCLENBR0UsV0FIRjtBQUFBLDhCQU95QixPQVB6QixDQUlFLFlBSkY7QUFBQSxNQUlFLFlBSkYsc0NBSWlCLEVBSmpCO0FBQUEsTUFLRSxZQUxGLEdBT3lCLE9BUHpCLENBS0UsWUFMRjtBQUFBLE1BTUUsaUJBTkYsR0FPeUIsT0FQekIsQ0FNRSxpQkFORjtBQUFBLE1BT0Usa0JBUEYsR0FPeUIsT0FQekIsQ0FPRSxrQkFQRjtBQVNOLEVBQUEsS0FBSyxDQUFDLFdBQUQsRUFBYyxZQUFkLEVBQTRCLFFBQTVCLEVBQXNDLE1BQXRDLEVBQThDLFFBQTlDLENBQUw7O0FBRUEsV0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCO0FBQ3ZCLFFBQU0sS0FBSyxHQUFHLGtCQUFrQixHQUFJO0FBQ3BCLElBQUEsa0JBQWtCLENBQUMsS0FBRCxDQURGLEdBRWQsaUJBQWlCLENBQUMsSUFBbEIsQ0FBdUIsS0FBdkIsQ0FGbEI7O0FBSUEsUUFBSSxLQUFKLEVBQVc7QUFDVCxNQUFBLE1BQU0sQ0FBQyxNQUFQLENBQWMsT0FBZCxFQUF1QjtBQUNyQixRQUFBLEtBQUssRUFBRTtBQURjLE9BQXZCO0FBSUEsTUFBQSxJQUFJO0FBQ0wsS0FORCxNQU1PO0FBQ0wsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFlBQVo7QUFFQSxNQUFBLE1BQU0sQ0FBQyxNQUFQLENBQWMsT0FBZCxFQUF1QjtBQUNyQixRQUFBLFFBQVEsRUFBUjtBQURxQixPQUF2QjtBQUlBLE1BQUEsSUFBSTtBQUNMO0FBQ0Y7QUFDRjs7QUFFRCxTQUFTLEtBQVQsQ0FBZSxXQUFmLEVBQTRCLFlBQTVCLEVBQTBDLFFBQTFDLEVBQW9ELE1BQXBELEVBQTRELFFBQTVELEVBQXNFO0FBQ3BFLE1BQUksS0FBSyxHQUFHLFlBQVosQ0FEb0UsQ0FDMUM7O0FBRTFCLE1BQU0sS0FBSyxHQUFHLHFCQUFkO0FBQUEsTUFDTSxPQUFPLEdBQUcsSUFEaEI7QUFBQSxNQUVNLE1BQU0sR0FBRyx1QkFBTSxZQUFNO0FBQ25CLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxpQkFBWjtBQUVBLElBQUEsT0FBTyxDQUFDLElBQVI7QUFDRCxHQUpRLENBRmY7QUFRQSxFQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsV0FBZCxDQUEwQixRQUExQjtBQUVBLEVBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxVQUFkLENBQXlCLE9BQXpCO0FBRUEsRUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLEtBQWYsQ0FBcUIsV0FBckI7O0FBRUEsTUFBSSxDQUFDLE1BQUwsRUFBYTtBQUNYLElBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxLQUFmLENBQXFCLEtBQXJCO0FBQ0Q7O0FBRUQsRUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLE1BQWQ7QUFFQSxFQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsRUFBZCxDQUFpQixLQUFqQixFQUF3QixRQUF4Qjs7QUFFQSxXQUFTLFFBQVQsQ0FBa0IsS0FBbEIsRUFBeUI7QUFDdkIsUUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQU4sQ0FBZSxRQUFmLENBQWxCOztBQUVBLFlBQVEsU0FBUjtBQUNFLFdBQUssOEJBQUw7QUFDQSxXQUFLLG9DQUFMO0FBQ0UsUUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLEtBQWYsQ0FBcUIsOEJBQXJCO0FBRUEsUUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLGNBQWQsQ0FBNkIsS0FBN0IsRUFBb0MsUUFBcEM7QUFFQSxRQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsS0FBZDtBQUVBLFFBQUEsTUFBTTtBQUVOLFFBQUEsUUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUVBOztBQUVGLFdBQUssOEJBQUw7QUFDRSxRQUFBLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBTixDQUFZLENBQVosRUFBZSxLQUFLLENBQUMsTUFBTixHQUFlLENBQTlCLENBQVI7QUFFQSxRQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsU0FBZjtBQUVBLFFBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxRQUFmLENBQXdCLENBQXhCO0FBRUEsUUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLEtBQWYsQ0FBcUIsV0FBckI7O0FBRUEsWUFBSSxDQUFDLE1BQUwsRUFBYTtBQUNYLFVBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxLQUFmLENBQXFCLEtBQXJCO0FBQ0Q7O0FBRUQ7O0FBRUY7QUFDRSxRQUFBLEtBQUssSUFBSSxTQUFUOztBQUVBLFlBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxVQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsU0FBZjtBQUVBLFVBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxRQUFmLENBQXdCLENBQXhCO0FBRUEsVUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLEtBQWYsQ0FBcUIsV0FBckI7QUFFQSxVQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsS0FBZixDQUFxQixLQUFyQjtBQUNEOztBQUVEO0FBM0NKO0FBNkNEO0FBQ0Y7Ozs7O0FDekpEOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFJLFlBQVksR0FBRyxpQkFBSyxPQUF4QjtBQUFBLElBQ0ksYUFBYSxHQUFHLG9DQURwQjs7QUFHZSxTQUFTLEVBQVQsR0FBMEM7QUFBQSxNQUE5QixxQkFBOEIsdUVBQU4sSUFBTTtBQUN2RCxNQUFJLFdBQUo7QUFBQSxNQUNJLGVBREo7QUFBQSxNQUVJLHlCQUF5QixHQUFJLHFCQUFxQixZQUFZLEtBRmxFOztBQUlBLE1BQUkseUJBQUosRUFBK0I7QUFDN0IsUUFBTSxJQUFJLEdBQUcscUJBQWIsQ0FENkIsQ0FDTzs7QUFFcEMsSUFBQSxlQUFlLEdBQUcsdUJBQXVCLENBQUMsSUFBRCxDQUF6QztBQUNELEdBSkQsTUFJTztBQUNMLElBQUEsZUFBZSxHQUFHLHFCQUFsQixDQURLLENBQ3FDO0FBQzNDOztBQUVLLE1BQUEsSUFBSSxHQUFHLFVBQVUsRUFBakI7QUFBQSxNQUNFLFlBREYsR0FDbUIsSUFEbkIsQ0FDRSxZQURGOztBQUdOLE1BQUksZUFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCLFFBQU0sZ0JBQWdCLEdBQUcsa0JBQU0sWUFBTixDQUF6QjtBQUVBLElBQUEsV0FBVyxHQUFHLGdCQUFkLENBSDRCLENBR0k7QUFDakMsR0FKRCxNQUlPO0FBQ0wsSUFBQSxXQUFXLEdBQUcsWUFBWSxDQUFDLElBQWIsQ0FBa0IsVUFBQyxXQUFELEVBQWlCO0FBQ3pDLFVBQUUsSUFBRixHQUFXLFdBQVgsQ0FBRSxJQUFGO0FBQUEsVUFDQSxLQURBLEdBQ1MsSUFBSSxLQUFLLGVBRGxCO0FBR04sYUFBTyxLQUFQO0FBQ0QsS0FMYSxDQUFkO0FBTUQ7O0FBRUQsU0FBTyxXQUFXLENBQUMsSUFBbkI7QUFFQSxFQUFBLE1BQU0sQ0FBQyxNQUFQLENBQWMsRUFBZCxFQUFrQixXQUFsQjtBQUVBLFNBQU8sV0FBUDtBQUNEOztBQUVELFNBQVMsVUFBVCxHQUFzQjtBQUNwQixNQUFNLGtCQUFrQixHQUFHLDZCQUE2QixFQUF4RDtBQUFBLE1BQ00sV0FBVyxHQUFHLDBCQUFTLGtCQUFULENBRHBCO0FBQUEsTUFFTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxXQUFYLENBRmI7QUFJQSxTQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFTLFdBQVQsQ0FBcUIsSUFBckIsRUFBMkI7QUFDekIsTUFBTSxrQkFBa0IsR0FBRyw2QkFBNkIsRUFBeEQ7QUFBQSxNQUNNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBTCxDQUFlLElBQWYsRUFBcUIsSUFBckIsT0FEcEI7QUFHQSw2QkFBVSxrQkFBVixFQUE4QixXQUE5QjtBQUNEOztBQUVELFNBQVMsWUFBVCxDQUFzQixlQUF0QixFQUFnRTtBQUM5RCxNQUFJLElBQUksR0FBRyxVQUFVLEVBQXJCOztBQUVBLE1BQUksZUFBSixFQUFxQjtBQUNuQixJQUFBLE1BQU0sQ0FBQyxNQUFQLENBQWMsSUFBZCxFQUFvQixlQUFwQjtBQUNEOztBQUw2RCxvQ0FBdEIsb0JBQXNCO0FBQXRCLElBQUEsb0JBQXNCO0FBQUE7O0FBTzlELEVBQUEsb0JBQW9CLENBQUMsT0FBckIsQ0FBNkIsVUFBQyxtQkFBRCxFQUF5QjtBQUNwRCxXQUFPLElBQUksQ0FBQyxtQkFBRCxDQUFYO0FBQ0QsR0FGRDtBQUlBLEVBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNEOztBQUVELFNBQVMsaUJBQVQsR0FBNkI7QUFDM0IsTUFBTSxrQkFBa0IsR0FBRyw2QkFBNkIsRUFBeEQ7QUFBQSxNQUNNLFlBQVksR0FBRyxpQ0FBZ0Isa0JBQWhCLENBRHJCO0FBR0EsU0FBTyxZQUFQO0FBQ0Q7O0FBRUQsU0FBUyxtQkFBVCxHQUErQjtBQUM3QixNQUFNLElBQUksR0FBRztBQUNYLG9CQUFnQixDQUNkLEVBRGM7QUFETCxHQUFiO0FBTUEsRUFBQSxXQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0Q7O0FBRUQsU0FBUyxrQkFBVCxDQUE0QixlQUE1QixFQUE2QztBQUFFLEVBQUEsYUFBYSxHQUFHLGVBQWhCO0FBQWtDOztBQUVqRixTQUFTLGlCQUFULENBQTJCLGNBQTNCLEVBQTJDO0FBQUUsRUFBQSxZQUFZLEdBQUcsY0FBZjtBQUFnQzs7QUFFN0UsTUFBTSxDQUFDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCO0FBQ2hCLEVBQUEsVUFBVSxFQUFWLFVBRGdCO0FBRWhCLEVBQUEsV0FBVyxFQUFYLFdBRmdCO0FBR2hCLEVBQUEsWUFBWSxFQUFaLFlBSGdCO0FBSWhCLEVBQUEsaUJBQWlCLEVBQWpCLGlCQUpnQjtBQUtoQixFQUFBLG1CQUFtQixFQUFuQixtQkFMZ0I7QUFNaEIsRUFBQSxrQkFBa0IsRUFBbEIsa0JBTmdCO0FBT2hCLEVBQUEsaUJBQWlCLEVBQWpCO0FBUGdCLENBQWxCOztBQVVBLFNBQVMsdUJBQVQsQ0FBaUMsSUFBakMsRUFBdUM7QUFDckMsTUFBSSxlQUFlLEdBQUcsSUFBdEI7QUFFQSxFQUFBLElBQUksQ0FBQyxJQUFMLENBQVUsVUFBQyxRQUFELEVBQWM7QUFBRztBQUN6QixRQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBVCxDQUFlLG9CQUFmLENBQWhCO0FBQUEsUUFDTSxLQUFLLEdBQUksT0FBTyxLQUFLLElBRDNCOztBQUdBLFFBQUksS0FBSixFQUFXO0FBQ1QsVUFBTSxXQUFXLEdBQUcsbUJBQU8sT0FBUCxDQUFwQjtBQUVBLE1BQUEsZUFBZSxHQUFHLFdBQWxCO0FBQ0Q7O0FBRUQsV0FBTyxLQUFQO0FBQ0QsR0FYRDtBQWFBLFNBQU8sZUFBUDtBQUNEOztBQUVELFNBQVMsNkJBQVQsR0FBeUM7QUFDdkMsTUFBTSxRQUFRLGdCQUFTLGFBQVQsT0FBZDtBQUFBLE1BQ00sa0JBQWtCLEdBQUcsWUFBWSxDQUFDLFFBQUQsQ0FEdkM7QUFHQSxTQUFPLGtCQUFQO0FBQ0Q7OztBQ25JRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVPLFNBQVMsVUFBVCxDQUFvQixJQUFwQixFQUEwQjtBQUMvQixFQUFBLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTCxDQUFhLEtBQWIsRUFBbUIsRUFBbkIsRUFBdUIsT0FBdkIsQ0FBK0IsS0FBL0IsRUFBc0MsRUFBdEMsQ0FBUCxDQUQrQixDQUNtQjs7QUFFbEQsTUFBTSxRQUFRLEdBQUksS0FBSyxJQUFMLENBQVUsSUFBVixNQUFvQixLQUF0QztBQUVBLFNBQU8sUUFBUDtBQUNEOztBQUVNLFNBQVMsaUJBQVQsQ0FBMkIsSUFBM0IsRUFBaUM7QUFDdEMsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUQsQ0FBM0I7QUFBQSxNQUNNLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDLElBQUQsQ0FEM0M7QUFBQSxNQUVNLGVBQWUsR0FBSSxRQUFRLElBQUksZ0JBRnJDO0FBSUEsU0FBTyxlQUFQO0FBQ0Q7O0FBRU0sU0FBUyxrQkFBVCxDQUE0QixJQUE1QixFQUFrQztBQUN2QyxNQUFNLGdCQUFnQixHQUFHLENBQUMsTUFBTSxJQUFOLENBQVcsSUFBWCxDQUExQjtBQUVBLFNBQU8sZ0JBQVA7QUFDRDs7QUFFTSxTQUFTLGtCQUFULENBQTRCLElBQTVCLEVBQWtDO0FBQ3ZDLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxJQUFOLENBQVcsSUFBWCxDQUF6QjtBQUVBLFNBQU8sZ0JBQVA7QUFDRDs7QUFFTSxTQUFTLDJCQUFULENBQXFDLFdBQXJDLEVBQWtELFlBQWxELEVBQWdFO0FBQ3JFLE1BQU0sTUFBTSxHQUFHLElBQUksTUFBSixZQUFlLFdBQWYsaUJBQWY7QUFBQSxNQUNNLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyxJQUFQLENBQVksWUFBWixDQURsQztBQUdBLFNBQU8seUJBQVA7QUFDRDs7QUFFTSxTQUFTLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEIsWUFBNUIsRUFBMEM7QUFDL0MsTUFBSSxZQUFZLEdBQUcsSUFBbkI7QUFFQSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQVgsQ0FBbEI7QUFBQSxNQUNNLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxLQUFiLENBQW1CLElBQW5CLENBRDFCO0FBR0EsTUFBSSxZQUFKO0FBQUEsTUFDSSxxQkFBcUIsR0FBRyxrQkFBTSxpQkFBTixDQUQ1Qjs7QUFHQSxNQUFJLHFCQUFxQixLQUFLLEdBQTlCLEVBQW1DO0FBQ2pDLElBQUEsaUJBQWlCLENBQUMsS0FBbEI7QUFDRDs7QUFFRCxFQUFBLHFCQUFxQixHQUFHLGtCQUFNLGlCQUFOLENBQXhCO0FBQ0EsRUFBQSxZQUFZLEdBQUcsaUJBQUssU0FBTCxDQUFmOztBQUVBLFNBQVEscUJBQXFCLEtBQUssSUFBM0IsSUFBcUMsWUFBWSxLQUFLLFNBQTdELEVBQXlFO0FBQ3ZFLElBQUEsaUJBQWlCLENBQUMsS0FBbEI7QUFDQSxJQUFBLFNBQVMsQ0FBQyxHQUFWO0FBRUEsSUFBQSxxQkFBcUIsR0FBRyxrQkFBTSxpQkFBTixDQUF4QjtBQUNBLElBQUEsWUFBWSxHQUFHLGlCQUFLLFNBQUwsQ0FBZjtBQUNEOztBQUVELE1BQUksWUFBWSxLQUFLLFNBQXJCLEVBQWdDO0FBQzlCLFFBQU0saUJBQWlCLEdBQUcsR0FBRyxNQUFILENBQVUsU0FBVixFQUFxQixNQUFyQixDQUE0QixpQkFBNUIsQ0FBMUI7QUFFQSxJQUFBLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxJQUFsQixDQUF1QixHQUF2QixDQUFmO0FBQ0Q7O0FBRUQsU0FBTyxZQUFQO0FBQ0Q7O0FBRU0sU0FBUyxnQkFBVCxDQUEwQixJQUExQixFQUFnQyxZQUFoQyxFQUE4QztBQUNuRCxFQUFBLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTCxDQUFhLEtBQWIsRUFBb0IsRUFBcEIsQ0FBUCxDQURtRCxDQUNsQjs7QUFFakMsTUFBTSxnQkFBZ0IsYUFBTSxJQUFOLGNBQWMsWUFBZCxDQUF0QjtBQUVBLFNBQU8sZ0JBQVA7QUFDRDs7QUFFTSxTQUFTLHNCQUFULENBQWdDLElBQWhDLEVBQXNDO0FBQzNDLE1BQUksY0FBYyxHQUFHLElBQXJCO0FBRUEsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxtQkFBWCxDQUFoQjs7QUFFQSxNQUFJLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQixRQUFNLFdBQVcsR0FBRyxtQkFBTyxPQUFQLENBQXBCO0FBRUEsSUFBQSxjQUFjLEdBQUcsV0FBakIsQ0FIb0IsQ0FHVztBQUNoQzs7QUFFRCxTQUFPLGNBQVA7QUFDRDs7QUFFTSxTQUFTLDRCQUFULENBQXNDLElBQXRDLEVBQTRDO0FBQ2pELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFMLENBQVcsbUJBQVgsQ0FBaEI7QUFBQSxNQUNNLFdBQVcsR0FBRyxtQkFBTyxPQUFQLENBRHBCO0FBQUEsTUFFTSxvQkFBb0IsR0FBRyxXQUY3QixDQURpRCxDQUdQOztBQUUxQyxTQUFPLG9CQUFQO0FBQ0Q7O0FBRU0sU0FBUyw0QkFBVCxDQUFzQyxJQUF0QyxFQUE0QztBQUNqRCxNQUFJLG9CQUFvQixHQUFHLElBQTNCO0FBRUEsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxnQkFBWCxDQUFoQjs7QUFFQSxNQUFJLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQixRQUFNLFdBQVcsR0FBRyxtQkFBTyxPQUFQLENBQXBCO0FBRUEsSUFBQSxvQkFBb0IsR0FBRyxXQUF2QixDQUhvQixDQUdpQjtBQUN0Qzs7QUFFRCxTQUFPLG9CQUFQO0FBQ0Q7O0FBRU0sU0FBUyxpQ0FBVCxDQUEyQyxJQUEzQyxFQUFpRDtBQUN0RCxNQUFJLHlCQUF5QixHQUFHLElBQWhDO0FBRUEsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxtQkFBWCxDQUFoQjs7QUFFQSxNQUFJLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQixRQUFNLFdBQVcsR0FBRyxtQkFBTyxPQUFQLENBQXBCO0FBRUEsSUFBQSx5QkFBeUIsR0FBRyxXQUE1QixDQUhvQixDQUdxQjtBQUMxQzs7QUFFRCxTQUFPLHlCQUFQO0FBQ0Q7O0FBRU0sU0FBUyx1Q0FBVCxDQUFpRCxJQUFqRCxFQUF1RDtBQUM1RCxNQUFJLCtCQUErQixHQUFHLElBQXRDO0FBRUEsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxnQkFBWCxDQUFoQjs7QUFFQSxNQUFJLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQixRQUFNLFdBQVcsR0FBRyxtQkFBTyxPQUFQLENBQXBCO0FBRUEsSUFBQSwrQkFBK0IsR0FBRyxXQUFsQztBQUNEOztBQUVELFNBQU8sK0JBQVA7QUFDRDs7ZUFFYztBQUNiLEVBQUEsVUFBVSxFQUFWLFVBRGE7QUFFYixFQUFBLGlCQUFpQixFQUFqQixpQkFGYTtBQUdiLEVBQUEsa0JBQWtCLEVBQWxCLGtCQUhhO0FBSWIsRUFBQSxrQkFBa0IsRUFBbEIsa0JBSmE7QUFLYixFQUFBLDJCQUEyQixFQUEzQiwyQkFMYTtBQU1iLEVBQUEsWUFBWSxFQUFaLFlBTmE7QUFPYixFQUFBLGdCQUFnQixFQUFoQixnQkFQYTtBQVFiLEVBQUEsc0JBQXNCLEVBQXRCLHNCQVJhO0FBU2IsRUFBQSw0QkFBNEIsRUFBNUIsNEJBVGE7QUFVYixFQUFBLDRCQUE0QixFQUE1Qiw0QkFWYTtBQVdiLEVBQUEsaUNBQWlDLEVBQWpDLGlDQVhhO0FBWWIsRUFBQSx1Q0FBdUMsRUFBdkM7QUFaYSxDOzs7O0FDaEpmOzs7Ozs7Ozs7O0FBRUE7O0FBRU8sU0FBUyxTQUFULENBQW1CLFFBQW5CLEVBQTZCLElBQTdCLEVBQW1DLEtBQW5DLEVBQTBDO0FBQy9DLE1BQU0sT0FBTyxHQUFHLDBCQUFTLFFBQVQsQ0FBaEI7QUFBQSxNQUNNLGFBQWEsR0FBRyxZQUFZLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsS0FBaEIsQ0FEbEM7QUFHQSxTQUFPLGFBQVA7QUFDRDs7QUFFTSxTQUFTLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0IsSUFBL0IsRUFBcUMsS0FBckMsRUFBNEM7QUFDakQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQVIsQ0FBYyxJQUFkLENBQWQ7QUFBQSxNQUNNLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxLQUFkLENBRDlCO0FBQUEsTUFFTSxhQUFhLEdBQUcsV0FBVyxDQUFDLElBQVosQ0FBaUIsSUFBakIsQ0FGdEI7QUFJQSxTQUFPLGFBQVA7QUFDRDs7QUFFTSxTQUFTLFNBQVQsQ0FBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBcUQ7QUFBQSxNQUF0QixLQUFzQix1RUFBZCxZQUFjO0FBQzFELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFMLENBQWEsS0FBYixFQUFvQixVQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWtCO0FBQ3ZELFFBQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFELEVBQVEsSUFBUixDQUE5QjtBQUVBLFdBQU8sV0FBUDtBQUNELEdBSmtCLENBQW5CO0FBTUEsU0FBTyxVQUFQO0FBQ0Q7O2VBRWM7QUFDYixFQUFBLFNBQVMsRUFBVCxTQURhO0FBRWIsRUFBQSxZQUFZLEVBQVosWUFGYTtBQUdiLEVBQUEsU0FBUyxFQUFUO0FBSGEsQzs7O0FBTWYsU0FBUyxVQUFULENBQW9CLEtBQXBCLEVBQTJCLElBQTNCLEVBQWlDLEtBQWpDLEVBQXdDO0FBQ3RDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxHQUFOLENBQVUsVUFBQyxJQUFELEVBQVU7QUFDdEMsUUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsS0FBYixDQUE1QjtBQUVBLFdBQU8sVUFBUDtBQUNELEdBSm1CLENBQXBCO0FBTUEsU0FBTyxXQUFQO0FBQ0Q7O0FBRUQsU0FBUyxVQUFULENBQW9CLEtBQXBCLEVBQTJCLElBQTNCLEVBQWlDO0FBQy9CLE1BQUksV0FBVyxHQUFHLEVBQWxCOztBQUVBLE1BQUksSUFBSSxDQUFDLGNBQUwsQ0FBb0IsS0FBcEIsQ0FBSixFQUFnQztBQUM5QixJQUFBLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBRCxDQUFsQjtBQUNEOztBQUVELFNBQU8sV0FBUDtBQUNEOzs7O0FDckREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzlTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4TmFtZTtcbiAgICB0aGlzLnRhcmdldFZlcnRleE5hbWUgPSB0YXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG5cbiAgZ2V0U291cmNlVmVydGV4TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2VWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRUYXJnZXRWZXJ0ZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFZlcnRleE5hbWU7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gXCIuL2luZGV4XCIgLy8vXG5cbmNvbnN0IGdyYXBoID0gR3JhcGguZnJvbVZlcnRleExpdGVyYWxzKFtcblxuICBbXCJhXCIsIFtcImJcIl1dLFxuICBbXCJiXCIsIFtcImNcIl1dLFxuICBbXCJkXCIsIFtcImNcIl1dLFxuICBbXCJlXCIsIFtdXSxcbiAgW1wiZlwiLCBbXCJnXCJdXSxcbiAgW1wiaFwiLCBbXCJnXCJdXVxuXG5dKTtcblxuY29uc3QgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKSxcbiAgICAgIHJlbWFpbmluZ0VkZ2VzID0gZ3JhcGguZ2V0UmVtYWluaW5nRWRnZXMoKSxcbiAgICAgIG9yZGVyZWRWZXJ0aWNlcyA9IGdyYXBoLmdldE9yZGVyZWRWZXJ0aWNlcygpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuaW1wb3J0IFJlbWFpbmluZ0VkZ2VzIGZyb20gXCIuL3JlbWFpbmluZ0VkZ2VzXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgYmFja3dhcmRzRm9yRWFjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIHtcbiAgY29uc3RydWN0b3Iob3JkZXJlZFZlcnRpY2VzLCByZW1haW5pbmdFZGdlcykge1xuICAgIHRoaXMub3JkZXJlZFZlcnRpY2VzID0gb3JkZXJlZFZlcnRpY2VzO1xuICAgIHRoaXMucmVtYWluaW5nRWRnZXMgPSByZW1haW5pbmdFZGdlcztcbiAgfVxuXG4gIGdldE9yZGVyZWRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5vcmRlcmVkVmVydGljZXM7XG4gIH1cblxuICBnZXRSZW1haW5pbmdFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdFZGdlcztcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7IHJldHVybiB0aGlzLnJlbWFpbmluZ0VkZ2VzLmFyZUN5Y2xlc1ByZXNlbnQoKTsgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXAgPSB2ZXJ0ZXhNYXBGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpLFxuICAgICAgICAgIGVkZ2VzID0gZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHNBbmRWZXJ0ZXhNYXAodmVydGV4TGl0ZXJhbHMsIHZlcnRleE1hcCksXG4gICAgICAgICAgb3JkZXJlZFZlcnRpY2VzID0gb3JkZXJlZFZlcnRpY2VzRnJvbVZlcnRleE1hcEFuZEVkZ2VzKHZlcnRleE1hcCwgZWRnZXMpLFxuICAgICAgICAgIHJlbWFpbmluZ0VkZ2VzID0gbmV3IFJlbWFpbmluZ0VkZ2VzKGVkZ2VzKSxcbiAgICAgICAgICBncmFwaCA9IG5ldyBHcmFwaChvcmRlcmVkVmVydGljZXMsIHJlbWFpbmluZ0VkZ2VzKTtcblxuICAgIHJldHVybiBncmFwaDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpIHtcbiAgICBlZGdlcyA9IGVkZ2VzLnNsaWNlKCk7ICAvLy9cblxuICAgIGNvbnN0IHZlcnRleE1hcCA9IHZlcnRleE1hcEZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgb3JkZXJlZFZlcnRpY2VzID0gb3JkZXJlZFZlcnRpY2VzRnJvbVZlcnRleE1hcEFuZEVkZ2VzKHZlcnRleE1hcCwgZWRnZXMpLFxuICAgICAgICAgIHJlbWFpbmluZ0VkZ2VzID0gbmV3IFJlbWFpbmluZ0VkZ2VzKGVkZ2VzKSxcbiAgICAgICAgICBncmFwaCA9IG5ldyBHcmFwaChvcmRlcmVkVmVydGljZXMsIHJlbWFpbmluZ0VkZ2VzKTtcblxuICAgIHJldHVybiBncmFwaDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2ZXJ0ZXhNYXBGcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpIHtcbiAgY29uc3QgdmVydGV4TWFwID0ge307XG5cbiAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4ge1xuICAgIGNvbnN0IHZlcnRleEV4aXN0cyA9IHZlcnRleE1hcC5oYXNPd25Qcm9wZXJ0eSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4RXhpc3RzKSB7XG4gICAgICBjb25zdCB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIHZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleDtcbiAgICB9XG4gIH0pO1xuXG4gIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleEV4aXN0cyA9IHZlcnRleE1hcC5oYXNPd25Qcm9wZXJ0eShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhNYXAuaGFzT3duUHJvcGVydHkodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXNvdXJjZVZlcnRleEV4aXN0cykge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gVmVydGV4LmZyb21WZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgICB2ZXJ0ZXhNYXBbc291cmNlVmVydGV4TmFtZV0gPSBzb3VyY2VWZXJ0ZXg7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRWZXJ0ZXhFeGlzdHMpIHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IFZlcnRleC5mcm9tVmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgdmVydGV4TWFwW3RhcmdldFZlcnRleE5hbWVdID0gdGFyZ2V0VmVydGV4O1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHZlcnRleE1hcFtzb3VyY2VWZXJ0ZXhOYW1lXSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB2ZXJ0ZXhNYXBbdGFyZ2V0VmVydGV4TmFtZV0sXG4gICAgICAgICAgaW5jb21pbmdFZGdlID0gZWRnZSwgIC8vL1xuICAgICAgICAgIG91dGdvaW5nRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgIHNvdXJjZVZlcnRleC5hZGRPdXRnb2luZ0VkZ2Uob3V0Z29pbmdFZGdlKTtcblxuICAgIHRhcmdldFZlcnRleC5hZGRJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZlcnRleE1hcDtcbn1cblxuZnVuY3Rpb24gdmVydGV4TWFwRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSB7XG4gIGNvbnN0IHZlcnRleE1hcCA9IHt9O1xuXG4gIHZlcnRleExpdGVyYWxzLmZvckVhY2goKHZlcnRleExpdGVyYWwpID0+IHtcbiAgICBjb25zdCBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50ID0gZmlyc3QodmVydGV4TGl0ZXJhbCksXG4gICAgICAgICAgdmVydGV4TmFtZSA9IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQsIC8vL1xuICAgICAgICAgIHZlcnRleEV4aXN0cyA9IHZlcnRleE1hcC5oYXNPd25Qcm9wZXJ0eSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4RXhpc3RzKSB7XG4gICAgICBjb25zdCB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIHZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleDtcbiAgICB9XG5cbiAgICBjb25zdCBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IHNlY29uZCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQ7IC8vL1xuXG4gICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcy5mb3JFYWNoKChhbmNlc3RvclZlcnRleE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGFuY2VzdG9yVmVydGV4RXhpc3RzID0gdmVydGV4TWFwLmhhc093blByb3BlcnR5KGFuY2VzdG9yVmVydGV4TmFtZSk7XG5cbiAgICAgIGlmICghYW5jZXN0b3JWZXJ0ZXhFeGlzdHMpIHtcbiAgICAgICAgY29uc3QgYW5jZXN0b3JWZXJ0ZXggPSBWZXJ0ZXguZnJvbVZlcnRleE5hbWUoYW5jZXN0b3JWZXJ0ZXhOYW1lKTtcblxuICAgICAgICB2ZXJ0ZXhNYXBbYW5jZXN0b3JWZXJ0ZXhOYW1lXSA9IGFuY2VzdG9yVmVydGV4O1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gdmVydGV4TWFwO1xufVxuXG5mdW5jdGlvbiBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFsc0FuZFZlcnRleE1hcCh2ZXJ0ZXhMaXRlcmFscywgdmVydGV4TWFwKSB7XG4gIGNvbnN0IGVkZ2VzID0gW107XG5cbiAgdmVydGV4TGl0ZXJhbHMuZm9yRWFjaCgodmVydGV4TGl0ZXJhbCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBmaXJzdCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IHNlY29uZCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQsIC8vL1xuICAgICAgICAgIHZlcnRleE5hbWUgPSBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50OyAvLy9cblxuICAgIGFuY2VzdG9yVmVydGV4TmFtZXMuZm9yRWFjaCgoYW5jZXN0b3JWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gYW5jZXN0b3JWZXJ0ZXhOYW1lLCAvLy9cbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXhNYXBbc291cmNlVmVydGV4TmFtZV0sXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB2ZXJ0ZXhNYXBbdGFyZ2V0VmVydGV4TmFtZV0sXG4gICAgICAgICAgICBlZGdlID0gbmV3IEVkZ2Uoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICBpbmNvbWluZ0VkZ2UgPSBlZGdlLCAgLy8vXG4gICAgICAgICAgICBvdXRnb2luZ0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgIGVkZ2VzLnB1c2goZWRnZSk7XG5cbiAgICAgIHNvdXJjZVZlcnRleC5hZGRPdXRnb2luZ0VkZ2Uob3V0Z29pbmdFZGdlKTtcblxuICAgICAgdGFyZ2V0VmVydGV4LmFkZEluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmZ1bmN0aW9uIG9yZGVyZWRWZXJ0aWNlc0Zyb21WZXJ0ZXhNYXBBbmRFZGdlcyh2ZXJ0ZXhNYXAsIGVkZ2VzKSB7XG4gIGNvbnN0IG9yZGVyZWRWZXJ0ZXhOYW1lcyA9IFtdLFxuICAgICAgICBzdGFydGluZ1ZlcnRleE5hbWVzID0gc3RhcnRpbmdWZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhNYXAodmVydGV4TWFwKSxcbiAgICAgICAgcmVtb3ZlZEVkZ2VzID0gW107XG5cbiAgbGV0IHN0YXJ0aW5nVmVydGV4TmFtZXNMZW5ndGggPSBzdGFydGluZ1ZlcnRleE5hbWVzLmxlbmd0aDtcblxuICB3aGlsZSAoc3RhcnRpbmdWZXJ0ZXhOYW1lc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBzdGFydGluZ1ZlcnRleE5hbWUgPSBzdGFydGluZ1ZlcnRleE5hbWVzLnBvcCgpLFxuICAgICAgICAgIG9yZGVyZWRWZXJ0ZXhOYW1lID0gc3RhcnRpbmdWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICBvcmRlcmVkVmVydGV4TmFtZXMucHVzaChvcmRlcmVkVmVydGV4TmFtZSk7XG5cbiAgICBiYWNrd2FyZHNGb3JFYWNoKGVkZ2VzLCAoZWRnZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIGVkZ2VTdGFydGluZyA9IChzb3VyY2VWZXJ0ZXhOYW1lID09PSBzdGFydGluZ1ZlcnRleE5hbWUpOyAvLy9cblxuICAgICAgaWYgKGVkZ2VTdGFydGluZykge1xuICAgICAgICBlZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdmVydGV4TWFwW3RhcmdldFZlcnRleE5hbWVdLFxuICAgICAgICAgICAgICBpbmNvbWluZ0VkZ2UgPSBlZGdlLCAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgdGFyZ2V0VmVydGV4LnJlbW92ZUluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpO1xuXG4gICAgICAgIHJlbW92ZWRFZGdlcy5wdXNoKHJlbW92ZWRFZGdlKTtcblxuICAgICAgICBjb25zdCB0YXJnZXRWZXJ0ZXhTdGFydGluZyA9IHRhcmdldFZlcnRleC5pc1N0YXJ0aW5nKCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleFN0YXJ0aW5nKSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRpbmdWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4TmFtZTsgIC8vL1xuXG4gICAgICAgICAgc3RhcnRpbmdWZXJ0ZXhOYW1lcy5wdXNoKHN0YXJ0aW5nVmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0YXJ0aW5nVmVydGV4TmFtZXNMZW5ndGggPSBzdGFydGluZ1ZlcnRleE5hbWVzLmxlbmd0aDtcbiAgfVxuXG4gIGNvbnN0IGVkZ2VzTGVuZ3RoID0gZWRnZXMubGVuZ3RoO1xuXG4gIGlmIChlZGdlc0xlbmd0aCA9PT0gMCkge1xuICAgIHJlbW92ZWRFZGdlcy5mb3JFYWNoKChyZW1vdmVkRWRnZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IHJlbW92ZWRFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHZlcnRleE1hcFt0YXJnZXRWZXJ0ZXhOYW1lXSxcbiAgICAgICAgICAgIGluY29taW5nRWRnZSA9IHJlbW92ZWRFZGdlOyAvLy9cbiAgICAgIFxuICAgICAgdGFyZ2V0VmVydGV4LmFkZEluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpO1xuICAgIH0pXG4gIH1cblxuICBjb25zdCBvcmRlcmVkVmVydGljZXMgPSBvcmRlcmVkVmVydGV4TmFtZXMubWFwKChvcmRlcmVkVmVydGV4TmFtZSkgPT4gdmVydGV4TWFwW29yZGVyZWRWZXJ0ZXhOYW1lXSk7XG5cbiAgcmV0dXJuIG9yZGVyZWRWZXJ0aWNlcztcbn1cblxuZnVuY3Rpb24gc3RhcnRpbmdWZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhNYXAodmVydGV4TWFwKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVzID0gT2JqZWN0LmtleXModmVydGV4TWFwKSxcbiAgICAgICAgc3RhcnRpbmdWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzLnJlZHVjZSgoc3RhcnRpbmdWZXJ0ZXhOYW1lcywgdmVydGV4TmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSxcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhTdGFydGluZyA9IHZlcnRleC5pc1N0YXJ0aW5nKCk7XG5cbiAgICAgICAgICBpZiAodmVydGV4U3RhcnRpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nVmVydGV4TmFtZSA9IHZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgICAgc3RhcnRpbmdWZXJ0ZXhOYW1lcy5wdXNoKHN0YXJ0aW5nVmVydGV4TmFtZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0YXJ0aW5nVmVydGV4TmFtZXNcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiBzdGFydGluZ1ZlcnRleE5hbWVzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgR3JhcGggfSBmcm9tIFwiLi9ncmFwaFwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbWFpbmluZ0VkZ2VzIHtcbiAgY29uc3RydWN0b3IoZWRnZXMpIHtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkge1xuICAgIGNvbnN0IGVkZ2VzTGVuZ3RoID0gdGhpcy5lZGdlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IChlZGdlc0xlbmd0aCAhPT0gMCk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGZvckVhY2hFZGdlQnlWZXJ0ZXhOYW1lcyhjYWxsYmFjaykge1xuICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICBjYWxsYmFjayhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGluY29taW5nRWRnZXMsIG91dGdvaW5nRWRnZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5jb21pbmdFZGdlcyA9IGluY29taW5nRWRnZXM7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzID0gb3V0Z29pbmdFZGdlcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEluY29taW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jb21pbmdFZGdlcztcbiAgfVxuXG4gIGdldE91dGdvaW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3V0Z29pbmdFZGdlcztcbiAgfVxuICBcbiAgaXNTdGFydGluZygpIHtcbiAgICBjb25zdCBpbmNvbWluZ0VkZ2VzTGVuZ3RoID0gdGhpcy5pbmNvbWluZ0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBzdGFydGluZyA9IChpbmNvbWluZ0VkZ2VzTGVuZ3RoID09PSAwKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHN0YXJ0aW5nO1xuICB9XG4gIFxuICBhZGRJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKSB7XG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzLnB1c2goaW5jb21pbmdFZGdlKTtcbiAgfVxuXG4gIGFkZE91dGdvaW5nRWRnZShvdXRnb2luZ0VkZ2UpIHtcbiAgICB0aGlzLm91dGdvaW5nRWRnZXMucHVzaChvdXRnb2luZ0VkZ2UpO1xuICB9XG5cbiAgcmVtb3ZlSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmNvbWluZ0VkZ2VzLmluZGV4T2YoaW5jb21pbmdFZGdlKTtcbiAgICBcbiAgICB0aGlzLmluY29taW5nRWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGZvckVhY2hJbmNvbWluZ0VkZ2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLmluY29taW5nRWRnZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoT3V0Z29pbmdFZGdlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIGluY29taW5nRWRnZXMgPSBbXSxcbiAgICAgICAgICBvdXRnb2luZ0VkZ2VzID0gW10sXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChuYW1lLCBpbmNvbWluZ0VkZ2VzLCBvdXRnb2luZ0VkZ2VzKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG4iLCIiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRSQUNFID0gXCJUUkFDRVwiO1xuZXhwb3J0IGNvbnN0IERFQlVHID0gXCJERUJVR1wiO1xuZXhwb3J0IGNvbnN0IElORk8gPSBcIklORk9cIjtcbmV4cG9ydCBjb25zdCBXQVJOSU5HID0gXCJXQVJOSU5HXCI7XG5leHBvcnQgY29uc3QgRVJST1IgPSBcIkVSUk9SXCI7XG5leHBvcnQgY29uc3QgRkFUQUwgPSBcIkZBVEFMXCI7XG5leHBvcnQgY29uc3QgREVGQVVMVF9BVFRFTVBUUyA9IDM7XG5leHBvcnQgY29uc3QgREVGQVVMVF9MT0dfTEVWRUwgPSBXQVJOSU5HOyAvLy9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0xPR19ESVJFQ1RPUllfUEFUSCA9IG51bGw7XG5leHBvcnQgY29uc3QgREVGQVVMVF9MT0dfRklMRV9CQVNFX05BTUUgPSBcImRlZmF1bHRcIjtcblxuZXhwb3J0IGNvbnN0IEdFVF9NRVRIT0QgPSBcIkdFVFwiO1xuZXhwb3J0IGNvbnN0IFBPU1RfTUVUSE9EID0gXCJQT1NUXCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fSlNPTl9BQ0NFUFQgPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuXG5leHBvcnQgY29uc3QgREFUQV9FVkVOVCA9IFwiZGF0YVwiO1xuZXhwb3J0IGNvbnN0IFVURjhfRU5DT0RJTkcgPSBcInV0ZjhcIjtcblxuZXhwb3J0IGNvbnN0IENUUkxfQyA9IFwiXkNcIjtcbmV4cG9ydCBjb25zdCBFVFhfQ0hBUkFDVEVSID0gXCJcXHUwMDAzXCI7XG5leHBvcnQgY29uc3QgQkFDS1NQQUNFX0NIQVJBQ1RFUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTI3KTtcbmV4cG9ydCBjb25zdCBMSU5FX0ZFRURfQ0hBUkFDVEVSID0gXCJcXG5cIjtcbmV4cG9ydCBjb25zdCBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSID0gXCJcXHJcIjtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT04gPSBcIlwiOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0ZW1wbGF0ZVV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy90ZW1wbGF0ZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91c1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtaXNjZWxsYW5lb3VzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL21pc2NlbGxhbmVvdXNcIjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdO31cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5MSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5MiA9IChlbGVtZW50T3JBcnJheTIgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T3JBcnJheTIgOlxuICAgICAgICAgICAgICAgICAgICAgW2VsZW1lbnRPckFycmF5Ml07XG4gIFxuICBwdXNoKGFycmF5MSwgYXJyYXkyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXkyLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXkyID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5Ml0sXG4gICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgbGV0IHN0YXJ0O1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRFbGVtZW50cyA9IFtdO1xuICBcbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZmlsdGVyZWRFbGVtZW50cy51bnNoaWZ0KGZpcnN0RGVsZXRlZEVsZW1lbnQpOyAgLy8vXG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZChhcnJheSwgdGVzdCkge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUoYXJyYXksIHRlc3QpIHtcbiAgbGV0IHBydW5lZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIHBydW5lZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gcHJ1bmVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Mi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTtcblxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3QsXG4gIHNlY29uZCxcbiAgdGhpcmQsXG4gIGZvdXJ0aCxcbiAgZmlmdGgsXG4gIGZpZnRoTGFzdCxcbiAgZm91cnRoTGFzdCxcbiAgdGhpcmRMYXN0LFxuICBzZWNvbmRMYXN0LFxuICBsYXN0LFxuICBoZWFkLFxuICB0YWlsLFxuICBwdXNoLFxuICB1bnNoaWZ0LFxuICBjb25jYXQsXG4gIGNsZWFyLFxuICBjb3B5LFxuICBtZXJnZSxcbiAgc3BsaWNlLFxuICByZXBsYWNlLFxuICBmaWx0ZXIsXG4gIGZpbmQsXG4gIHBydW5lLFxuICBwYXRjaCxcbiAgYXVnbWVudCxcbiAgc2VwYXJhdGUsXG4gIGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNFdmVyeSxcbiAgYmFja3dhcmRzRXZlcnksXG4gIGZvcndhcmRzUmVkdWNlLFxuICBiYWNrd2FyZHNSZWR1Y2UsXG4gIGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdoaWxzdChjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2UoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrc1tpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHVhbGx5KGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrLCBpbmRleCkgPT4ge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0ZWRseShjYWxsYmFjaywgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IGxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50LS07XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSAtMSk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB3aGlsc3QsXHJcbiAgZm9yRWFjaCxcclxuICBzZXF1ZW5jZSxcclxuICBldmVudHVhbGx5LFxyXG4gIHJlcGVhdGVkbHksXHJcbiAgZm9yd2FyZHNGb3JFYWNoLFxyXG4gIGJhY2t3YXJkc0ZvckVhY2hcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcblxuaW1wb3J0IHsgVVRGOF9FTkNPRElORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGF0aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpIHtcbiAgY29uc3QgZW50cnlFeGlzdHMgPSBmcy5leGlzdHNTeW5jKGVudHJ5UGF0aCk7XG5cbiAgcmV0dXJuIGVudHJ5RXhpc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGaWxlRXhpc3RzKGZpbGVQYXRoKSB7XG4gIGxldCBmaWxlRXhpc3RzID0gZmFsc2U7XG4gIFxuICBjb25zdCBlbnRyeVBhdGggPSBmaWxlUGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpO1xuICBcbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoZW50cnlQYXRoKTtcbiAgICBcbiAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICBmaWxlRXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBmaWxlRXhpc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEaXJlY3RvcnlFeGlzdHMoZGlyZWN0b3J5UGF0aCkge1xuICBsZXQgZGlyZWN0b3J5RXhpc3RzID0gZmFsc2U7XG5cbiAgY29uc3QgZW50cnlQYXRoID0gZGlyZWN0b3J5UGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpO1xuXG4gIGlmIChlbnRyeUV4aXN0cykge1xuICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShlbnRyeVBhdGgpO1xuXG4gICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBkaXJlY3RvcnlFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXJlY3RvcnlFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VudHJ5RmlsZShlbnRyeVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGVudHJ5UGF0aCksXG4gICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpLFxuICAgICAgICBlbnRyeUZpbGUgPSAhZW50cnlEaXJlY3Rvcnk7XG5cbiAgcmV0dXJuIGVudHJ5RmlsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW50cnlEaXJlY3RvcnkoZW50cnlQYXRoKSB7XG4gIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhlbnRyeVBhdGgpLFxuICAgICAgICBlbnRyeURpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKTtcblxuICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdG9yeUVtcHR5KGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSAoc3ViRW50cnlOYW1lc0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhkaXJlY3RvcnlQYXRoKTtcblxuICByZXR1cm4gc3ViRW50cnlOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlKGZpbGVQYXRoLCBlbmNvZGluZyA9IFVURjhfRU5DT0RJTkcpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBlbmNvZGluZ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBvcHRpb25zKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCkge1xuICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvRmlsZShmaWxlUGF0aCwgY29udGVudCkge1xuICBmcy5hcHBlbmRGaWxlU3luYyhmaWxlUGF0aCwgY29udGVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBkaXJlY3RvcnlQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gIGlmICgoZGlyZWN0b3J5UGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSAhPT0gXCIuXCIpICYmIChkaXJlY3RvcnlQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lICE9PSBudWxsKSkge1xuICAgIGNvbnN0IHBhcmVudERpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lLCAgLy8vXG4gICAgICAgICAgcGFyZW50RGlyZWN0b3J5RXhpc3RzID0gY2hlY2tEaXJlY3RvcnlFeGlzdHMocGFyZW50RGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAoIXBhcmVudERpcmVjdG9yeUV4aXN0cykge1xuICAgICAgY3JlYXRlRGlyZWN0b3J5KHBhcmVudERpcmVjdG9yeVBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIGZzLm1rZGlyU3luYyhkaXJlY3RvcnlQYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZUZpbGUob2xkRmlsZVBhdGgsIG5ld0ZpbGVQYXRoKSB7XG4gIGZzLnJlbmFtZVN5bmMob2xkRmlsZVBhdGgsIG5ld0ZpbGVQYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRzKGZpbGVQYXRoKSB7XG4gIHJldHVybiBmcy5zdGF0U3luYyhmaWxlUGF0aCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2hlY2tFbnRyeUV4aXN0cyxcbiAgY2hlY2tGaWxlRXhpc3RzLFxuICBjaGVja0RpcmVjdG9yeUV4aXN0cyxcbiAgaXNFbnRyeUZpbGUsXG4gIGlzRW50cnlEaXJlY3RvcnksXG4gIGlzRGlyZWN0b3J5RW1wdHksXG4gIHJlYWREaXJlY3RvcnksXG4gIHJlYWRGaWxlLFxuICB3cml0ZUZpbGUsXG4gIGFwcGVuZFRvRmlsZSxcbiAgY3JlYXRlRGlyZWN0b3J5LFxuICByZW5hbWVGaWxlLFxuICBnZXRTdGF0c1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcmMgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9yY1wiO1xuaW1wb3J0IGxvZyBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL2xvZ1wiO1xuaW1wb3J0IG9uRVRYIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvb25FVFhcIjtcbmltcG9ydCBwcm9tcHQgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9wcm9tcHRcIjtcblxuaW1wb3J0IHsgZ2V0LCBwb3N0LCByZXF1ZXN0IH0gZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9hamF4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9nLFxuICByYyxcbiAgZ2V0LFxuICBwb3N0LFxuICBvbkVUWCxcbiAgcHJvbXB0LFxuICByZXF1ZXN0XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEdFVF9NRVRIT0QsIFBPU1RfTUVUSE9ELCBBUFBMSUNBVElPTl9KU09OX0FDQ0VQVCwgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQoaG9zdCwgcGF0aCwgcGFyYW1ldGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IHBhcmFtZXRlcnM7IC8vL1xuICAgIHBhcmFtZXRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IEdFVF9NRVRIT0QsXG4gICAgICAgIGJvZHkgPSB1bmRlZmluZWQ7XG5cbiAgcmVxdWVzdChob3N0LCBwYXRoLCBwYXJhbWV0ZXJzLCBtZXRob2QsIGJvZHksIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3QoaG9zdCwgcGF0aCwganNvbiwgcGFyYW1ldGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IHBhcmFtZXRlcnM7IC8vL1xuICAgIHBhcmFtZXRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1RfTUVUSE9ELFxuICAgICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgcmVxdWVzdChob3N0LCBwYXRoLCBwYXJhbWV0ZXJzLCBtZXRob2QsIGJvZHksIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3QoaG9zdCwgcGF0aCwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxGcm9tSG9zdFBhdGhBbmRQYXJhbWV0ZXJzKGhvc3QsIHBhdGgsIHBhcmFtZXRlcnMpLFxuICAgICAgICBhY2NlcHQgPSBBUFBMSUNBVElPTl9KU09OX0FDQ0VQVCxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICB4bWxIdHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBzdGF0dXMsIHJlc3BvbnNlVGV4dCB9ID0geG1sSHR0cFJlcXVlc3Q7XG5cbiAgICBpZiAocmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICBsZXQganNvbiA9IG51bGw7XG5cbiAgICAgIGlmIChzdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSByZXNwb25zZVRleHQ7IC8vL1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soanNvbiwgc3RhdHVzKTtcbiAgICB9XG4gIH07XG5cbiAgeG1sSHR0cFJlcXVlc3Qub3BlbihtZXRob2QsIHVybCk7XG5cbiAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcImFjY2VwdFwiLCBhY2NlcHQpO1xuXG4gIGlmIChtZXRob2QgPT09IFBPU1RfTUVUSE9EKSB7XG4gICAgY29uc3QgY29udGVudFR5cGUgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRTtcblxuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJjb250ZW50LXR5cGVcIiwgY29udGVudFR5cGUpO1xuICB9XG5cbiAgeG1sSHR0cFJlcXVlc3Quc2VuZChib2R5KTtcbn1cblxuZnVuY3Rpb24gcXVlcnlTdHJpbmdGcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocGFyYW1ldGVycyksXG4gICAgICAgIG5hbWVzTGVuZ3RoID0gbmFtZXMubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBuYW1lc0xlbmd0aCAtIDEsXG4gICAgICAgIHF1ZXJ5U3RyaW5nID0gbmFtZXMucmVkdWNlKChxdWVyeVN0cmluZywgbmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcmFtZXRlcnNbbmFtZV0sXG4gICAgICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBhbXBlcnNhbmRPck5vdGhpbmcgPSAoaW5kZXggIT09IGxhc3RJbmRleCkgPyBcIiZcIiA6IFwiXCI7XG4gIFxuICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGAke2VuY29kZWROYW1lfT0ke2VuY29kZWRWYWx1ZX0ke2FtcGVyc2FuZE9yTm90aGluZ31gO1xuICBcbiAgICAgICAgICByZXR1cm4gcXVlcnlTdHJpbmc7XG4gICAgICAgIH0sIFwiXCIpO1xuXG4gIHJldHVybiBxdWVyeVN0cmluZztcbn1cblxuZnVuY3Rpb24gdXJsRnJvbUhvc3RQYXRoQW5kUGFyYW1ldGVycyhob3N0LCBwYXRoLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdGcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSxcbiAgICAgICAgdXJsID0gKHF1ZXJ5U3RyaW5nID09PSBcIlwiKSA/XG4gICAgICAgICAgICAgIGAke2hvc3R9JHtwYXRofWAgOlxuICAgICAgICAgICAgICAgIGAke2hvc3R9JHtwYXRofT8ke3F1ZXJ5U3RyaW5nfWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyBzZWNvbmQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjb25jYXRlbmF0ZVBhdGhzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXRoXCI7XG5pbXBvcnQgeyBjaGVja0ZpbGVFeGlzdHMsIHJlYWRGaWxlLCBhcHBlbmRUb0ZpbGUsIHJlbmFtZUZpbGUsIGdldFN0YXRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBUUkFDRSwgREVCVUcsIElORk8sIFdBUk5JTkcsIEVSUk9SLCBGQVRBTCwgREVGQVVMVF9MT0dfTEVWRUwsIERFRkFVTFRfTE9HX0ZJTEVfQkFTRV9OQU1FLCBERUZBVUxUX0xPR19ESVJFQ1RPUllfUEFUSCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgbGV2ZWxzID0gW1xuICBUUkFDRSxcbiAgREVCVUcsXG4gIElORk8sXG4gIFdBUk5JTkcsXG4gIEVSUk9SLFxuICBGQVRBTCxcbl07XG5cbmxldCBsb2dMZXZlbCA9IERFRkFVTFRfTE9HX0xFVkVMLFxuICAgIGxvZ0ZpbGVCYXNlTmFtZSA9IERFRkFVTFRfTE9HX0ZJTEVfQkFTRV9OQU1FLFxuICAgIGxvZ0RpcmVjdG9yeVBhdGggPSBERUZBVUxUX0xPR19ESVJFQ1RPUllfUEFUSDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nKG1lc3NhZ2VPckVycm9yLCBsZXZlbCA9IFwiXCIpIHtcbiAgbGV0IHNhbGllbnRTdGFja01lc3NhZ2VJbmRleCA9IDE7XG5cbiAgaWYgKGxldmVsICE9PSBcIlwiKSB7XG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxldmVsKSxcbiAgICAgICAgICBsb2dMZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YobG9nTGV2ZWwpO1xuXG4gICAgaWYgKGxldmVsSW5kZXggPCBsb2dMZXZlbEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2FsaWVudFN0YWNrTWVzc2FnZUluZGV4ICs9IDE7XG5cbiAgICBsZXZlbCA9IGAke2xldmVsfSBgOyAgLy8vXG4gIH1cblxuICBsZXQgZXJyb3IsXG4gICAgICBtZXNzYWdlO1xuXG4gIGlmIChtZXNzYWdlT3JFcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgZXJyb3IgPSBtZXNzYWdlT3JFcnJvcjsgLy8vXG5cbiAgICAoeyBtZXNzYWdlIH0gPSBlcnJvcik7XG4gIH0gZWxzZSB7XG4gICAgbWVzc2FnZSA9IG1lc3NhZ2VPckVycm9yOyAvLy9cblxuICAgIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG5cbiAgY29uc3QgeyBzdGFjayB9ID0gZXJyb3IsXG4gICAgICAgIHN0YWNrTWVzc2FnZXMgPSBzdGFja01lc3NhZ2VzRnJvbVN0YWNrKHN0YWNrKSxcbiAgICAgICAgcGVydGluZW50U3RhY2tNZXNzYWdlID0gc3RhY2tNZXNzYWdlc1tzYWxpZW50U3RhY2tNZXNzYWdlSW5kZXhdLFxuICAgICAgICBzdGFja01lc3NhZ2UgPSBwZXJ0aW5lbnRTdGFja01lc3NhZ2UsIC8vL1xuICAgICAgICBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcgPSBnZXRDdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcoKSxcbiAgICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aEZyb21TdGFja01lc3NhZ2Uoc3RhY2tNZXNzYWdlKSxcbiAgICAgICAgbGluZU51bWJlciA9IGxpbmVOdW1iZXJGcm9tU3RhY2tNZXNzYWdlKHN0YWNrTWVzc2FnZSksXG4gICAgICAgIGxvZ01lc3NhZ2UgPSBgJHtsZXZlbH0ke2N1cnJlbnREYXRlQW5kVGltZVN0cmluZ30gJHtmaWxlUGF0aH0oJHtsaW5lTnVtYmVyfSkgJHttZXNzYWdlfWA7XG5cbiAgY29uc29sZS5sb2cobG9nTWVzc2FnZSk7XG5cbiAgaWYgKGxvZ0RpcmVjdG9yeVBhdGggIT09IG51bGwpIHtcbiAgICByb2xsT3ZlckxvZ0ZpbGUoKTtcblxuICAgIGNvbnN0IGxvZ0ZpbGVQYXRoID0gZ2V0TG9nRmlsZVBhdGgoKSxcbiAgICAgICAgICBsb2dGaWxlQ29udGVudCA9IGAke2xvZ01lc3NhZ2V9XFxuYDtcblxuICAgIGFwcGVuZFRvRmlsZShsb2dGaWxlUGF0aCwgbG9nRmlsZUNvbnRlbnQpO1xuICB9XG5cbiAgcmV0dXJuIGxvZ01lc3NhZ2U7XG59XG5cbmZ1bmN0aW9uIHRyYWNlKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBUUkFDRSk7IH1cblxuZnVuY3Rpb24gZGVidWcobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIERFQlVHKTsgfVxuXG5mdW5jdGlvbiBpbmZvKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBJTkZPKTsgfVxuXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBXQVJOSU5HKTsgfVxuXG5mdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7IHJldHVybiBsb2cobWVzc2FnZSwgRVJST1IpOyB9XG5cbmZ1bmN0aW9uIGZhdGFsKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBGQVRBTCk7IH1cblxuZnVuY3Rpb24gc2V0TG9nTGV2ZWwobGV2ZWwpIHsgbG9nTGV2ZWwgPSBsZXZlbDsgfVxuXG5mdW5jdGlvbiBzZXRMb2dGaWxlQmFzZU5hbWUoZmlsZUJhc2VOYW1lKSB7IGxvZ0ZpbGVCYXNlTmFtZSA9IGZpbGVCYXNlTmFtZTsgfVxuXG5mdW5jdGlvbiBzZXRMb2dEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHsgbG9nRGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGg7IH1cblxuZnVuY3Rpb24gc2V0TG9nT3B0aW9ucyhsb2dPcHRpb25zKSB7XG4gIGNvbnN0IHsgbGV2ZWwsIGZpbGVCYXNlTmFtZSwgZGlyZWN0b3J5UGF0aCB9ID0gbG9nT3B0aW9ucztcblxuICBzZXRMb2dMZXZlbChsZXZlbCk7XG5cbiAgc2V0TG9nRmlsZUJhc2VOYW1lKGZpbGVCYXNlTmFtZSk7XG5cbiAgc2V0TG9nRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoKTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9nRmlsZUNvbnRlbnQoKSB7XG4gIGNvbnN0IGxvZ0ZpbGVQYXRoID0gZ2V0TG9nRmlsZVBhdGgoKSxcbiAgICAgICAgbG9nRmlsZUNvbnRlbnQgPSByZWFkRmlsZShsb2dGaWxlUGF0aCk7XG5cbiAgcmV0dXJuIGxvZ0ZpbGVDb250ZW50O1xufVxuXG5PYmplY3QuYXNzaWduKGxvZywge1xuICBUUkFDRSxcbiAgREVCVUcsXG4gIElORk8sXG4gIFdBUk5JTkcsXG4gIEVSUk9SLFxuICBGQVRBTCxcbiAgdHJhY2UsXG4gIGRlYnVnLFxuICBpbmZvLFxuICB3YXJuaW5nLFxuICBlcnJvcixcbiAgZmF0YWwsXG4gIHNldExvZ0xldmVsLFxuICBzZXRMb2dGaWxlQmFzZU5hbWUsXG4gIHNldExvZ0RpcmVjdG9yeVBhdGgsXG4gIHNldExvZ09wdGlvbnMsXG4gIGdldExvZ0ZpbGVDb250ZW50XG59KTtcblxuZnVuY3Rpb24gZ2V0TG9nRmlsZVBhdGgoKSB7XG4gIGNvbnN0IGxvZ0ZpbGVOYW1lID0gYCR7bG9nRmlsZUJhc2VOYW1lfS5sb2dgLFxuICAgICAgICBsb2dGaWxlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMobG9nRGlyZWN0b3J5UGF0aCwgbG9nRmlsZU5hbWUpO1xuXG4gIHJldHVybiBsb2dGaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gZ2V0Um9sbGVkT3ZlckxvZ0ZpbGVQYXRoKCkge1xuICBjb25zdCBjdXJyZW50RGF0ZVN0cmluZyA9IGdldEN1cnJlbnREYXRlU3RyaW5nKCksXG4gICAgICAgIHJvbGxlZE92ZXJMb2dGaWxlTmFtZSA9IGAke2xvZ0ZpbGVCYXNlTmFtZX0uJHtjdXJyZW50RGF0ZVN0cmluZ30ubG9nYCxcbiAgICAgICAgcm9sbGVkT3ZlckxvZ0ZpbGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhsb2dEaXJlY3RvcnlQYXRoLCByb2xsZWRPdmVyTG9nRmlsZU5hbWUpO1xuXG4gIHJldHVybiByb2xsZWRPdmVyTG9nRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGdldExvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlKCkge1xuICBjb25zdCBsb2dGaWxlUGF0aCA9IGdldExvZ0ZpbGVQYXRoKCksXG4gICAgICAgIGxvZ0ZpbGVTdGF0cyA9IGdldFN0YXRzKGxvZ0ZpbGVQYXRoKSxcbiAgICAgICAgeyBtdGltZSB9ID0gbG9nRmlsZVN0YXRzLFxuICAgICAgICBsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSA9IG5ldyBEYXRlKG10aW1lKTsgIC8vL1xuXG4gIHJldHVybiBsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZTtcbn1cblxuZnVuY3Rpb24gcm9sbE92ZXJMb2dGaWxlKCkge1xuICBjb25zdCBsb2dGaWxlUGF0aCA9IGdldExvZ0ZpbGVQYXRoKCksXG4gICAgICAgIGxvZ0ZpbGVFeGlzdHMgPSBjaGVja0ZpbGVFeGlzdHMobG9nRmlsZVBhdGgpO1xuXG4gIGlmICghbG9nRmlsZUV4aXN0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGxvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlID0gZ2V0TG9nRmlsZUxhc3RNb2RpZmllZERhdGUoKSxcbiAgICAgICAgbG9nRmlsZUxhc3RNb2RpZmllZERhdGVDdXJyZW50RGF0ZSA9IGlzRGF0ZUN1cnJlbnREYXRlKGxvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlKTtcblxuICBpZiAoIWxvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlQ3VycmVudERhdGUpIHtcbiAgICBjb25zdCByb2xsZWRPdmVyTG9nRmlsZVBhdGggPSBnZXRSb2xsZWRPdmVyTG9nRmlsZVBhdGgoKTtcblxuICAgIHJlbmFtZUZpbGUobG9nRmlsZVBhdGgsIHJvbGxlZE92ZXJMb2dGaWxlUGF0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNEYXRlQ3VycmVudERhdGUoZGF0ZSkge1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICAgIGRhdGVTdHJpbmcgPSBkYXRlLnRvRGF0ZVN0cmluZygpLFxuICAgICAgICBjdXJyZW50RGF0ZVN0cmluZyA9IGN1cnJlbnREYXRlLnRvRGF0ZVN0cmluZygpLFxuICAgICAgICBkYXRlQ3VycmVudERhdGUgPSAoZGF0ZVN0cmluZyA9PT0gY3VycmVudERhdGVTdHJpbmcpO1xuXG4gIHJldHVybiBkYXRlQ3VycmVudERhdGU7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnREYXRlU3RyaW5nKCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKSxcbiAgICAgICAgZGF5ID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0RGF0ZSgpLCAyKSwgIC8vL1xuICAgICAgICBtb250aCA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldE1vbnRoKCkgKyAxLCAyKSwgLy8vXG4gICAgICAgIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGN1cnJlbnREYXRlQW5kVGltZVN0cmluZyA9IGAke2RheX0tJHttb250aH0tJHt5ZWFyfWA7XG5cbiAgcmV0dXJuIGN1cnJlbnREYXRlQW5kVGltZVN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudERhdGVBbmRUaW1lU3RyaW5nKCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKSxcbiAgICAgICAgZGF5ID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0RGF0ZSgpLCAyKSwgIC8vL1xuICAgICAgICBtb250aCA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldE1vbnRoKCkgKyAxLCAyKSwgLy8vXG4gICAgICAgIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGhvdXJzID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0SG91cnMoKSwgMiksXG4gICAgICAgIG1pbnV0ZXMgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRNaW51dGVzKCksIDIpLFxuICAgICAgICBzZWNvbmRzID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0U2Vjb25kcygpLCAyKSxcbiAgICAgICAgbWlsbGlzZWNvbmRzID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIDMpLFxuICAgICAgICBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcgPSBgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn0gJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9LiR7bWlsbGlzZWNvbmRzfWA7XG5cbiAgcmV0dXJuIGN1cnJlbnREYXRlQW5kVGltZVN0cmluZztcbn1cblxuZnVuY3Rpb24gc3RhY2tNZXNzYWdlc0Zyb21TdGFjayhzdGFjaykge1xuICBjb25zdCBzdGFja01lc3NhZ2VzID0gW10sXG4gICAgICAgIHN0YWNrTGluZXMgPSBzdGFjay5zcGxpdCgvXFxyXFxufFxcbi8pO1xuXG4gIGxldCBzdGFja01lc3NhZ2UgPSBcIlwiO1xuXG4gIHN0YWNrTGluZXMuZm9yRWFjaCgoc3RhY2tMaW5lKSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IC9eXFxzKmF0LiovLnRlc3Qoc3RhY2tMaW5lKTtcblxuICAgIHN0YWNrTWVzc2FnZSA9IChzdGFja01lc3NhZ2UgPT09IFwiXCIpID9cbiAgICAgICAgICAgICAgICAgICAgICBzdGFja0xpbmUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3RhY2tNZXNzYWdlfVxcbiR7c3RhY2tMaW5lfWA7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgc3RhY2tNZXNzYWdlcy5wdXNoKHN0YWNrTWVzc2FnZSk7XG5cbiAgICAgIHN0YWNrTWVzc2FnZSA9IFwiXCI7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3RhY2tNZXNzYWdlcztcbn1cblxuZnVuY3Rpb24gZmlsZVBhdGhGcm9tU3RhY2tNZXNzYWdlKHN0YWNrTWVzc2FnZSkge1xuICBjb25zdCBtYXRjaGVzID0gc3RhY2tNZXNzYWdlLm1hdGNoKC8oXFwvLispOlxcZCs6XFxkKy9tKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGFic29sdXRlRmlsZVBhdGggPSBzZWNvbmRNYXRjaCwgIC8vL1xuICAgICAgICBjdXJyZW50V29ya2luZ0RpcmVjdG9yeVBhdGggPSBwYXRoLnJlc29sdmUoXCIuXCIpLCAgLy8vXG4gICAgICAgIGN1cnJlbnRXb3JraW5nRGlyZWN0b3J5UGF0aExlbmd0aCA9IGN1cnJlbnRXb3JraW5nRGlyZWN0b3J5UGF0aC5sZW5ndGgsXG4gICAgICAgIHN0YXJ0ID0gY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoTGVuZ3RoICsgMSwgIC8vL1xuICAgICAgICBmaWxlUGF0aCA9IGFic29sdXRlRmlsZVBhdGguc3Vic3RyKHN0YXJ0KTtcblxuICByZXR1cm4gZmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGxpbmVOdW1iZXJGcm9tU3RhY2tNZXNzYWdlKHN0YWNrTWVzc2FnZSkge1xuICBjb25zdCBtYXRjaGVzID0gc3RhY2tNZXNzYWdlLm1hdGNoKC86KFxcZCspL20pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgbGluZU51bWJlciA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gbGluZU51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGFkU3RhcnRXaXRoWmVyb2VzKHN0cmluZywgdGFyZ2V0TGVuZ3RoKSB7XG4gIGNvbnN0IHBhZFN0cmluZyA9IFwiMFwiLFxuICAgICAgICBwYWRkZWRTdHJpbmcgPSBwYWRTdGFydChzdHJpbmcsIHRhcmdldExlbmd0aCwgcGFkU3RyaW5nKTtcblxuICByZXR1cm4gcGFkZGVkU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBwYWRTdGFydChzdHJpbmcsIHRhcmdldExlbmd0aCwgcGFkU3RyaW5nKSB7XG4gIGxldCBwYWRkaW5nID0gXCJcIjtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGFyZ2V0TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgcGFkZGluZyArPSBwYWRTdHJpbmc7XG4gIH1cblxuICBjb25zdCBwYWRkZWRTdHJpbmcgPSBgJHtwYWRkaW5nfSR7c3RyaW5nfWAuc3Vic3RyKC10YXJnZXRMZW5ndGgpO1xuXG4gIHJldHVybiBwYWRkZWRTdHJpbmc7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREFUQV9FVkVOVCwgRVRYX0NIQVJBQ1RFUiwgVVRGOF9FTkNPRElORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25FVFgoaGFuZGxlcikge1xuICBjb25zdCBldmVudCA9IERBVEFfRVZFTlQ7XG5cbiAgaWYgKHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSkge1xuICAgIGNvbnN0IHJhd01vZGUgPSB0cnVlLFxuICAgICAgICAgIGVuY29kaW5nID0gVVRGOF9FTkNPRElORztcblxuICAgIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZShyYXdNb2RlKTtcbiAgICBwcm9jZXNzLnN0ZGluLnNldEVuY29kaW5nKGVuY29kaW5nKTtcblxuICAgIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XG5cbiAgICBwcm9jZXNzLnN0ZGluLmFkZExpc3RlbmVyKGV2ZW50LCBkYXRhSGFuZGxlcik7XG5cbiAgICByZXR1cm4gb2ZmRXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gb2ZmRXh0KCkge1xuICAgIHByb2Nlc3Muc3RkaW4ucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGRhdGFIYW5kbGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRhdGFIYW5kbGVyKGNoYXJhY3Rlcikge1xuICAgIGlmIChjaGFyYWN0ZXIgPT09IEVUWF9DSEFSQUNURVIpIHtcbiAgICAgIGhhbmRsZXIoKTtcbiAgICB9XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb25FVFggZnJvbSBcIi4vb25FVFhcIjtcblxuaW1wb3J0IHsgd2hpbHN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcblxuaW1wb3J0IHsgQ1RSTF9DLCBEQVRBX0VWRU5ULCBERUZBVUxUX0FUVEVNUFRTLCBCQUNLU1BBQ0VfQ0hBUkFDVEVSLCBMSU5FX0ZFRURfQ0hBUkFDVEVSLCBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9tcHQob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBmb3JjZSB9ID0gb3B0aW9ucztcblxuICBpZiAoZm9yY2UpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGZvcmNlOyAgLy8vXG5cbiAgICBjYWxsYmFjayh2YWx1ZSk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB2YWx1ZSA9IG51bGwsXG4gICAgICAgIHsgYXR0ZW1wdHMgPSBERUZBVUxUX0FUVEVNUFRTIH0gPSBvcHRpb25zLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGF0dGVtcHRzLFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgfTtcblxuICB3aGlsc3QoYXR0ZW1wdCwgKCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGNvbnRleHQ7XG4gICAgXG4gICAgY2FsbGJhY2sodmFsdWUpO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gYXR0ZW1wdChuZXh0LCBkb25lLCBjb250ZXh0KSB7XG4gIGxldCB7IGF0dGVtcHRzIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IHRlcm1pbmF0ZSA9IChhdHRlbXB0cy0tID09PSAwKTtcbiAgXG4gIGlmICh0ZXJtaW5hdGUpIHtcbiAgICBkb25lKCk7XG4gICAgXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGhpZGRlbiA9IGZhbHNlLFxuICAgICAgICAgIGVuY29kaW5nID0gXCJ1dGY4XCIsXG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgaW5pdGlhbFZhbHVlID0gXCJcIixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4sXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uIH0gPSBvcHRpb25zO1xuXG4gIGlucHV0KGRlc2NyaXB0aW9uLCBpbml0aWFsVmFsdWUsIGVuY29kaW5nLCBoaWRkZW4sIGNhbGxiYWNrKTtcblxuICBmdW5jdGlvbiBjYWxsYmFjayh2YWx1ZSkge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGlvbkZ1bmN0aW9uID8gIC8vL1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24odmFsdWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUGF0dGVybi50ZXN0KHZhbHVlKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGF0dGVtcHRzXG4gICAgICB9KTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnB1dChkZXNjcmlwdGlvbiwgaW5pdGlhbFZhbHVlLCBlbmNvZGluZywgaGlkZGVuLCBjYWxsYmFjaykge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGV2ZW50ID0gREFUQV9FVkVOVCxcbiAgICAgICAgcmF3TW9kZSA9IHRydWUsXG4gICAgICAgIG9mZkVUWCA9IG9uRVRYKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhDVFJMX0MpO1xuXG4gICAgICAgICAgcHJvY2Vzcy5leGl0KCk7XG4gICAgICAgIH0pO1xuXG4gIHByb2Nlc3Muc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZShyYXdNb2RlKTtcblxuICBwcm9jZXNzLnN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgaWYgKCFoaWRkZW4pIHtcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSh2YWx1ZSk7XG4gIH1cblxuICBwcm9jZXNzLnN0ZGluLnJlc3VtZSgpO1xuXG4gIHByb2Nlc3Muc3RkaW4ub24oZXZlbnQsIGxpc3RlbmVyKTtcblxuICBmdW5jdGlvbiBsaXN0ZW5lcihjaHVuaykge1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IGNodW5rLnRvU3RyaW5nKGVuY29kaW5nKTtcblxuICAgIHN3aXRjaCAoY2hhcmFjdGVyKSB7XG4gICAgICBjYXNlIExJTkVfRkVFRF9DSEFSQUNURVIgOlxuICAgICAgY2FzZSBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSIDpcbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoTElORV9GRUVEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuXG4gICAgICAgIHByb2Nlc3Muc3RkaW4ucGF1c2UoKTtcblxuICAgICAgICBvZmZFVFgoKTtcblxuICAgICAgICBjYWxsYmFjayh2YWx1ZSk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0NIQVJBQ1RFUiA6XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgdmFsdWUubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQuY2xlYXJMaW5lKCk7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQuY3Vyc29yVG8oMCk7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhbHVlICs9IGNoYXJhY3RlcjtcblxuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpO1xuXG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQuY3Vyc29yVG8oMCk7XG5cbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgREVGQVVMVF9SQ19CQVNFX0VYVEVOU0lPTiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlYWRGaWxlLCB3cml0ZUZpbGUsIGNoZWNrRmlsZUV4aXN0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuXG5sZXQgcGF0aFJlc29sdmVyID0gcGF0aC5yZXNvbHZlLFxuICAgIGJhc2VFeHRlbnNpb24gPSBERUZBVUxUX1JDX0JBU0VfRVhURU5TSU9OO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYyhlbnZpcm9ubWVudE5hbWVPckFyZ3YgPSBudWxsKSB7XG4gIGxldCBlbnZpcm9ubWVudCxcbiAgICAgIGVudmlyb25tZW50TmFtZSxcbiAgICAgIGVudmlyb25tZW50TmFtZU9yQXJndkFyZ3YgPSAoZW52aXJvbm1lbnROYW1lT3JBcmd2IGluc3RhbmNlb2YgQXJyYXkpO1xuXG4gIGlmIChlbnZpcm9ubWVudE5hbWVPckFyZ3ZBcmd2KSB7XG4gICAgY29uc3QgYXJndiA9IGVudmlyb25tZW50TmFtZU9yQXJndjsgLy8vXG5cbiAgICBlbnZpcm9ubWVudE5hbWUgPSBlbnZpcm9ubWVudE5hbWVGcm9tQXJndihhcmd2KTtcbiAgfSBlbHNlIHtcbiAgICBlbnZpcm9ubWVudE5hbWUgPSBlbnZpcm9ubWVudE5hbWVPckFyZ3Y7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IGpzb24gPSByZWFkUkNGaWxlKCksXG4gICAgICAgIHsgZW52aXJvbm1lbnRzIH0gPSBqc29uO1xuXG4gIGlmIChlbnZpcm9ubWVudE5hbWUgPT09IG51bGwpIHtcbiAgICBjb25zdCBmaXJzdEVudmlyb25tZW50ID0gZmlyc3QoZW52aXJvbm1lbnRzKTtcblxuICAgIGVudmlyb25tZW50ID0gZmlyc3RFbnZpcm9ubWVudDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudHMuZmluZCgoZW52aXJvbm1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZW52aXJvbm1lbnQsXG4gICAgICAgICAgICBmb3VuZCA9IChuYW1lID09PSBlbnZpcm9ubWVudE5hbWUpO1xuXG4gICAgICByZXR1cm4gZm91bmQ7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUgZW52aXJvbm1lbnQubmFtZTtcblxuICBPYmplY3QuYXNzaWduKHJjLCBlbnZpcm9ubWVudCk7XG5cbiAgcmV0dXJuIGVudmlyb25tZW50O1xufVxuXG5mdW5jdGlvbiByZWFkUkNGaWxlKCkge1xuICBjb25zdCBhYnNvbHV0ZVJDRmlsZVBhdGggPSBhYnNvbHV0ZVJDRmlsZVBhdGhGcm9tTm90aGluZygpLFxuICAgICAgICBmaWxlQ29udGVudCA9IHJlYWRGaWxlKGFic29sdXRlUkNGaWxlUGF0aCksXG4gICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGZpbGVDb250ZW50KTtcblxuICByZXR1cm4ganNvbjsgICAgICBcbn1cblxuZnVuY3Rpb24gd3JpdGVSQ0ZpbGUoanNvbikge1xuICBjb25zdCBhYnNvbHV0ZVJDRmlsZVBhdGggPSBhYnNvbHV0ZVJDRmlsZVBhdGhGcm9tTm90aGluZygpLFxuICAgICAgICBmaWxlQ29udGVudCA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIGBcXHRgKTtcblxuICB3cml0ZUZpbGUoYWJzb2x1dGVSQ0ZpbGVQYXRoLCBmaWxlQ29udGVudCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVJDRmlsZShhZGRlZFByb3BlcnRpZXMsIC4uLmRlbGV0ZWRQcm9wZXJ0eU5hbWVzKSB7XG4gIGxldCBqc29uID0gcmVhZFJDRmlsZSgpO1xuXG4gIGlmIChhZGRlZFByb3BlcnRpZXMpIHtcbiAgICBPYmplY3QuYXNzaWduKGpzb24sIGFkZGVkUHJvcGVydGllcyk7XG4gIH1cblxuICBkZWxldGVkUHJvcGVydHlOYW1lcy5mb3JFYWNoKChkZWxldGVkUHJvcGVydHlOYW1lKSA9PiB7XG4gICAgZGVsZXRlIGpzb25bZGVsZXRlZFByb3BlcnR5TmFtZV07XG4gIH0pO1xuXG4gIHdyaXRlUkNGaWxlKGpzb24pOyAgICAgIFxufVxuXG5mdW5jdGlvbiBjaGVja1JDRmlsZUV4aXN0cygpIHtcbiAgY29uc3QgYWJzb2x1dGVSQ0ZpbGVQYXRoID0gYWJzb2x1dGVSQ0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcmNGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKGFic29sdXRlUkNGaWxlUGF0aCk7XG5cbiAgcmV0dXJuIHJjRmlsZUV4aXN0cztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVmFjdW91c1JDRmlsZSgpIHtcbiAgY29uc3QganNvbiA9IHtcbiAgICBcImVudmlyb25tZW50c1wiOiBbXG4gICAgICB7fVxuICAgIF1cbiAgfTtcblxuICB3cml0ZVJDRmlsZShqc29uKTtcbn1cblxuZnVuY3Rpb24gc2V0UkNCYXNlRXh0ZW5zaW9uKHJjQmFzZUV4dGVuc2lvbikgeyBiYXNlRXh0ZW5zaW9uID0gcmNCYXNlRXh0ZW5zaW9uOyB9XG5cbmZ1bmN0aW9uIHNldFJDUGF0aFJlc29sdmVyKHJjUGF0aFJlc29sdmVyKSB7IHBhdGhSZXNvbHZlciA9IHJjUGF0aFJlc29sdmVyOyB9XG5cbk9iamVjdC5hc3NpZ24ocmMsIHtcbiAgcmVhZFJDRmlsZSxcbiAgd3JpdGVSQ0ZpbGUsXG4gIHVwZGF0ZVJDRmlsZSxcbiAgY2hlY2tSQ0ZpbGVFeGlzdHMsXG4gIGNyZWF0ZVZhY3VvdXNSQ0ZpbGUsXG4gIHNldFJDQmFzZUV4dGVuc2lvbixcbiAgc2V0UkNQYXRoUmVzb2x2ZXJcbn0pO1xuXG5mdW5jdGlvbiBlbnZpcm9ubWVudE5hbWVGcm9tQXJndihhcmd2KSB7XG4gIGxldCBlbnZpcm9ubWVudE5hbWUgPSBudWxsO1xuXG4gIGFyZ3YuZmluZCgoYXJndW1lbnQpID0+IHsgIC8vL1xuICAgIGNvbnN0IG1hdGNoZXMgPSBhcmd1bWVudC5tYXRjaCgvLS1lbnZpcm9ubWVudD0oLispLyksXG4gICAgICAgICAgZm91bmQgPSAobWF0Y2hlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgICBlbnZpcm9ubWVudE5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgICB9XG5cbiAgICByZXR1cm4gZm91bmQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbnZpcm9ubWVudE5hbWU7XG59XG5cbmZ1bmN0aW9uIGFic29sdXRlUkNGaWxlUGF0aEZyb21Ob3RoaW5nKCkge1xuICBjb25zdCBmaWxlUGF0aCA9IGAuLy4ke2Jhc2VFeHRlbnNpb259cmNgLFxuICAgICAgICBhYnNvbHV0ZVJDRmlsZVBhdGggPSBwYXRoUmVzb2x2ZXIoZmlsZVBhdGgpO1xuXG4gIHJldHVybiBhYnNvbHV0ZVJDRmlsZVBhdGg7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aE5hbWUocGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9eXFwvLyxcIlwiKS5yZXBsYWNlKC9cXC8kLywgXCJcIik7IC8vL1xuXG4gIGNvbnN0IHBhdGhOYW1lID0gKC9cXC8vLnRlc3QocGF0aCkgPT09IGZhbHNlKTtcblxuICByZXR1cm4gcGF0aE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhUb3Btb3N0TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBhdGhOYW1lID0gaXNQYXRoTmFtZShwYXRoKSxcbiAgICAgICAgcGF0aEFic29sdXRlUGF0aCA9IGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSxcbiAgICAgICAgcGF0aFRvcG1vc3ROYW1lID0gKHBhdGhOYW1lICYmIHBhdGhBYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gIS9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aEFic29sdXRlUGF0aCA9IC9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoKHRvcG1vc3ROYW1lLCBhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdE5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoID0gcmVnRXhwLnRlc3QoYWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBsZXQgY29tYmluZWRQYXRoID0gbnVsbDtcblxuICBjb25zdCBwYXRoTmFtZXMgPSBwYXRoLnNwbGl0KC9cXC8vKSxcbiAgICAgICAgcmVsYXRpdmVQYXRoTmFtZXMgPSByZWxhdGl2ZVBhdGguc3BsaXQoL1xcLy8pO1xuXG4gIGxldCBsYXN0UGF0aE5hbWUsXG4gICAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgaWYgKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuXCIpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLi5cIikgJiYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gICAgcGF0aE5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICAgIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNvbWJpbmVkUGF0aE5hbWVzID0gW10uY29uY2F0KHBhdGhOYW1lcykuY29uY2F0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICAgIGNvbWJpbmVkUGF0aCA9IGNvbWJpbmVkUGF0aE5hbWVzLmpvaW4oXCIvXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCBcIlwiKTsgIC8vL1xuXG4gIGNvbnN0IGNvbmNhdGVuYXRlZFBhdGggPSBgJHtwYXRofS8ke3JlbGF0aXZlUGF0aH1gO1xuXG4gIHJldHVybiBjb25jYXRlbmF0ZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBib3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14uKlxcLyhbXlxcL10rXFwvPykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIGJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBib3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKilcXC9bXlxcL10rXFwvPyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eW15cXC9dK1xcLyguKykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzUGF0aE5hbWUsXG4gIGlzUGF0aFRvcG1vc3ROYW1lLFxuICBpc1BhdGhSZWxhdGl2ZVBhdGgsXG4gIGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoLFxuICBjb21iaW5lUGF0aHMsXG4gIGNvbmNhdGVuYXRlUGF0aHMsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZpbGUoZmlsZVBhdGgsIGFyZ3MsIHJlZ2V4KSB7XG4gIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZUNvbnRlbnQoY29udGVudCwgYXJncywgcmVnZXgpO1xuXG4gIHJldHVybiBwYXJzZWRDb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZW50KGNvbnRlbnQsIGFyZ3MsIHJlZ2V4KSB7XG4gIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdChcIlxcblwiKSxcbiAgICAgICAgcGFyc2VkTGluZXMgPSBwYXJzZUxpbmVzKGxpbmVzLCBhcmdzLCByZWdleCksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZWRMaW5lcy5qb2luKFwiXFxuXCIpO1xuXG4gIHJldHVybiBwYXJzZWRDb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMaW5lKGxpbmUsIGFyZ3MsIHJlZ2V4ID0gL1xcJHsoLis/KX0vZykge1xuICBjb25zdCBwYXJzZWRMaW5lID0gbGluZS5yZXBsYWNlKHJlZ2V4LCAobWF0Y2gsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkVG9rZW4gPSBwYXJzZVRva2VuKHRva2VuLCBhcmdzKTtcblxuICAgIHJldHVybiBwYXJzZWRUb2tlbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZExpbmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcGFyc2VGaWxlLFxuICBwYXJzZUNvbnRlbnQsXG4gIHBhcnNlTGluZVxufTtcblxuZnVuY3Rpb24gcGFyc2VMaW5lcyhsaW5lcywgYXJncywgcmVnZXgpIHtcbiAgY29uc3QgcGFyc2VkTGluZXMgPSBsaW5lcy5tYXAoKGxpbmUpID0+IHtcbiAgICBjb25zdCBwYXJzZWRMaW5lID0gcGFyc2VMaW5lKGxpbmUsIGFyZ3MsIHJlZ2V4KTtcblxuICAgIHJldHVybiBwYXJzZWRMaW5lO1xuICB9KTtcblxuICByZXR1cm4gcGFyc2VkTGluZXM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVG9rZW4odG9rZW4sIGFyZ3MpIHtcbiAgbGV0IHBhcnNlZFRva2VuID0gXCJcIjtcblxuICBpZiAoYXJncy5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcbiAgICBwYXJzZWRUb2tlbiA9IGFyZ3NbdG9rZW5dO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFRva2VuO1xufVxuIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXX0=
