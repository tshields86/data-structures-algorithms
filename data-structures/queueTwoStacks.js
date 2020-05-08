/* Create a queue with two stacks */

class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(element) {
    this.data[this.top] = element;
    this.top++;
  }

  pop() {
    if (this.isEmpty()) return;
    this.top--;
    return this.data.pop();
  }

  peek() {
    return this.data[this.top - 1];
  }

  isEmpty() {
    return this.top === 0;
  }
}

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
