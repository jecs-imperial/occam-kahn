"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _edge = _interopRequireDefault(require("./edge"));
var _vertex = _interopRequireDefault(require("./vertex"));
var _remainingEdges = _interopRequireDefault(require("./remainingEdges"));
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
var Graph = function() {
    function Graph(orderedVertices, remainingEdges) {
        _classCallCheck(this, Graph);
        this.orderedVertices = orderedVertices;
        this.remainingEdges = remainingEdges;
    }
    _createClass(Graph, [
        {
            key: "getOrderedVertices",
            value: function getOrderedVertices() {
                return this.orderedVertices;
            }
        },
        {
            key: "getRemainingEdges",
            value: function getRemainingEdges() {
                return this.remainingEdges;
            }
        },
        {
            key: "areCyclesPresent",
            value: function areCyclesPresent() {
                return this.remainingEdges.areCyclesPresent();
            }
        }
    ], [
        {
            key: "fromVertexLiterals",
            value: function fromVertexLiterals(vertexLiterals) {
                var vertexMap = vertexMapFromVertexLiterals(vertexLiterals), edges = edgesFromVertexLiteralsAndVertexMap(vertexLiterals, vertexMap), orderedVertices = orderedVerticesFromVertexMapAndEdges(vertexMap, edges), remainingEdges = new _remainingEdges.default(edges), graph = new Graph(orderedVertices, remainingEdges);
                return graph;
            }
        },
        {
            key: "fromVertexNamesAndEdges",
            value: function fromVertexNamesAndEdges(vertexNames, edges) {
                edges = edges.slice(); ///
                var vertexMap = vertexMapFromVertexNamesAndEdges(vertexNames, edges), orderedVertices = orderedVerticesFromVertexMapAndEdges(vertexMap, edges), remainingEdges = new _remainingEdges.default(edges), graph = new Graph(orderedVertices, remainingEdges);
                return graph;
            }
        }
    ]);
    return Graph;
}();
exports.default = Graph;
function vertexMapFromVertexNamesAndEdges(vertexNames, edges) {
    var vertexMap = {
    };
    vertexNames.forEach(function(vertexName) {
        var vertexExists = vertexMap.hasOwnProperty(vertexName);
        if (!vertexExists) {
            var vertex = _vertex.default.fromVertexName(vertexName);
            vertexMap[vertexName] = vertex;
        }
    });
    edges.forEach(function(edge) {
        var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertexExists = vertexMap.hasOwnProperty(sourceVertexName), targetVertexExists = vertexMap.hasOwnProperty(targetVertexName);
        if (!sourceVertexExists) {
            var sourceVertex = _vertex.default.fromVertexName(sourceVertexName);
            vertexMap[sourceVertexName] = sourceVertex;
        }
        if (!targetVertexExists) {
            var targetVertex = _vertex.default.fromVertexName(targetVertexName);
            vertexMap[targetVertexName] = targetVertex;
        }
        var sourceVertex = vertexMap[sourceVertexName], targetVertex = vertexMap[targetVertexName], incomingEdge = edge, outgoingEdge = edge; ///
        sourceVertex.addOutgoingEdge(outgoingEdge);
        targetVertex.addIncomingEdge(incomingEdge);
    });
    return vertexMap;
}
function vertexMapFromVertexLiterals(vertexLiterals) {
    var vertexMap = {
    };
    vertexLiterals.forEach(function(vertexLiteral) {
        var firstVertexLiteralElement = first(vertexLiteral), vertexName = firstVertexLiteralElement, vertexExists = vertexMap.hasOwnProperty(vertexName);
        if (!vertexExists) {
            var vertex = _vertex.default.fromVertexName(vertexName);
            vertexMap[vertexName] = vertex;
        }
        var secondVertexLiteralElement = second(vertexLiteral), ancestorVertexNames = secondVertexLiteralElement; ///
        ancestorVertexNames.forEach(function(ancestorVertexName) {
            var ancestorVertexExists = vertexMap.hasOwnProperty(ancestorVertexName);
            if (!ancestorVertexExists) {
                var ancestorVertex = _vertex.default.fromVertexName(ancestorVertexName);
                vertexMap[ancestorVertexName] = ancestorVertex;
            }
        });
    });
    return vertexMap;
}
function edgesFromVertexLiteralsAndVertexMap(vertexLiterals, vertexMap) {
    var edges = [];
    vertexLiterals.forEach(function(vertexLiteral) {
        var firstVertexLiteralElement = first(vertexLiteral), secondVertexLiteralElement = second(vertexLiteral), ancestorVertexNames = secondVertexLiteralElement, vertexName = firstVertexLiteralElement; ///
        ancestorVertexNames.forEach(function(ancestorVertexName) {
            var sourceVertexName = ancestorVertexName, targetVertexName = vertexName, sourceVertex = vertexMap[sourceVertexName], targetVertex = vertexMap[targetVertexName], edge = new _edge.default(sourceVertexName, targetVertexName), incomingEdge = edge, outgoingEdge = edge; ///
            edges.push(edge);
            sourceVertex.addOutgoingEdge(outgoingEdge);
            targetVertex.addIncomingEdge(incomingEdge);
        });
    });
    return edges;
}
function orderedVerticesFromVertexMapAndEdges(vertexMap, edges) {
    var orderedVertexNames = [], startingVertexNames = startingVertexNamesFromVertexMap(vertexMap), removedEdges = [];
    var startingVertexNamesLength = startingVertexNames.length;
    while(startingVertexNamesLength > 0){
        var startingVertexName = startingVertexNames.pop(), orderedVertexName = startingVertexName; ///
        orderedVertexNames.push(orderedVertexName);
        backwardsForEach(edges, function(edge, index) {
            var sourceVertexName = edge.getSourceVertexName(), edgeStarting = sourceVertexName === startingVertexName; ///
            if (edgeStarting) {
                edges.splice(index, 1);
                var targetVertexName = edge.getTargetVertexName(), targetVertex = vertexMap[targetVertexName], incomingEdge = edge, removedEdge = edge; ///
                targetVertex.removeIncomingEdge(incomingEdge);
                removedEdges.push(removedEdge);
                var targetVertexStarting = targetVertex.isStarting();
                if (targetVertexStarting) {
                    var startingVertexName1 = targetVertexName; ///
                    startingVertexNames.push(startingVertexName1);
                }
            }
        });
        startingVertexNamesLength = startingVertexNames.length;
    }
    var edgesLength = edges.length;
    if (edgesLength === 0) {
        removedEdges.forEach(function(removedEdge) {
            var targetVertexName = removedEdge.getTargetVertexName(), targetVertex = vertexMap[targetVertexName], incomingEdge = removedEdge; ///
            targetVertex.addIncomingEdge(incomingEdge);
        });
    }
    var orderedVertices = orderedVertexNames.map(function(orderedVertexName) {
        return vertexMap[orderedVertexName];
    });
    return orderedVertices;
}
function startingVertexNamesFromVertexMap(vertexMap) {
    var vertexNames = Object.keys(vertexMap), startingVertexNames = vertexNames.reduce(function(startingVertexNames1, vertexName) {
        var vertex = vertexMap[vertexName], vertexStarting = vertex.isStarting();
        if (vertexStarting) {
            var startingVertexName2 = vertexName; ///
            startingVertexNames1.push(startingVertexName2);
        }
        return startingVertexNames1;
    }, []);
    return startingVertexNames;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmFwaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4vdmVydGV4XCI7XG5pbXBvcnQgUmVtYWluaW5nRWRnZXMgZnJvbSBcIi4vcmVtYWluaW5nRWRnZXNcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kLCBiYWNrd2FyZHNGb3JFYWNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGgge1xuICBjb25zdHJ1Y3RvcihvcmRlcmVkVmVydGljZXMsIHJlbWFpbmluZ0VkZ2VzKSB7XG4gICAgdGhpcy5vcmRlcmVkVmVydGljZXMgPSBvcmRlcmVkVmVydGljZXM7XG4gICAgdGhpcy5yZW1haW5pbmdFZGdlcyA9IHJlbWFpbmluZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0T3JkZXJlZFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLm9yZGVyZWRWZXJ0aWNlcztcbiAgfVxuXG4gIGdldFJlbWFpbmluZ0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ0VkZ2VzO1xuICB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudCgpIHsgcmV0dXJuIHRoaXMucmVtYWluaW5nRWRnZXMuYXJlQ3ljbGVzUHJlc2VudCgpOyB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscykge1xuICAgIGNvbnN0IHZlcnRleE1hcCA9IHZlcnRleE1hcEZyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscyksXG4gICAgICAgICAgZWRnZXMgPSBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFsc0FuZFZlcnRleE1hcCh2ZXJ0ZXhMaXRlcmFscywgdmVydGV4TWFwKSxcbiAgICAgICAgICBvcmRlcmVkVmVydGljZXMgPSBvcmRlcmVkVmVydGljZXNGcm9tVmVydGV4TWFwQW5kRWRnZXModmVydGV4TWFwLCBlZGdlcyksXG4gICAgICAgICAgcmVtYWluaW5nRWRnZXMgPSBuZXcgUmVtYWluaW5nRWRnZXMoZWRnZXMpLFxuICAgICAgICAgIGdyYXBoID0gbmV3IEdyYXBoKG9yZGVyZWRWZXJ0aWNlcywgcmVtYWluaW5nRWRnZXMpO1xuXG4gICAgcmV0dXJuIGdyYXBoO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcykge1xuICAgIGVkZ2VzID0gZWRnZXMuc2xpY2UoKTsgIC8vL1xuXG4gICAgY29uc3QgdmVydGV4TWFwID0gdmVydGV4TWFwRnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSxcbiAgICAgICAgICBvcmRlcmVkVmVydGljZXMgPSBvcmRlcmVkVmVydGljZXNGcm9tVmVydGV4TWFwQW5kRWRnZXModmVydGV4TWFwLCBlZGdlcyksXG4gICAgICAgICAgcmVtYWluaW5nRWRnZXMgPSBuZXcgUmVtYWluaW5nRWRnZXMoZWRnZXMpLFxuICAgICAgICAgIGdyYXBoID0gbmV3IEdyYXBoKG9yZGVyZWRWZXJ0aWNlcywgcmVtYWluaW5nRWRnZXMpO1xuXG4gICAgcmV0dXJuIGdyYXBoO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZlcnRleE1hcEZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcykge1xuICBjb25zdCB2ZXJ0ZXhNYXAgPSB7fTtcblxuICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB7XG4gICAgY29uc3QgdmVydGV4RXhpc3RzID0gdmVydGV4TWFwLmhhc093blByb3BlcnR5KHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhFeGlzdHMpIHtcbiAgICAgIGNvbnN0IHZlcnRleCA9IFZlcnRleC5mcm9tVmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgdmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgc291cmNlVmVydGV4RXhpc3RzID0gdmVydGV4TWFwLmhhc093blByb3BlcnR5KHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleEV4aXN0cyA9IHZlcnRleE1hcC5oYXNPd25Qcm9wZXJ0eSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghc291cmNlVmVydGV4RXhpc3RzKSB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSBWZXJ0ZXguZnJvbVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICAgIHZlcnRleE1hcFtzb3VyY2VWZXJ0ZXhOYW1lXSA9IHNvdXJjZVZlcnRleDtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldFZlcnRleEV4aXN0cykge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gVmVydGV4LmZyb21WZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB2ZXJ0ZXhNYXBbdGFyZ2V0VmVydGV4TmFtZV0gPSB0YXJnZXRWZXJ0ZXg7XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4TWFwW3NvdXJjZVZlcnRleE5hbWVdLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHZlcnRleE1hcFt0YXJnZXRWZXJ0ZXhOYW1lXSxcbiAgICAgICAgICBpbmNvbWluZ0VkZ2UgPSBlZGdlLCAgLy8vXG4gICAgICAgICAgb3V0Z29pbmdFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgc291cmNlVmVydGV4LmFkZE91dGdvaW5nRWRnZShvdXRnb2luZ0VkZ2UpO1xuXG4gICAgdGFyZ2V0VmVydGV4LmFkZEluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpO1xuICB9KTtcblxuICByZXR1cm4gdmVydGV4TWFwO1xufVxuXG5mdW5jdGlvbiB2ZXJ0ZXhNYXBGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgY29uc3QgdmVydGV4TWFwID0ge307XG5cbiAgdmVydGV4TGl0ZXJhbHMuZm9yRWFjaCgodmVydGV4TGl0ZXJhbCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBmaXJzdCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lID0gZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCwgLy8vXG4gICAgICAgICAgdmVydGV4RXhpc3RzID0gdmVydGV4TWFwLmhhc093blByb3BlcnR5KHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhFeGlzdHMpIHtcbiAgICAgIGNvbnN0IHZlcnRleCA9IFZlcnRleC5mcm9tVmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgdmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICAgIH1cblxuICAgIGNvbnN0IHNlY29uZFZlcnRleExpdGVyYWxFbGVtZW50ID0gc2Vjb25kKHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIGFuY2VzdG9yVmVydGV4TmFtZXMgPSBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudDsgLy8vXG5cbiAgICBhbmNlc3RvclZlcnRleE5hbWVzLmZvckVhY2goKGFuY2VzdG9yVmVydGV4TmFtZSkgPT4ge1xuICAgICAgY29uc3QgYW5jZXN0b3JWZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhNYXAuaGFzT3duUHJvcGVydHkoYW5jZXN0b3JWZXJ0ZXhOYW1lKTtcblxuICAgICAgaWYgKCFhbmNlc3RvclZlcnRleEV4aXN0cykge1xuICAgICAgICBjb25zdCBhbmNlc3RvclZlcnRleCA9IFZlcnRleC5mcm9tVmVydGV4TmFtZShhbmNlc3RvclZlcnRleE5hbWUpO1xuXG4gICAgICAgIHZlcnRleE1hcFthbmNlc3RvclZlcnRleE5hbWVdID0gYW5jZXN0b3JWZXJ0ZXg7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiB2ZXJ0ZXhNYXA7XG59XG5cbmZ1bmN0aW9uIGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzQW5kVmVydGV4TWFwKHZlcnRleExpdGVyYWxzLCB2ZXJ0ZXhNYXApIHtcbiAgY29uc3QgZWRnZXMgPSBbXTtcblxuICB2ZXJ0ZXhMaXRlcmFscy5mb3JFYWNoKCh2ZXJ0ZXhMaXRlcmFsKSA9PiB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IGZpcnN0KHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIHNlY29uZFZlcnRleExpdGVyYWxFbGVtZW50ID0gc2Vjb25kKHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIGFuY2VzdG9yVmVydGV4TmFtZXMgPSBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCwgLy8vXG4gICAgICAgICAgdmVydGV4TmFtZSA9IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQ7IC8vL1xuXG4gICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcy5mb3JFYWNoKChhbmNlc3RvclZlcnRleE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBhbmNlc3RvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHZlcnRleE1hcFtzb3VyY2VWZXJ0ZXhOYW1lXSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHZlcnRleE1hcFt0YXJnZXRWZXJ0ZXhOYW1lXSxcbiAgICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIGluY29taW5nRWRnZSA9IGVkZ2UsICAvLy9cbiAgICAgICAgICAgIG91dGdvaW5nRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgZWRnZXMucHVzaChlZGdlKTtcblxuICAgICAgc291cmNlVmVydGV4LmFkZE91dGdvaW5nRWRnZShvdXRnb2luZ0VkZ2UpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXguYWRkSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZnVuY3Rpb24gb3JkZXJlZFZlcnRpY2VzRnJvbVZlcnRleE1hcEFuZEVkZ2VzKHZlcnRleE1hcCwgZWRnZXMpIHtcbiAgY29uc3Qgb3JkZXJlZFZlcnRleE5hbWVzID0gW10sXG4gICAgICAgIHN0YXJ0aW5nVmVydGV4TmFtZXMgPSBzdGFydGluZ1ZlcnRleE5hbWVzRnJvbVZlcnRleE1hcCh2ZXJ0ZXhNYXApLFxuICAgICAgICByZW1vdmVkRWRnZXMgPSBbXTtcblxuICBsZXQgc3RhcnRpbmdWZXJ0ZXhOYW1lc0xlbmd0aCA9IHN0YXJ0aW5nVmVydGV4TmFtZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChzdGFydGluZ1ZlcnRleE5hbWVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHN0YXJ0aW5nVmVydGV4TmFtZSA9IHN0YXJ0aW5nVmVydGV4TmFtZXMucG9wKCksXG4gICAgICAgICAgb3JkZXJlZFZlcnRleE5hbWUgPSBzdGFydGluZ1ZlcnRleE5hbWU7ICAvLy9cblxuICAgIG9yZGVyZWRWZXJ0ZXhOYW1lcy5wdXNoKG9yZGVyZWRWZXJ0ZXhOYW1lKTtcblxuICAgIGJhY2t3YXJkc0ZvckVhY2goZWRnZXMsIChlZGdlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgZWRnZVN0YXJ0aW5nID0gKHNvdXJjZVZlcnRleE5hbWUgPT09IHN0YXJ0aW5nVmVydGV4TmFtZSk7IC8vL1xuXG4gICAgICBpZiAoZWRnZVN0YXJ0aW5nKSB7XG4gICAgICAgIGVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB2ZXJ0ZXhNYXBbdGFyZ2V0VmVydGV4TmFtZV0sXG4gICAgICAgICAgICAgIGluY29taW5nRWRnZSA9IGVkZ2UsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICB0YXJnZXRWZXJ0ZXgucmVtb3ZlSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSk7XG5cbiAgICAgICAgcmVtb3ZlZEVkZ2VzLnB1c2gocmVtb3ZlZEVkZ2UpO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFZlcnRleFN0YXJ0aW5nID0gdGFyZ2V0VmVydGV4LmlzU3RhcnRpbmcoKTtcblxuICAgICAgICBpZiAodGFyZ2V0VmVydGV4U3RhcnRpbmcpIHtcbiAgICAgICAgICBjb25zdCBzdGFydGluZ1ZlcnRleE5hbWUgPSB0YXJnZXRWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICAgICAgICBzdGFydGluZ1ZlcnRleE5hbWVzLnB1c2goc3RhcnRpbmdWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3RhcnRpbmdWZXJ0ZXhOYW1lc0xlbmd0aCA9IHN0YXJ0aW5nVmVydGV4TmFtZXMubGVuZ3RoO1xuICB9XG5cbiAgY29uc3QgZWRnZXNMZW5ndGggPSBlZGdlcy5sZW5ndGg7XG5cbiAgaWYgKGVkZ2VzTGVuZ3RoID09PSAwKSB7XG4gICAgcmVtb3ZlZEVkZ2VzLmZvckVhY2goKHJlbW92ZWRFZGdlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRWZXJ0ZXhOYW1lID0gcmVtb3ZlZEVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdmVydGV4TWFwW3RhcmdldFZlcnRleE5hbWVdLFxuICAgICAgICAgICAgaW5jb21pbmdFZGdlID0gcmVtb3ZlZEVkZ2U7IC8vL1xuICAgICAgXG4gICAgICB0YXJnZXRWZXJ0ZXguYWRkSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSk7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IG9yZGVyZWRWZXJ0aWNlcyA9IG9yZGVyZWRWZXJ0ZXhOYW1lcy5tYXAoKG9yZGVyZWRWZXJ0ZXhOYW1lKSA9PiB2ZXJ0ZXhNYXBbb3JkZXJlZFZlcnRleE5hbWVdKTtcblxuICByZXR1cm4gb3JkZXJlZFZlcnRpY2VzO1xufVxuXG5mdW5jdGlvbiBzdGFydGluZ1ZlcnRleE5hbWVzRnJvbVZlcnRleE1hcCh2ZXJ0ZXhNYXApIHtcbiAgY29uc3QgdmVydGV4TmFtZXMgPSBPYmplY3Qua2V5cyh2ZXJ0ZXhNYXApLFxuICAgICAgICBzdGFydGluZ1ZlcnRleE5hbWVzID0gdmVydGV4TmFtZXMucmVkdWNlKChzdGFydGluZ1ZlcnRleE5hbWVzLCB2ZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gdmVydGV4TWFwW3ZlcnRleE5hbWVdLFxuICAgICAgICAgICAgICAgIHZlcnRleFN0YXJ0aW5nID0gdmVydGV4LmlzU3RhcnRpbmcoKTtcblxuICAgICAgICAgIGlmICh2ZXJ0ZXhTdGFydGluZykge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdWZXJ0ZXhOYW1lID0gdmVydGV4TmFtZTsgIC8vL1xuXG4gICAgICAgICAgICBzdGFydGluZ1ZlcnRleE5hbWVzLnB1c2goc3RhcnRpbmdWZXJ0ZXhOYW1lKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3RhcnRpbmdWZXJ0ZXhOYW1lc1xuICAgICAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIHN0YXJ0aW5nVmVydGV4TmFtZXM7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxVQUFBO0lBRUEsS0FBQTtJ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WUFBQSxHQUFBLFNBQUEsQ0FBQSxnQkFBQSxHQUNBLFlBQUEsR0FBQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFFQSx3QkFBQSxDQUFBLGVBQUEsQ0FBQSxZQUFBOzs7UUFJQSxlQUFBLEdBQUEsa0JBQUEsQ0FBQSxHQUFBLFVBQUEsaUJBQUE7ZUFBQSxTQUFBLENBQUEsaUJBQUE7O1dBRUEsZUFBQTs7U0FHQSxnQ0FBQSxDQUFBLFNBQUE7UUFDQSxXQUFBLEdBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxTQUFBLEdBQ0EsbUJBQUEsR0FBQSxXQUFBLENBQUEsTUFBQSxVQUFBLG9CQUFBLEVBQUEsVUFBQTtZQUNBLE1BQUEsR0FBQSxTQUFBLENBQUEsVUFBQSxHQUNBLGNBQUEsR0FBQSxNQUFBLENBQUEsVUFBQTtZQUVBLGNBQUE7Z0JBQ0EsbUJBQUEsR0FBQSxVQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFFQSxnQ0FBQSxDQUFBLElBQUEsQ0FBQSxtQkFBQTs7ZUFHQSxvQkFBQTs7V0FHQSxtQkFBQSJ9