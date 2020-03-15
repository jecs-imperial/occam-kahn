# Kahn

An implementation of Kahn's algorithm.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Building](#building)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Introduction

This algorithm will topologically sort a graph, if there are no cycles, otherwise it will report the cycles. The [Wikipedia page on topological sorting](https://en.wikipedia.org/wiki/Topological_sorting) has a brief explanation.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-kahn

You can also clone the repository with [Git](https://git-scm.com/)...

    https://github.com/jecs-imperial/occam-kahn.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Usage
    
A graph can be constructed with the `fromVertexLiterals()` factory method as follows:

```js
const kahn = require('occam-kahn');

const { Graph } = kahn;

const graph = Graph.fromVertexLiterals([

  ['a', ['b']],
  ['b', ['c']],
  ['d', ['c']],
  ['e', []],
  ['f', ['g']],
  ['h', ['g']]

]);
```

Note that the array of names that is the second element of each literal gives the *ancestors* of the vertex and not its descendants.
   
It is possible to check whether there are any cycles present:

```js
const cyclesPresent = graph.areCyclesPresent();
```

If there are no cycles present, the topologically ordered vertices of the graph are available:
    
```js
const topologicallySortedVertices = graph.getTopologicallyOrderedVertices();
```

If there are cycles present, they will be amongst the remaining edges:

```js
const remainingEdges = graph.getRemainingEdges();

remainingEdges.forEachEdgeByVertexNames(function(sourceVertexName, targetVertexName) {
  ...
});
```

Rather than iterate through the remaining edges and recover the vertex names yourself you can use the `forEachRemainingEdgeByVertexNames()` method:
 
```js
graph.forEachRemainingEdgeByVertexNames(function(sourceVertexName, targetVertexName) {
  ...
});
```

The algorithm will also leave both the incoming and outgoing edges of the topologically sorted vertices intact and these are available by way of the requisite getters:
  
```js
const firstTopologicallySortedVertex = first(topologicallySortedVertices),
      incomingEdges = firstTopologicallySortedVertex.getIncomingEdges(),
      outgoingEdges = firstTopologicallySortedVertex.getOutgoingEdges();
```

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug


## Acknowledgements

* This implementation was closely based on [this](https://gist.github.com/Sup3rc4l1fr4g1l1571c3xp14l1d0c10u5/3341dba6a53d7171fe3397d13d00ee3f) one.

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
