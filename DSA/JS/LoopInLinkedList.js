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
        var slow_p = this.head;
        var fast_p = this.head;
        let loop = false;
        while(slow_p != null && fast_p != null && fast_p.next!=null){
            slow_p = slow_p.next;
            fast_p = fast_p.next.next;
            if(slow_p == fast_p){
                loop = true;
                console.log('Loop detected!');
                break;
            }

        }
        if (!loop) {
            console.log('No loop found!')
        }

    }
}



//linkedlist driver code
let inputList = new LinkedList();


inputList.add(2);
inputList.add(3);
inputList.add(4);

//try by commenting both or anyone!
inputList.head.next.next.next = inputList.head;
//inputList.head.next.next.next = inputList.head.next;

//can not print using this method, in case of circular linked list!
//inputList.printList();

inputList.detectLoop();
