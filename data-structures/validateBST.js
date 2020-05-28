/* Validate that the tree is a binary search tree */

class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
};

const validateBST = (node, min = -Infinity, max = Infinity) => {
  if (!node) return true;
  if (node.value < min || node.value > max) return false;
  return validateBST(node.left, min, node.value) && validateBST(node.right, node.value, max);
};
