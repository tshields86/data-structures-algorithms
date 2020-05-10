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
    const array = [];
    const stack = new Stack();
    stack.push(this);

    while (!stack.isEmpty()) {
      const node = stack.pop();
      array.push(node.value);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return array;
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
    const array = [];
    const queue = new Queue();
    queue.enqueue(this);

    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      array.push(node.value);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
    return array;
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
    if (!this.top) this.top = new Node(value);
    else this.top = new Node(value, this.top);
  }

  pop() {
    if (this.isEmpty()) return null;

    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.top === null;
  }
};

class Queue {
  constructor() {
    this.head = this.tail = null;
  }

  enqueue(value) {
    if (!this.head) this.head = this.tail = new Node(value);
    else this.tail = this.tail.next = new Node(value);
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return value;
  }

  peek() {
    return this.head;
  }

  isEmpty() {
    return this.head === null;
  }
};

class BinarySearchTree extends BinarySearchTreeNode {};

const binarySearchTree = new BinarySearchTree(10);
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
const inOrderIterator = binarySearchTree.inOrderTraversal()
for (node of inOrderIterator) {
  console.log(node);
}

console.log('*** preOrder ***')
console.log(binarySearchTree.preOrderArray());
const preOrderIterator = binarySearchTree.preOrderTraversal()
for (node of preOrderIterator) {
  console.log(node);
}

console.log('*** dfs ***')
// 10 4 3 5 30 15 40
console.log(binarySearchTree.dfsArray());
const dfsIterator = binarySearchTree.dfsTraversal()
for (node of dfsIterator) {
  console.log(node);
}

console.log('*** bfs ***')
// 10 4 30 3 5 15 40
console.log(binarySearchTree.bfsArray());
const bfsIterator = binarySearchTree.bfsTraversal()
for (node of bfsIterator) {
  console.log(node);
}
