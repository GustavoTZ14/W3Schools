// Em JavaScript a palavra-chave CONST não podem serem reatribuidas mas sim 
// alteradas.

// Matrizes constantes

const carsMatriz = ["Saab", "Volvo", "BMW"];
carsMatriz[0] = "Toyota";
carsMatriz.push("Audi");

console.log(carsMatriz);

//const carsArray = ["Saab", "Volvo", "BMW"];
//carsArray = ["Toyota", "Volvo", "Audi"];

// console.log(carsArray);

// as matrizes podem ser alteradas, mas os arrays não podem serem reatribuidas.

const carObj = { type: "Fiat", model: "500", color: "white" };
carObj.color = "red";
carObj.owner = "Johnson";

console.log(carObj);

// pode-se alterar um objeto constante, mas não reatribuir o objeto.
