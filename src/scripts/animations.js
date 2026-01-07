// ===== EASTER EGG - FALLING PI DIGITS =====
const CONFIG = {
    PI: "3.1415",
    COUNT: 50,
    DELAY: 80,
    DURATION_MIN: 2,
    DURATION_MAX: 4
};

/**
 * Creates a single falling digit element and animates it.
 */
const createFallingDigit = () => {
    const digit = document.createElement("div");
    digit.className = "pi-digit";
    digit.textContent = CONFIG.PI[Math.floor(Math.random() * CONFIG.PI.length)];
    digit.style.left = `${Math.random() * window.innerWidth}px`;
    digit.style.top = "-50px";

    const duration = CONFIG.DURATION_MIN + Math.random() * (CONFIG.DURATION_MAX - CONFIG.DURATION_MIN);
    digit.style.animationDuration = `${duration}s`;

    document.body.appendChild(digit);
    setTimeout(() => digit.remove(), duration * 1000);
};

/**
 * Triggers the rain of Pi digits.
 * Used as an Easter egg when clicking specific tags.
 */
const triggerPiEasterEgg = () => {
    for (let i = 0; i < CONFIG.COUNT; i++) {
        setTimeout(createFallingDigit, i * CONFIG.DELAY);
    }
};

// ===== SCROLL ANIMATIONS =====
/**
 * Sets up the IntersectionObserver for fade-in animations on scroll.
 */
const initScrollAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("scroll-hidden");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });

    document.querySelectorAll(".fade-in").forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Only hide elements that are strictly below the visible viewport
        if (rect.top >= window.innerHeight) {
            el.classList.add("scroll-hidden");
            observer.observe(el);
        }
    });
};

const initAnimations = () => {
    initScrollAnimations();

    // Attach Easter egg to level tags
    const levelTags = document.querySelectorAll(".level-tag");
    levelTags.forEach(tag => {
        tag.removeEventListener("click", triggerPiEasterEgg);
        tag.addEventListener("click", triggerPiEasterEgg);
    });
};

document.addEventListener("astro:page-load", initAnimations);
