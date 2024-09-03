// Instruções JavaScript

let x, y, z; // Declaração 1
x = 5;       // Declaração 2
y = 6;       // Declaração 3
z = x + y;   // Declaração 4

// Instruções JavaScript
// As instruções JavaScript são compostas de:
// Valores, operadores, expressões, palavra-chave e comentários.

document.getElementById("demo").innerHTML = "Hello Dolly"; // declaração

// Ponto e vírgula;
// Ponto e vírgula separam instruções JavaScript.

let a, b, c; // Declare 3 variaveis
a = 5;       // a recebe 5
b = 6;       // b recebe 6
c = a + b    // c recene a soma de a e b

// Quando separadas por ponto e virgula, várias instruções em uma linha são
// permitidas.

a = 5; b = 6; c = a + b;

/* 
    Espaço em branco JavaScript

    JavaScript ignora múltiplos espaços. Você pode adicionar espaços em branco 
    ao seu script para torná-lo mais legível.

    Uma boa prática é colocar espaços em volta dos operadores ( = + - * / ).
*/

let person = "Hege";
let person="Hege";

let x = y + z;

/* 
    Comprimento de linha e quebras de linha em JavaScript

    Para melhor legibilidade, evite códigos com mais de 80 caracteres.

    Se uma instrução JavaScript não couber em uma linha, o melhor lugar para 
    quebrá-la é depois de um operador:
*/

document.getElementById("demo").innerHTML =
"Hello Dolly!";

// exemplo do gustavo

document.getElementById(
    "demo"
).innerHTML = "Hello Dolly!";

/* 
    Blocos de código JavaScript

    As instruções JavaScript podem ser agrupadas em blocos de código, dentro de 
    chaves {...}.
*/

function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
}

/* 
    Palavras-chave JavaScript

    As instruções JavaScript geralmente começam com uma palavra-chave para 
    identificar a ação JavaScript a ser executada.
*/

var // Declara uma variável
let // Declara uma variável de bloco
const // Declara uma constante de bloco
if // Marca um bloco de instrução a serem executados sob uma condição
switch // Marca um bloco de instruções a serem executadas em casos diferentes
for // Marca um bloco de instruções a serem executadas em um loop
function // Declara uma função
return // Sai de uma função
try // Implementa o tratamento de erros em um bloco de instruções

/*Palavras-chave JavaScript são palavras reservadas. Palavras reservadas não 
podem ser usadas como nomes para variáveis.*/