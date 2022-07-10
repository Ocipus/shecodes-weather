let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let dateTime = document.querySelector("#date-time");
dateTime.innerHTML = `${day} ${hours}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = document.querySelector("#city");
  city.innerHTML = cityInput.value;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

function search(city) {
  let apiKey = "37c9014ec42aa6b4e9bea13d45c47a71";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  search(cityElement.value);
  }

  let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function displayTemperature(response) {
  let tempMin = document.querySelector("#temp-min");
let tempMax = document.querySelector("#temp-max")
  let descriptionElement = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date-time");
  let iconElement = document.querySelector("#icon");

  celsiusTemp = response.data.main.temp;

  tempMin.innerHTML = Math.round(celsiusTemp);
  tempMax.innerHTML = Math.round(celsiusTemp);
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  

function fahrenheitTemp(event) {
  event.preventDefault();
  let tempMin = document.querySelector("#temp-min");
  let tempMax = document.querySelector("#temp-max");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  tempMin.innerHTML = Math.round(fahrenheitTemp);
  tempMax.innerHTML = Math.round(fahrenheitTemp);
}

function celsiusTemp(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let tempMin = document.querySelector("#temp-max");
  tempMin.innerHTML = Math.round(celsiusTemp);
  let tempMax = document.querySelector("#temp-min");
  tempMax.innerHTML = Math.round(celsiusTemp);
}

let celsiusTemp = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", fahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", celsiusTemperature);
}