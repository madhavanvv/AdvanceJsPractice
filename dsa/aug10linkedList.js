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
  addAtHead(d) {
    const node = new Node(d);
    let tmp = this.head;
    node.next = tmp;
    this.head = node;
  }
  display() {
    let tmp = this.head;
    while (tmp.next) {
      console.log(tmp.data);
      tmp = tmp.next;
    }
    console.log(tmp.data);
    console.log("--------------------");
  }
  reversePointerbyIterative() {
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

  f(curr) {
    //base case
    if (curr.next == null) {
      return curr;
    }

    let tail = this.f(curr.next); //recursive call

    curr.next.next = curr; //selfwork
    curr.next = null;
    return tail;
  }

  reversebyRecursive() {
    let tail = this.f(this.head);
    this.head = tail;
  }
}
const ll = new LinkedList();
ll.addAtHead(5);
ll.addAtHead(4);
ll.addAtHead(3);
ll.addAtHead(2);
ll.display();
//ll.reversePointerbyIterative();
ll.display();
ll.reversebyRecursive();
ll.display();
