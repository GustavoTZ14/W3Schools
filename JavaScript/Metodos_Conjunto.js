let letters = new Set(["a", "b", "c"]); // Passe um array para o new Set().

letters.add("d"); // Metodo add() adiciona um novo elemento

// se voce add elementos iguais apenas o primeiro que conta

let txt = "";
for (let x of letters) {
  txt += x + "\n";
};

console.log(txt); // Método para listar os elementos do conjunto

answer = letters.has("d");
console.log(answer); // Método retorna True se um valor existe em um conjunto

letters.forEach(function(value) {
  txt += value;
});

console.log(txt); // Método forEach invoca uma função para cada elemento

let myIterator = letters.values();

let text = "";
for (let entry of myIterator) {
  text += entry;
};

console.log(text); // O values() retorna um objeto iterator com os valores

for (let entry of letters.keys()) {
  text += entry + "\n";
};

console.log(text); // Método keys retorna o mesmo valor de values

for (let entry of letters.entries()) {
  text += entry;
};

console.log(text);
