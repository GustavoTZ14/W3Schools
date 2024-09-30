let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits); // sort coloca em orden alfabetica o array

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();

console.log(fruits); // o metodo reverte os elementos em um array

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

console.log(fruits); // faço o reverso da ordem alfabetica

let months = ["Jan", "Feb", "Mar", "Apr"];
let sorted = months.toSorted();

console.log(sorted); // sorteia o array sem alterar o original

months = ["Jan", "Feb", "Mar", "Apr"];
let reversed = months.toReversed();

console.log(reversed); // reverte um array sem alterar o array original

let points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return a - b });

console.log(points); // sort não funciona em Number, por isso função de comparação onde a - b será 40 - 100 = -60 que será maior que 40

points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return b - a });

console.log(points);

points = [40, 100, 1, 5, 25, 10];
points.sort(function() { return 0.5 - Math.random() });

console.log(points); // aqui a função de comparação gera numeros aleatorios com metodo Math.random

points = [40, 100, 1, 5, 25, 10];

for (let i = points.length - 1; i > 0; i--) {
  let J = Math.floor(Math.random() * (i + 1));
  let K = points[i];
  points[i] = points[J];
  points[J] = K;
};

console.log(points); // O metodo fisher yates embaralha o array e sua mente

points = [40, 100, 1, 5, 25, 10];

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
};

console.log(myArrayMin(points));

// alternativa do chatgpt

points = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr) {
  return Math.max(...arr);
};

console.log(myArrayMax(points)); // aqui é usado o operador spred

//

let cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];

cars.sort(function(a, b) { return a.year - b.year });

console.log(cars);
