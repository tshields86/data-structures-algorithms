const Stack = require('./stackLinkedList');
const Queue = require('./queueLinkedList');

class BinarySearchTreeNode {
  constructor(value = null) {
    this.value = value;
    this.left = this.right = null;
  }
};
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value, node = this.root) {
    if (this.isEmpty()) return this.root = new BinarySearchTreeNode(value);

    if (value === node.value) return; /* Implementations vary, this one does not allow duplicates */
    if (value < node.value) {
      if (!node.left) node.left = new BinarySearchTreeNode(value);
      else this.insert(value, node.left);
    } else {
      if (!node.right) node.right = new BinarySearchTreeNode(value);
      else this.insert(value, node.right);
    }
  }

  contains(value, node = this.root) {
    if (value === node.value) return true;
    else if (value < node.value && node.left) return this.contains(value, node.left);
    else if (value > node.value && node.right) return this.contains(value, node.right);
    else return false;
  }

  preOrder(node = this.root, array = []) {
    array.push(node.value);
    if (node.left) this.preOrder(node.left, array);
    if (node.right) this.preOrder(node.right, array);
    return array;
  }

  inOrder(node = this.root, array = []) {
    if (node.left) this.inOrder(node.left, array);
    array.push(node.value);
    if (node.right) this.inOrder(node.right, array);
    return array;
  }

  postOrder(node = this.root, array = []) {
    if (node.left) this.postOrder(node.left, array);
    if (node.right) this.postOrder(node.right, array);
    array.push(node.value);
    return array;
  }

  dfs() {
    const result = [];
    const stack = new Stack();
    stack.push(this.root);

    while (!stack.isEmpty()) {
      const node = stack.pop();
      result.push(node.value);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return result;
  }

  bfs() {
    const result = [];
    const queue = new Queue();
    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      result.push(node.value);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
    return result;
  }

  isEmpty() {
    return !this.root;
  }
};


const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10);
binarySearchTree.insert(4);
binarySearchTree.insert(30);
binarySearchTree.insert(3);
binarySearchTree.insert(15);
binarySearchTree.insert(5);
binarySearchTree.insert(40);
console.log(binarySearchTree);
/*
          10
      4       30
    3   5   15  40
*/

console.log('*** preOrder ***')
// [ 10, 4, 3, 5, 30, 15, 40 ]
console.log(binarySearchTree.preOrder());

console.log('*** inOrder ***')
// [ 3, 4, 5, 10, 15, 30, 40 ]
console.log(binarySearchTree.inOrder());

console.log('*** postOrder ***')
// [ 3, 5, 4, 15, 40, 30, 10 ]
console.log(binarySearchTree.postOrder());

console.log('*** dfs ***')
// [ 10, 4, 3, 5, 30, 15, 40 ]
console.log(binarySearchTree.dfs());

console.log('*** bfs ***')
// [ 10, 4, 30, 3, 5, 15, 40 ]
console.log(binarySearchTree.bfs());
