const arr = [[13,53,31], [32], [52,23]];
let ans = [];
for (let i = 0; i < arr.length; i++) {
    let ans1  = [];
    for (let j = 0; j < arr[i].length; j++) {
        ans1[j] = arr[i][j];
    }
    ans[i] = ans1;
}
console.log(ans);
