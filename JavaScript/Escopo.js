// Escopo Global 

const meuCarro = ["Fusca"];

// Escopo de Função

function myCar() {
  const meuCarro = ["Fusca"]; // Dentro de uma função var, let e const são a mesma coisa
};

// Escopo de Bloco

{
  const meuCarro = ["Fusca"];
};

// Automaticamente Global

function myFunction() {
  carName = "Volvo"; // carName se torna uma variavel global, mesmo que seja dentro de uma função
};
