function formatDate(timestamp) {
let now = new Date(timestamp);
let hours = now.getHours();
let minutes = now.getMinutes();
}
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

<<<<<<< HEAD
function search(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
    let city = document.querySelector("#city");
    city.innerHTML = cityInput.value;
  }
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", search);
  
  function search(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
    let city = document.querySelector("#city");
    city.innerHTML = cityInput.value;
  }
  
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
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temp-max").innerHTML = `${Math.round(
      response.data.main.temp
    )}°`;
  }
  
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
  
  let apiKey = "37c9014ec42aa6b4e9bea13d45c47a71";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(displayWeather);


=======
function displayTemperature(response) {
    
  let temperatureMin = document.querySelector("#temp-min");
  temperatureMin.innerHTML = response.data.main.temp_min;
  let temperatureMax = document.queryCommandValue("#temp-max")
  temperatureMax.innerHTML = response.data.main.temp_max;
}
  let apiKey = "65869b8a8fcb3e6e3a40de70fc6535b7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
>>>>>>> parent of 09ef7d2 (update js as before)
