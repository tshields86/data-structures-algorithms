class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
};

class StackLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    if (!this.head) this.head = new Node(value);
    else this.head = new Node(value, this.head);
  }

  remove() {
    if (!this.head) return null;

    if (!this.head.next) {
      const cur = this.head;
      this.head = null;
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

const stack = new StackLinkedList();