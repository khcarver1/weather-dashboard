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
var searchhistoryinput
for (var key in localStorage){
  console.log(key)
  if (key == "searchhistoryinput"){
    searchhistoryinput = localStorage.getItem("searchhistoryinput")
  }
  else {
    searchhistoryinput = []
  }
}
// `getApi` function is called when the `fetchButton` is clicked

function getWeeklyApi() {
  var cityName = searchInput.value.trim();
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=151647b840c194226a1c0bf6610e7e11&units=imperial";
  searchhistoryinput.push(searchInput.value.trim());
  localStorage.setItem("searchhistoryinput", searchhistoryinput);
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      
      var listItem0 = document.createElement('li');
      var listItem1 = document.createElement('li');
      var listItem2 = document.createElement('li');
      var listItem3 = document.createElement('li');
      var listIcon3 = document.createElement('img');
      var weatherIcon = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";

      listItem0.textContent = "Temperature: " + data.list[0].main.feels_like;
      listItem1.textContent = "Humidity: " + data.list[0].main.humidity;
      listItem2.textContent = "Wind Speed: " + data.list[0].wind.speed;
      
      repoList.appendChild(listItem0);
      repoList.appendChild(listItem1);
      repoList.appendChild(listItem2);
      repoList.appendChild(listItem3);
      listItem3.appendChild(listIcon3);
      listIcon3.setAttribute('id',"iconbox1");
      document.querySelector("#iconbox1").setAttribute("src",weatherIcon);
      
    });
};

fetchButton.addEventListener('click', getWeeklyApi);



//local storage as array, 
function weatherSearchHistory() {

  
}

//when page loads, get previous searches and append them to LI with a button appended to it to make the previous search clickable,
//set the button text using a loop from the local storage array. to remove dupes, add a class with set attr, target the class name
//add a click event listener to run the javascript functions again