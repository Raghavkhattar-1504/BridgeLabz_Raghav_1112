function Person(name, age) {
    this.name = name;
    this.age = age;
}

const p = new Person("Raghav", 21);
console.log(p);

const p1 = Object.create({});
p1.name = "Raskhit";
console.log(p1);



class Obj {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }

    print() {
        console.log(this.#balance);
    }
}

const obj = new Obj(100);
obj.print();
console.log(obj.balance);



let o1 = {
    name: "Raghav",
    add: {
        state: "punjab"
    }
}

let o2 = o1;
let o3 = Object.assign({}, o1);
// o2.name = "up";
o3.name = "Off"
console.log(o1);

class Circle {
    #radius;
    constructor(radius) {
        this.#radius = radius;
    }

    get radius() {
        return this.#radius;
    }

    set radius(val) {
        this.#radius = val;
    }

    area() {
        return 3.14 * this.#radius * this.#radius;
    }

}

const c1 = new Circle(5);
console.log(c1.area());
console.log(c1.radius = 7);
// c1.radius = 7;
// console.log(c1.area());
// console.log(c1.radius);






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



// const fetchData = (url) => {
//     return fetch(url)
// }


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
