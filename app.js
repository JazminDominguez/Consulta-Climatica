var apiKey = "c8d55f49b45d5a952936f33f8f9cd855";

let city_value;
function check_city(){
{
    var radioButtons = document.getElementsByName("city");
   
    for(let i = 0; i < radioButtons.length; i++)
    {
        if(radioButtons[i].checked)
        {
            city_value = radioButtons[i].value;
            weatherFetch();
        }
    }
} 
}

function weatherFetch() {
    let selected= city_value;   
    let showed_city = (selected == undefined) ? "524901" : city_value;
    
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + showed_city + '&appid=' + apiKey)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            drawWeather(data);
        })
        .catch(function () {
            // catch any errors
        });
}
weatherFetch()

function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    document.getElementById('cityName').innerHTML = d.name;
    document.getElementById('clima').value = d.weather[0].description;
    document.getElementById('degrees').value = celcius + '°';
    document.getElementById('wind').value = d.wind.speed;
    document.getElementById('latitude').value = d.coord.lat;
    document.getElementById('longitud').value = d.coord.lon;
}