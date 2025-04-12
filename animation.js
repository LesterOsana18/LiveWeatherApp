document.addEventListener("DOMContentLoaded", () => {
    const dock = document.getElementById("dock-bg");

    document.addEventListener("mousemove", (e) => {
        const percentX = e.clientX / window.innerWidth;
        const percentY = e.clientY / window.innerHeight;

        const maxOffsetX = 30; // max pixels left/right
        const maxOffsetY = 20; // max pixels up/down

        const offsetX = (percentX - 0.5) * 2 * maxOffsetX;
        const offsetY = (percentY - 0.5) * 2 * maxOffsetY;

        // Adjust the dock's position
        dock.style.transform = `translate(calc(-50% + ${offsetX}px), ${offsetY}px)`;
    });
});
