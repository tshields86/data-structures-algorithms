class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
};

class SinglyLinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  addFirst(value) {
    if (!this.head) this.head = this.tail = new Node(value);
    else this.head = new Node(value, this.head);
  }

  addLast(value) {
    if (!this.head) this.head = this.tail = new Node(value);
    else this.tail = this.tail.next = new Node(value);
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
    return cur;
  }

  removeLast() {
    if (!this.head) return null;

    if (!this.head.next) {
      const cur = this.head;
      this.head = this.tail = null;
      return cur;
    }

    let cur = this.head;
    let prev = this.head;
    while (cur.next !== null) {
      prev = cur;
      cur = cur.next;
    }

    prev.next = null;
    this.tail = prev;
    return cur;
  }

  peekFirst() {
    return this.head;
  }

  peekLast() {
    return this.tail;
  }
};

const singlyLinkedList = new SinglyLinkedList();
