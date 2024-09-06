// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navigation Bar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Dark Mode Toggle
const toggleButton = document.querySelector('#dark-mode-toggle');
toggleButton?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Animated Skill Bars
window.addEventListener('scroll', function() {
    const skills = document.querySelectorAll('.skill-bar');
    skills.forEach(skill => {
        const skillLevel = skill.getAttribute('data-skill-level');
        if (skill.getBoundingClientRect().top < window.innerHeight) {
            skill.style.width = skillLevel;
        }
    });
});

// Modal Popups for Project Details
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const modal = document.querySelector(`#${this.dataset.modalId}`);
        if (modal) {
            modal.style.display = 'block';
        }
    });
});
document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', function() {
        this.parentElement.style.display = 'none';
    });
});

// Image Gallery Lightbox
const images = document.querySelectorAll('.portfolio-image');
images.forEach(image => {
    image.addEventListener('click', function() {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        const img = document.createElement('img');
        img.src = this.src;
        lightbox.appendChild(img);

        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});

// Filtering and Sorting for Projects or Publications
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
            if (card.classList.contains(category) || category === 'all') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Form Validation for Contact Forms
document.querySelector('#contact-form')?.addEventListener('submit', function(e) {
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (!email.includes('@') || message.trim() === '') {
        alert('Please enter a valid email and message.');
        e.preventDefault();
    }
});

// Typewriter Effect for Hero Section Text
const textArray = ['Data Scientist', 'AI Enthusiast', 'Open Source Contributor'];
let i = 0;
let j = 0;
let currentText = '';
let isDeleting = false;

function typeWriter() {
    currentText = textArray[i];
    document.querySelector('.typewriter').textContent = isDeleting
        ? currentText.substring(0, j--)
        : currentText.substring(0, j++);

    if (j === currentText.length + 1) {
        isDeleting = true;
    } else if (j === 0) {
        isDeleting = false;
        i = (i + 1) % textArray.length;
    }
    setTimeout(typeWriter, isDeleting ? 100 : 200);
}
typeWriter();

// Back to Top Button
const backToTopBtn = document.querySelector('#back-to-top');
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});
backToTopBtn?.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Lazy Loading for Images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img.lazy');
    const lazyLoad = function() {
        lazyImages.forEach(img => {
            if (img.getBoundingClientRect().top < window.innerHeight) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            }
        });
    };

    document.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
});

// Progressive Content Reveal on Scroll
const revealElements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', function() {
    revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
});
