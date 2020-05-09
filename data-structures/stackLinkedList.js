class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
};

class StackLinkedList {
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

const stack = new StackLinkedList();
