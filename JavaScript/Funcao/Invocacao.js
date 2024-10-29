// Invocando função

function myFunction(a, b) {
    return a * b;
}

myFunction(10, 2);

// Invocando uma função como um metodo

const myObject = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() { // isso é um método
        return this.firstName + " " + this.lastName;
    }
}

console.log(myObject.fullName());

// Invocando uma função com um construtor de função

function myFunction2(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}

const myObj = new myFunction2("John", "Doe");

console.log(myObj.firstName);