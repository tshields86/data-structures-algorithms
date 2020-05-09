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
      let cur = this.head;
      let prev = this.head;
      while (cur.next) {
        prev = cur;
        cur = cur.next;
      }
      this.tail = prev;
      this.tail.next = null;
    }

    return value;
  }

  peekFirst() {
    return this.head;
  }

  peekLast() {
    return this.tail;
  }

  isEmpty() {
    return this.head === null;
  }
};

const singlyLinkedList = new SinglyLinkedList();
