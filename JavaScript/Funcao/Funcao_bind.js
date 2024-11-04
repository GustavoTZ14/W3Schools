
// Método bind()

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
}
  
const member = {
    firstName:"Hege",
    lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);

console.log(fullName());

const personage = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      let x = document.getElementById("demo");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
}
  
person.display();