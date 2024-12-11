let arr = [213, 4, 3, 36, 5, 6, 75];

let cnt = 0;
const pos = 1;
for (let i = 0; i < arr.length; i++) {
        while (cnt < pos) {
        arr.push(arr[i]);
        arr.splice(i,1);
        cnt++;
    }
}


console.log(arr);
