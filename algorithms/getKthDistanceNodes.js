/*
            3
      10           6
    2     8     5     20
        1   9

  root = 3, target = 10, k = 2  => [1, 9, 6]
*/

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const root = new BinaryTreeNode(3);
const node10 = new BinaryTreeNode(10);
const node6 = new BinaryTreeNode(6);
root.left = node10;
root.right = node6;
const node2 = new BinaryTreeNode(2);
const node8 = new BinaryTreeNode(8);
node10.left = node2;
node10.right = node8;
const node1 = new BinaryTreeNode(1);
const node9 = new BinaryTreeNode(9);
node8.left = node1;
node8.right = node9;
const node5 = new BinaryTreeNode(5);
const node20 = new BinaryTreeNode(20);
node6.left = node5;
node6.right = node20;

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
};

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    if (this.isEmpty()) this.top = new Node(value);
    else this.top = new Node(value, this.top);
  }

  pop() {
    if (this.isEmpty()) return null;

    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  isEmpty() {
    return this.top === null;
  }
};

const getPathToRoot = (root, target) => {
  const parents = new Map();
  const stack = new Stack();
  stack.push([root, null]);

  let targetNode = null;

  while (!stack.isEmpty()) {
    const [node, parent] = stack.pop();
    parents.set(node, parent);

    const { value, left, right } = node;
    if (value === target) {
      targetNode = node;
      break;
    }
    if (left) stack.push([left, node]);
    if (right) stack.push([right, node]);
  }

  let pathToRoot = [targetNode];
  let current = targetNode;
  while (current && parents.has(current)) {
    const parent = parents.get(current);
    if (parent) pathToRoot.push(parent);
    current = parent;
  }

  return pathToRoot;
};

const getKthDistanceChildNodes = (node, target, k) => {
  const stack = new Stack();
  stack.push([node, 0]);
  const kthDistanceChildNodes = [];

  while (!stack.isEmpty()) {
    const [{ value, left, right }, depth] = stack.pop();

    if (depth === k && value !== target) {
      kthDistanceChildNodes.push(value);
    }
    if (left) stack.push([left, depth + 1]);
    if (right) stack.push([right, depth + 1])
  }

  return kthDistanceChildNodes;
};

const getKthDistanceNodes = (root, target, k) => {
  const pathToRoot = getPathToRoot(root, target);
  const kthDistanceNodes = [];

  for (let i = 0; i < pathToRoot.length; i++) {
    kthDistanceNodes.push(...getKthDistanceChildNodes(pathToRoot[i], target, k - i));
  }

  return kthDistanceNodes;
};

console.log(getKthDistanceNodes(root, 10, 2));