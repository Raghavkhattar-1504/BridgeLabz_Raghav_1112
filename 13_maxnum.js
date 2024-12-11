const arr = [13,55,36,76,766,63];
const max = arr.reduce((acc, ind) => (acc = Math.max(acc,ind)), 0);
console.log(max);
