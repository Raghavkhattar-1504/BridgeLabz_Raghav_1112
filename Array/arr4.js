let arr = [13,52,53,63,77,65];
let k = 13;

for (let i = 0; i < k; i++) {
    let temp = arr[arr.length-1];
    arr.pop(arr.length-1);
    arr.unshift(temp);
}

console.log(arr);
