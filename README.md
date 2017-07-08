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
    
The sorted vertices of the graph are then made available:
    
    const sortedVertices = graph.getSortedVertices();
    
If there is a cycle, the value of `sortedVertices` will be `null`.

As well as sorting the vertices, each sorted vertex has an array of ancestor vertices, themselves sorted. For the above input, for example, the `c` vertex will have an array of ancestor vertices `['d', 'a', 'b']`. This is the real utility of the algorithm.
    
## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-kahn

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone git@github.com:occam-proof-assistant/Kahn.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.
        
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
