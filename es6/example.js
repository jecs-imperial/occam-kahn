"use strict";

import { Graph } from "./index" ///

const graph = Graph.fromVertexLiterals([

  ["a", ["b"]],
  ["b", ["c"]],
  ["d", ["c"]],
  ["e", []],
  ["f", ["g"]],
  ["h", ["g"]]

]);

const cyclesPresent = graph.areCyclesPresent(),
      remainingEdges = graph.getRemainingEdges(),
      orderedVertices = graph.getOrderedVertices();
