class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let curr = this.head;
            while (curr.next !== null) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size++;
    }

    prepend(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    delete(val) {
        if (!this.head) return;

        if (this.head.value === val) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let curr = this.head;
        while (curr.next.value != val) {
            curr = curr.next;
        }

        curr.next = curr.next.next;
        this.size--;
    }

    print() {
        let curr = this.head;
        const res = [];
        while (curr) {
            res.push(curr.value);
            curr = curr.next;
        }
        console.log(res.join('->') + ' ->null');
    }

}

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.print();
list.delete(10);
list.print();


