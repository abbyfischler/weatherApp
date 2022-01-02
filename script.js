/*---------------------------------------API--------------------------------------------*/

const api = {
    key: "bbeac64cfcccb55a846070e17439f18f",
    base: "https://api.openweathermap.org/data/2.5/weather?", 
}

/*-------------------FUNCTION TO DISPLAY DATE AND TIME USING MOMENT.JS-------------------*/

const date = moment();
document.getElementById("date").innerHTML = date.format("Mo MMM YYYY dddd, h:mm:ss");


/*-----------------------FUNCTION TO TAKE THE VALUES WHEN ENTERED------------------------*/
    
    const Input = document.getElementById('input');
 
    Input.addEventListener('keypress', (event) => {

    if(event.keyCode == 13) {
        getWeather(Input.value);  //passing the input value to getWeather function
        document.querySelector('.main-weather').style.display = "block"; //used to show the details as intially the display is set as none
    }
});

/*-------------------------------FUNCTION TO GET WEATHER--------------------------------*/


function getWeather(city) {
    fetch(`${api.base}q=${city}&appid=${api.key}&units=metric`)   // format for calling api is given on the web docs
                                                                
    .then(details => {
        return details.json();  // Sending all details to showWeather function in form of json

    }).then(showWeather);
}

/*-------------------------------FUNCTION TO SHOW WEATHER--------------------------------*/


function showWeather(details){  //Taking the received values from API into this function

    // console.log(details);

    let city = document.getElementById('city');
    city.innerHTML = `${details.name}, ${details.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(details.main.temp * 1.8 + 32)}&deg;F`; //Rounding off the temp using math function

    let minMax = document.getElementById('min-max');
    minMax.innerHTML = `${Math.round(details.main.temp_min * 1.8 + 32)}&deg;F (Min) and ${Math.round(details.main.temp_max * 1.8 + 32)}&deg;F (Max) `; //Rounding off the temp using math function

    let weatherType = document.getElementById('weather-type');
    weatherType.innerHTML = `${details.weather[0].main}`;
}