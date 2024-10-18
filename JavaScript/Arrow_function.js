let myFunction = (a, b) => a * b;

hello = function() {
  return "Hello World!"; // Função normal sem seta
};

hello = () => {
  return "Hello World!"; // Função de seta
};

const frm = document.getElementById("form");

frm.addEventListener("submit", () => {
  "hellow world"; // Função de seta
});

hello = () => "Hello World";

// Função de seta com parâmetro

hello = (val) => "Hello" + val;

// Função de seta sem parênteses

hello = val => "hello " + val;
