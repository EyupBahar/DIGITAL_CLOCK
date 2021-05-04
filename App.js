const clock = document.getElementById("clock");
const date = document.getElementById("date");

let currentDate = new Date();

date.innerHTML = `${
  currentDate.getMonth() + 1
} / ${currentDate.getDate()} / ${currentDate.getFullYear()}`;

function time() {
  var dt = new Date();
  var sc = dt.getSeconds();
  var mn = dt.getMinutes();
  var hr = dt.getHours();
  clock.innerHTML =
    ("0" + hr).substr(-2) +
    ":" +
    ("0" + mn).substr(-2) +
    ":" +
    ("0" + sc).substr(-2);
}

setInterval(time, 1000);
