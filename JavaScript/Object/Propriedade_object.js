// Object.defineProperty()

const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
};

Object.defineProperty(person, "year", {value:"2008"}); // adiciona uma nova propriedade

console.log(person.year);

Object.defineProperty(person, "language", {value : "BR"}); // Altera um valor de propriedade

console.log(person.language);

Object.defineProperty(person, "language", {writable: false}); // este exemplo faz com que a linguagem somente leia

console.log(person.language);

Object.defineProperty(person, "language", {enumerable: false}); // este exemplo torna a linguagem não enumeravel

console.log(person.language);

// Object.getOwnPropertyNames()

console.log(Object.getOwnPropertyNames(person)); // listar propriedades de objeto

console.log(Object.defineProperty(person, "language", {enumerable: false})); // tambem listara propriedades que não sejam enumeráveis

// Object.keys()

Object.defineProperty(person, "language", {enumerable: false});

console.log(Object.keys(person));

let text = "";
for(let pessoa in person){
    text += person[pessoa] + "\n" // Mostra somente os enumeraveis
}

console.log(text);