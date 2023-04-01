function showDate(timestamp) {
  let currentData = new Date(timestamp);
  let hours = currentData.getHours();
  let mins = currentData.getMinutes();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[currentData.getDay()];
  if (mins < 10) {
    hours = `0${mins}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${day} ${hours}:${mins}`;
}
function showTemp(response) {
  let temp = document.querySelector("#temp");
  temp.innerHTML = Math.round(response.data.temperature.current);
  let city = document.querySelector("#city-name");
  city.innerHTML = response.data.city;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = Math.round(response.data.temperature.humidity);
  let pressure = document.querySelector("#pressure");
  pressure.innerHTML = Math.round(response.data.temperature.pressure);
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
  let description = document.querySelector("#description");
  description.innerHTML = response.data.condition.description;
  let date = document.querySelector("#date");
  date.innerHTML = showDate(response.data.time * 1000);
  let icon = document.querySelector("#weather-icon");
  icon.setAttribute("src", `${response.data.condition.icon_url}`);
  icon.setAttribute("alt", `${response.data.condition.description}`);

  cTemp = response.data.temperature.current;
}
function search(city) {
  let apiKey = "003t332ed0o5bff6b090e30a0649afb0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#input-search-city");
  search(cityInput.value);
}

function changeUnitC(event) {
  event.preventDefault();
    celsius.classList.add("active");
    Fahrenheit.classList.remove("active");
  let tempC = document.querySelector("#temp");
  tempC.innerHTML = Math.round(cTemp);
}

function changeUnitF(event) {
  event.preventDefault();
  celsius.classList.remove("active");
  Fahrenheit.classList.add("active");

  let farenheitTemp = cTemp * 1.8 + 32;
  let tempF = document.querySelector("#temp");
  tempF.innerHTML = Math.round(farenheitTemp);
}
let Fahrenheit = document.querySelector("#f-unit");
Fahrenheit.addEventListener("click", changeUnitF);

let celsius = document.querySelector("#c-unit");
celsius.addEventListener("click", changeUnitC);

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let cTemp = null;

search("paris");
