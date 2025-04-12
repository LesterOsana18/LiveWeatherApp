function updateWeatherTitleRandom() {
    const titleEl = document.getElementById("weather-title");
    const body = document.body;

    if (!titleEl || !body) return;

    const randomMoods = [
        "a bright and sunny day ☀️",
        "a bit cloudy ☁️",
        "stormin’ out there ⚡",
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
        "linear-gradient(to top, #57c1eb, #246fa8)",           // sunny (sky blue to deep blue)
        "linear-gradient(to top, #4b6cb7, #182848)",           // cloudy (moody blue/gray)
        "linear-gradient(to top, #1e130c, #9a8478)",           // stormy (deep dark brown-gray)
        "linear-gradient(to top, #b6fbff, #83a4d4)",           // snowy (icy blue, not white)
        "linear-gradient(to top, #3a6073, #16222a)",           // drizzle (dusky blue)
        "linear-gradient(to top, #3e5151, #decba4)",           // foggy (muted gray/brown blend)
        "linear-gradient(to top, #7b4397, #dc2430)",           // rainbow-chasing (sunsety, bold)
        "linear-gradient(to top, #00c6ff, #0072ff)",           // windy (bold blue tones)
        "linear-gradient(to top, #e100ff, #7f00ff)",           // hot (neon heat, purple-red)
        "linear-gradient(to top, #43cea2, #185a9d)",           // vibey (cool aqua to deep teal)
        "linear-gradient(to top, #f7971e, #ffd200)",           // shades (bold sunshine yellow-orange)
        "linear-gradient(to top, #485563, #29323c)",           // sass (moody & edgy)
        "linear-gradient(to top, #1c92d2, #f2fcfe)",           // umbrella (rainy blue)
        "linear-gradient(to top, #00d2ff, #3a7bd5)",           // breezy (bright clear blue)
        "linear-gradient(to top, #a18cd1, #fbc2eb)"            // sunny-vibes (pastel bold)
    ];

    const index = Math.floor(Math.random() * randomMoods.length);
    const mood = randomMoods[index];
    const gradient = gradients[index] || "linear-gradient(to top, #a1cbff, #c2e9fb)";

    titleEl.textContent = `It's ${mood}`;
    body.style.backgroundImage = gradient;
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
}

window.updateWeatherTitle = updateWeatherTitleRandom;
updateWeatherTitle();
