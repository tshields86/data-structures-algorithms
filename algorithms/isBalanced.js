/* Check for balanced parentheses in an expression */
const Stack = require('../data-structures/stackLinkedList');

const TOKEN_MAP = new Map([['(', ')'], ['{', '}'], ['[', ']']]);

const isOpenSymbol = char => TOKEN_MAP.has(char);

const matches = (openChar, closeChar) => TOKEN_MAP.get(openChar) === closeChar;

const isBalanced = expression => {
  const stack = new Stack();
  for (char of expression) {
    if (isOpenSymbol(char)) stack.push(char);
    else if (stack.isEmpty() || !matches(stack.pop(), char)) return false;
  }
  return true;
};

console.log(isBalanced('{()[{({})[]()}]}([])'));