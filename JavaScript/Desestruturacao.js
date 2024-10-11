let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

let { firstName, lastName } = person;

console.log(firstName);
console.log(lastName);
console.log(`Meu nome é ${firstName} ${lastName}`);

person.cidade = "Meridiano";
person.pais = "Brasil";

let { cidade, pais, age } = person; // desestruturação de um objeto

console.log(`Meu nome é ${firstName} tenho ${age} anos, nasci em ${cidade}/${pais}`)

// Desestruturação de Strings

let nome = "W3Schools";

let [a1, a2, a3, a4, a5] = nome;

console.log(a1);
console.log(a5);

/* Desustruturação de Array */

let fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

let [fruta1, fruta2] = fruits;

console.log(fruta1, fruta2);

/* Ignorando valores de matriz */

let [frutas1, , , frutas2] = fruits;

console.log(frutas1, frutas2);

/* Valores de posição da matriz */

let { [0]: fruit1, [3]: fruit2 } = fruits;

console.log(fruit1, fruit2);

/* A Propriedade Rest */

let numbers = [10, 20, 30, 40, 50, 60, 70];

const [a, b, ...rest] = numbers;

console.log(a, b, ...rest);

/* Desestruturação de Map */

const fru = new Map([
  ["apple", 500],
  ["banana", 300],
  ["orange", 200]
]);

let text = "";
for (let [key, value] of fru) {
  text += key + " é " + value + "\n";
};

console.log(text);

/* Trocando variaveis JavaScript */

let firstNome = "john";
let lastNome = "Doe";

[firstNome, lastNome] = [lastNome, firstNome];

console.log(firstNome, lastNome);
