let car = {
    brand: "Toyota",
    model: "Corolla",
    start: function () {
        console.log("Car started");
    },
};
car.start();

let obj = new Object();
obj.name = "Alice";
obj.age = 25;


function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person = new Person("Bob", 30);


class Animal {
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound);
    }
}
let dog = new Animal("Dog", "Bark");
dog.makeSound();


