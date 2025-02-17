document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("image-track");
    const images = Array.from(track.getElementsByClassName("image"));

    let isMouseDown = false;
    let startX = 0;
    let prevPercentage = 0;

    track.addEventListener("mousedown", (e) => {
        isMouseDown = true;
        startX = e.clientX;
    });

    window.addEventListener("mousemove", (e) => {
        if (!isMouseDown) return;

        let mouseDelta = startX - e.clientX;
        let maxDelta = window.innerWidth / 2;
        let percentage = (mouseDelta / maxDelta) * 100;
        let newPercentage = prevPercentage + percentage;

        newPercentage = Math.min(Math.max(newPercentage, -36.8), 36.8);

        track.style.transform = `translateX(${newPercentage}%)`;

        images.forEach((img) => {
            img.style.objectPosition = `${50 - newPercentage}% center`;
        });
    });

    window.addEventListener("mouseup", () => {
        isMouseDown = false;
        prevPercentage = parseFloat(track.style.transform.replace("translateX(", "").replace("%)", "")) || 0;
    });
});
