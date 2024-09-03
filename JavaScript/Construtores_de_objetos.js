function Person(first, last, age, eye) {
  this.firstName = first;
  this.lasteName = last;
  this.age = age;
  this.eyeColor = eye; // função construtora de objetos
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather.firstName, "tem", myFather.age)

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English"; // Um valor dado a uma propriedade será um valor padrão para todos os objetos criados pelo construtor.
}

console.log(myFather.nationality)

myFather.nationality = "portugues"; // adicionando uma propriedade a um objeto criado.

console.log(myFather.nationality);

Person.nationality = "English"; // não podemos adicionar uma nova propriedade a um contrutor de objeto.

Person.prototype.pais = "brasil"; // para adicionar uma nova propriedade a um contrutor de objeto.

console.log(myMother.pais);
console.log(myFather.pais);

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
};

console.log(myFather.fullName())

//myMother.changeName = function(name) {
//this.lastName = name;
//}

//myMother.changeName = ("Doe"); // não podemos adicionar um novo método a uma função construtora de objeto
//console.log(myMother.lastName)

Person.prototype.changeName = function(name) {
  this.lastName = name;
}

myMother.changeName("Doe");
console.log(myMother.lastName)

function bot() {
  conp = "computado";
  console.log(this.conp)
}

console.log(bot())
