// //referencing
// let obj1 = {name: "Raghav"};
// let obj2 = obj1;

// obj2.name = "rakshit";
// console.log(obj1.name);
// console.log(obj2.name);

// //shallow copy
// let obj3 = {
//     name: "Raghav",
//     obj4 : {
//         age : 21
//     }
// }

// let obj5 = {...obj3};
// obj5.obj4 = 25;
// console.log(obj5.obj4);

// //deep copy
// let obj6 = {
//     name: "Raghav",
//     obj7 : {
//         age : 21
//     }
// }

// let obj8 = JSON.parse(JSON.stringify(obj6));

// obj8.name = "rakshit";
// obj8.obj7.age = 25;
// console.log(obj8.name);
// console.log(obj6.obj7.age);


// let ob = {
//     funky(){
//         console.log(this);
//     }, 
//     name: "Raghav"
// }

// ob.funky();


///////////////////////////////////////////////




const obj = {
    name : "raghav",
    age : 21, 
    course: {
      degree: "CSE",
      year : 2021
    }
  };
  
  const shallow = { ...obj };
  
  obj.course.year = 2022;
  
  console.log(obj);
  console.log(shallow);
  
  const deepCopy = JSON.parse(JSON.stringify(obj));
 
  obj.course.degree = "Phd";
  
  console.log(obj);
  console.log(deepCopy);
  




