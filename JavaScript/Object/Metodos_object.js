const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const person2 = {firstName: "Anne",lastName: "Smith"};

Object.assign(person1, person2); // copia de propriedade de um ou mais objetos de origem para um objeto alvo

let text = Object.entries(person1); // entries() retorna um array dos pares chave/valor em um objeto

console.log(text);

// Object.entries()

const fruits = {Bananas:300, Oranges:200, Apples:500};

let txt = "";
for(let [fruit, value] of Object.entries(fruits)){
    txt += fruit + ": " + value + "\n";
}

console.log(txt);

const myMap = new Map(Object.entries(fruits));

console.log(myMap);

// Object.fromEntries()

const frutas = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];

const myObj = Object.fromEntries(frutas); // Metodo cria um objeto a partir de uma lista de pares chave/valor

console.log(myObj);

// Object.values()

let pessoa = Object.values(person1);

console.log(pessoa);

// Object.groupBy()

const fruta = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
];

function myCallback({quantity}){
    return quantity > 200 ? "ok" : "low";
}

const result = Object.groupBy(fruta, myCallback);

console.log(result);

// Object.keys()

const keys = Object.keys(person1);

console.log(keys);