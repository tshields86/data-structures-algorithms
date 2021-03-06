class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class Queue {
  constructor() {
    this.head = this.tail = null;
  }

  enqueue(value) {
    if (this.isEmpty()) this.head = this.tail = new Node(value);
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
    return this.head ? this.head.value: null;
  }

  isEmpty() {
    return this.head === null;
  }
};

module.exports = Queue;