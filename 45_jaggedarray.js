const arr = [[13,53,31], 32, [52,23]];
function jaggedsum(arr) {
    let ans = arr.flat();
    const sum = ans.reduce((acc, ind) => acc+ind, 0);
    return sum;
}
console.log(jaggedsum(arr));

