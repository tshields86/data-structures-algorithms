/* Create a queue with two stacks */

const Stack = require('./stackLinkedList');

class Queue {
  constructor() {
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
  }

  enqueue(element) {
    this.enqueueStack.push(element);
  }

  dequeue() {
    this.transfer();
    return this.dequeueStack.pop();
  }

  peek() {
    this.transfer();
    return this.dequeueStack.peek();
  }

  isEmpty() {
    return this.dequeueStack.isEmpty() && this.enqueueStack.isEmpty();
  }

  transfer() {
    if (this.dequeueStack.isEmpty()) {
      while (!this.enqueueStack.isEmpty()) {
        this.dequeueStack.push(this.enqueueStack.pop());
      }
    }
  }
};

const queue = new Queue();
