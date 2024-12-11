const nfib = (n) => {
    if (n === 1) {
        return 1;
    }
    if (n === 0) {
        return 0;
    }
    return nfib(n - 1) + nfib(n - 2);
}

console.log(nfib(5));
