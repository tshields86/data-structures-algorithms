class MaxHeap {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1; }
  getRightChildIndex(parentIndex) { return 2 * parentIndex + 2; }
  getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2); }

  hasLeftChild(index) { return this.getLeftChildIndex(index) < this.size; }
  hasRightChild(index) { return this.getRightChildIndex(index) < this.size; }
  hasParent(index) { return this.getParentIndex(index) >= 0; }

  leftChild(index) { return this.items[this.getLeftChildIndex(index)]; }
  rightChild(index) { return this.items[this.getRightChildIndex(index)]; }
  parent(index) { return this.items[this.getParentIndex(index)]; }

  swap(indexOne, indexTwo) {
    const temp = this.items[indexOne];
    this.items[indexOne] = this.items[indexTwo];
    this.items[indexTwo] = temp;
  }

  peek() {
    if (!this.size) return null;
    return this.items[0];
  }

  poll() {
    if (!this.size) return null;
    this.swap(0, this.size - 1);
    const item = this.items.pop();
    this.size--;
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.items[this.size] = item;
    this.size++;
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.size - 1;
    while (this.hasParent(index) && this.parent(index) < this.items[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.items[index] > this.items[smallerChildIndex]) break;

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
};

module.exports = MaxHeap;
