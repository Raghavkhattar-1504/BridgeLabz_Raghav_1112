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
  
  