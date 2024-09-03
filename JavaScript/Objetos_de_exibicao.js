const person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person)

const perso = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(perso.name, perso.age, perso.city);

const pers = {
  name: "John",
  age: 30,
  city: "New York"
};

let text = "";
for (let x in pers) {
  text += pers[x] + " ";
};

console.log(text);

const per = {
  name: "John",
  age: 30,
  city: "New York"
};

const myArray = Object.values(per);

console.log(myArray);

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let texts = "";
for (let [fruit, value] of Object.entries(fruits)) {
  texts += fruit + ": " + value;
}

console.log(texts);

const persona = {
  name: "John",
  age: 30,
  city: "New York"
};

let myString = JSON.stringify(persona);

console.log(myString)
