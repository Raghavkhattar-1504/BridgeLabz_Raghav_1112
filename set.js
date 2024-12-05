const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(2);

console.log(set.size); 

console.log(set.has(2)); 
console.log(set.has(4));

set.delete(2);
console.log(set.has(2)); 

set.add(4);
set.add(5);

set.forEach(value => {
  console.log(value);
});

set.clear();
console.log(set.size);
