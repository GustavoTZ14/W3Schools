//let x = 6;
//let y = 5;
//let z = x % y; // operador módulo

//console.log(z) // resto da divisão

// Operador de incremento (++)

//let x = 5;
//x++;
//let z = x;

//console.log(z) // adiciona mais 1

// Operador de decremento

let x = 5;
x--;
let z = x;

console.log(z)

// Exponenciação

let z = 5 ** 2; // 5 é elevado a 2
let z = Math.pow(5, 2); // 5 é elevado a 2

// Precedência do Operador

let x = 100 + 50 * 3; // Multiplicação ( *) e divisão ( /) têm maior precedência 
//do que adição ( +) e subtração ( -).

// Ao usar parênteses, as operações dentro deles são computadas primeiro.

let x = (100 + 50) * 3;

// Quando operações tem a mesma precedência

let x = 100 + 50 - 3; // calcula da esquerda para a direita.
