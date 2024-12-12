let num = 10;
let dp = Array(num+1).fill(-1);
export function fact(num, dp) {
    if(num === 1){
        return 1;
    }
    
    if(dp[num] !== -1)return dp[num];
    return dp[num] = BigInt(num)*BigInt(fact(num-1, dp));
}

// console.log(fact(num,dp));
