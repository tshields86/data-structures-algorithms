/* Validate that the tree is a binary search tree */

class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
};

const validateBST = (root, min = -Infinity, max = Infinity) => {
  if (!root) return true;
  if (root.value < min || root.value > max) return false;
  return validateBST(root.left, min, root.value) && validateBST(root.right, root.value, max);
};
