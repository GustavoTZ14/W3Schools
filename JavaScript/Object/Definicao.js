// criando um objeto javascript vazio usando {}

// const person = {};

// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// console.log(person);

// Objeto javascript vazio new Object()

const person = new Object();

person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person);

// Funções do construtor de objetos

function Person(first, last, age, eye){
    this.fistName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const novoPerson = new Person("john", "doe", 50, "blue");

console.log(novoPerson.fistName);

