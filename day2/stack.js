//후입선출
//Array로 구현시, push, pop은 이미 구현되어 있음

//Linked List로 구현
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size--;
    return value;
  }

  size() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
stack.push(4);
console.log(stack.pop());
console.log(stack.pop());
