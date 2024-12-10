// Factorial
function fact(n) {
    if (n === 1) {
        return 1;
    }
    return n * fact(n-1);
}
console.log(fact(5));


// Fibonacci
function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n-1)+fib(n-2);
}
console.log(fib(6));


// Flatten Array
const arr = [1, [2, [3, [4]]]];
function flatten(arr) {
    return arr.reduce((acc , item) => Array.isArray(item) ? acc.concat(flatten(item)) : acc.concat(item), []); 
}

console.log(flatten(arr));


function gcd(a, b) {
    if(b === 0){
        return a;
    }
    return gcd(b, a % b);
}
console.log(gcd(48,18));