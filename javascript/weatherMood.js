function updateWeatherTitleRandom() {
    const titleEl = document.getElementById("weather-title");
    const body = document.body;
    const weatherImage = document.querySelector(".weather-bg img");

    if (!titleEl || !body || !weatherImage) return;

    const randomMoods = [
        "a bright and sunny day ☀️",
        "a bit cloudy ☁️",
        "stormin' out there ⚡",
        "snowing like a snow globe ❄️",
        "light drizzle 🌦️",
        "foggy and mysterious 🌁",
        "a rainbow-chasing kinda day 🌈",
        "windy enough to fly a kite 🎏",
        "hot like fresh toast 🍞",
        "a sky full of vibes 🌀",
        "time to wear shades 🕶️",
        "clouds with sass ☁️💅",
        "umbrella optional ☂️",
        "too breezy to care 🌬️",
        "sun's out, vibes out 🌞"
    ];

    const gradients = [
        "linear-gradient(to top, #57c1eb, #246fa8)",
        "linear-gradient(to top, #4b6cb7, #182848)",
        "linear-gradient(to top, #1e130c, #9a8478)",
        "linear-gradient(to top, #b6fbff, #83a4d4)",
        "linear-gradient(to top, #3a6073, #16222a)",
        "linear-gradient(to top, #3e5151, #decba4)",
        "linear-gradient(to top, #7b4397, #dc2430)",
        "linear-gradient(to top, #00c6ff, #0072ff)",
        "linear-gradient(to top, #e100ff, #7f00ff)",
        "linear-gradient(to top, #43cea2, #185a9d)",
        "linear-gradient(to top,rgb(255, 140, 0),rgb(255, 128, 0))",
        "linear-gradient(to top, #485563, #29323c)",
        "linear-gradient(to top, #1c92d2, #f2fcfe)",
        "linear-gradient(to top, #00d2ff, #3a7bd5)",
        "linear-gradient(to top, #a18cd1, #fbc2eb)"
    ];

    const weatherAssets = [
        { file: "sunny.svg", scale: 13 },
        { file: "cloudy.svg", scale: 10 },
        { file: "thunder.svg", scale: 8 },
        { file: "snowy.svg", scale: 8 },
        { file: "rainy-sunny.svg", scale: 9 },
        { file: "cloudy.svg", scale: 9.5 },
        { file: "sunny.svg", scale: 13 },
        { file: "cloudy.svg", scale: 10 },
        { file: "sunny.svg", scale: 13 },
        { file: "cloudy-sunny.svg", scale: 9.5 },
        { file: "sunny.svg", scale: 13 },
        { file: "cloudy.svg", scale: 10 },
        { file: "rainy.svg", scale: 9 },
        { file: "cloudy-sunny.svg", scale: 9.5 },
        { file: "sunny.svg", scale: 13 }
    ];

    const index = Math.floor(Math.random() * randomMoods.length);
    const mood = randomMoods[index];
    const gradient = gradients[index];
    const asset = weatherAssets[index];

    titleEl.textContent = `It's ${mood}`;
    body.style.backgroundImage = gradient;
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    weatherImage.src = `assets/${asset.file}`;
    weatherImage.style.transform = `scale(${asset.scale})`;
}

window.updateWeatherTitle = updateWeatherTitleRandom;
updateWeatherTitle();

// Function to update the weather visuals based on the condition
// This function is called after fetching the weather data from the API
function updateVisualsBasedOnWeather(condition) {
    const body = document.body;
    const weatherImage = document.querySelector(".weather-bg img");
    const titleEl = document.getElementById("weather-title");
    
    let mood = "";
    let gradient = "";
    let asset = "";
    
    switch (condition.toLowerCase()) {
        case "clear":
            mood = "a bright and sunny day ☀️";
            gradient = "linear-gradient(to top, #57c1eb, #246fa8)";
            asset = { file: "sunny.svg", scale: 13 };
            break;
        case "clouds":
            mood = "a bit cloudy ☁️";
            gradient = "linear-gradient(to top, #4b6cb7, #182848)";
            asset = { file: "cloudy.svg", scale: 10 };
            break;
        case "rain":
            mood = "light drizzle 🌧️";
            gradient = "linear-gradient(to top, #3e5151, #decba4)";
            asset = { file: "rainy.svg", scale: 9 };
            break;
        case "thunderstorm":
            mood = "stormin' out there ⚡";
            gradient = "linear-gradient(to top, #1e130c, #9a8478)";
            asset = { file: "thunder.svg", scale: 8 };
            break;
        case "snow":
            mood = "snowing like a snow globe ❄️";
            gradient = "linear-gradient(to top, #b6fbff, #83a4d4)";
            asset = { file: "snowy.svg", scale: 8 };
            break;
        default:
            mood = "a sky full of vibes 🌀";
            gradient = "linear-gradient(to top, #43cea2, #185a9d)";
            asset = { file: "cloudy-sunny.svg", scale: 9.5 };
    }
    
    titleEl.textContent = `It's ${mood}`;
    body.style.backgroundImage = gradient;
    weatherImage.src = `assets/${asset.file}`;
    weatherImage.style.transform = `scale(${asset.scale})`;
}

// Function to display the weather information
function updateWeatherInfo(data) {
    document.getElementById("weather-title").textContent = `It's currently ${data.weather[0].description} in ${data.name}`;
    document.getElementById("temperature").textContent = `${data.main.temp}°C`;
    document.getElementById("condition").textContent = data.weather[0].main;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`;
    document.getElementById("wind-speed").textContent = `${data.wind.speed} m/s`;
}

document.getElementById('weather-info').classList.add('visible');