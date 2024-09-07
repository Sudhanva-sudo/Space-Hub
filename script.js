// Basic JavaScript Animations or Interactivity (Optional)
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".animated-btn");

    // Button click animation
    btn.addEventListener("click", () => {
        alert("Let's explore Space Hub!");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".lightbox").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const imageUrl = link.getAttribute("href");
            lightboxImg.src = imageUrl;
            lightbox.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
