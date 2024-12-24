let arr = [10, 4, 18, 42, 6, 33, 87, 4];
arr.sort((a, b) => a - b);

let ans = [];
let min = 100000;
for (let i = 0; i < arr.length - 1; i++) {
    let diff = arr[i + 1] - arr[i];

    
        if (diff !== 0 && diff < min) {
            min = diff;
            if (ans.length == 0) {
                ans.push(arr[i]);
                ans.push(arr[i + 1]);
            }
            else {
                ans.pop();
                ans.pop();
                ans.push(arr[i]);
                ans.push(arr[i + 1]);
            }
        }
    
}
console.log(ans);


