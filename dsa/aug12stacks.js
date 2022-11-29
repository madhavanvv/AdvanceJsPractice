//stack
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
  }

  addAtHead(d) {
    let nn = new Node(d);
    nn.next = this.head;
    this.head = nn;
  }
  removeatHead() {
    let tmp = this.head.next;
    this.head.next = null;
    this.head = tmp;
  }
  display() {
    console.log(this.head.data);
  }
}
let ll = new Linkedlist();
ll.addAtHead(7);
ll.addAtHead(6);
ll.addAtHead(5);
ll.addAtHead(4);
ll.addAtHead(3);
ll.display();
ll.removeatHead();
ll.display();
