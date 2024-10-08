let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue }//{ break }
  text += "O número é " + i + "\n"
};

console.log(text);

const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "\n";
  text += cars[1] + "\n";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
};

console.log(text);
