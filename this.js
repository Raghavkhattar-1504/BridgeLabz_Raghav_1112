const obj = {
    name: "My Object",
    regular: function () {
      console.log(this.name);
    },
    arrow: () => {
      console.log(this.name);
    },
  };
  
  obj.regular(); 
  obj.arrow();  
  

  const regularFn = obj.regular;
  const arrowFn = obj.arrow;
  
  regularFn();
  arrowFn();  
  
console.log();



  const obj1 = {
    name: "Outer Object",
    method: function () {
      console.log(this.name);
  
      function nested() {
        console.log(this.name);
      }
  
      const nestedArrow = () => {
        console.log(this.name); 
      };
  
      nested();
      nestedArrow();
    },
  };
  
  obj1.method();

  console.log();
  
  
  const obj2 = {
    name: "Raghav",
    method: function () {
      const ans = this;
      function nested() {
        console.log(ans);
        console.log(ans.name);
         
      }
      nested();
    },
  };
  
  obj2.method();
  

console.log();



  const obj3 = {
    name: "object 3",
    greet: function () {
      console.log(`${this.name}`);
    },
  };
  
  const obj4 = { name: "Object 2" };
  
  obj3.greet();  
  obj3.greet.call(obj4); 
  