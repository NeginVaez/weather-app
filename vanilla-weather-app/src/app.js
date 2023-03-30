//weather
function showTemp(response) {
  console.log(response.data);
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
}

let apiKey = "003t332ed0o5bff6b090e30a0649afb0";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=london&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemp);

//time
