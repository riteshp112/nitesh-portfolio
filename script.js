// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Typing Text Effect for Nitesh Patel
const typingText = document.querySelector('.typing-text');
const roles = ['BIM Engineer', 'MEP Specialist', '3D Modeler', 'Team Leader'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500); // Pause before new word
    } else {
        setTimeout(type, isDeleting ? 100 : 200); // Typing speed
    }
}

// Calculate and display experience duration
function calculateExperience() {
    const startDate = new Date('2022-01-01');
    const currentDate = new Date();
    
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    let experienceText = '';
    if (years > 0) {
        experienceText += years + (years === 1 ? ' year' : ' years');
    }
    if (months > 0) {
        if (years > 0) experienceText += ' and ';
        experienceText += months + (months === 1 ? ' month' : ' months');
    }
    
    const experienceElement = document.getElementById('experience-duration');
    if (experienceElement) {
        experienceElement.textContent = experienceText;
    }
}

// Start typing effect on load
document.addEventListener('DOMContentLoaded', () => {
    type();
    calculateExperience();
});