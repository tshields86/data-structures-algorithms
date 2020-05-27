const Stack = require('./stackLinkedList');
const Queue = require('./queueLinkedList');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node) {
    if (this.adjacencyList.has(node)) return;
    this.adjacencyList.set(node, new Set());
  }

  addEdge(node1, node2) {
    if (!this.adjacencyList.has(node1) || !this.adjacencyList.has(node2)) return;
    this.adjacencyList.get(node1).add(node2);
    this.adjacencyList.get(node2).add(node1);
  }

  addDirectedEdge(node1, node2) {
    if (!this.adjacencyList.has(node1) || !this.adjacencyList.has(node2)) return;
    this.adjacencyList.get(node1).add(node2);
  }

  getAdjacentNodes(node) {
    return this.adjacencyList.get(node);
  }

  display() {
    for (let [node, edge] of this.adjacencyList) {
      console.log(node, edge);
    }
  }

  dfs(startNode, fxn) {
    const stack = new Stack();
    const explored = new Set([startNode]);
    stack.push(startNode);

    while (!stack.isEmpty()) {
      const node = stack.pop();
      fxn(node);

      for (let n of this.adjacencyList.get(node)) {
        if (!explored.has(n)) {
          explored.add(n);
          stack.push(n);
        }
      }
    }
  }

  bfs(startNode, fxn) {
    const queue = new Queue();
    const explored = new Set([startNode]);
    queue.enqueue(startNode);

    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      fxn(node);

      for (let n of this.adjacencyList.get(node)) {
        if (!explored.has(n)) {
          explored.add(n);
          queue.enqueue(n);
        }
      }
    }
  }
};

const graph = new Graph();
graph.addNode('a');
graph.addNode('b');
graph.addNode('c');
graph.addNode('d');
graph.addNode('e');
graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('b', 'd');
graph.addEdge('c', 'd');
graph.addEdge('d', 'e');
graph.display();
/*
a => b, c
b => a, d
c => a, d
d => b, c, e
e => d
*/

console.log(graph.getAdjacentNodes('a'));

console.log('*** dfs ***')
// [ 'a', 'c', 'd', 'e', 'b' ]
graph.dfs('a', console.log);

console.log('*** bfs ***')
// [ 'a', 'b', 'c', 'd', 'e' ]
graph.bfs('a', console.log);

const doesPathExist = (graph, nodeA, nodeB) => {
  const queue = new Queue();
  const explored = new Set([nodeA]);
  queue.enqueue(nodeA);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    if (node === nodeB) return true;

    for (let n of graph.adjacencyList.get(node)) {
      if (!explored.has(n)) {
        explored.add(n);
        queue.enqueue(n);
      }
    }
  }
  return false;
};

console.log(doesPathExist(graph, 'a', 'e'));