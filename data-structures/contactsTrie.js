class ContactCharNode {
  constructor(char = '*') {
    this.char = char;
    this.children = new Map();
    this.size = 0;
    this.contact = [];
  }
};

class ContactList extends ContactCharNode {
  constructor() {
    super();
  }

  addContact(contact) {
    let node = this;
    for (let char of contact) {
      if (!node.children.has(char)) {
        node.children.set(char, new ContactCharNode(char));
      }
      node = node.children.get(char);
      node.size++;
    }
    node.contact.push(contact);
  }

  findSize(string) {
    let node = this;
    for (let char of string) {
      if (node.children.has(char)) node = node.children.get(char);
      else return 0;
    }
    return node.size;
  }
};

const contactList = new ContactList();

contactList.addContact('john');
contactList.addContact('john');
contactList.addContact('joe');

console.log(contactList.findSize('jo'))
console.log(contactList.findSize('john'))
console.log(contactList.findSize('jot'))