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

  add(data) {
    let node = new Node(data);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.data + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

var addTwoNumbers = (l1, l2) => {
  let top = l1.head;
  let bot = l2.head;
  while (top != null && bot != null) {
    if (top.data + bot.data >= 10) {
      let tmp = (top.data + bot.data) % 10;
      top.data = tmp;
      if (top.next == null ) {
        L1.add(0);
        top.next.data += 1;
      } 
      else if(top.next.data == 9){
        while (top.next && ) {
            tmpcarry = 1;



        }
      }
      else if(top.next.data < 9){
        top.next.data += 1;
      }
    } 
    else {
      let tmpNoCarry = top.data + bot.data;
      top.data = tmpNoCarry;
    }
    top = top.next;
    bot = bot.next;
  }
  L1.printList();
};

//driver code
let L1 = new LinkedList();
let L2 = new LinkedList();

L1.add(9);
L1.add(9);
L1.add(9);
L1.add(9);
L1.add(9);
L1.add(9);
L1.add(9);

L2.add(9);
L2.add(9);
L2.add(9);
L2.add(9);

L1.printList();
L2.printList();
addTwoNumbers(L1, L2);
