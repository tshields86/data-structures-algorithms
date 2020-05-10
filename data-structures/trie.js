class TrieNode {
  constructor(value = '*') {
    this.value = value;
    this.children = new Map();
    this.isValidWord = false;
  }
};

class Trie extends TrieNode {
  constructor() {
    super()
  }

  addWord(word) {
    let node = this;
    for (let c of word) {
      if (node.children.has(c)) node = node.children.get(c);
      else {
        const newNode = new TrieNode(c);
        node.children.set(c, newNode);
        node = newNode;
      }
    }
    node.isValidWord = true;
  }

  checkWord(word) {
    let node = this;
    for (let c of word) {
      if (node.children.has(c)) node = node.children.get(c);
      else return false;
    }
    return node.isValidWord;
  }
};

const trie = new Trie();

trie.addWord('car');
trie.addWord('cars');
trie.addWord('card');
trie.addWord('cards');

console.log(trie.checkWord('car'));
console.log(trie.checkWord('cars'));
console.log(trie.checkWord('card'));
console.log(trie.checkWord('cards'));
console.log(trie.checkWord('cart'));
