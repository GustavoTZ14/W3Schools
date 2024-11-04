// Método apply()

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
  
const person1 = {
    firstName: "Mary",
    lastName: "Doe"
}

console.log(person.fullName.apply(person1));

// Apply() com argumentos

const persona = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
  
const persona1 = {
    firstName:"John",
    lastName: "Doe"
}

console.log(persona.fullName.apply(persona1, ["Oslo", "Norway"]));

// Simular um Método Max em Array

const maximo = Math.max(1,2,3);

console.log(maximo); // Como os arrays JavaScript não têm um método max(), você pode aplicar o Math.max()método.

console.log(Math.max.apply(null, [1,2,3]));