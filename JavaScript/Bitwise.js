let a = 5 & 1;
console.log(a);

let b = 5 | 1;
console.log(b);

let c = ~5;
console.log(c);

let d = 5 << 1;
console.log(d);

let e = 5 ^ 1;
console.log(e);

let f = 5 >> 1;
console.log(f);

let g = 5 >>> 1;
console.log(g);

let h = 0101 & 0001;
console.log(h);

let i = 0101 | 0001;
console.log(i);

let j = ~0101;
console.log(j);

let k = 0101 << 1;
console.log(k);

let l = 0101 ^ 0001;
console.log(l);

let m = 0101 >> 1;
console.log(m);

let n = 0101 >>> 1;
console.log(n);

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
};

console.log(dec2bin(101));

function bin2dec(bin) {
  return parseInt(bin, 2).toString(10);
};

console.log(bin2dec(101));
