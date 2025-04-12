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
