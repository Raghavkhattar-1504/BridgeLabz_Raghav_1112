class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class CircularList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(val){
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        }
        else{
            let curr = this.head;
            while (curr.next !== this.head) {
                curr = curr.next;
            }
            curr.next = newNode;
            newNode.next = this.head;
        }
        this.size++;
    }

    prepend(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let curr = this.head;
            while (curr.next !== this.head) {
                curr = curr.next;
            }
            newNode.next = this.head;
            this.head = newNode;
            curr.next = this.head; 
        }
        this.size++;
    }

    delete(val) {
        if (!this.head) {
            console.log("List is empty!");
            return;
        }

        let curr = this.head;
        let prev = null;

        if (curr.val === val) {
            if (curr.next === this.head) {
                this.head = null;
            } else {
                while (curr.next !== this.head) {
                    curr = curr.next;
                }
                this.head = this.head.next;
                curr.next = this.head;
            }
            this.size--;
            return;
        }

        do {
            prev = curr;
            curr = curr.next;
            if (curr.val === val) {
                prev.next = curr.next;
                this.size--;
                return;
            }
        } while (curr !== this.head);

        console.log(`Node with value ${val} not found!`);
    }

    display() {
        if (!this.head) {
            console.log("List is empty!");
            return;
        }

        let curr = this.head;
        let result = [];
        do {
            result.push(curr.val);
            curr = curr.next;
        } while (curr !== this.head);

        console.log( result.join(" -> "));
    }   
}


const cll = new CircularList();

cll.append(10);
cll.append(20);
cll.append(30);
cll.append(40);

cll.display(); 

cll.prepend(5);
cll.display();

cll.delete(20);
cll.display(); 
cll.delete(5);
cll.display(); 


cll.delete(100); 
