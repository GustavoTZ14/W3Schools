// Método search();


let text = "Visit W3Schools";
let n = text.search("W3Schools");

console.log(n);

n = text.search(/W3Schools/i);

console.log(n);

// Método replace(, );

text = "Visit Microsoft";
let result = text.replace("Microsoft", "W3Schools");

console.log(result);

result = text.replace(/microsoft/i, "W3Schools");

console.log(result);

// RegExp

console.log(/e/.test("Nunca faça um código grande!"));

console.log(/e/.exec("Nunca faça um código grande"));
