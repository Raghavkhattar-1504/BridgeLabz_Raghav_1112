let arr = [1,2,3,4,5];
const tar = 3;
const ans = [];
for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (tar === sum) {
            ans.push(arr.slice(i, j+1));
        }
    }  
}

console.log(ans);
