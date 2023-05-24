const apiKey = "262cd0cb3667ea5580cc6eb3a24dead2";

const searchButton = document.querySelector("button");
const tempElement = document.querySelector("#h2-main");
const weatherDescription = document.querySelector("#h4-main");
const footer = document.querySelector("#h2-footer");
const searchBar = document.querySelector("#searchbar");
const timeAndDate = document.querySelector("#h5-main");

setInterval(updateTimeAndDate, 1000);
setInterval(getAPI, 1000 * 60 * 30);
searchButton.addEventListener("click", getAPI);

async function getAPI() {
  const searchPhrase = searchBar.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchPhrase}&APPID=${apiKey}`;
  const response = await fetch(url);
  const responseBody = await response.json();
  const celciusFeelsLike = responseBody.main.feels_like - 273.15;

  const celcius = responseBody.main.temp - 273.15;
  tempElement.textContent = `The temperature in ${
    responseBody.name
  } is ${Math.round(celcius)}°C but feels like ${Math.round(
    celciusFeelsLike
  )}°C.`;

  weatherDescription.textContent =
    responseBody.weather[0].description + " vibes.";

  footer.textContent = `Humidity: ${responseBody.main.humidity} | Pressure: ${responseBody.main.pressure} | Wind: ${responseBody.wind.speed}`;
}

function updateTimeAndDate() {
  const date = new Date();
  timeAndDate.textContent = date;
}
