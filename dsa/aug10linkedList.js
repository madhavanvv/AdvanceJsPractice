console.log("linked-list");
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  dispalHead() {
    console.log("------------head----------");
    console.log(this.head.data);
    console.log("------------head----------");
  }
  addAtHead(d) {
    let newNode = new Node(d);
    let tmp = this.head;
    newNode.next = tmp;
    this.head = newNode;
  }
  removeAtHead() {
    let tmp = this.head.next;
    this.head.next = null;
    this.head = tmp;
  }
  addAtTail(d) {
    let tmp = this.head;
    while (tmp.next) {
      tmp = tmp.next;
    }
    let node = new Node(d);
    console.log(tmp);
    tmp.next = node;
  }
  removeatTail() {
    let tmp = this.head;
    while (tmp.next.next) {
      tmp = tmp.next;
    }
    tmp.next = null;
  }
  display() {
    let tmp = this.head;
    while (tmp) {
      console.log(tmp.data);
      tmp = tmp.next;
    }
    console.log("---------");
  }
}
const ll = new LinkedList();
ll.addAtHead(5);
ll.addAtHead(4);
ll.addAtHead(3);
ll.addAtHead(2);
ll.display();
ll.dispalHead();
ll.addAtTail(77);
ll.display();
ll.removeAtHead();
ll.display();
ll.removeatTail();
ll.display();
