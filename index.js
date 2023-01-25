let counterReference = document.getElementById("counter");
let seconds = sessionStorage.getItem("seconds") || 0;
const counter = () => {
  seconds++;
  sessionStorage.setItem("seconds", seconds);
  counterReference.innerHTML = seconds;
};
setInterval(counter, 1000);
