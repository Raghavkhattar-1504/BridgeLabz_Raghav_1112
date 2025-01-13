const prom2 = new Promise((resolve, reject) => {
    let data = fetch("https://dummyjson.com/users");
    resolve(data);
});

prom2
.then((data) => {
    return data.json();
})
.then((data) => {
    console.log(data);
})
.catch((err) => console.log(err));