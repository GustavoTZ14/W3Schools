let person = { fname: "john", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x];
};

console.log(text);

let numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] + "\n";
};

console.log(txt);

numbers.forEach(myFunction);

function myFunction(value) {
  txt += value;
}

console.log(txt);

Object.keys(person).forEach((value) => {
  console.log(`${value}: ${person[value]}`)
})
