function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

  if (x == 0) {
    myResolve("OK");
  }
  else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) { myDisplayer(value); },
  function(error) { myDisplayer(error); }
);

// Promise com setTimeout()

let myPromise2 = new Promise(function(myResolve2, myReject2) {
  setTimeout(function() { myResolve2("Hello World!!"); }, 3000);
});

myPromise2.then(function(value) {
  console.log(value);
})
