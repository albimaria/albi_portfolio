let currentSlide = 0;
const slides = document.querySelectorAll('.slider-images img');
const dots = document.querySelectorAll('.dot');

// Function to move slides
function moveSlide(step) {
    currentSlide += step;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;

    updateSlider();
}

// Function to update the slider
function updateSlider() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Set the initial slide state when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateSlider();
});

// Show/hide the certificates when the tab is clicked
document.getElementById("certificates-tab").addEventListener("click", function() {
    var certificatesSection = document.getElementById("certificates");

    // Toggle the display of the certificates section
    if (certificatesSection.style.display === "none" || certificatesSection.style.display === "") {
        certificatesSection.style.display = "block";  // Show the certificates
    } else {
        certificatesSection.style.display = "none";  // Hide the certificates
    }
});
