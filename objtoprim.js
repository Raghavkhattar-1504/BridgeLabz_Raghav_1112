const obj= {
    x: 10,
    y: 20,
    toString() {
      return `(${this.x}, ${this.y})`;
    },
    valueOf() {
      return this.x + this.y;
    },
  };
  
  console.log(String(obj));
  console.log(obj + 10);   
  console.log(`${obj}`);   
  
  

  const product = {
    name: "Laptop",
    price: 12000,
    [Symbol.toPrimitive](hint) {
      if (hint === "string") {
        return `Product: ${this.name}`;
      } else if (hint === "number") {
        return this.price;
      }
      return `${this.name} - ${this.price}`;
    },
  };
  
  console.log(String(product)); 
  console.log(Number(product));      

  
  