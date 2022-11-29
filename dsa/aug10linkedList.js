class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addAtHead(data) {
    let nn = new Node(data);
    nn.next = this.head;
    this.head = nn;
    //console.log(nn);
  }

  removeAtHead() {
    let tmp = this.head.next;
    this.head.next = null;
    this.head = tmp;
  }

  displayData() {
    let curr = this.head;
    while (curr != null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
  addAtTail(data) {
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }
    console.log(curr);
    let nn = new Node(data);
    curr.next = nn;
  }
  removeAtTail() {
    let curr = this.head;
    while (curr.next.next != null) {
      curr = curr.next;
    }
    curr.next = null;
  }
  addAtPosition(pos, data) {
    let curr = this.head;
    let x = 1;
    while (x <= pos - 1) {
      x++;
      curr = curr.next;
    }
    console.log(curr.data);
    let tmp = curr.next;

    let nn = new Node(data);
    nn.next = tmp;
    curr.next = nn;
  }
  reverseLLIterPointer() {
    let prev = null;
    let curr = this.head;

    while (curr != null) {
      let tmp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tmp;
    }
    this.head = prev;
  }

  reverse(curr) {
    //basecase
    if (curr.next == null) {
      return curr;
    }
    //recursive
    let tail = this.reverse(curr.next);

    //selfwork

    curr.next.next = curr;
    curr.next = null;
    return tail;
  }
  reverseLLrecursive() {
    let tail = this.reverse(this.head);
    this.head = tail;
  }
}
let ll = new LinkedList();
ll.addAtHead(5);
ll.addAtHead(4);
ll.addAtHead(3);
ll.addAtHead(2);
ll.displayData();
console.log("------------------------");
//ll.reverseLLIterPointer();
ll.reverseLLrecursive();
ll.displayData();
