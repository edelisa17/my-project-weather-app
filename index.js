let now = new Date();
let p = document.querySelector("p");
let hours = now.getHours();
let minutes = now.getMinutes();
minutes = minutes < 10 ? "0" + minutes : minutes;

let days = [
  "Sunday",
  "Monday",
  "Tueesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
p.innerHTML = `❀${day} ${hours}:${minutes}❀`;

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#more").innerHTML = response.data.weather[0].main;
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "8343c7373393a70e86482abaf563c8d9";
  let searchInput = document.querySelector("#search-text-input");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;
}
let cityInput = document.querySelector("#city-input");
cityInput.addEventListener("click", searchCity);







 

 

  
