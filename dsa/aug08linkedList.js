console.log("llist-practice");

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
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }
  display() {
    console.log(this.head);
  }
  removeAtHead() {
    let tmp = this.head.next;
    this.head.next = null;
    this.head = tmp;
  }
  printList() {
    let curr = this.head;
    while (curr.next) {
      console.log(curr.data);
      curr = curr.next;
    }
    console.log(curr.data);
    console.log("------------------");
  }

  addAtTail(data) {
    let node = new Node(data);
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
  }
  removeAtTail() {
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
  }
  addAtPos(x, d) {
    let val = this.head;
    for (let i = 0; i < x; i++) {
      val = val.next;
    }
    let tmp = val.next;
    let node = new Node(d);
    node.next = tmp;
    val.next = node;
  }

  removeAtPos(y) {
    let val = this.head;
    for (let i = 0; i < y - 1; i++) {
      val = val.next;
    }

    let tmp = val.next.next;
    val.next.next = null;
    val.next = tmp;
  }
}

const ll = new LinkedList();
ll.addAtHead(7);
ll.addAtHead(6);
ll.addAtHead(5);
ll.addAtHead(4);
ll.addAtHead(3);

ll.printList();
ll.addAtTail(777);
ll.printList();
ll.removeAtTail();
ll.printList();
ll.addAtPos(1, 97);
ll.printList();
ll.removeAtPos(4);
ll.printList();
