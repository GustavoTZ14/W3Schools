let fruits = ["Apple", "Orange", "Apple", "Mango"];
let posicao = fruits.indexOf("Apple", 1);
//let posicao = fruits.indexOf("Apple") + 1; // coloca-se +1 pra que o indece 0 vire 1.

console.log(posicao);

fruits = ["Apple", "Orange", "Apple", "Mango"];
posicao = fruits.lastIndexOf("Apple") + 1;

console.log(posicao);

fruits = ["Apple", "Orange", "Apple", "Mango", "Gustavo Terrin"];

console.log(fruits.includes("Gustavo Terrin"));

let numbers = [4, 9, 16, 25, 29, "Gustavo Terrin"];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(first);

numbers = [4, 9, 16, 25, 29, "Gustavo Terrin"];
first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(first);

const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);

console.log(high);
