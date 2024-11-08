
// JavaScript file to handle the interactive functions for the site

// Example function for navigation scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Attaching the scroll to top function to elements with 'volver-inicio' class
document.addEventListener("DOMContentLoaded", () => {
    const scrollLinks = document.querySelectorAll('.volver-inicio');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToTop();
        });
    });
});
