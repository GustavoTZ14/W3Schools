// indexOf()

let texto = "Por favor, localize onde 'localizar' ocorre!";
let indice = texto.indexOf("localizar");

console.log(indice);

// lastIndexOf();

texto = "Por favor, localize onde 'localizar' ocorre!";
indice = texto.lastIndexOf("localizar");

console.log(indice);

// se o texto não for encontrado em indexOf e lastIndexOf retorna -1;

texto = "Por favor, localize onde 'localizar' ocorre!";
indice = texto.lastIndexOf("João");

console.log(indice);

// ambos métodos aceitam um segundo parametro;

texto = "Por favor, localize onde 'localizar' ocorre!";
indice = texto.indexOf("localizar", 15);

console.log(indice);

// lastIndexOf pesquisa para tras, se o segundo parametro for 15, a pesquisa 
// começa na posição 15 e procura até o início da string;

texto = "Por favor, localize onde 'localizar' ocorre!";
indice = texto.lastIndexOf("localizar", 15);

console.log(indice);

// search();

texto = "Por favor, localize onde 'localizar' ocorre!";
let search = texto.search("localizar");

console.log(search);

// match();

text = "The rain in SPAIN stays mainly in the palin";
let match = text.match(/ain/gi);// gi = pesquisa global sem distinção por 
//maiuscula ou minuscula.

console.log(match);

// matchAll();

text = "I love cats. Cats are very easy to love. Cats are very popular.";
const textoIterador = text.matchAll("Cats");

console.log(Array.from(textoIterador));
Array.from(textoIterador);

//includes();

texto = "Olá, mundo, bem-vindo ao universo.";
let incluir = texto.includes("mundo");

console.log(incluir);

// startsWith();

texto = "Olá, mundo, bem-vindo ao universo";
let comecar = texto.startsWith("Olá");

console.log(comecar); // retorna true

comecar = texto.startsWith("mundo");

console.log(comecar)  // retorna false

comecar = texto.startsWith("mundo", 6) // retorna true

// endsWith();

comecar = texto.endsWith("universo");

console.log(comecar);
