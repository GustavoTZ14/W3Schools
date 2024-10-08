let nome = "Gustavo";

let txt = "";
for (let x of nome) {
  txt += x + "\n";
};

console.log(txt);

let letters = ["a", "b", "c"];

let text = "";
for (let x of letters) {
  text += x + "\n";
};

console.log(text);

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const x of fruits) {
  text += x + "\n";
};

console.log(text);
