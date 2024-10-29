// Parametros Padrão

function myFunction(x, y){
    if(y === undefined){
        y = 2;
    }

    return x * y;
}

console.log(myFunction(4));

// Valores de parâmetros padrão

function myFunction2(x, y = 10){  // se y não for passado ou for indefinido, então y = 10
    return x + y;
}

console.log(myFunction2(5));

// Função Rest Parâmetro

function sum(...args){
    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

console.log(x);

// O Objeto Argumentos

x = findMax(1, 123, 500, 115, 44, 88);

function findMax(){
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

console.log(x);

y = sumALL(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}