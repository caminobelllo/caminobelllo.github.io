const API_KEY = "82f64d8c6a9647fdd27a356a3c6bb17c";

function getWeather(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather p:first-child");
      const temp = document.querySelector("#weather p:last-child");

      city.innerText = `${data.name}`;
      temp.innerText = `${data.main.temp}°C`;
    });
}

navigator.geolocation.getCurrentPosition(getWeather);
