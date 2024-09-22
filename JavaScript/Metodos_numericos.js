let x = 123;

console.log(x.toString());
console.log((123).toString());
console.log((100 + 23).toString());

x = 9.99999999999999999999999999999999999;
console.log(x.toExponential(2));
console.log(x.toExponential(4));
console.log(x.toExponential(6));

x = 9.656;
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toFixed(6));

x = 9.656;
console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(3));

x = 123;
console.log(x.valueOf());
console.log((123).valueOf());
console.log((100 + 23).valueOf());

console.log(Number(new Date("1970-01-01")));

x = new Date("1970-01-02");
console.log(Number(x));

console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

console.log(Number.parseFloat("10"));
