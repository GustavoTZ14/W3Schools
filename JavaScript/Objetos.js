const car = { type: "Fiate", model: "500", color: "White" }; // Objeto

console.log(typeof car);
console.log(car.type)

const person = {};

person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person);

const pers = new Object();

pers.firstName = "John";
pers.lastName = "Doe";
pers.age = 50;
pers.eyeColor = "blue";

console.log(pers)

const personage = {
  firstName: "John",
  lastNema: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + "" + this.lastName;
  }
}

console.log(personage);

const per = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
}

const x = per

x.age = 10;

console.log(x)
