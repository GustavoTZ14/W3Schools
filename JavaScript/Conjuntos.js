let letters = new Set(["a", "b", "c"]);

console.log(letters.size);

letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");
letters.add("d");

console.log(letters.size);

const a = "a";
const b = "b";
const c = "b";
const d = "d";
const e = "e";

letters.add(e);

console.log(letters);

let text = "";
for (let x of letters) {
  text += x + "\n";
};

console.log(text); // listar todos os elementos do conjunto usando for of.

console.log(typeof letters);

console.log(letters instanceof Set);
