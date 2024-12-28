export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

 export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
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

    size() {
        return this.size;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        let next = null;

        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

}

// const ll = new LinkedList();
// ll.add(1);
// ll.add(2);
// ll.add(3);

// ll.print();
// ll.reverse();
// ll.print();





