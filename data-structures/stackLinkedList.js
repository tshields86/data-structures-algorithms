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

  peek() {
    return this.top ? this.top.value: null;
  }

  isEmpty() {
    return this.top === null;
  }
};

module.exports = Stack;