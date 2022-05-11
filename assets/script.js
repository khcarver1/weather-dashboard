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
var todaysForecast = document.querySelector('#weathertoday')
var day0 = document.querySelector('#weather-box0');
var day1 = document.querySelector('#weather-box1');
var day2 = document.querySelector('#weather-box2');
var day3 = document.querySelector('#weather-box3');
var day4 = document.querySelector('#weather-box4');
var dayContainer = document.querySelector("#day-container");
var fetchButton = document.getElementById('fetch-button');
var searchInput = document.querySelector("#citysearchbox");
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
      searchInputHistory.push(data.city.name);
      localStorage.setItem("searchInputHistory", searchInputHistory);
      //sets the data to display flex, since above it's set to display none for when the page first loads
      todaysForecast.style.display = "flex";
      dayContainer.style.display = "flex";
      //sets the users search criteria to local stor. adding to an array each time

      //todays weather forecast, the top box
      var todaysForecastDisplay = document.createElement('h2');
      var todaysForecastDisplayTemp = document.createElement('li');
      var todaysForecastDisplayWind = document.createElement('li');
      var todaysForecastDisplayHumidity = document.createElement('li');
      todaysForecastDisplay.textContent = data.city.name + " (" + (data.list[0].dt_txt).slice(5, 7) + "/" + (data.list[0].dt_txt).slice(8, 10) + "/" + (data.list[0].dt_txt).slice(0, 4) + ")";
      todaysForecastDisplayTemp.textContent = "Temp: " + data.list[0].main.feels_like;
      todaysForecastDisplayWind.textContent = "Wind: " + data.list[0].wind.speed;
      todaysForecastDisplayHumidity.textContent = "Humidity: " + data.list[0].main.humidity;
      todaysForecast.appendChild(todaysForecastDisplay);
      todaysForecast.appendChild(todaysForecastDisplayTemp);
      todaysForecast.appendChild(todaysForecastDisplayWind);
      todaysForecast.appendChild(todaysForecastDisplayHumidity);
      
      //day 0
      var listItem0 = document.createElement('li');
      var listItem1 = document.createElement('li');
      var listItem2 = document.createElement('li');
      var listItem3 = document.createElement('li');
      var listImg = document.createElement('img');
      var weeklyDate = document.createElement('h3');
      weeklyDate.textContent = (data.list[2].dt_txt).slice(5, 7) + "/" + (data.list[2].dt_txt).slice(8, 10) + "/" + (data.list[2].dt_txt).slice(0, 4);
      listItem0.textContent = "Temp: " + data.list[2].main.feels_like;
      listItem1.textContent = "Wind: " + data.list[2].wind.speed;
      listItem2.textContent = "Humidity: " + data.list[2].main.humidity;
      day0.appendChild(weeklyDate);
      day0.appendChild(listItem3);
      listItem3.appendChild(listImg);
      listImg.setAttribute('id', "iconbox0");
      document.querySelector("#iconbox0").setAttribute("src", "http://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png");
      day0.appendChild(listItem0);
      day0.appendChild(listItem1);
      day0.appendChild(listItem2);

      //day 1
      var listItem0 = document.createElement('li');
      var listItem1 = document.createElement('li');
      var listItem2 = document.createElement('li');
      var listItem3 = document.createElement('li');
      var listImg = document.createElement('img');
      var weeklyDate = document.createElement('h3');
      weeklyDate.textContent = (data.list[13].dt_txt).slice(5, 7) + "/" + (data.list[13].dt_txt).slice(8, 10) + "/" + (data.list[13].dt_txt).slice(0, 4);
      listItem0.textContent = "Temp: " + data.list[13].main.feels_like;
      listItem1.textContent = "Wind: " + data.list[13].wind.speed;
      listItem2.textContent = "Humidity: " + data.list[13].main.humidity;
      console.log(data)
      day1.appendChild(weeklyDate);
      day1.appendChild(listItem3);
      listItem3.appendChild(listImg);
      listImg.setAttribute('id', "iconbox1");
      document.querySelector("#iconbox1").setAttribute("src", "http://openweathermap.org/img/w/" + data.list[13].weather[0].icon + ".png");
      day1.appendChild(listItem0);
      day1.appendChild(listItem1);
      day1.appendChild(listItem2);
      //day 2
      var listItem0 = document.createElement('li');
      var listItem1 = document.createElement('li');
      var listItem2 = document.createElement('li');
      var listItem3 = document.createElement('li');
      var listImg = document.createElement('img');
      var weeklyDate = document.createElement('h3');
      weeklyDate.textContent = (data.list[21].dt_txt).slice(5, 7) + "/" + (data.list[21].dt_txt).slice(8, 10) + "/" + (data.list[21].dt_txt).slice(0, 4);
      listItem0.textContent = "Temp: " + data.list[21].main.feels_like;
      listItem1.textContent = "Wind: " + data.list[21].wind.speed;
      listItem2.textContent = "Humidity: " + data.list[21].main.humidity;
      day2.appendChild(weeklyDate);
      day2.appendChild(listItem3);
      listItem3.appendChild(listImg);
      listImg.setAttribute('id', "iconbox2");
      document.querySelector("#iconbox2").setAttribute("src", "http://openweathermap.org/img/w/" + data.list[21].weather[0].icon + ".png");
      day2.appendChild(listItem0);
      day2.appendChild(listItem1);
      day2.appendChild(listItem2);
      //day 3
      var listItem0 = document.createElement('li');
      var listItem1 = document.createElement('li');
      var listItem2 = document.createElement('li');
      var listItem3 = document.createElement('li');
      var listImg = document.createElement('img');
      var weeklyDate = document.createElement('h3');
      weeklyDate.textContent = (data.list[26].dt_txt).slice(5, 7) + "/" + (data.list[26].dt_txt).slice(8, 10) + "/" + (data.list[26].dt_txt).slice(0, 4);
      listItem0.textContent = "Temp: " + data.list[26].main.feels_like;
      listItem1.textContent = "Wind: " + data.list[26].wind.speed;
      listItem2.textContent = "Humidity: " + data.list[26].main.humidity;
      day3.appendChild(weeklyDate);
      day3.appendChild(listItem3);
      listItem3.appendChild(listImg);
      listImg.setAttribute('id', "iconbox3");
      document.querySelector("#iconbox3").setAttribute("src", "http://openweathermap.org/img/w/" + data.list[26].weather[0].icon + ".png");
      day3.appendChild(listItem0);
      day3.appendChild(listItem1);
      day3.appendChild(listItem2);
      //day 4
      var listItem0 = document.createElement('li');
      var listItem1 = document.createElement('li');
      var listItem2 = document.createElement('li');
      var listItem3 = document.createElement('li');
      var listImg = document.createElement('img');
      var weeklyDate = document.createElement('h3');
      weeklyDate.textContent = (data.list[35].dt_txt).slice(5, 7) + "/" + (data.list[35].dt_txt).slice(8, 10) + "/" + (data.list[35].dt_txt).slice(0, 4);
      listItem0.textContent = "Temp: " + data.list[35].main.feels_like;
      listItem1.textContent = "Wind: " + data.list[35].wind.speed;
      listItem2.textContent = "Humidity: " + data.list[35].main.humidity;
      day4.appendChild(weeklyDate);
      day4.appendChild(listItem3);
      listItem3.appendChild(listImg);
      listImg.setAttribute('id', "iconbox4");
      document.querySelector("#iconbox4").setAttribute("src", "http://openweathermap.org/img/w/" + data.list[35].weather[0].icon + ".png");
      day4.appendChild(listItem0);
      day4.appendChild(listItem1);
      day4.appendChild(listItem2);
    })
}
fetchButton.addEventListener('click', getWeeklyApi);