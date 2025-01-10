const user = {
    profile: {
      name: "Alice"
    }
  };
  
  console.log(user.profile?.name);
  console.log(user.address?.city);
  
  
  const person = {
    greet() {
      return "Hello!";
    }
  };
  
  console.log(person.greet?.());  
  console.log(person.farewell?.()); 


console.log();



  const obj1 = {
    name: "raghav",
    address: {
      city: "rajpura",
      pin: "140401",
      course: {
        college : "chitkara",
        branch : "cse"
      },
    },
  };

  console.log(obj1.address?.course?.college);
  console.log(obj1.address?.course?.year); 
  
  console.log(obj1.contact?.email); 



  const users = [
    { name: "raghav", age: 21 },
    { name: "ram" }, 
    { name: "shyam", age: 24 },
  ];
  
  users.forEach((user, index) => {
    console.log(`${user.name},  ${user.age ?? "Not provided"}`);
  });
  



  const name = {
    fullname: () => "Raghav Khattar",
    age: undefined, 
  };

  console.log(name.fullname?.()); 
  

  console.log(name.age?.() ?? "fals"); 
  
  
  
  
  
  