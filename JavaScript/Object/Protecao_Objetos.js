// Object.preventExtensions()

const person = {firstName:"John", lastName:"Doe"};

Object.preventExtensions(person);

person.nationality = "English";

console.log(person);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Object.preventExtensions(fruits);

// fruits.push("Kiwi");

// console.log(fruits); // vai dar erro

// Object.isExtensible()

Object.preventExtensions(person);

let answer = Object.isExtensible(person)

console.log(answer);