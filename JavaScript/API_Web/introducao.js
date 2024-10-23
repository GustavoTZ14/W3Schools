function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    console.log("Geolocalização não é suportada para esse browser");
  }
}

function showPosition(position) {
  console.log(position.coords.latitude);
}

console.log(getLocation())
