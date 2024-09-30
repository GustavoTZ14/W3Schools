let numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "\n";
}

console.log(txt);

const numeros = [1, 2, 3, 4, 5];

txt = "";
numeros.forEach(functionMy);

function functionMy(value) {
  txt += value + "\n";
};

console.log(txt); // forEach não retorna nenhum valor, ele simplesmente executa uma ação para cada elemento.

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value;
};

console.log(numbers2);

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);

console.log(newArr);

numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(function(value) { return value > 18 });

console.log(over18);

const produtos = [
  { nome: "Camiseta", preco: 25 },
  { nome: "Calça", preco: 50 },
  { nome: "Boné", preco: 15 }
];

const filtrarProduto = produtos.filter(function(produto) {
  if (produto.preco > 20) {
    console.log(`${produto.nome} - ${produto.preco}`)
  }
});

console.log(filtrarProduto);

numbers = [45, 4, 9, 16, 25];
// let soma = numbers.reduce(myFunction, 0); // comessa da esquerda para a direita
let soma = numbers.reduceRight(myFunction, 1); // comessa da direita para a esquerda

function myFunction(total, value) {
  return total + value;
};

console.log(soma); // total = acumulador = 0, value = 45, i = 0
/* Agora vamos analisar como o acumulador vai mudando:

    Primeira iteração: acumulador = 0, valorAtual = 1, index = 0
        acumulador + valorAtual + index = 0 + 1 + 0 = 1
        Acumulador passa a ser 1.

    Segunda iteração: acumulador = 1, valorAtual = 2, index = 1
        acumulador + valorAtual + index = 1 + 2 + 1 = 4
        Acumulador passa a ser 4.

    Terceira iteração: acumulador = 4, valorAtual = 3, index = 2
        acumulador + valorAtual + index = 4 + 3 + 2 = 9
        Acumulador passa a ser 9.

    Quarta iteração: acumulador = 9, valorAtual = 4, index = 3
        acumulador + valorAtual + index = 9 + 4 + 3 = 16
        Acumulador final é 16.
*/

const palavras = ['Olá', 'mundo', 'JavaScript'];

const frase = palavras.reduce((acumulador, valorAtual) => {
  return acumulador + ' ' + valorAtual;
}, '');

console.log(frase);  // Saída: " Olá mundo JavaScript"

const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];

const contagemFrutas = frutas.reduce((acumulador, fruta) => {
  acumulador[fruta] = (acumulador[fruta] || 0) + 1;
  return acumulador;
}, {});

console.log(contagemFrutas);
// Saída: { maçã: 3, banana: 2, laranja: 1 }

numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}

console.log(allOver18); // Este método verifica se todos os valores de matriz são maiores que 18

numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value) {
  return value > 18;
}

console.log(someOver18); // Este método verifica se alguns valores de matriz são maiores que 18

const myArray = Array.from("ABCDEFG");

console.log(myArray);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "\n";
}

console.log(text);

fruits = ["Banana", "Orange", "Apple", "Mango"];
let f = fruits.entries();

for (let x of f) {
  console.log(x)
}

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");

console.log(myMonths); // adicionou o método Array with() como uma maneira segura de atualizar elementos em uma matriz sem alterar a matriz original.

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4]; // O operador ... expande um iterável (como um array) em mais elementos
