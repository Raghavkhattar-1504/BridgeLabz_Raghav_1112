function random(n) {
    let set = new Set();
    // console.log(set);
    let count = 0;
    while (set.size < n) {
        let num = Math.ceil(Math.random() * n);
        count++;
        set.add(num);
    }
    // console.log(set);

    const ans = [...set];
    return ans;
}

let n = 10;
console.log(random(n));
