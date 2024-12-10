let person = {
    name  : "Raghav",
    greet : function (age) {
        console.log(`Hello, my name is ${this.name} and my age is ${age}.`);
    }
}

let person2 = {
    name : "Sparsh",
    age : 32
}

person.greet.call(person2, 13 );



let person3 = {
    name : "Pakora",
    into : function (gender) {
        console.log(`My name is ${this.name} and my gender is ${gender}`);    
    }
}

let person4 ={
    name : "Raku"
}
person3.into.apply(person4, ["Male"]);


function hello() {
    console.log(`hello, ${this.name}.`);
}

let person5 = {name : "Rakshit" , hello: hello};
person5.hello();


let geeks ={
    name : "ABC" , 
    printfunc : function () {
        console.log(this.name);        
    }
}
let printfunc2 = geeks.printfunc();
// printfunc2();


let geek1 = {
    name : "abc",
    article : "C++"
}

let geek2 = {
    name: "cde",
    article: "java"
}

let geek3 = {
    name : "fgh",
    article: "ruby"
}
function printval() {
    console.log(this.name+" contributes about "+this.article);
}

let printt = printval.bind(geek1);
printt();

let print2 = printval.bind(geek2);
print2();
printval.call(geek3);
