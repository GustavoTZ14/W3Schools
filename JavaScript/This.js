const person = {
  firstName: "Gustavo",
  lastName: "Terrin",
  id: 5566,
  age: 27,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

function Pessoa(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
};

const novaPessoa = new Pessoa("Gustavo", "Terrin", 27, "castanho");

console.log(novaPessoa.firstName, novaPessoa.lastName);

const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName: "John",
  lastName: "Doe",
}

// Return "John Doe":
console.log(person1.fullName.call(person2)); // o Método call e apply podem ser usados para chamar um método de objeto com outro objeto como argumento

let fullName = person.fullName.bind(person2);

console.log(fullName()); // Método bind pode pegar emprestado um método de outro objeto
