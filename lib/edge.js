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
var Edge = function() {
    function Edge(sourceVertexName, targetVertexName) {
        _classCallCheck(this, Edge);
        this.sourceVertexName = sourceVertexName;
        this.targetVertexName = targetVertexName;
    }
    _createClass(Edge, [
        {
            key: "getSourceVertexName",
            value: function getSourceVertexName() {
                return this.sourceVertexName;
            }
        },
        {
            key: "getTargetVertexName",
            value: function getTargetVertexName() {
                return this.targetVertexName;
            }
        }
    ]);
    return Edge;
}();
exports.default = Edge;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lZGdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3Ioc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIHRoaXMuc291cmNlVmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleE5hbWU7XG4gICAgdGhpcy50YXJnZXRWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuXG4gIGdldFNvdXJjZVZlcnRleE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlVmVydGV4TmFtZTtcbiAgfVxuICBcbiAgZ2V0VGFyZ2V0VmVydGV4TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUEsSUFBQTthQUFBLElBQUEsQ0FDQSxnQkFBQSxFQUFBLGdCQUFBOzhCQURBLElBQUE7YUFFQSxnQkFBQSxHQUFBLGdCQUFBO2FBQ0EsZ0JBQUEsR0FBQSxnQkFBQTs7aUJBSEEsSUFBQTs7QUFNQSxlQUFBLEdBQUEsbUJBQUE7NEJBQUEsbUJBQUE7NEJBQ0EsZ0JBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsbUJBQUE7NEJBQUEsbUJBQUE7NEJBQ0EsZ0JBQUE7Ozs7V0FYQSxJQUFBOztrQkFBQSxJQUFBIn0=