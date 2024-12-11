import {prime} from "./16_prime.js";

let cnt = 0;
let int = 2;
let arr = [];
while (cnt < 100) {
    if (prime(int)) {
        arr.push(int);
        cnt++;
    }
    int++;
}
for (let i = 0; i < arr.length-1; i++) {
    console.log(arr[i+1]-arr[i]);
}