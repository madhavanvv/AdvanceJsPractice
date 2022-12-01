// //stack
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class Linkedlist {
//   constructor() {
//     this.head = null;
//   }

//   addAtHead(d) {
//     let nn = new Node(d);
//     nn.next = this.head;
//     this.head = nn;
//   }
//   removeatHead() {
//     let tmp = this.head.next;
//     this.head.next = null;
//     this.head = tmp;
//   }
//   display() {
//     console.log(this.head.data);
//   }
// }

// class Stack {
//   constructor() {
//     this.ll = new Linkedlist();
//   }

//   push(d) {
//     this.ll.addAtHead(d);
//   }
//   pop() {
//     this.ll.removeatHead(d);
//   }
//   top() {
//     this.ll.display();
//   }
// }

class Stack {
  #arr;
  constructor() {
    this.#arr = [];
  }
  push(d) {
    this.#arr.push(d);
  }
  pop(d) {
    this.#arr.pop(d);
  }
  top() {
    console.log(this.#arr[this.#arr.length - 1]);
  }
}

let ss = new Stack();
ss.push(5);
ss.top();
ss.push(4);
ss.push(3);
ss.push(2);
