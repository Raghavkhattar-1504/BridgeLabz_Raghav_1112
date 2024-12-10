const arr = [1,2,3,5,6];
const slice = arr.slice();
console.log(slice);
const spread = [...arr];
console.log(spread);


const arr1 = [1,2,3,4,5];
const arr2= [ one, two , ,...others] = arr1;
arr2.push(77);
console.log(others);
console.log(arr2[3]);

