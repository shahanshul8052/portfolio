// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Tab Navigation in About Section
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all tabs
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked tab and corresponding content
        button.classList.add('active');
        const target = document.querySelector(button.getAttribute('data-target'));
        target.classList.add('active');
    });
});

// Fade-In Animation on Scroll
const faders = document.querySelectorAll('.fade-in');

const fadeInOptions = {
    threshold: 0.3, // Trigger when 30% of the element is visible
    rootMargin: "0px 0px -100px 0px"
};

const fadeInOnScroll = new IntersectionObserver((entries, fadeInObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        fadeInObserver.unobserve(entry.target);
    });
}, fadeInOptions);

faders.forEach(fader => fadeInOnScroll.observe(fader));

// Typing Effect in Hero Section
const typed = new Typed('.hero-typing', {
    strings: ['Software Engineer', 'Creative Developer', 'Problem Solver'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// Project Card Hover Effects
const projectCards = document.querySelectorAll('.card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover');
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate successful submission
    alert('Your message has been sent successfully!');
    contactForm.reset();
});

// Back-to-Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
