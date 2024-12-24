function fun(arr) {
    const map = new Map();

function helper(prev, curr) {
    if (curr === arr.length) {
        return 0;
    }
    const key = `${prev}, ${curr}`;
    if (map.has(key)) {
        return map.get(key);
    }

    maxi = helper(prev, curr+1);

    if(prev === -1 || arr[curr] > arr[prev]){
        maxi = Math.max(maxi, 1+ helper(curr, curr+1));
    }

    map.set(key, maxi);
    return maxi;

}

return helper(-1,0);
}

const arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(fun(arr));


