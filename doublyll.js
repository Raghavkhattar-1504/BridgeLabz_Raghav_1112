class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    delete(val) {
        if (!this.head) return;

        if (this.head.val === val) {
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
            else { this.tail = null; }
            this.size--;
            return;
        }


        let curr = this.head;
        while (curr) {
            if (curr.val === val) {
                if (curr.next) curr.next.prev = curr.prev;
                if (curr.prev) curr.prev.next = curr.next;
                if (curr === this.tail) this.tail = curr.prev;
                this.size--;
                return;
            }
            curr = curr.next;
        }
    }

    printForward(){
        let curr = this.head;
        const res = [];
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }

        console.log(res.join(' <-> ')+' <-> null ' );
        
    }

    printBackward(){
        let curr = this.tail;
        let res = [];
        while (curr) {
            res.push(curr.val);
            curr = curr.prev;
        }
        console.log('null <-> '+ res.join(' <-> '));
        
    }
}

const dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.prepend(5);
dll.printForward();
dll.printBackward(); 
dll.delete(10);
dll.printForward();
dll.delete(5);
dll.printForward();  
dll.delete(20);
dll.printForward();



