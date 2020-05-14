const Stack = require('./stackLinkedList');
const Queue = require('./queueLinkedList');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node) {
    this.adjacencyList.set(node, new Set());
  }

  addEdge(node1, node2) {
    this.adjacencyList.get(node1).add(node2);
    this.adjacencyList.get(node2).add(node1);
  }

  addDirectedEdge(node1, node2) {
    this.adjacencyList.get(node1).add(node2);
  }

  getAdjacentNodes(node) {
    return this.adjacencyList.get(node);
  }

  display() {
    return [...this.adjacencyList.keys()]
      .map(node => `${node} => ${[...this.adjacencyList.get(node)].join(', ')}`)
      .join('\n');
  }

  dfsArray(startNode) {
    const result = [];
    const stack = new Stack();
    const explored = new Set([startNode]);
    stack.push(startNode);

    while (!stack.isEmpty()) {
      const node = stack.pop();
      result.push(node);
      for (let n of this.adjacencyList.get(node)) {
        if (!explored.has(n)) {
          explored.add(n);
          stack.push(n);
        }
      }
    }
    return result;
  }

  * dfsTraversal(startNode) {
    const stack = new Stack();
    const explored = new Set([startNode]);
    stack.push(startNode);

    while (!stack.isEmpty()){
      const node = stack.pop();
      yield node;
      for (let n of this.adjacencyList.get(node)) {
        if (!explored.has(n)) {
          explored.add(n);
          stack.push(n);
        }
      }
    }
  }

  bfsArray(startNode) {
    const result = [];
    const queue = new Queue();
    const explored = new Set([startNode]);
    queue.enqueue(startNode);

    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      result.push(node);
      for (let n of this.adjacencyList.get(node)) {
        if (!explored.has(n)) {
          explored.add(n);
          queue.enqueue(n);
        }
      }
    }
    return result;
  }

  * bfsTraversal(startNode) {
    const queue = new Queue();
    const explored = new Set([startNode]);
    queue.enqueue(startNode);

    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      yield node;
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
console.log(graph.display());
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
console.log(graph.dfsArray('a'));
const dfsIterator = graph.dfsTraversal('a');
for (node of dfsIterator) {
  console.log(node);
}

console.log('*** bfs ***')
// [ 'a', 'b', 'c', 'd', 'e' ]
console.log(graph.bfsArray('a'));
const bfsIterator = graph.bfsTraversal('a');
for (node of bfsIterator) {
  console.log(node);
}