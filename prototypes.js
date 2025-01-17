const person = {
    name : 'Raghav',
    age : 21,   
    batch : 2025
}

let obj = Object.create(person);
console.log(obj);
console.log(obj.name);
console.log(obj.__proto__);


let obj2 = Object.create(null);
console.log(obj2.__proto__);


let arr = [1,2,3];
console.log(Array);


