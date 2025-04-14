const input = document.getElementById("city-input");

const suggestions = document.createElement("ul");
suggestions.id = "suggestions";

document.querySelector(".autocomplete-container").appendChild(suggestions);

const GEO_API_KEY = '2ff01b5dfbmshfd66cdc13e4e4ffp109090jsnaf2e9b884d93';
const API_HOST = 'wft-geo-db.p.rapidapi.com';

async function fetchCities(query) {
    const url = `https://${API_HOST}/v1/geo/cities?namePrefix=${encodeURIComponent(query)}&limit=10`;

    try {
        const response = await fetch(url, {
            headers: {
                'X-RapidAPI-Key': GEO_API_KEY,
                'X-RapidAPI-Host': API_HOST
            }
        });

        const data = await response.json();
        return data.data || [];
    } catch (error) {
        console.error("Autocomplete API error:", error);
        return [];
    }
}

let debounceTimer;
input.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(fetchAndShowCities, 400); // 400ms delay
});

async function fetchAndShowCities() {
    const value = input.value.trim();
    suggestions.innerHTML = "";
    suggestions.style.display = "none";

    if (value.length < 2) return;

    const cities = await fetchCities(value);

    cities.forEach(city => {
        const li = document.createElement("li");
        li.textContent = `${city.name}, ${city.country}`;
        li.style.padding = "8px";
        li.style.cursor = "pointer";

        li.addEventListener("click", () => {
            input.value = `${city.name}, ${city.region}`;
            suggestions.innerHTML = "";
            suggestions.style.display = "none";
        });

        suggestions.appendChild(li);
    });

    if (cities.length > 0) {
        suggestions.style.display = "block";
    }
}

document.addEventListener("click", (e) => {
    if (!suggestions.contains(e.target) && e.target !== input) {
        suggestions.style.display = "none";
    }
});
