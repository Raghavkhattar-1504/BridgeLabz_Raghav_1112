import { prime } from "./16_prime.js";

function firstPprime(p, n) {
    let cnt = 0;
    let num = n + 1;
    let arr = [];
    while (cnt <= p) {
        if (prime(num)) {
            arr.push(num);
            cnt++;
        }
        num++;
    }
    return arr;
}

console.log(firstPprime(10, 13));
