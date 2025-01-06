import { Node, LinkedList } from "./ll1.js";

function isPalindrome(head) {
    let fast = head, slow = head, stack = [];
    while (fast && fast.next) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    if (fast) slow = slow.next;
    while (slow) {
        if (slow.val !== stack.pop()) return false;
        slow = slow.next;
    }
    return true;
}

const ll1 = new LinkedList();
ll1.add(1);
ll1.add(2);
ll1.add(3);
ll1.add(2);
ll1.add(1);
console.log(isPalindrome(ll1.head)); 