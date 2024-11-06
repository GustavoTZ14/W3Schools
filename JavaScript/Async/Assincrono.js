// JavaScript Assincrono

function myDisplayer(something) {
  console.log(something);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// Função setTimeout()

setTimeout(myFunction, 3000);

function myFunction() {
  console.log("Hello World");
}

// setInterval()

setInterval(myFunction2, 1000);

function myFunction2() {
  let d = new Date();
  console.log(d.getHours(), ":", d.getMinutes(), ":", d.getSeconds())
}
