function positive(arr) {
    const pos = arr.filter( ind => ind >= 0);
    return pos;
}

const arr = [12,435,2,5,35,-2,-36];
console.log(positive(arr));


