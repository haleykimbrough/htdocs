//another date 
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();

api = {
    key: "03fcf9486483e4b3c58bf749445ce09a",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

searchbox = document.querySelector('.search');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    //if the use hits enter, it gets results
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
    }
}

//gets the user's input and puts it into the URL when searching for weather
function getResults(query) {
    fetch(`${api.baseurl}weather?zip=${query}&units=imperial&APPID=${api.key}`)
    .then(weather => {
        //converts to json and displays results
        return weather.json();
    }).then(displayResults);
}

//function that changes the values shown on screen to the values (weather) 
//gotten from the other functions
function displayResults(weather) {
    console.log(weather);
    //first outputs city name gotten from zip code
    let city = document.querySelector('#city');
    console.log(weather.name);
    city.innerText = `${weather.name}`;

    //outputs the temp in the city
    let temp = document.querySelector('#temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>℉</span>`;
    
    //converts the barometric pressure to inches of Merucy and oupputs it 
    let press = document.querySelector('#press');
    let intpress = parseInt(`${weather.main.pressure}`);
    let newintpress = intpress*0.0295301;
    let final = newintpress.toFixed(2);
    press.innerText = `${final} in.Hg`;

    //outputs the humidity
    let hum = document.querySelector('#hum');
    hum.innerText = `${weather.main.humidity}%`;
    
}