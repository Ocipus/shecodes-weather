let now = new Date();
let hours = now.getHours();
if(hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let dateTime = document.querySelector("#date-time");
dateTime.innerHTML = `${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = document.querySelector("#city");
  city.innerHTML = cityInput.value;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function fahrenheitUnit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature-today");
  temperature.innerHTML = 86;
}

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", fahrenheitUnit);

function celsiusUnit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature-today");
  temperature.innerHTML = 30;
}
let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", celsiusUnit);



function displayWeather(response) {
  let tempMax = document.querySelector("#temp-max");
  let tempMin = document.querySelector("#temp-min")
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
}


  celsiusTemperature = response.data.main.temp;

  tempMax.innerHTML = response.data.main.temp_max;
  tempMin.innerHTML = response.data.main.temp_min;
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);





function searchCity(city) {
  let apiKey = "37c9014ec42aa6b4e9bea13d45c47a71";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchLocation(position) {
  let apiKey = "37c9014ec42aa6b4e9bea13d45c47a71";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);