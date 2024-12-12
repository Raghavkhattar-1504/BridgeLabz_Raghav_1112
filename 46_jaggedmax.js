const arr = [[13,53,31], 32, [52,23]];

function jaggedmax(arr) {
    let flat = arr.flat();
    const ans = flat.reduce((acc, ind) => acc=Math.max(acc,ind), 0);
    return ans;
}

console.log(jaggedmax(arr));

