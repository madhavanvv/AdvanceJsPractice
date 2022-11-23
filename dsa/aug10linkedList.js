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
    let tmp = this.head;
    while (tmp != null) {
      console.log(tmp.data);
      tmp = tmp.next;
    }
  }
  reversebyPointer() {
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
}
const ll = new linkedList();
ll.addAtHead(7);
ll.addAtHead(6);
ll.addAtHead(5);
ll.addAtHead(4);
ll.addAtHead(3);
ll.addAtHead(2);
ll.display();
ll.reversebyPointer();
console.log("---------------------------------------");
ll.display();
