// Weather API integration
const API_KEY = 'd545b937f777bf890e57bf8ff9106233';

// Function to fetch weather data from OpenWeatherMap API
function fetchWeatherData(city) {
const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

// Fetch weather data from the API
fetch(url)
.then(response => {
    if (!response.ok) throw new Error("City not found");
    return response.json();
})
.then(data => {
    updateWeatherInfo(data);
    updateVisualsBasedOnWeather(data.weather[0].main);
    showWeatherInfo();
})
.catch(err => {
    console.error(err);
    alert("Error fetching weather. Please check the city name.");
});
}

// Event listener for form submission
document.addEventListener("DOMContentLoaded", () => {
document.getElementById("city-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const city = document.getElementById("city-input").value.trim();
    if (city) {
    fetchWeatherData(city);
    }
});
});

// Function to update the weather visuals based on the condition
function updateWeatherInfo(data) {
    document.getElementById("city-name").textContent = data.name;
    document.getElementById("temperature").textContent = data.main.temp;
    document.querySelector("#temperature-card .weather-card-unit").textContent = "°C";

    document.getElementById("condition").textContent = data.weather[0].main;
    document.querySelector("#condition-card .weather-card-unit").textContent = "";

    document.getElementById("humidity").textContent = data.main.humidity;
    document.querySelector("#humidity-card .weather-card-unit").textContent = "%";

    document.getElementById("wind-speed").textContent = data.wind.speed;
    document.querySelector("#wind-card .weather-card-unit").textContent = "m/s";
}

// Function to update the visuals based on the weather condition
function showWeatherInfo() {
    document.getElementById("weather-info").classList.remove("hidden");
    document.getElementById("weather-info").classList.add("visible");
}