"use strict";
var _index = require("./index"); ///
var graph = _index.Graph.fromVertexLiterals([
    [
        "a",
        [
            "b"
        ]
    ],
    [
        "b",
        [
            "c"
        ]
    ],
    [
        "d",
        [
            "c"
        ]
    ],
    [
        "e",
        []
    ],
    [
        "f",
        [
            "g"
        ]
    ],
    [
        "h",
        [
            "g"
        ]
    ]
]);
var cyclesPresent = graph.areCyclesPresent(), remainingEdges = graph.getRemainingEdges(), orderedVertices = graph.getOrderedVertices();
debugger;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gXCIuL2luZGV4XCIgLy8vXG5cbmNvbnN0IGdyYXBoID0gR3JhcGguZnJvbVZlcnRleExpdGVyYWxzKFtcblxuICBbXCJhXCIsIFtcImJcIl1dLFxuICBbXCJiXCIsIFtcImNcIl1dLFxuICBbXCJkXCIsIFtcImNcIl1dLFxuICBbXCJlXCIsIFtdXSxcbiAgW1wiZlwiLCBbXCJnXCJdXSxcbiAgW1wiaFwiLCBbXCJnXCJdXVxuXG5dKTtcblxuY29uc3QgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKSxcbiAgICAgIHJlbWFpbmluZ0VkZ2VzID0gZ3JhcGguZ2V0UmVtYWluaW5nRWRnZXMoKSxcbiAgICAgIG9yZGVyZWRWZXJ0aWNlcyA9IGdyYXBoLmdldE9yZGVyZWRWZXJ0aWNlcygpO1xuXG5kZWJ1Z2dlclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7SUFFQSxNQUFBLHNCQUFBLENBQUEsRUFBQSxDQUFBO0lBRUEsS0FBQSxHQUZBLE1BQUEsT0FFQSxrQkFBQTs7U0FFQSxDQUFBOzthQUFBLENBQUE7Ozs7U0FDQSxDQUFBOzthQUFBLENBQUE7Ozs7U0FDQSxDQUFBOzthQUFBLENBQUE7Ozs7U0FDQSxDQUFBOzs7O1NBQ0EsQ0FBQTs7YUFBQSxDQUFBOzs7O1NBQ0EsQ0FBQTs7YUFBQSxDQUFBOzs7O0lBSUEsYUFBQSxHQUFBLEtBQUEsQ0FBQSxnQkFBQSxJQUNBLGNBQUEsR0FBQSxLQUFBLENBQUEsaUJBQUEsSUFDQSxlQUFBLEdBQUEsS0FBQSxDQUFBLGtCQUFBIn0=