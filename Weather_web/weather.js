const apikey = "a4fc091355edc58643702a59d9fee5f3";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
    
    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity  + "%"; 
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "weather-app-img/images/clouds.png";
    } else if (data.weather[0].main == "Clear"){
        weathericon.src = "weather-app-img/images/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        weathericon.src = "weather-app-img/images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weathericon.src = "weather-app-img/images/drizzle.png";
    } 
    else if (data.weather[0].main == "Mist"){
        weathericon.src = "weather-app-img/images/mist.png";
    } 

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }

}

searchbtn.addEventListener("click", () =>{
    checkWeather(searchbox.value);
})
