const str = "Hello";
const arr = str.split('');
const rev = arr.reduce((acc, ind) => {
    acc.unshift(ind);
    return acc;
},[]);

console.log(rev.join(``));