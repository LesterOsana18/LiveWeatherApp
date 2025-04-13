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
        { file: "sunny.svg", scale: 12 },
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

document.getElementById('weather-info').classList.add('visible');