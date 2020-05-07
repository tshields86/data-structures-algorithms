/* Check for balanced parentheses in an expression */
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

const TOKENS = [['(', ')'], ['{', '}'], ['[', ']']];

const isOpenSymbol = char => {
  for (let [open] of TOKENS) {
    if (char === open) return true;
  }
  return false;
}

const matches = (openChar, closeChar) => {
  for (let [openSymbol, closeSymbol] of TOKENS) {
    if (openChar === openSymbol && closeChar === closeSymbol) return true;
  }
  return false;
}

const isBalanced = expression => {
  const stack = new Stack();
  for (char of expression) {
    if (isOpenSymbol(char)) stack.push(char);
    else if (stack.isEmpty() || !matches(stack.pop(), char)) return false;
  }
  return true;
};

console.log(isBalanced('{()[{({})[]()}]}([])'));