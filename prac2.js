// Create a custom error class that extends the built-in Error class, and implement the toString() method to return a formatted string of the error message.

class Custom extends Error {
    constructor(name, message) {
        super(message);
        this.name = name || "CustomError";
    }
    toString() {
        return `${this.name} : ${this.message}`;
    }
}

try {
    throw new Custom(`CustomError`, "this is a custom error");
}
catch (error) {
    console.log(`Error : ${error.toString()}`);

}

// Write a custom object that overrides the valueOf and toString methods to demonstrate the conversion to primitive values.


const obj = {
    name: "raghav",
    age: 25,
    toString() {
        return `name : ${this.name} , age: ${this.age}`;
    },
    valueOf() {
        return this.age;
    }
}

console.log(String(obj));
console.log(obj + 2);


// Write a function that returns a prmise. The promise should chain multiple operations, and proper error handling should be implemented.


// function fetchy() {
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     const prom = new Promise((resolve, reject) => {
//         const data = fetch(url);
//         resolve(data);
//         if (!data) {
//             reject("data is not present");
//         }
//     }
//     )
//     return prom;
// }

// function str(data) {
//     return data.json();
// }



// fetchy().then(data => (console.log(data)
// )).then((data) => (console.log(str(data))))
//     // .then((data) => (console.log(data.length)))
//     .catch(error => {
//         console.log(`Error : ${error.toString()}`);
//     });


// Write a function that runs multiple promises concurrently and handles the results when all of them are resolved.


const prom1 = new Promise((resolve) =>
    setTimeout(() => {
        resolve("prom1");
    }, 2000));

const prom2 = new Promise((resolve) =>
    setTimeout(() => {
        resolve('prom2');
    }, 3000));

const prom3 = new Promise((resolve) =>
    setTimeout(() => {
        resolve('prom3');
    }, 4000));

Promise.all([prom1, prom2, prom3])
.then(results => console.log(results));


// const obj1 = {
//     age: 25
// }
// const obj2 = {
//     name: 'rakshit'
// }

// const obj3 = {...obj1, ...obj2};

// function deepCopy(obj) {
//     if(typeof(obj) !== 'object' || obj === null){
//         return obj;
//     }
//     const result = Array.isArray(obj) ? [] : {};
//     const keys = Object.keys(obj);

//     for (const key of keys) {
//         result[key] = deepCopy(obj[key]);
//     }
//     return result;
// }

// const ans = deepCopy(obj3);
// console.log(ans);
// ans.name = "raghav"
// console.log(ans);
// console.log(obj3);




function fun1 (name, callback) {
    let chk = false;
    if(name){
        chk = true;
        callback(name);
    }
}

function fun2(chk, callback) {
    if(chk){
        callback(chk);
        }
}

function fun3(chk) {
    if(chk){
        console.log("hello world");
    }
}

fun1("raghav", (chk) => fun2(chk, fun3));


function fun4(name) {
    let chk = false;
    if(name){
        const prom = new Promise((resolve, reject) => {
            setTimeout(() => {
                chk = true;
                resolve(true);
            } , 2000);
        })
        return prom;
    }
}

function fun5(chk) {
    return new Promise((resolve, reject) => {
        if(chk){
            resolve(chk);
        }
        else{
            reject("Error");
        }
})
}

function fun6(chk) {
    return new Promise((resolve, reject) => {
        if(chk){
            setTimeout(() => (console.log("hello world")), 2000);
            resolve(chk);
        }
        else{
            reject("Error");
            }
    })
}

fun4("Raghav")
.then((chk) => fun5(chk))
.then((chk) => fun6(chk))
.catch((error) => console.log(error));



const car = {
    madel : "Etios"
}

Object.defineProperty(car, "brand" , {
    value : "Maruti", 
    writable : true,
    enumerable : true,
    configurable : true
})

console.log(car);






