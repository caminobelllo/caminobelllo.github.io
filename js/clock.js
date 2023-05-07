const clock = document.querySelector("h2#clock");
const currentDate = document.getElementById("currentDate");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;

  year = String(date.getFullYear());
  month = String(date.getMonth() + 1).padStart(2, "0");
  day = String(date.getDate()).padStart(2, "0");
  currentDate.innerText = `${year}.${month}.${day}`;
}

getClock();
setInterval(getClock, 1000);
