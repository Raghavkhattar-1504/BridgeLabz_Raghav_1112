// const abj = {a:1};
// console.log(String(abj)); 

// const date = new Date();
// console.log(date.toString());




// class Car {
//     constructor(brand, color) {
//         this.brand = brand;
//         this.color = color;
//         this.isRunning = false;
//     }
//     start(){
//         if (!this.isRunning) {
//             this.isRunning = true;
//             console.log(`${this.brand} is now running`);
//         }else{
//             console.log(`${this.brand} is already running`);
//         }
//     }
//     stop(){
//         if (this.isRunning) {
//             this.isRunning = false;
//             console.log(`${this.brand} has stopped`);
//         }
//         else{
//             console.log(`${this.brand} is already stopped`);
//         }
//     }
// }
//  const car1 = new Car(`Toyota`, `Red`);
//  const car2 = new Car(`Honda`, `White`);

//  car1.start();
//  car1.stop();
//  car2.start();
//  car2.stop();



// class Car {
//         constructor(brand, color) {
//             this.brand = brand;
//             this.color = color;
//             this.isRunning = false;
//         }

//         start(){
//             this.isRunning = true;
//             console.log(`${this.brand} is now running`);
//         }
//         stop(){
//             this.isRunning = false;
//             console.log(`${this.brand} has stopped`);
//             }
//     }

//     class SportsCar extends Car{
//         constructor(brand, color, speed) {  
//             super(brand, color);
//             this.speed = speed;
//         }

//         accelerate(){
//             console.log(`${this.brand} car is accelerating to ${this.speed} mph!`);            
//         }
//     }


//     const sCar = new SportsCar('Ferrari', `Red`, 200);
//     sCar.start();
//     sCar.accelerate();
//     sCar.stop();



