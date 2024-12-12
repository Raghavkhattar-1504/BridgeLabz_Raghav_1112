import { nfib } from "./15_nthfibonacci.js";
let dp = Array(501).fill(-1);

console.log(nfib(500, dp));

