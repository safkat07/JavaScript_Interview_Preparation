class ListNode {
    constructor(data) {
        this.data = data; 
        this.next = null; 
    }
}

class LinkedList {
    constructor() {
        this.head = null; 
    }

    add(value) {
        let newNode = new ListNode(value); 
        if (!this.head) { 
            this.head = newNode; 
        } else {
            let current = this.head; 
            while (current.next) { 
                current = current.next; 
            }
            current.next = newNode; 
        }
    }
}

let addElement1 = new LinkedList(); 
let addElement2 = new LinkedList(); 
addElement1.add(1);
addElement1.add(2);
addElement1.add(4);
addElement2.add(1);
addElement2.add(3);
addElement2.add(4);


const displayLinkedList = (list) => {
    let current = list.head; 
    while (current) {
        console.log(current.data); 
        current = current.next; 
    }
}

displayLinkedList(addElement1); 
displayLinkedList(addElement2);

const linkedListToArray = (list) => {
    const arr = []
    let current = list.head
    while (current) {
        arr.push(current.data)
        current = current.next
    }
    return arr
}

const listArray1 = linkedListToArray(addElement1)
const listArray2 = linkedListToArray(addElement2)
console.log(listArray1);
console.log(listArray2);
const arrayConcat = listArray1.concat(listArray2)

console.log(arrayConcat);

const sortArrya = arrayConcat.sort()
console.log(sortArrya);





