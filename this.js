console.log(this);

console.log();


function showThis() {
    console.log(this);
}
showThis();

console.log();


const person = {
    name: "Alice",
    greet: function () {
        console.log(this.name);
    }
};
person.greet();


console.log();


const person1 = {
    name: "Bob",
    greet: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};
person1.greet();




