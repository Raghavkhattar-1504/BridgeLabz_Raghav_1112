let str  = '1,42,64,4,46,67';
const arr = str.split(",");
const sum = arr.reduce((acc, ind) => acc+ parseInt(ind), 0);
console.log(sum);
