// math.random e math.floor pode ser usados para retornar inteiros aleatorios

console.log(Math.floor(Math.random() * 10));

console.log(Math.ceil(Math.random() * 10));

console.log(Math.floor(Math.random() * 10) + 1);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRndInteger(10, 20));
