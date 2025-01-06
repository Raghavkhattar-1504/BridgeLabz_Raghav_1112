class Eater {
    eat() {
      console.log('Eating...');
    }
  }
  
  class Flier {
    fly() {
      console.log('Flying...');
    }
  }
  
  class Dog extends Eater {}
  class Bird extends Eater {
    constructor() {
      super();
      this.flyingAbility = new Flier();
    }
  }
  
  const dog = new Dog();
  dog.eat();
  
  const bird = new Bird();
  bird.eat();
  bird.flyingAbility.fly();
  