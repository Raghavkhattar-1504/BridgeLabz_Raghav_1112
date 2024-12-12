import { distance } from "./41_distance.js";

let x1 = 24;
let x2 = 41;
let y1 = 14;
let y2 = 24;
let r1 = 5;
let r2 = 9;

const dis = distance(x1,x2,y1,y2).toFixed(2);
const sum = r1+r2;
console.log(dis<sum);

