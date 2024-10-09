let fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let numb = fruits.get("apples");

console.log(numb);

let frutas = new Map();

frutas.set("apples", 500);
frutas.set("bananas", 300);
frutas.set("oranges", 200);

console.log(frutas);

frutas.set("apples", 100);

console.log(frutas);

console.log(typeof frutas);
