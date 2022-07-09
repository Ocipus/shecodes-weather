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

function displayTemperature(response) {
    
  let temperatureMin = document.querySelector("#temp-min");
  temperatureMin.innerHTML = response.data.main.temp_min;
  let temperatureMax = document.queryCommandValue("#temp-max")
  temperatureMax.innerHTML = response.data.main.temp_max;
}
  let apiKey = "65869b8a8fcb3e6e3a40de70fc6535b7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);