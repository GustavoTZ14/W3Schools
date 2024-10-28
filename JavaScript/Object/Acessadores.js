// JavaScrit Getter

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get lang() {
//       return this.language;
//     }
// };

//console.log(person.lang);

// Setter

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "",
//     set lang(lang) {
//       this.language = lang;
//     }
// };

// person.lang = "en";

// console.log(person.language);

const pessoa = {
    firstName: "Gustavo",
    lastName: "Terrin",
    get fullName(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(pessoa.fullName);

const persona = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang(){
        return this.language.toUpperCase();
    }
};

console.log(persona.lang);