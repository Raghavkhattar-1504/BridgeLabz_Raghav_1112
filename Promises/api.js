const prom1 = new Promise((resolve, reject) => setTimeout(() => {
    reject("prom1");
}, 2000));
const prom2 = new Promise((resolve) => setTimeout(() => {
    resolve("prom2");
}, 3000));
const prom3 = new Promise((resolve, reject) => setTimeout(() => {
    reject("prom3");
}, 1000));

Promise.any([prom1, prom2, prom3])
.then((data) => console.log(data)
)
.catch((err) => console.log(err));
