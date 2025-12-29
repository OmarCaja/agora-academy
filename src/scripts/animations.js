// ===== EASTER EGG - FALLING PI DIGITS =====

// Configuration
const PI_DIGITS = "3.1415";
const DIGITS_TO_CREATE = 50;
const DIGIT_STAGGER_DELAY = 80; // milliseconds between each digit
const ANIMATION_DURATION_MIN = 2; // seconds
const ANIMATION_DURATION_MAX = 4; // seconds

/**
 * Create a single falling digit element
 */
const createFallingDigit = () => {
    const digit = document.createElement("div");
    digit.className = "pi-digit";

    // Random digit from pi
    const randomIndex = Math.floor(Math.random() * PI_DIGITS.length);
    digit.textContent = PI_DIGITS[randomIndex];

    // Random horizontal position
    const randomX = Math.random() * window.innerWidth;
    digit.style.left = `${randomX}px`;
    digit.style.top = "-50px";

    // Random animation duration
    const duration =
        ANIMATION_DURATION_MIN +
        Math.random() * (ANIMATION_DURATION_MAX - ANIMATION_DURATION_MIN);
    digit.style.animationDuration = `${duration}s`;

    document.body.appendChild(digit);

    // Remove element after animation completes
    setTimeout(() => {
        digit.remove();
    }, duration * 1000);
};

/**
 * Trigger the pi digits easter egg animation
 */
const triggerPiEasterEgg = () => {
    // Create multiple digits with staggered timing
    for (let i = 0; i < DIGITS_TO_CREATE; i++) {
        setTimeout(() => {
            createFallingDigit();
        }, i * DIGIT_STAGGER_DELAY);
    }
};

// ===== SCROLL ANIMATIONS (INTERSECTION OBSERVER) =====

/**
 * Initialize intersection observer for scroll animations
 */
const initScrollAnimations = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((element) => {
        // Check if element is already in viewport on page load
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInViewport) {
            // Show immediately if already visible
            element.classList.add("visible");
        } else {
            // Observe if not visible yet
            observer.observe(element);
        }
    });
};

// Initialize scroll animations when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    initScrollAnimations();

    // Add click event to level tags for easter egg
    const levelTags = document.querySelectorAll(".level-tag");
    levelTags.forEach((tag) => {
        tag.addEventListener("click", triggerPiEasterEgg);
    });
});
