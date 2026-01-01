function perform(){
    let city = document.getElementById("city").value;

    if(city === ""){
        alert("Enter a city");
        return;
    }

    let apiKey = "88b9a0fba6f5126dfda52e5011670a37";

    let url = "https://api.openweathermap.org/data/2.5/weather?q=" 
              + city + 
              "&appid=" + apiKey + 
              "&units=metric";

    fetch(url)
    .then(response => response.json())
    .then(data => {

        if(data.cod != 200){
            alert("City not found");
            return;
        }

        document.getElementById("parent").innerHTML = `
            <li>City: ${data.name}</li>
            <li>Temperature: ${data.main.temp} °C</li>
            <li>Weather: ${data.weather[0].main}</li>
        `;
    })
    .catch(error => {
        console.log(error);
        alert("Error fetching weather");
    });
}
