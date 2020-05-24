/* 
Given a binary tree, get the average value at each level of the tree.

Input:
      4
     / \
    7   9
   / \    \
  10  2    6
       \
        6
       /
      2
Output: [4, 8, 6, 6, 2]
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
};



/* ***** DFS ***** */

const collectLevelsDFS = (node, levels = new Map(), level = 0) => {
  if (!node) return;

  let [sum, count] = (levels.get(level) || [0, 0]);
  sum += node.data;
  count += 1;
  levels.set(level, [sum, count]);

  collectLevelsDFS(node.left, levels, level + 1);
  collectLevelsDFS(node.right, levels, level + 1);

  return levels;
};

const averageByLevelDFS = map => {
  const result = [];
  for (let [level, [sum, count]] of map.entries()) {
    result[level] = sum / count;
  }
  return result;
};

const averageLevelsDFS = root => {
  if(!root) return;

  const levelMap = collectLevelsDFS(root);
  return averageByLevelDFS(levelMap);
};



/* ***** BFS ***** */

const Queue = require('../data-structures/queueLinkedList');

const collectLevelsBFS = root => {
  const levels = [];
  const queue = new Queue();
  queue.enqueue([0, root]);

  while (!queue.isEmpty()) {
    const [level, node] = queue.dequeue();
    if (!node) continue;

    let [sum, count] = levels[level] || [0, 0];
    sum += node.data;
    count += 1;
    levels[level] = [sum, count];

    queue.enqueue([level + 1, node.left]);
    queue.enqueue([level + 1, node.right]);
  }
  return levels;
};

const averageByLevelBFS = array =>
  array.map(([sum, count]) => sum / count);

averageLevelsBFS = root => {
  const levelArray = collectLevelsBFS(root);
  return averageByLevelBFS(levelArray);
};

const root = new Node(4);
const n17 = new Node(7);
const n19 = new Node(9);
const n210 = new Node(10);
const n22 = new Node(2);
const n26 = new Node(6);
const n36 = new Node(6);
const n42 = new Node(2);

root.left = n17;
root.right = n19;
n19.right = n26;
n17.left = n210;
n17.right = n22;
n22.right = n36;
n36.left = n42;

console.log(averageLevelsDFS(root))
console.log(averageLevelsBFS(root))
