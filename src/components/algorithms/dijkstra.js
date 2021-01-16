export function dijkstra(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);

  while (!!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();

    // If current node is wall, just skip it
    if (closestNode.isWall) continue;
    // If the closest Node, is at the distance infinity then we must be trapped and hence we must backtrack
    if (closestNode.distance === Infinity) {
      return visitedNodesInOrder;
    }

    closestNode.isVisited = true;
    visitedNodesInOrder.push(closestNode);
    // reached the destination
    if (closestNode === finishNode) return visitedNodesInOrder;
    updateUnivistedNeighbors(closestNode, grid);
  }
}

function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
  // since nodeA and nodeB are objects hence sort on the basis of thier distance
}

function getAllNodes(grid) {
  const nodes = [];

  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}

function updateUnivistedNeighbors(node, grid) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);

  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
}

function getUnvisitedNeighbors(node, grid) {
  const neighbors = [];
  const {col, row} = node;
  let m = grid.length - 1,
    n = grid[0].length;
  if (row - 1 >= 0) neighbors.push(grid[row - 1][col]);
  if (row + 1 < m) neighbors.push(grid[row + 1][col]);
  if (col + 1 < n) neighbors.push(grid[row][col + 1]);
  if (col - 1 >= 0) neighbors.push(grid[row][col - 1]);

  return neighbors.filter(neighbor => !neighbor.isVisited);
  // removes the unvisited nodes only from the neighbors
}

// Backtrack from the finish Nodes to find Shortest Path
export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
