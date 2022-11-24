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
  // reversebyPointer() {
  //   let prev = null;
  //   let curr = this.head;

  //   while (curr != null) {
  //     let tmp = curr.next;

  //     curr.next = prev;

  //     prev = curr;
  //     curr = tmp;
  //   }
  //   this.head = prev;
  // }

  f(curr) {
    //base case
    if (curr.next == null) {
      return curr;
    }

    let tail = this.f(curr.next);

    curr.next.next = curr;
    curr.next = null;
    return tail;
  }

  reversepointerLL() {
    let tail = this.f(this.head);
    this.head = tail;
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
ll.reversepointerLL();
console.log("---------------------------------------");
ll.display();
