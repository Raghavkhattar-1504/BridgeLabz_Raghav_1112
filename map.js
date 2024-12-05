
const map = new Map();

map.set('name', 'Raghav');
map.set('age', 21);
map.set(1, 'one');
map.set(true, 'boolean');

console.log(map.get('name'));
console.log(map.get(1));
console.log(map.get(true)); 

console.log(map.has('age'));
console.log(map.has('address')); 

map.delete('age');
console.log(map.has('age')); 

map.set('country', 'USA');
map.set('city', 'New York');

map.forEach((value, key) => {
  console.log(key, value);
});

console.log(map.size); 
map.clear();
console.log(map.size); 
