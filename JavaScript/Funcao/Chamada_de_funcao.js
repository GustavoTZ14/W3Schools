// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName; // Uma função metodo de objeto
//     }
// };

// console.log(preson.fullName());

// Método JavaScript call()

const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

console.log(person.fullName.call(person2));

// Método call() com argumentos

const per = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const per1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(per.fullName.call(per1, "Oslo", "Norway"));
