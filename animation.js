document.addEventListener("DOMContentLoaded", () => {
    const directions = [-1, 1]; // -1 = opposite, 0 = neutral, 1 = follows mouse

    const layers = Array.from(document.querySelectorAll(".dock-layer")).map((el) => {
        return {
        el,
        strengthX: 10 + Math.random() * 60,
        strengthY: 10 + Math.random() * 60,
        dirX: directions[Math.floor(Math.random() * directions.length)],
        dirY: directions[Math.floor(Math.random() * directions.length)],
        };
    });

    document.addEventListener("mousemove", (e) => {
        const percentX = e.clientX / window.innerWidth;
        const percentY = e.clientY / window.innerHeight;

        layers.forEach(layer => {
        const offsetX = (percentX - 0.5) * layer.strengthX * layer.dirX;
        const offsetY = (percentY - 0.5) * layer.strengthY * layer.dirY;

        layer.el.style.transform = `translate(calc(-50% + ${offsetX}px), ${offsetY}px)`;
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#city-form input");

    if (input) {
        input.addEventListener("focus", () => {
            input.classList.add("expanded");
        });

        input.addEventListener("blur", () => {
            input.classList.remove("expanded");
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const face = document.querySelector(".weather-face");

    if (!face) return;

    const strengthX = 20; // You can tweak these
    const strengthY = 15;

    document.addEventListener("mousemove", (e) => {
        const percentX = (e.clientX / window.innerWidth - 0.5) * 2;
        const percentY = (e.clientY / window.innerHeight - 0.5) * 2;

        const offsetX = percentX * strengthX;
        const offsetY = percentY * strengthY;

        face.style.transition = "transform 0.2s ease-out";
        face.style.transform = `translate(-50%, 0) translate(${offsetX}px, ${offsetY}px)`;
    });
});

function blinkEyes() {
    const eyes = document.querySelectorAll(".left-eye, .right-eye");
    eyes.forEach(eye => {
        eye.classList.add("blinking");

        setTimeout(() => {
            eye.classList.remove("blinking");
        }, 400);
    });
}

document.addEventListener("click", blinkEyes);

setInterval(() => {
    if (Math.random() < 0.5) {
        blinkEyes();
    }
}, 4000);
