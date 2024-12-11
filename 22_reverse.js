const arr = [1,2,3,4,5,6];

const rev = arr.reduce((acc, ind) => {
    acc.unshift(ind);
    return acc;
}, []);
console.log(rev);

