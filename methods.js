const proto = { greet: () => "Hello!" };
const obj = Object.create(proto);
console.log(obj.greet()); 

const obj1 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj1)); 


const obj2 = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj2)); 

const obj3 = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj3)); 

const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target);

const obj4 = { a: 1 };
Object.freeze(obj4);
obj4.a = 2;
console.log(obj4.a); 


const obj5 = { a: 1 };
Object.seal(obj5);
obj5.a = 2;
delete obj5.a; 
console.log(obj5);







