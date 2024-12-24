class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        else{
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
        this.size++;
        return this;
    }

    delete(ind) {
        if (ind < 0 || ind >= this.size) {
            return this;
        }
        if (ind === 0) {
            this.head = this.head.next;
            this.size--;
            return this;
        }
        let current = this.head;
        for (let i = 0; i < ind - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
        this.size--;
        return this;
    }

    getSize() {
        return this.size;
    }


    print(){
        let current = this.head;
        while (current) {
            console.log(current.val + " ");
            current = current.next;
        }
    }
}

function merge(ll1, ll2) {
    const ll3 = new LinkedList();
    let current1 = ll1.head;
    while (current1) {
        let current2 = ll2.head;
        let sum = current1.val;
        let prev2 = null;

        // let i = 1;

        while (current2) {
            if (current1.val === current2.val) {
                sum += current2.val;
            
                if (prev2) {
                    prev2.next = current2.next;
                } else{
                    ll2.head = current2.next;
                }
                ll2.size--;
            } else{
                prev2 = current2;
            }
            current2 = current2.next;
        }

        


        ll3.append(sum);
        current1 = current1.next;
    }


    // ll2.print();


    let temp = ll2.head;
    
        while (temp) {
            ll3.append(temp.val);
            temp = temp.next;
        }
    
    return ll3;

}

function sort(ll) {
    if (ll.getSize() === 1) {
        return ll;
    }
    let swapped;
    do {
    swapped = false;
    let current = ll.head;
    while (current.next){
        if (current.val > current.next.val) {
            let temp = current.val;
            current.val = current.next.val;
            current.next.val = temp;
            swapped = true;
        }
        current = current.next;
    }
    } while (swapped);
}



let ll1 = new LinkedList();
ll1.append(4);
ll1.append(5);
ll1.append(6);
ll1.append(7);
ll1.append(8);
ll1.append(9);

let ll2 = new LinkedList();
ll2.append(5);
ll2.append(4);
ll2.append(9);
ll2.append(11);
ll2.append(13);
ll2.append(17);
ll2.append(7);
ll2.append(4);
ll2.append(4);


let ans = merge(ll1, ll2);
sort(ans);
ans.print();






