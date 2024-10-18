class ClassName {
  constructor() { }
};

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
};

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1.name);

class Car2 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  };
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  };
};

const myCar = new Car2("Ford", 2014);

console.log("My car is " + myCar.age() + " year old.");

class Carro {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  };
  age(x) {
    return x - this.year;
  };
};

const date = new Date();
let year = date.getFullYear();

const meuCarro = new Carro("Ford", 2014);

console.log("Meu carro é " + meuCarro.age(year) + " anos de velho.");
