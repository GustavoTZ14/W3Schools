async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) { myDisplayer(value); },
  function(error) { myDisplayer(error); }
);

// Await

async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();


