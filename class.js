class Person {
  constructor(name, rollNo, hobby) {
    this.name = name;
    this.rollNo = rollNo;
    this.hobby = hobby;
  }

  sayHi() {
    console.log(
      `Myself ${this.name}\n rollo no : ${this.rollNo}\nMy hobby is ${this.hobby}`
    );
  }
}
let user = new Person("Sachin", 1, "running");
user.sayHi();

console.log(typeof Person);

console.log(Person.prototype);

console.log(Person.prototype.sayHi);

console.log(Person === Person.prototype.constructor);

// Another way
class Person1 {
  ['say' + 'Hi']() {
    console.log("Hello dear !!! ");
  }
}

let newUser = new Person1;
newUser.sayHi(); // Hello dear !!!

// we can also write like this 👇
 new Person1().sayHi(); // Hello dear !!!


 // Class Inheritance
class Animal {
    constructor( name ) {
        this.name = name;
        this.speed = 0;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} still stands`);
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!!!`);
    }
}

let rabbit = new Rabbit("Black rabbit");
rabbit.run(7);
rabbit.hide();