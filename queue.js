class Queue {
  constructor() {
    this.data = [];
    this.rear = 0;
  }

  enqueue(element) {
    this.data[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) return;
    this.rear--;
    return this.data.shift();
  }

  peek() {
    if (!this.isEmpty()) return this.data[0];
  }

  isEmpty() {
    return this.rear === 0;
  }
}

const queue = new Queue();