// script.js

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
