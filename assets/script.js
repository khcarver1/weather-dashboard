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
var properCityName = "";
var todaysForecast = document.querySelector('#weathertoday')
var searchList = document.querySelector('#searchlist');
var day0 = document.querySelector('#weather-box0');
var day1 = document.querySelector('#weather-box1');
var day2 = document.querySelector('#weather-box2');
var day3 = document.querySelector('#weather-box3');
var day4 = document.querySelector('#weather-box4');

var todaysForecastDisplayDate = document.createElement('h2');
var todaysForecastDisplayTemp = document.createElement('li');
var todaysForecastDisplayWind = document.createElement('li');
var todaysForecastDisplayHumidity = document.createElement('li');
todaysForecast.appendChild(todaysForecastDisplayDate);
todaysForecast.appendChild(todaysForecastDisplayTemp);
todaysForecast.appendChild(todaysForecastDisplayWind);
todaysForecast.appendChild(todaysForecastDisplayHumidity);


//day0
var day0Temp = document.createElement('li');
var day0Wind = document.createElement('li');
var day0Humidity = document.createElement('li');
var day0IconContainer = document.createElement('li');
var day0Icon = document.createElement('img');
var day0Date = document.createElement('h3');
day0.appendChild(day0Date);
day0.appendChild(day0IconContainer);
day0IconContainer.appendChild(day0Icon);
day0.appendChild(day0Temp);
day0.appendChild(day0Wind);
day0.appendChild(day0Humidity);
//day1
var day1Temp = document.createElement('li');
var day1Wind = document.createElement('li');
var day1Humidity = document.createElement('li');
var day1IconContainer = document.createElement('li');
var day1Icon = document.createElement('img');
var day1Date = document.createElement('h3');
day1.appendChild(day1Date);
day1.appendChild(day1IconContainer);
day1IconContainer.appendChild(day1Icon);
day1.appendChild(day1Temp);
day1.appendChild(day1Wind);
day1.appendChild(day1Humidity);
//day2
var day2Temp = document.createElement('li');
var day2Wind = document.createElement('li');
var day2Humidity = document.createElement('li');
var day2IconContainer = document.createElement('li');
var day2Icon = document.createElement('img');
var day2Date = document.createElement('h3');
day2.appendChild(day2Date);
day2.appendChild(day2IconContainer);
day2IconContainer.appendChild(day2Icon);
day2.appendChild(day2Temp);
day2.appendChild(day2Wind);
day2.appendChild(day2Humidity);
//day3
var day3Temp = document.createElement('li');
var day3Wind = document.createElement('li');
var day3Humidity = document.createElement('li');
var day3IconContainer = document.createElement('li');
var day3Icon = document.createElement('img');
var day3Date = document.createElement('h3');
day3.appendChild(day3Date);
day3.appendChild(day3IconContainer);
day3IconContainer.appendChild(day3Icon);
day3.appendChild(day3Temp);
day3.appendChild(day3Wind);
day3.appendChild(day3Humidity);
//day4
var day4Temp = document.createElement('li');
var day4Wind = document.createElement('li');
var day4Humidity = document.createElement('li');
var day4IconContainer = document.createElement('li');
var day4Icon = document.createElement('img');
var day4Date = document.createElement('h3');
day4.appendChild(day4Date);
day4.appendChild(day4IconContainer);
day4IconContainer.appendChild(day4Icon);
day4.appendChild(day4Temp);
day4.appendChild(day4Wind);
day4.appendChild(day4Humidity);

var dayContainer = document.querySelector("#day-container");
var fetchButton = document.getElementById('fetch-button');
var searchInput = document.querySelector("#citysearchbox");
var searchList = document.querySelector('#searchlist')
var searchInputHistory
for (var key in localStorage) {

  if (key == "searchInputHistory") {
    searchInputHistory = localStorage.getItem("searchInputHistory")
  }
  else {
    searchInputHistory = []
  }
}
dayContainer.style.display = "none";
todaysForecast.style.display = "none";
function getWeeklyApi() {
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput.value.trim() + "&appid=151647b840c194226a1c0bf6610e7e11&units=imperial";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var properCityName = (data.city.name);
      searchInputHistory.push(properCityName);
      localStorage.setItem("searchInputHistory", searchInputHistory);
      //sets the data to display flex, since above it's set to display none for when the page first loads
      todaysForecast.style.display = "flex";
      dayContainer.style.display = "flex";
      //sets the users search criteria to local stor. adding to an array each time
      // day0.clear();
      //todays weather forecast, the top box
      todaysForecastDisplayDate.textContent = data.city.name + " (" + (data.list[0].dt_txt).slice(5, 7) + "/" + (data.list[0].dt_txt).slice(8, 10) + "/" + (data.list[0].dt_txt).slice(0, 4) + ")";
      todaysForecastDisplayTemp.textContent = "Temp: " + data.list[0].main.feels_like;
      todaysForecastDisplayWind.textContent = "Wind: " + data.list[0].wind.speed;
      todaysForecastDisplayHumidity.textContent = "Humidity: " + data.list[0].main.humidity;
      //day 0
      day0Date.textContent = (data.list[2].dt_txt).slice(5, 7) + "/" + (data.list[2].dt_txt).slice(8, 10) + "/" + (data.list[2].dt_txt).slice(0, 4);
      day0Temp.textContent = "Temp: " + data.list[2].main.feels_like;
      day0Wind.textContent = "Wind: " + data.list[2].wind.speed;
      day0Humidity.textContent = "Humidity: " + data.list[2].main.humidity;
      day0Icon.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png");
      //day 1
      day1Date.textContent = (data.list[13].dt_txt).slice(5, 7) + "/" + (data.list[13].dt_txt).slice(8, 10) + "/" + (data.list[13].dt_txt).slice(0, 4);
      day1Temp.textContent = "Temp: " + data.list[13].main.feels_like;
      day1Wind.textContent = "Wind: " + data.list[13].wind.speed;
      day1Humidity.textContent = "Humidity: " + data.list[13].main.humidity;
      day1Icon.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[13].weather[0].icon + ".png");
      //day 2
      day2Date.textContent = (data.list[21].dt_txt).slice(5, 7) + "/" + (data.list[21].dt_txt).slice(8, 10) + "/" + (data.list[21].dt_txt).slice(0, 4);
      day2Temp.textContent = "Temp: " + data.list[21].main.feels_like;
      day2Wind.textContent = "Wind: " + data.list[21].wind.speed;
      day2Humidity.textContent = "Humidity: " + data.list[21].main.humidity;
      day2Icon.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[21].weather[0].icon + ".png");
      //day 3
      day3Date.textContent = (data.list[26].dt_txt).slice(5, 7) + "/" + (data.list[26].dt_txt).slice(8, 10) + "/" + (data.list[26].dt_txt).slice(0, 4);
      day3Temp.textContent = "Temp: " + data.list[26].main.feels_like;
      day3Wind.textContent = "Wind: " + data.list[26].wind.speed;
      day3Humidity.textContent = "Humidity: " + data.list[26].main.humidity;
      day3Icon.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[26].weather[0].icon + ".png");
      //day 4
      day4Date.textContent = (data.list[35].dt_txt).slice(5, 7) + "/" + (data.list[35].dt_txt).slice(8, 10) + "/" + (data.list[35].dt_txt).slice(0, 4);
      day4Temp.textContent = "Temp: " + data.list[35].main.feels_like;
      day4Wind.textContent = "Wind: " + data.list[35].wind.speed;
      day4Humidity.textContent = "Humidity: " + data.list[35].main.humidity;
      day4Icon.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[35].weather[0].icon + ".png");


      //display search history as buttons
      //need button element created, button element appended, have it loop through "searchInputHistory" array to make the buttons
      var searchButton = document.createElement('button')
      var searchName = document.createElement('li')





      if (searchInputHistory[0]) {
        searchName.textContent = searchInputHistory[0];
        searchList.appendChild(searchButton);
        searchButton.appendChild(searchName);
      }
      if (searchInputHistory[1]) {
        searchName.textContent = searchInputHistory[1];
        searchList.appendChild(searchButton);
        searchButton.appendChild(searchName);
      }
      if (searchInputHistory[2]) {
        searchName.textContent = searchInputHistory[2];
        searchList.appendChild(searchButton);
        searchButton.appendChild(searchName);
      }
      if (searchInputHistory[3]) {
        searchName.textContent = searchInputHistory[3];
        searchList.appendChild(searchButton);
        searchButton.appendChild(searchName);
      }
      if (searchInputHistory[4]) {
        searchName.textContent = searchInputHistory[4];
        searchList.appendChild(searchButton);
        searchButton.appendChild(searchName);
      }
      if (searchInputHistory[5]) {
        searchName.textContent = searchInputHistory[5];
        searchList.appendChild(searchButton);
        searchButton.appendChild(searchName);
      }
      if (searchInputHistory[6]) {
        searchName.textContent = searchInputHistory[6];
        searchList.appendChild(searchButton);
        searchButton.appendChild(searchName);
      }
      if (searchInputHistory[7]) {
        searchName.textContent = searchInputHistory[7];
        searchList.appendChild(searchButton);
        searchButton.appendChild(searchName);
      }
      if (searchInputHistory[8]) {
        searchName.textContent = searchInputHistory[8];
        searchList.appendChild(searchButton);
        searchButton.appendChild(searchName);
      }
      if (searchInputHistory[9]) {
        searchName.textContent = searchInputHistory[9];
        searchList.appendChild(searchButton);
        searchButton.appendChild(searchName);
      }
    
    })
}
fetchButton.addEventListener('click', getWeeklyApi);
