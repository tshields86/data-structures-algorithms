class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
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

const queue = new Queue();
