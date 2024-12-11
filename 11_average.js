const arr = [12, 23,34, 35, 44];
const avg = arr.reduce((acc, ind) => (acc+ind), 0);
console.log(avg/arr.length);
