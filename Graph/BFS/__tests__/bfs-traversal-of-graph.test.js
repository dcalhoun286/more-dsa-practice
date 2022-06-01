'use strict';

const bfsOfGraph = require('../bfs-traversal-of-graph.js');

describe('BFS traversal of graph', () => {
  it('should return an array of integers indicating order of BFS traversal of graph', () => {
    expect(bfsOfGraph(5, [['1', '2', '3'], [], ['4'], [], []])).toEqual([
      0, 1, 2, 3, 4,
    ]);
  });
});
