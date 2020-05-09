class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (!this.left) this.left = new Node(value);
      else this.left.insert(value);
    } else {
      if (!this.right) this.right = new Node(value);
      else this.right.insert(value);
    }
  }

  contains(value) {
    if (value === this.value) return true;
    else if (value <= this.value && this.left) return this.left.contains(value); 
    else if (value > this.value && this.right) return this.right.contains(value);
    else return false;
  }

  inOrder(array = []) {
    if (this.left) this.left.inOrder(array);
    array.push(this.value);
    if (this.right) this.right.inOrder(array);
    return array;
  }

  preOrder(array = []) {
    array.push(this.value);
    if (this.left) this.left.preOrder(array);
    if (this.right) this.right.preOrder(array);
    return array;
  }

  postOrder(array = []) {
    if (this.left) this.left.postOrder(array);
    if (this.right) this.right.postOrder(array);
    array.push(this.value);
    return array;
  }
};

class Tree extends Node {};
