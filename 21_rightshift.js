let arr = [1,2,3,4,5];

let cnt = 0;
const pos = 1;
for (let i = arr.length-1; i >= 0; i--) {
        while (cnt < pos) {
        arr.unshift(arr[i]);
        // console.log(arr[i]);
        arr.splice(i+1,1);
        cnt++;
    }
}

console.log(arr);
