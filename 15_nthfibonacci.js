let dp = Array(501).fill(-1);
export const nfib = (n, dp) => {
    if (n === 1) {
        return 1;
    }
    if (n === 0) {
        return 0;
    }
    if(dp[n] !== -1){
        return dp[n];
    }
    // console.log(n);
    return dp[n]=BigInt(nfib(n - 1, dp)) + BigInt(nfib(n - 2, dp));
}

// console.log(nfib(5,dp));
