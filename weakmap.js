const weakMap = new WeakMap();

const obj1 = { name: 'Alice' };
const obj2 = { name: 'Bob' };

weakMap.set(obj1, 'Developer');
weakMap.set(obj2, 'Designer');

console.log(weakMap.get(obj1));
console.log(weakMap.get(obj2));

console.log(weakMap.has(obj1));
console.log(weakMap.has({ name: 'Charlie' }));

weakMap.delete(obj1);
console.log(weakMap.has(obj1));
