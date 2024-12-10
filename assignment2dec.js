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


// Student and Grades
// let students = [];
// const addStudent = (Studentname, Studentgrade) => {
//     let obj = {
//         name: Studentname,
//         grade: Studentgrade
//     }
//     students.push(obj);
// }
// function classifyStudents() {
//     let studentsresult = students.map(student => {
//         let status;
//         if (student.grade === 'F') {
//             status = "Fail";
//         }
//         else {
//             status = "Pass";
//         }
//         return {
//             name: student.name,
//             status: status
//         }
//     })
//     console.log(studentsresult);
// }

// addStudent("Raghav", "A");
// addStudent("Rahul", "F");
// const passStudents = students.reduce(( acc, student) => {
//     if (student.grade !== "F") {
//         acc++;
//     }
//     return acc;
// }, 0);
// console.log(students);
// console.log(passStudents);


// List of Employees
// let employees = [];
// const addEmployee = (name,salary) => {
//     let obj = {
//         name: name,
//         salary: salary
//     }
//     employees.push(obj);
// }
// addEmployee("Sparsh", 1000000);
// addEmployee("Raghav", 15000);
// addEmployee("Rahul", 2000);

// const HighSalEmp = employees.filter((employee) => employee.salary >= 15000);
// const IncrementEmp = HighSalEmp.map((employee) => employee.salary += (1/10)*employee.salary);
// const TotalSalary = IncrementEmp.reduce((accumulator, employee) => accumulator+employee, 0);

// console.log(HighSalEmp);
// console.log(IncrementEmp);
// console.log(TotalSalary);

// Frequency Paragraph
// let para = " Hitodayis third december. Rakshit is looking suraj today";
// const paraArray = Array.from(para);
// const freqPara = paraArray.reduce((accumulator, curr) =>{
//         if(accumulator.has(curr)){
//             accumulator.set(curr, accumulator.get(curr)+1);
//         }
//         else{
//             accumulator.set(curr, 1);
//         }
//         return accumulator;
// }  , new Map());

// console.log(freqPara);






