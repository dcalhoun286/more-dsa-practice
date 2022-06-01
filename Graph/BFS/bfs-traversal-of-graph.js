'use strict';

/*
  - This is a coding challenge I worked on from Geeks For Geeks.
  - You can find the coding challenge here: https://practice.geeksforgeeks.org/problems/bfs-traversal-graph/1/
*/

/**
 *
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */

const bfsOfGraph = (V, adj) => {
  const bfsTransversalArray = [];
  const queue = [];
  const visited = new Set();
  const source = '0';
  let current;

  queue.push(source);

  while (queue.length) {
    current = queue.shift();

    if (visited.has(current)) {
      continue;
    }

    visited.add(current);
    bfsTransversalArray.push(+current);

    for (let neighbor of adj[+current]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }

  return bfsTransversalArray;
};

module.exports = bfsOfGraph;
