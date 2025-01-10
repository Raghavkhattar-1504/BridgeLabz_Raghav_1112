
const car = {
  make: "Maruti",
  model: "800",
  year: 2010,
};


Object.defineProperty(car, "make", {
  writable: false, 
  enumerable: true, 
  configurable: false, 
});

Object.defineProperty(car, "year", {
  writable: true,
  enumerable: false,
  configurable: true, 
});

console.log(Object.getOwnPropertyDescriptor(car, "make")); 
console.log(Object.getOwnPropertyDescriptor(car, "year")); 

car.make = "BMW"; 
console.log(car.make); 

console.log(Object.keys(car)); 
console.log(Object.values(car));



const person = {};

Object.defineProperties(person, {
  name: { value: "raghav",
     writable: true,
      enumerable: true,
       configurable: true 
      },
  age: { value: 21,
     writable: false, 
     enumerable: true, 
     configurable: true 
    },
  address: { value: { city: "rajpura", pinCode: "140401" },
   writable: true, 
   enumerable: false, 
   configurable: true 
  },
});

Object.defineProperties(person.address, {
  city: { value: "rajpura",
     writable: true, 
     enumerable: true, 
     configurable: true 
    },
  pinCode: { value: "140401",
     writable: false, 
     enumerable: true, 
     configurable: false 
    },
});

console.log(person.name);
console.log(person.age);
console.log(person.address);

console.log(Object.keys(person));

person.name = "Sparsh";
console.log(person.name);

person.age = 35;
console.log(person.age);

person.address.city = "patiala";
console.log(person.address.city);

person.address.zipCode = "110041";
console.log(person.address.pinCode);

delete person.address.pinCode;
console.log(person.address.pinCode);



