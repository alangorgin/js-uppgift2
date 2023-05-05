const apiKey = "262cd0cb3667ea5580cc6eb3a24dead2";


// User searches for a location
// We take the search term and send it to the weather API
// We breakdown the received data and display it on the site

const searchButton = document.querySelector("button");

searchButton.addEventListener("click", getAPI);

function getAPI(){
    // Get user input
    const searchBar = document.querySelector("#searchbar");
    const searchPhrase = searchBar.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchPhrase}&APPID=${apiKey}`;
    fetch(url);


}
