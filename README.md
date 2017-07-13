# Kahn

An implementation of Kahn's algorithm.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Building](#building)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Introduction

This algorithm will topologically sort a graph, if there are no cycles, otherwise it will report the cycles. The [Wikipedia page on topological sorting](https://en.wikipedia.org/wiki/Topological_sorting) has a brief explanation.
    
A graph can be constructed with the `fromVertexLiterals()` factory method as follows:

    const kahn = require('occam-kahn');

    const { Graph } = kahn;

    const graph = Graph.fromVertexLiterals(
    
      ['a', ['b']],
      ['b', ['c']],
      ['d', ['c']],
      ['e', []],
      ['f', ['g']],
      ['h', ['g']]
      
    );
    
Note that the array of names that is the second element of each literal gives the *ancestors* of the vertex and not its descendants. The reason for this is that the direction of the arrows can then be said to reflect the dependencies between the vertices. For example, vertex `a` is dependent upon vertex `b` and so on. When constructing a dependency tree, this is the preferred method, because the dependencies are usually available.  
    
The topologically sorted vertices of the graph are then made available:
    
    const topologicallySortedVertices = graph.getTopologicallySortedVertices();
    
If there is a cycle, the return value will be `null`. You can also check for the presence of cycles explicitly:

    const cyclesPresent = graph.areCyclesPresent();
    
If there are cycles present, they will be amongst the remaining edges:

    const remainingEdges = graph.getRemainingEdges();
    
## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-kahn

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone git@github.com:occam-proof-assistant/Kahn.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug


## Acknowledgements

This implementation was closely based on the following:

https://gist.github.com/Sup3rc4l1fr4g1l1571c3xp14l1d0c10u5/3341dba6a53d7171fe3397d13d00ee3f

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
