// let obj = new Object();
// obj.name = "Alice";
// obj.age = 25;


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// let person = new Person("Bob", 30);


// class Animal {
//     constructor(type, sound) {
//         this.type = type;
//         this.sound = sound;
//     }
//     makeSound() {
//         console.log(this.sound);
//     }
// }
// let dog = new Animal("Dog", "Bark");
// dog.makeSound();




///////////////////////////////////////


const car = {
  company: "Maruti",
  model: "800",
  year: 2020,
  details: function () {
    console.log(`${this.year} ${this.company} ${this.model}`);
  },
  updateYear: function (Year) {
    this.year = Year;
  },
  numbers: {
    chasis: "AJS1421HSJ"
  }
};

car.details();
car.updateYear(2021);
car.details();
console.log(car.numbers.chasis);


class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }


  ////////the normal way///////

  // createMethod(method) {
  //   if (method === "getName") {
  //     this.getName = function () {
  //       return this.name;
  //     };
  //   } else if (method === "updateAddress") {
  //     this.updateAddress = function (newAddress) {
  //       this.address = newAddress;
  //       return `Address updated to: ${newAddress}`;
  //     };
  //   } else {
  //     return `Method ${method} is not available.`;
  //   }
  // }


////////The not so normal way////////


  createMethod(method) {
    if (method === "getName") {
      Object.defineProperty(this, method , {
        value: function () {
          return this.name;
      },
      writable: true,
      configurable: true,
    });
    } else if (method === "updateAddress") {
      Object.defineProperty(this, method , {
        value: function (newAddress) {
          this.address = newAddress;
          return `Address updated to: ${newAddress}`;
      },
      writable: true,
      configurable: true,
    });
    } else {
      return `Method ${method} is not available.`;
    }
  }
}

const person = new Person("rahul", 21, "rajpura");
person.createMethod("getName");
console.log(person.getName());

person.createMethod("updateAddress");
console.log(person.updateAddress("patiala"));
person.createMethod("unknown");
// console.log(person.unknown());




const object = {
  name: "raghav",
  details: {
    age: 21,
    address: {
      location: "chitkara",
      city: "rajpura"
    }
  }
};

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const copy = deepCopy(object);
copy.details.age = 30;
copy.details.address.street = "patiala";

console.log(object.details.age); 
console.log(copy.details.age);  
console.log(object.details.address.street); 
console.log(copy.details.address.street);  









