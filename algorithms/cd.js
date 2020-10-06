/*
| cwd      | cd (arg)       | output
| -------- | -------------- | ----
| /        | a              | /a
| /b       | /c             | /c
| /foo/bar | ../../../../.. | /
| /foo/bar | ../../../../a  | /a
| /x/y     | ../p/../q      | /x/q
| /x/y     | /p/./q         | /p/q
| /x/y     | p/./q          | /x/y/p/q
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
};

class Stack {
  constructor(iterable = null) {
    this.top = null;
    this.size = 0;

    if (iterable) Array.from(iterable, value => this.push(value));
  }

  push(value) {
    if (this.isEmpty()) this.top = new Node(value);
    else this.top = new Node(value, this.top);
    return ++this.size;
  }

  pop() {
    if (this.isEmpty()) return;
    const oldTop = this.top;
    this.top = this.top.next;
    oldTop.next = null;
    this.size--;
    return oldTop.value;
  }

  isEmpty() {
    return this.size === 0;
  }
};

class FileSystem extends Stack {
  constructor(cwd) {
    super(cwd
      .split('/')
      .filter(chunk => chunk !== '')
    );
  }

  cd(arg) {
    const chunks = arg.split('/');
    for (let chunk of chunks) {
      if (chunk === '') this.clear();
      else if (chunk === '.') {}
      else if (chunk === '..') this.pop();
      else this.push(chunk);
    }
  }

  clear() {
    if (this.isEmpty()) return;
    this.top = null;
    this.size = 0;
  }

  *[Symbol.iterator]() {
    let current = this.top;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }

  pwd() {
    return `/${[...this].reverse().join('/')}`;
  }
}

const cd = (cwd, arg) => {
  const fileSystem = new FileSystem(cwd);
  fileSystem.cd(arg);
  return fileSystem.pwd();
};

console.log(cd('/', 'a'));
console.log(cd('/b', '/c'));
console.log(cd('/foo/bar', '../../../../..'));
console.log(cd('/foo/bar', '../../../../a'));
console.log(cd('/x/y', '../p/../q'));
console.log(cd('/x/y', '/p/./q'));
console.log(cd('/x/y', 'p/./q '));
