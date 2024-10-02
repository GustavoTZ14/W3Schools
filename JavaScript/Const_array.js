const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"]; // uma const não pode ser reatribuida

cars[0] = "Toyota"; // podemos alterar o elemento do array de uma const

cars.push("Audi"); // colocar um novo elemento

const carros;
carros = ["Saab", "Volvo", "BMW"]; // nunca pode ser declarado assim

carro = ["Saab", "Volvo", "BMW"];
var carro; // com var pode ser declarado assim

cars = ["Saab", "Volvo", "BMW"];
cars[0] // será Saab

{
  cars = ["Toyota", "Volvo", "BMW"];
  cars[0] // será toyota
}

cars[0] // será Saab

var cars = ["Saab", "Volvo", "BMW"];
cars[0] // será Saab

{
  var cars = ["Toyota", "Volvo", "BMW"];
  cars[0] // será toyota
}

cars[0] // será toyota

// Redeclarar um array declarado com varÉ permitido em qualquer lugar em um programa

var cars = ["Volvo", "BMW"];
var cars = ["Toyota", "BMW"];
cars = ["Volvo", "Saab"];

//Redeclarar ou reatribuir um array para const, no mesmo âmbito, ou em O mesmo bloco não é permitido

var cars = ["Volvo", "BMW"];
const cars = ["Volvo", "BMW"];

{
  var cars = ["Volvo", "BMW"];
  const cars = ["Volvo", "BMW"];
}
