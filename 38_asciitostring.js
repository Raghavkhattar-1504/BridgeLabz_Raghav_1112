let arr = [23, 53,46,67,85,42,85];
const str = arr.reduce((acc, ind) => acc+String.fromCharCode(ind), "");
console.log(str);
