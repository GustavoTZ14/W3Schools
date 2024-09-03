const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());

person.name = function() {
  return this.firstName + " " + this.lastName;
};

console.log(person.name());
console.log(person)

person.name = function() {
  return (this.firstName + " " + this.lastName).toUpperCase();
};

console.log(person.name());
