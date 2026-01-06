// ===== EASTER EGG - FALLING PI DIGITS =====
const CONFIG = {
    PI: "3.1415",
    COUNT: 50,
    DELAY: 80,
    DURATION_MIN: 2,
    DURATION_MAX: 4
};

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

const triggerPiEasterEgg = () => {
    for (let i = 0; i < CONFIG.COUNT; i++) {
        setTimeout(createFallingDigit, i * CONFIG.DELAY);
    }
};

// ===== SCROLL ANIMATIONS =====
const initScrollAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });

    document.querySelectorAll(".fade-in").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add("visible");
        } else {
            observer.observe(el);
        }
    });
};

const initAnimations = () => {
    initScrollAnimations();
    document.querySelectorAll(".level-tag").forEach(tag => tag.addEventListener("click", triggerPiEasterEgg));
};

document.addEventListener("astro:page-load", initAnimations);
