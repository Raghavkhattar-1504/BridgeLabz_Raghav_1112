const obj = {};
Object.defineProperty(obj, "age", {
  value: 25,
  writable: false,
  enumerable: true,
  configurable: true,
});

console.log(obj.age); 


console.log(a);
const a = 10;
console.log(a);



const obj = {};

Object.defineProperty(obj, "id", {
  value: 101,
  configurable: false, 
});

console.log(obj.id); 

delete obj.id;       
console.log(obj.id); 

