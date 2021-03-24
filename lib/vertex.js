"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
var Vertex = function() {
    function Vertex(name, incomingEdges, outgoingEdges) {
        _classCallCheck(this, Vertex);
        this.name = name;
        this.incomingEdges = incomingEdges;
        this.outgoingEdges = outgoingEdges;
    }
    _createClass(Vertex, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getIncomingEdges",
            value: function getIncomingEdges() {
                return this.incomingEdges;
            }
        },
        {
            key: "getOutgoingEdges",
            value: function getOutgoingEdges() {
                return this.outgoingEdges;
            }
        },
        {
            key: "isStarting",
            value: function isStarting() {
                var incomingEdgesLength = this.incomingEdges.length, starting = incomingEdgesLength === 0; ///
                return starting;
            }
        },
        {
            key: "addIncomingEdge",
            value: function addIncomingEdge(incomingEdge) {
                this.incomingEdges.push(incomingEdge);
            }
        },
        {
            key: "addOutgoingEdge",
            value: function addOutgoingEdge(outgoingEdge) {
                this.outgoingEdges.push(outgoingEdge);
            }
        },
        {
            key: "removeIncomingEdge",
            value: function removeIncomingEdge(incomingEdge) {
                var index = this.incomingEdges.indexOf(incomingEdge);
                this.incomingEdges.splice(index, 1);
            }
        },
        {
            key: "forEachIncomingEdge",
            value: function forEachIncomingEdge(callback) {
                this.incomingEdges.forEach(callback);
            }
        },
        {
            key: "forEachOutgoingEdge",
            value: function forEachOutgoingEdge(callback) {
                this.outgoingEdges.forEach(callback);
            }
        }
    ], [
        {
            key: "fromVertexName",
            value: function fromVertexName(vertexName) {
                var name = vertexName, incomingEdges = [], outgoingEdges = [], vertex = new Vertex(name, incomingEdges, outgoingEdges);
                return vertex;
            }
        }
    ]);
    return Vertex;
}();
exports.default = Vertex;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJ0ZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGluY29taW5nRWRnZXMsIG91dGdvaW5nRWRnZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5jb21pbmdFZGdlcyA9IGluY29taW5nRWRnZXM7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzID0gb3V0Z29pbmdFZGdlcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEluY29taW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jb21pbmdFZGdlcztcbiAgfVxuXG4gIGdldE91dGdvaW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3V0Z29pbmdFZGdlcztcbiAgfVxuICBcbiAgaXNTdGFydGluZygpIHtcbiAgICBjb25zdCBpbmNvbWluZ0VkZ2VzTGVuZ3RoID0gdGhpcy5pbmNvbWluZ0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBzdGFydGluZyA9IChpbmNvbWluZ0VkZ2VzTGVuZ3RoID09PSAwKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHN0YXJ0aW5nO1xuICB9XG4gIFxuICBhZGRJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKSB7XG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzLnB1c2goaW5jb21pbmdFZGdlKTtcbiAgfVxuXG4gIGFkZE91dGdvaW5nRWRnZShvdXRnb2luZ0VkZ2UpIHtcbiAgICB0aGlzLm91dGdvaW5nRWRnZXMucHVzaChvdXRnb2luZ0VkZ2UpO1xuICB9XG5cbiAgcmVtb3ZlSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmNvbWluZ0VkZ2VzLmluZGV4T2YoaW5jb21pbmdFZGdlKTtcbiAgICBcbiAgICB0aGlzLmluY29taW5nRWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGZvckVhY2hJbmNvbWluZ0VkZ2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLmluY29taW5nRWRnZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoT3V0Z29pbmdFZGdlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIGluY29taW5nRWRnZXMgPSBbXSxcbiAgICAgICAgICBvdXRnb2luZ0VkZ2VzID0gW10sXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChuYW1lLCBpbmNvbWluZ0VkZ2VzLCBvdXRnb2luZ0VkZ2VzKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUEsTUFBQTthQUFBLE1BQUEsQ0FDQSxJQUFBLEVBQUEsYUFBQSxFQUFBLGFBQUE7OEJBREEsTUFBQTthQUVBLElBQUEsR0FBQSxJQUFBO2FBQ0EsYUFBQSxHQUFBLGFBQUE7YUFDQSxhQUFBLEdBQUEsYUFBQTs7aUJBSkEsTUFBQTs7QUFPQSxlQUFBLEdBQUEsT0FBQTs0QkFBQSxPQUFBOzRCQUNBLElBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsZ0JBQUE7NEJBQUEsZ0JBQUE7NEJBQ0EsYUFBQTs7OztBQUdBLGVBQUEsR0FBQSxnQkFBQTs0QkFBQSxnQkFBQTs0QkFDQSxhQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFVBQUE7NEJBQUEsVUFBQTtvQkFDQSxtQkFBQSxRQUFBLGFBQUEsQ0FBQSxNQUFBLEVBQ0EsUUFBQSxHQUFBLG1CQUFBLEtBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO3VCQUVBLFFBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsZUFBQTs0QkFBQSxlQUFBLENBQUEsWUFBQTtxQkFDQSxhQUFBLENBQUEsSUFBQSxDQUFBLFlBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsZUFBQTs0QkFBQSxlQUFBLENBQUEsWUFBQTtxQkFDQSxhQUFBLENBQUEsSUFBQSxDQUFBLFlBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsa0JBQUE7NEJBQUEsa0JBQUEsQ0FBQSxZQUFBO29CQUNBLEtBQUEsUUFBQSxhQUFBLENBQUEsT0FBQSxDQUFBLFlBQUE7cUJBRUEsYUFBQSxDQUFBLE1BQUEsQ0FBQSxLQUFBLEVBQUEsQ0FBQTs7OztBQUdBLGVBQUEsR0FBQSxtQkFBQTs0QkFBQSxtQkFBQSxDQUFBLFFBQUE7cUJBQ0EsYUFBQSxDQUFBLE9BQUEsQ0FBQSxRQUFBOzs7O0FBR0EsZUFBQSxHQUFBLG1CQUFBOzRCQUFBLG1CQUFBLENBQUEsUUFBQTtxQkFDQSxhQUFBLENBQUEsT0FBQSxDQUFBLFFBQUE7Ozs7O0FBR0EsZUFBQSxHQUFBLGNBQUE7NEJBQUEsY0FBQSxDQUFBLFVBQUE7b0JBQ0EsSUFBQSxHQUFBLFVBQUEsRUFDQSxhQUFBLE9BQ0EsYUFBQSxPQUNBLE1BQUEsT0FBQSxNQUFBLENBQUEsSUFBQSxFQUFBLGFBQUEsRUFBQSxhQUFBO3VCQUVBLE1BQUE7Ozs7V0F0REEsTUFBQTs7a0JBQUEsTUFBQSJ9