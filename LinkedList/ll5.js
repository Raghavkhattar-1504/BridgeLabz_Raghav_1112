import { Node, LinkedList } from "./ll1.js";

function nthfromtail(head, n) {
    if (!head) return null;

    let slow = head;
    let fast = head;
    let count = 0;
    while (fast && fast.next) {
        fast = fast.next;
        count++;
        if (count === n - 1) {
            slow = slow.next;
            break;
            }
            }
            return slow.value;
}


const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);

console.log(nthfromtail(ll.head, 2));
