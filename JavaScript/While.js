let text = "";

let i = 0;

while (i < 10) {
  text += "the number is " + i + "\n";
  i++;
}

console.log(text);

do {
  text += "the number is " + i + "\n";
  i++;
}
while (i < 10);

console.log(text);

let cars = ["BMW", "Volvo", "Saab", "Ford"];
i = 0;
text = "";

for (; cars[i];) {
  text += cars[i] + "\n";
  i++;
};

console.log(text);

cars = ["BMW", "Volvo", "Saab", "Ford"];

i = 0;
text = "";

while (cars[i]) {
  text += cars[i] + "\n";
  i++;
};

console.log(text);
