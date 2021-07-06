class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    add(data){
        let node = new Node(data);
        let current;
        if(this.head == null){
            this.head = node;
        }
        else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
    }

    printList(){
        let curr = this.head;
        let str = "";
        while(curr){
            str += curr.data + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    nthElementFromEnd(){
        
    }
}


//driver code
let linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);


linkedList.printList();