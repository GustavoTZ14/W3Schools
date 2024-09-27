const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length; // mede o tamanho do array

console.log(fruits);

let frutas = ["Banana", "Orange", "Apple", "Mango"];

console.log(frutas.toString()); // converte array em string

frutas = ["Banana", "Orange", "Apple", "Mango"];
let fruta = frutas.at(2);

console.log(fruta); // obter o terceiro elemento de frutas

frutas = ["Banana", "Orange", "Apple", "Mango"];
fruta = frutas[2];

console.log(fruta); // Obter o terceiro elemento de frutas

frutas = ["Banana", "Orange", "Apple", "Mango"];

console.log(frutas.join("*")); // O metodo une os elementos de uma string

frutas = ["Banana", "Orange", "Apple", "Mango"];
frutas.pop();

console.log(frutas); // O metodo remove o ultimo elemnto do array

frutas = ["Banana", "Orange", "Apple", "Mango"];
fruta = frutas.pop();

console.log(fruta); // O metodo retorna o valor que foi retirado

frutas = ["Banana", "Orange", "Apple", "Mango"];
frutas.push("Kiwi");

console.log(frutas); // O método adiciona um novo elemento a um array

frutas = ["Banana", "Orange", "Apple", "Mango"];
fruta = frutas.push("Kiwi");

console.log(fruta); // O método retorna o comprimento do array

frutas = ["Banana", "Orange", "Apple", "Mango"];
frutas.shift();

console.log(frutas); // Remove o primeiro elemento do array

frutas = ["Banana", "Orange", "Apple", "Mango"];
fruta = frutas.shift();

console.log(fruta); // Método retorna valor que foi retirado

frutas = ["Banana", "Orange", "Apple", "Mango"];
frutas.unshift("Lemon");

console.log(frutas); // acrecenta um elemeto no inicio do array

frutas = ["Banana", "Orange", "Apple", "Mango"];
delete frutas[0];

console.log(frutas); // deleta um elemento do array mas deixa um buraco no array

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren); // Método de concatenção de arrays

frutas = ["Banana", "Orange", "Apple", "Mango"];
frutas.copyWithin(2, 0);

console.log(frutas); // copiar para indexar 2, todos os elemntos do indice 0

frutas = ["Banana", "Orange", "Apple", "Mango"];
frutas.copyWithin(2, 0, 2);

console.log(frutas);

const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat();

console.log(newArr);

const myArray = [1, 2, 3, 4, 5, 6];
const newArray = myArray.flatMap(x => [x, x * 10]);

console.log(newArray);

frutas = ["Banana", "Orange", "Apple", "Mango"];
frutas.splice(2, 0, "Lemon", "Kiwi");

console.log(frutas);

// O primeiro parâmetro (2) define a posição onde novos elementos devem ser 
// adicionados
//
// O segundo parâmetro (0) define quantos elementos devem ser removido

frutas = ["Banana", "Orange", "Apple", "Mango"];
frutas.splice(2, 2, "Lemon", "Kiwi");

console.log(frutas);

frutas = ["Banana", "Orange", "Apple", "Mango"];
frutas.splice(0, 1);

console.log(frutas);

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);

console.log(spliced);

frutas = ["Banana", "Orange", "Apple", "Mango"];
let citrus = frutas.slice(1);

console.log(citrus);

frutas = ["Banana", "Orange", "Apple", "Mango"];
citrus = frutas.slice(1, 3);

console.log(citrus);

frutas = ["Banana", "Orange", "Apple", "Mango"];
citrus = frutas.slice(2);

console.log(citrus);
