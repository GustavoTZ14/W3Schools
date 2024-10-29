// Função de elevação

myFunction(5);

function myFunction(y) {
    return y * y;
}

console.log(myFunction(5));

// Função de auto-invocação

(function (){
    let x = "hello world";
    console.log(x);
})();

//Funções são objetos

function myFunction2(a, b){
    return arguments.length;
}

console.log(myFunction2(1, 2));

function myFunction3(a, b){
    return a * b;
}

let text = myFunction3.toString();

console.log(text);

// Funções de seta

const x = (x, y) => x * y;

const y = (x, y) => {return x * y};