
// ==============================
// 1. Smooth Navigation
// ==============================

document.querySelectorAll('.navbar nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ==============================
// 2. Explore Projects Button
// ==============================

const exploreButton = document.querySelector('.hero-buttons .primary-btn');

if (exploreButton) {
    exploreButton.addEventListener('click', function () {
        document.querySelector('#projects').scrollIntoView({
            behavior: 'smooth'
        });
    });
}


// ==============================
// 3. Scroll Reveal Animation
// ==============================

const revealElements = document.querySelectorAll(
    '.section, .project-card, .contact-section'
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
});


// ==============================
// 4. Footer Current Year
// ==============================

const footerText = document.querySelector('footer p');

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} Payal Ghotkule. Built with passion for products. ❤️`;
}

console.log('Payal Portfolio Loaded Successfully!');
