console.log("hello");

    const url = '';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '85656fb65emsh4f5eed62c15a486p1d0edejsn13720718bbf6',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }}
    function weather(City) {
    cityname.innerHTML=City;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= ${City}`, options)
        .then(response => response.json())
        .then((result) => {
            console.log(result)
            temp1.innerHTML = result.temp
            temp.innerHTML = result.temp
            // cloud_pct.innerHTML = result.cloud_pct
            feels_like.innerHTML = result.feelslike
            humidity.innerHTML = result.humidity
            max_temp.innerHTML = result.max_temp
            min_temp.innerHTML = result.min_temp
            sunrise.innerHTML = result.sunrise
            sunset.innerHTML = result.sunset
            
            wind_degrees.innerHTML = result.wind_degrees
            wind_speed.innerHTML = result.wind_speed
        })


}

search.addEventListener("click",(e)=>{
    weather(city.value)
    e.preventDefault();
})
weather("Delhi"); 