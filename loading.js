const quoteEl = document.getElementById("loading-quote");

const quotes = [
    "Checking the clouds... ☁️",
    "Warming up the sun... ☀️",
    "Talking to the wind... 🌬️",
    "Consulting the weather gods... ⚡",
    "Polishing the raindrops... 🌧️",
    "Whispering to the snowflakes... ❄️",
    "Looking for the rainbow... 🌈",
    "Tuning in to cloud FM... 📻",
    "Shaking hands with a thunderstorm... 🤝",
    "Bribing the sun for good news... 🕶️"
];

if (quoteEl) {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = random;
}

window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");
    if (!loader) return;

    setTimeout(() => {
        loader.classList.add("fade-out");

        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 4000);
});