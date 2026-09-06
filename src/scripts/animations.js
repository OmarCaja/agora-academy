// ===== ENTRY / SCROLL REVEAL =====
// Motivation (Section 5 "motion must be motivated"): reveals sequence each
// section's content in reading order, so the headline lands before the
// supporting detail. Everything above the fold resolves in the first frames,
// so the page never sits blank waiting for a scroll.
//
// IntersectionObserver only. No scroll listeners, no rAF loop, no scrollY math.

const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealAll = () =>
    document
        .querySelectorAll(".reveal.is-hidden")
        .forEach((el) => el.classList.remove("is-hidden"));

let failsafeTimer;

const initReveal = () => {
    const targets = document.querySelectorAll(".reveal");
    if (targets.length === 0) return;

    // Reduced motion: the CSS media block already forces the resting state,
    // so never add .is-hidden — otherwise content could stay invisible.
    if (prefersReducedMotion()) {
        revealAll();
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.remove("is-hidden");
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    targets.forEach((el) => {
        el.classList.add("is-hidden");
        observer.observe(el);
    });

    // This script hides content that only the observer can bring back, so a
    // throttled or non-firing observer would leave the page blank. Content
    // visibility must never depend on an animation succeeding: if nothing has
    // been revealed shortly after init, show everything and drop the effect.
    clearTimeout(failsafeTimer);
    failsafeTimer = setTimeout(() => {
        observer.disconnect();
        revealAll();
    }, 2000);
};

// ===== EASTER EGG - FALLING PI DIGITS =====
const PI_CONFIG = {
    PI: "3.1415",
    COUNT: 50,
    DELAY: 80,
    DURATION_MIN: 2,
    DURATION_MAX: 4,
};

/** Creates a single falling digit element and animates it. */
const createFallingDigit = () => {
    const digit = document.createElement("div");
    digit.className = "pi-digit";
    digit.textContent =
        PI_CONFIG.PI[Math.floor(Math.random() * PI_CONFIG.PI.length)];
    digit.style.left = `${Math.random() * window.innerWidth}px`;
    digit.style.top = "-50px";

    const duration =
        PI_CONFIG.DURATION_MIN +
        Math.random() * (PI_CONFIG.DURATION_MAX - PI_CONFIG.DURATION_MIN);
    digit.style.animationDuration = `${duration}s`;

    document.body.appendChild(digit);
    setTimeout(() => digit.remove(), duration * 1000);
};

/** Rain of Pi digits, fired when a level tag is clicked. */
const triggerPiEasterEgg = () => {
    // A screenful of falling glyphs is exactly what reduced-motion opts out of.
    if (prefersReducedMotion()) return;
    for (let i = 0; i < PI_CONFIG.COUNT; i++) {
        setTimeout(createFallingDigit, i * PI_CONFIG.DELAY);
    }
};

const initAnimations = () => {
    initReveal();

    document.querySelectorAll(".level-tag").forEach((tag) => {
        tag.removeEventListener("click", triggerPiEasterEgg);
        tag.addEventListener("click", triggerPiEasterEgg);
    });
};

document.addEventListener("astro:page-load", initAnimations);
