let arr = [1,42,9,0,4,4,0,6];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        arr.splice(i, 1);
        arr.push(0);
}
}
console.log(arr);


