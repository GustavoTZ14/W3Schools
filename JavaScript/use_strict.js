// No modo estrito não pode usar variáveis não declaradas

"use strict"; // Escopo Global

x = 3.14;

console.log(x);

myFunction();

function myFunction(){
    y = 3.14;
};