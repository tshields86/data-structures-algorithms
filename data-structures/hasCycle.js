/* Detect a cycle in a linked list. */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
};

/* Create a cycle to test */
const cycle = new Node(1);
cycle.next = new Node(2);
cycle.next.next = new Node(3);
cycle.next.next.next = new Node(4);
cycle.next.next.next.next = new Node(5);
cycle.next.next.next.next.next = cycle.next.next;

const hasCycleSet = head => {
  if (!head) return false;

  const set = new Set();
  let cur = head;
  while (cur.next) {
    if (set.has(cur)) return true;
    else set.add(cur);
    cur = cur.next;
  }
  return false;
};

console.log(hasCycleSet(cycle));

const hasCycleTwoPointers = head => {
  if (!head) return false;

  let pointA = head;
  let pointB = head.next;
  while (pointA && pointB && pointB.next) {
    if (pointA === pointB) return true;
    pointA = pointA.next;
    pointB = pointB.next.next;
  }
  return false;
}

console.log(hasCycleTwoPointers(cycle));
