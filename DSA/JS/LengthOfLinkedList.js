class Node { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null
    } 
} 


// linkedlist class 
class LinkedList { 
    constructor() 
    { 
        this.head = null;
    } 
  
    // functions to be implemented 
    add(element) { 
        // creates a new node 
        var node = new Node(element);
  
        // to store current node 
        var current; 
  
        // if list is Empty add the 
        // element and make it head 
        if (this.head == null) 
            this.head = node; 
        else { 
            current = this.head; 
  
            // iterate to the end of the 
            // list 
            while (current.next) { 
                current = current.next; 
            } 
  
            // add node 
            current.next = node; 
        }
    }
    // insertAt(element, location) 
    // removeFrom(location) 
    // removeElement(element) 
  
    // Helper Methods 
    isEmpty() {
        return this.head == null; 
    } 
    // size_Of_List 
    
    // prints the list items 
    printList() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.element + " "; 
            curr = curr.next; 
        } 
        console.log(str); 
    } 

    //get count 
    getCount() {
		var temp = this.head;
		let count = 0;
		while (temp != null) {
			count++;
			temp = temp.next;
		}
		console.log('length of LinkedList : ', count);
	}

} 



//linkedlist driver code
let inputList = new LinkedList();

console.log(inputList.isEmpty());

inputList.add(2);
inputList.add(3);
inputList.add(4);
inputList.add(5);
inputList.add(6);

inputList.printList();

inputList.getCount();