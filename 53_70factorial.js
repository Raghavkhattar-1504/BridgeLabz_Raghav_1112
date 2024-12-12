import { fact } from "./6_factorial.js";
let num = 70;
let dp = Array(num+1).fill(-1);
console.log(fact(70, dp));

