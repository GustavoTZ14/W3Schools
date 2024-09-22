let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345);

console.log(x, y)

x = BigInt(99999999999999);
let type = typeof x;

console.log(type);

x = Number.MAX_SAFE_INTEGER

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(123456677889890));
