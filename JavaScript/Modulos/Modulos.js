import { name, age } from "./person.js"; // Importação de exportação nomeadas

let text = "My name is " + name + ", I am " + age + ".";
console.log(text);

import message from "./message.js";

console.log(message()); // Importar de exportação padrão
