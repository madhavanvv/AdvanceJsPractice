class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }
  addAtHead(data) {
    let tmp = this.head;
    let newNode = new Node(data);
    newNode.next = tmp;
    this.head = newNode;
  }
  display() {
    console.log(this.head);
  }
  reversebyPointer() {
    let prev = this.head;
    let next = prev.next;

    prev.next = null;

    console.log(prev);
    console.log(next);
  }
}
const ll = new linkedList();
ll.addAtHead(7);
ll.addAtHead(6);
ll.addAtHead(5);
ll.addAtHead(4);
ll.addAtHead(3);
ll.addAtHead(2);
//ll.display();
ll.reversebyPointer();
