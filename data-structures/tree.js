class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  add(...values) {
    this.children.push(...values);
  }
};

const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

abe.add(homer);
homer.add(bart, lisa, maggie);

console.log(JSON.stringify(abe))
