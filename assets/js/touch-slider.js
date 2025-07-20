document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("image-track");
    const images = Array.from(track.getElementsByClassName("image"));

    let isDragging = false;
    let startX = 0;
    let prevPercentage = 0;
    let velocity = 0;
    let lastClientX = 0;
    let momentumID;
    let lastMoveTime = 0;

    function startDrag(clientX) {
        isDragging = true;
        startX = clientX;
        velocity = 0;
        lastClientX = clientX;
        lastMoveTime = Date.now(); 
        cancelMomentum();
    }

    function moveDrag(clientX) {
        if (!isDragging) return;

        let delta = clientX - lastClientX;
        lastClientX = clientX;

        let now = Date.now();
        let timeDiff = now - lastMoveTime;
        lastMoveTime = now;

        let percentage = (delta / window.innerWidth) * 100;
        let newPercentage = prevPercentage + percentage;

        newPercentage = Math.min(Math.max(newPercentage, -36.8), 36.8);

        track.style.transform = `translateX(${newPercentage}%)`;
        track.dataset.prevPercentage = newPercentage;

        images.forEach((img) => {
            img.style.objectPosition = `${50 - newPercentage}% center`;
        });

        velocity = (percentage / timeDiff) * 15; // Scales velocity based on speed
    }

    function endDrag() {
        isDragging = false;
        prevPercentage = parseFloat(track.dataset.prevPercentage) || 0;

        if (Math.abs(velocity) > 0.2) {
            applyMomentum();
        }
    }

    function applyMomentum() {
        if (Math.abs(velocity) < 0.05) return; // Stop if velocity is very low

        prevPercentage += velocity;
        prevPercentage = Math.min(Math.max(prevPercentage, -36.8), 36.8);

        track.style.transform = `translateX(${prevPercentage}%)`;
        track.dataset.prevPercentage = prevPercentage;

        images.forEach((img) => {
            img.style.objectPosition = `${50 - prevPercentage}% center`;
        });

        velocity *= 0.9; // Gradual deceleration for smooth stopping

        momentumID = requestAnimationFrame(applyMomentum);
    }

    function cancelMomentum() {
        if (momentumID) {
            cancelAnimationFrame(momentumID);
            momentumID = null;
        }
    }

        // Trackpad or Mouse Wheel Horizontal Scrolling
    track.addEventListener("wheel", (e) => {
        if (Math.abs(e.deltaX) < 1) return; // Ignore vertical scrolls

        e.preventDefault(); // Prevent page scrolling

        let delta = e.deltaX;
        let percentage = (delta / window.innerWidth) * 100;
        let currentPercentage = parseFloat(track.dataset.prevPercentage) || 0;
        let newPercentage = currentPercentage - percentage;

        newPercentage = Math.min(Math.max(newPercentage, -36.8), 36.8);

        track.style.transform = `translateX(${newPercentage}%)`;
        track.dataset.prevPercentage = newPercentage;

        images.forEach((img) => {
            img.style.objectPosition = `${50 - newPercentage}% center`;
        });
    }, { passive: false });


    // Touch Events (Mobile)
    track.addEventListener("touchstart", (e) => {
        startDrag(e.touches[0].clientX);
    });

    track.addEventListener("touchmove", (e) => {
        moveDrag(e.touches[0].clientX);
        e.preventDefault(); // Prevent unintended scrolling
    }, { passive: false });

    track.addEventListener("touchend", endDrag);
});
