import { Node, LinkedList } from "./ll1.js";

function listToNum(head) {
    let num = 0;
    let i = 0;
    while (head) {
        num += head.value * Math.pow(10, i);
        i++;
        head = head.next;
    }
    return num;
}

function numToList(num) {
    const list = new LinkedList();
    if(num===0){
        list.add(0);
        return list;
    }

    while (num > 0)  {
        list.add(num%10);
        num = Math.floor(num/10);
    }
    return list;
}

const ll1 = new LinkedList();
const ll2 = new LinkedList();

ll1.add(1);
ll1.add(2);
ll1.add(3);
ll2.add(1);
ll2.add(2);
ll2.add(3);

let sum = listToNum(ll1.head) + listToNum(ll2.head);

const ll3 = numToList(sum);
ll3.print();


