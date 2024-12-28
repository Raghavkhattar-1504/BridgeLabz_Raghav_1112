import { Node, LinkedList } from "./ll1.js";

function cycle(ll) {
    let slow = ll.head;
    let fast = ll.head;
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
ll.tail.next = ll.head;
console.log(cycle(ll));


