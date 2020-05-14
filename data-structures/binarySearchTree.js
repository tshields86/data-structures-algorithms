const Stack = require('./stackLinkedList');
const Queue = require('./queueLinkedList');
class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }

  insert(value) {
    if (value === this.value) return; /* Implementations vary, this one does not allow duplicates */

    if (value < this.value) {
      if (!this.left) this.left = new BinarySearchTreeNode(value);
      else this.left.insert(value);
    } else {
      if (!this.right) this.right = new BinarySearchTreeNode(value);
      else this.right.insert(value);
    }
  }

  contains(value) {
    if (value === this.value) return true;
    else if (value < this.value && this.left) return this.left.contains(value);
    else if (value > this.value && this.right) return this.right.contains(value);
    else return false;
  }

  inOrderArray(array = []) {
    if (this.left) this.left.inOrderArray(array);
    array.push(this.value);
    if (this.right) this.right.inOrderArray(array);
    return array;
  }

  * inOrderTraversal() {
    if (this.left) yield* this.left.inOrderTraversal();
    yield this.value;
    if (this.right) yield* this.right.inOrderTraversal();
  }

  preOrderArray(array = []) {
    array.push(this.value);
    if (this.left) this.left.preOrderArray(array);
    if (this.right) this.right.preOrderArray(array);
    return array;
  }

  * preOrderTraversal() {
    yield this.value;
    if (this.left) yield* this.left.preOrderTraversal();
    if (this.right) yield* this.right.preOrderTraversal();
  }

  postOrderArray(array = []) {
    if (this.left) this.left.postOrderArray(array);
    if (this.right) this.right.postOrderArray(array);
    array.push(this.value);
    return array;
  }

  * postOrderTraversal() {
    if (this.left) yield* this.left.postOrderTraversal();
    if (this.right) yield* this.right.postOrderTraversal();
    yield this.value;
  }

  dfsArray() {
    const result = [];
    const stack = new Stack();
    stack.push(this);

    while (!stack.isEmpty()) {
      const node = stack.pop();
      result.push(node.value);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return result;
  }

  * dfsTraversal() {
    const stack = new Stack();

    stack.push(this);

    while (!stack.isEmpty()) {
      const node = stack.pop();
      yield node.value;
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }

  bfsArray() {
    const result = [];
    const queue = new Queue();
    queue.enqueue(this);

    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      result.push(node.value);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
    return result;
  }

  * bfsTraversal() {
    const queue = new Queue();

    queue.enqueue(this);

    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      yield node.value;
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
  }
};


const binarySearchTree = new BinarySearchTreeNode(10);
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

console.log('*** inOrder ***')
console.log(binarySearchTree.inOrderArray());
const inOrderIterator = binarySearchTree.inOrderTraversal();
for (node of inOrderIterator) {
  console.log(node);
}

console.log('*** preOrder ***')
console.log(binarySearchTree.preOrderArray());
const preOrderIterator = binarySearchTree.preOrderTraversal();
for (node of preOrderIterator) {
  console.log(node);
}

console.log('*** postOrder ***')
console.log(binarySearchTree.postOrderArray());
const postOrderIterator = binarySearchTree.postOrderTraversal();
for (node of postOrderIterator) {
  console.log(node);
}

console.log('*** dfs ***')
// [ 10, 4, 3, 5, 30, 15, 40 ]
console.log(binarySearchTree.dfsArray());
const dfsIterator = binarySearchTree.dfsTraversal();
for (node of dfsIterator) {
  console.log(node);
}

console.log('*** bfs ***')
// [ 10, 4, 30, 3, 5, 15, 40 ]
console.log(binarySearchTree.bfsArray());
const bfsIterator = binarySearchTree.bfsTraversal();
for (node of bfsIterator) {
  console.log(node);
}
