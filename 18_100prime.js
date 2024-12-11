import {prime} from "./16_prime.js";

let cnt = 0;
let int = 2;
let arr = [];
while (cnt <= 100) {
    if (prime(int)) {
        arr.push(int);
        cnt++;
    }
    int++;
}
console.log(arr);
