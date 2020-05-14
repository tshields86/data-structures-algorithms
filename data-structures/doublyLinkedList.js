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
    if (this.isEmpty()) return null;

    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return value;
  }

  removeLast() {
    if (this.isEmpty()) return null;

    const value = this.tail.value;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    return value;
  }

  peekFirst() {
    return this.head ? this.head.value : null;
  }

  peekLast() {
    return this.tail ? this.tail.value : null;
  }

  isEmpty() {
    return this.head === null;
  }
};

const doublyLinkedList = new DoublyLinkedList();
