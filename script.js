document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Entrepreneur",
        "Computer Programmer",
        "CEO of Cyrus Byte",
        "Ethical Hacker",
    ];
    let textIndex = 0;
    const container = document.querySelector(".slideshow"); // Updated to use the class selector

    function showText() {
        container.innerHTML = texts.map(text => `<div class="slideshow-text">${text}</div>`).join('');
        const slides = container.querySelectorAll('.slideshow-text');
        slides.forEach((slide, index) => {
            slide.style.animation = `slideshow 8s infinite ${index * 2}s`;
        });
    }

    showText();
});