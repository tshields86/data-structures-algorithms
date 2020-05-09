class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
};

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  addFirst(value) {
    if (!this.head) this.head = this.tail = new Node(value);
    else this.head = this.head.prev = new Node(value, this.head);
  }

  addLast(value) {
    if (!this.head) this.head = this.tail = new Node(value);
    else this.tail = this.tail.next = new Node(value, null, this.tail);
  }

  removeFirst() {
    if (!this.head) return null;

    if (!this.head.next) {
      const cur = this.head;
      this.head = this.tail = null;
      return cur;
    }

    const cur = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    return cur;
  }

  removeLast() {
    if (!this.tail) return null;

    if (!this.tail.prev) {
      const cur = this.tail;
      this.head = this.tail = null;
      return cur;
    }

    let cur = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    return cur;
  }

  peekFirst() {
    return this.head;
  }

  peekLast() {
    return this.tail;
  }
};

const doublyLinkedList = new DoublyLinkedList();
