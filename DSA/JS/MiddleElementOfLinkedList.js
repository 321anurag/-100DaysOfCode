class Node{
    constructor (data){
        this.data =data;
        this.next =null;
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
        else {
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
    }

    printList(){
        let curr = this.head;
        let str ='';
        while(curr){
            str += curr.data + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    middleElement(){
        let slop_p = this.head;
        let fast_p = this.head;
        if(this.head != null){
            while(fast_p != null && fast_p.next != null){
                fast_p = fast_p.next.next;
                slop_p = slop_p.next;
            }
            console.log(slop_p.data);
        }
    }
}

//driver code
let linkedList = new LinkedList;

linkedList.add(1);

linkedList.printList();
linkedList.middleElement();
linkedList.add(2);

linkedList.printList();
linkedList.middleElement();
linkedList.add(3);

linkedList.printList();
linkedList.middleElement();
linkedList.add(4);

linkedList.printList();
linkedList.middleElement();
linkedList.add(5);

linkedList.printList();
linkedList.middleElement();