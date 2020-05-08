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
    if (!this.head) return null;

    if (!this.head.next) {
      const cur = this.head;
      this.head = this.tail = null;
      return cur;
    }

    const cur = this.head;
    this.head = this.head.next;
    return cur;
  }

  peek() {
    return this.head;
  }

  isEmpty() {
    return this.head === null;
  }
};

const queue = new Queue();