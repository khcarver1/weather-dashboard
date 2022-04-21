// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city


//API KEy gen 151647b840c194226a1c0bf6610e7e11

var repoList = document.querySelector('#weather-box');
var fetchButton = document.getElementById('fetch-button');
var searchInput = document.querySelector("#citysearchbox");

// `getApi` function is called when the `fetchButton` is clicked

function getApi() {
  var cityName = searchInput.value.trim();
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=151647b840c194226a1c0bf6610e7e11";
  fetch(requestUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        console.log(data);
      for (var i = 0; i < 5; i++) {   
        var listItem = document.createElement('li');

        listItem.textContent = data.list[i];

        repoList.appendChild(listItem);
      }
    });
    console.log(requestUrl);
    console.log(cityName);
}

fetchButton.addEventListener('click', getApi);
