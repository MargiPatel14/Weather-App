const apiKey = "58fce5e5e20979093f032c7c8c5da9b9";
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
      


      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon"); 


      async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


        if(response.status == 404){
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
        } else{

            var data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".speed").innerHTML = Math.round(data.wind.speed) + " KM/H";
            document.querySelector(".percentage").innerHTML = data.main.humidity + "%";
            document.querySelector(".country").innerHTML = "Country - " + data.sys.country;
            document.querySelector(".temp2").innerHTML = Math.round(data.main.feels_like) + "°c";
            document.querySelector(".max").innerHTML = "Max Temp - " + Math.round(data.main.temp_max) + "°c";
            document.querySelector(".min").innerHTML = "Min Temp - " + Math.round(data.main.temp_min) + "°c";
            
            
            if(data.weather[0].main == "Clouds"){
              weatherIcon.src = "sun/27.png"
            }
            else if(data.weather[0].main == "Clear"){
              weatherIcon.src = "sun/26.png"
            }
            else if(data.weather[0].main == "Rain"){
              weatherIcon.src = "sun/8.png"
            }
            else if(data.weather[0].main == "Wind"){
              weatherIcon.src = "sun/6.png"
            }
            else if(data.weather[0].main == "snowfall"){
              weatherIcon.src = "sun/28.png"
            }
            else if(data.weather[0].main == "thunderstrom"){
              weatherIcon.src = "moon/16.png"
            }
            else if(data.weather[0].main == "wind&rain"){
              weatherIcon.src = "moon/13.png"
            }
            else if(data.weather[0].main == "lightning"){
              weatherIcon.src = "moon/11.png"
            }
            else if(data.weather[0].main == "no moon,rain&wind"){
              weatherIcon.src = "moon/40.png"
            }


            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

           }

      }

      searchBtn.addEventListener("click", ()=> {
        checkWeather(searchBox.value);
      })