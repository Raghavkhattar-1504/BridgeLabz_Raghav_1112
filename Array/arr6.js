let arr = [-1,1,0,-3,3];

let cnt = 0;
let prod = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            cnt++;   
        }
        else {
            prod *= arr[i];
        }
    }
let ans = [];
for (let i = 0; i < arr.length; i++) {
    if(cnt > 1 && arr[i] === 0){
        ans.push(0);
    }
    else if(cnt===1 && arr[i] === 0){
        ans.push(prod);
    }
    else if(cnt >= 1 && arr[i] !== 0){
        ans.push(0);
    }
    else{
    ans.push(prod/arr[i]);
    }
}

console.log(ans);
