let arr = [13,25,73,14,6,1, 73];
let num  = 74;
let ans = [];

for (let i = 0; i < arr.length; i++) {
        if (arr.includes(num-arr[i])) {
            ans.push([arr[i], num-arr[i]]);
            // break;
        }
}

console.log(ans);
