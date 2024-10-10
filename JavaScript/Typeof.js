console.log(typeof "John");
console.log(typeof ("John" + "Doe"));
console.log(typeof 3.14);
console.log(typeof 33);
console.log(typeof true);
console.log(typeof false);
console.log(typeof 1234n);
console.log(typeof Symbol());
console.log(typeof x);

/*O tipo de operador retorna o tipo de dados de uma variável JavaScript.
 *
 * Em JavaScript, um valor primitivo é um único valor sem propriedades ou
 * métodos.
*/

console.log(typeof null);

// O JavaScript tem um tipo de dados complexo -> objeto

console.log(typeof { name: 'john' });
console.log(typeof [1, 2, 3, 4]);
console.log(typeof new Map());
console.log(typeof new Set());
console.log(typeof function() { });

// Método para reconhecer um array

const frutas = ["apples", "bananas", "oranges"];

console.log(Array.isArray(frutas));

// instanceof retorna true se um objeto é uma instância de um tipo de objeto

const time = new Date();

console.log(time instanceof Date);

// Constructor propriedade devolve o construtor função para todas variáveis

console.log({ name: 'John', age: 34 }.constructor);
console.log([1, 2, 3, 4].constructor);
console.log(new Date().constructor);
console.log(new Set().constructor);
console.log(new Map().constructor);
console.log(function() { }.constructor);

// Com constructor, você pode verificar se um objeto é um Array

console.log((frutas.constructor === Array));

// Com constructor, pode-se verificar se um objeto é uma data

console.log((time.constructor === Date));
