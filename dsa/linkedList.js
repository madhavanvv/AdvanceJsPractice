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
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  removeAtHead() {
    let tmp = this.head.next;
    this.head.next = null;
    this.head = tmp;
  }

  printData() {
    //console.log(this.head.data);
    let tmp = this.head;
    while (tmp) {
      //console.log("while-loop");
      console.log(tmp.data);
      tmp = tmp.next;
    }
  }

  addAtTail(data) {
    let tmp = this.head;
    while (tmp.next) {
      tmp = tmp.next;
    }
    let newNode = new Node(data);
    tmp.next = newNode;
    console.log(tmp);
  }

  removeAtTail() {
    let tmp = this.head;
    while (tmp.next.next) {
      tmp = tmp.next;
    }
    tmp.next = null;
    console.log(tmp);
  }

  addAtPosition(pos, data) {
    let tmp = this.head;
    for (let i = 0; i < pos; i++) {
      tmp = tmp.next;
    }
    console.log(tmp);
    let newNode = new Node(data);
    newNode.next = tmp.next;
    tmp.next = newNode;
  }

  removeAtPosition(pos) {
    let tmp = this.head;
    for (let i = 0; i < pos - 1; i++) {
      tmp = tmp.next;
    }
    console.log(tmp);
    let remain = tmp.next.next;
    tmp.next.next = null;
    tmp.next = remain;
  }
}

let ll = new LinkedList();
ll.addAtHead(11);
ll.addAtHead(10);
ll.addAtHead(9);
ll.addAtHead(8);
ll.addAtHead(7);
ll.addAtHead(6);
ll.addAtHead(5);
ll.addAtHead(4);
ll.addAtHead(3);

// //ll.removeAtHead();

ll.addAtTail(17);
console.log("--------------------------");
ll.removeAtTail();
ll.addAtPosition(3, 57);
ll.printData();
ll.removeAtPosition(7);
ll.printData();
