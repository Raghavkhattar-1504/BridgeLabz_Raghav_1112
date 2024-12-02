// shopping cart system
// let cart = [];
// const addItems = (itemName, itemPrice) => {
//     let obj = {
//         name : itemName,
//         price : itemPrice
//     }
//     cart.push(obj);
// }

// const totalPrice = (cart) => {
//     let total = cart.reduce((accumulator, item) => item.price+accumulator,0)
//     return total;
// }


// const removeItem = (itemName) => {
//     cart = cart.filter((item)  => item.name !== itemName)
// }

// addItems("Cake", 100);
// addItems("Ice Cream", 50);
// console.log(cart);
// console.log(totalPrice(cart));
// removeItem("Ice Cream");
// console.log(cart);


let students = [];
const addStudent = (Studentname, Studentgrade) => {
    let obj = {
        name: Studentname,
        grade: Studentgrade
    }
    students.push(obj);
}

function classifyStudents() {
    let studentsresult = students.map(student => {
        let status;
        if (student.grade === 'F') {
            status = "Fail";
        }
        else {
            status = "Pass";
        }
        return {
            name: student.name,
            status: status
        }
    })
    console.log(studentsresult);
}



addStudent("Raghav", "A");
addStudent("Rahul", "F");
const passStudents = students.filter((student) => {
    return student.grade !== 'F';
});
console.log(students);
console.log(passStudents.length);
// classifyStudents();
// console.log(passStudents);
// console.log(students);





