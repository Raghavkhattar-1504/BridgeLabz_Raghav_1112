import { Node, LinkedList } from "./ll1.js";

const merged = new LinkedList();
function merge(ll1, ll2) {
    while (ll1 && ll2) {

        if (ll1.value <=  ll2.value) {
            merged.add(ll1.value);
            ll1 = ll1.next;
        }
        else{
            merged.add(ll2.value);
            ll2 = ll2.next;
        }
    }

    while (ll1) {
        merged.add(ll1.value);
        ll1 = ll1.next;
    }
    while (ll2) {
        merged.add(ll2.value);
        ll2 = ll2.next;
    }
}

    const ll1 = new LinkedList();
    const ll2 = new LinkedList();

    ll1.add(1);
    ll1.add(3);
    ll1.add(5);
    ll1.add(7);
    ll2.add(2);
    ll2.add(4);
    ll2.add(6);

    merge(ll1.head, ll2.head);
    merged.print();

