class Bird {
    move() {
      console.log('Moving...');
    }
  }
  
  class FlyingBird extends Bird {
    fly() {
      console.log('Flying...');
    }
  }
  
  class Penguin extends Bird {
    swim() {
      console.log('Swimming...');
    }
  }
  
  const sparrow = new FlyingBird();
  sparrow.fly();
  
  const penguin = new Penguin();
  penguin.swim();
  