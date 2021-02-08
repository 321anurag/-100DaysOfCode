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
        var node = new Node(data);
        var current;
        if(this.head == null){
            this.head = node;
        }
        else {
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
    }

    printList(){
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.data + " "; 
            curr = curr.next; 
        } 
        console.log(str); 
    }

    detectLoop(){
        //TODO
    }
}



//linkedlist driver code
let inputList = new LinkedList();


inputList.add(2);
inputList.add(3);
inputList.add(4);
inputList.add(5);
inputList.add(6);

inputList.printList();
