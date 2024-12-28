import { Node, LinkedList } from "./ll1.js";

function middle(head) {
    if(!head)return null;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.value;
}

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);

console.log(middle(ll.head));
