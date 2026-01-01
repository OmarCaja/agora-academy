// ===== HAMBURGER MENU =====

/**
 * Initialize the menu functionality
 */
const initMenu = () => {
    const menuToggle = document.getElementById("menuToggle");
    const menuOverlay = document.getElementById("menuOverlay");
    const menuSymbol = document.querySelector(".menu-symbol");

    if (!menuToggle || !menuOverlay || !menuSymbol) return;

    // Math symbols for animation
    const MATH_SYMBOLS = ["+", "-", "π", "x", "÷", "="];

    // Variable to store scroll position
    let scrollPosition = 0;

    // For internal tracking of the morph interval
    let morphInterval = null;

    /**
     * Animate the menu symbol with a "Card Shuffle" effect
     * @param {string} finalSymbol - The symbol to settle on
     */
    const animateMenuSymbol = (finalSymbol) => {
        if (morphInterval) clearInterval(morphInterval);

        // Phase 1: Start shuffling (visible but stylized)
        menuSymbol.classList.remove("settled");
        menuSymbol.classList.add("shuffling");

        let step = 0;
        const totalSteps = 20; // More steps to make it feel like "shuffling"

        morphInterval = setInterval(() => {
            // Change symbol rapidly
            menuSymbol.innerText = MATH_SYMBOLS[Math.floor(Math.random() * MATH_SYMBOLS.length)];
            step++;

            // Phase 2: Slow down slightly towards the end
            if (step >= totalSteps) {
                clearInterval(morphInterval);
                menuSymbol.innerText = finalSymbol;

                // Phase 3: Settle and pop
                menuSymbol.classList.remove("shuffling");

                // Small delay to ensure the browser registers class removal before adding settled
                requestAnimationFrame(() => {
                    menuSymbol.classList.add("settled");
                });
            }
        }, 60); // Constant speed for a mechanical shuffle feel
    };

    /**
     * Toggle the menu open/closed
     */
    const toggleMenu = () => {
        menuToggle.classList.toggle("active");
        menuOverlay.classList.toggle("active");

        // Get current symbol to avoid picking the same one
        const currentSymbol = menuSymbol.innerText;
        let randomSymbol;

        // Pick a random symbol different from the current one
        do {
            randomSymbol = MATH_SYMBOLS[Math.floor(Math.random() * MATH_SYMBOLS.length)];
        } while (randomSymbol === currentSymbol);

        // Animate to new random symbol
        animateMenuSymbol(randomSymbol);

        // Prevent body scroll when menu is open
        if (menuOverlay.classList.contains("active")) {
            // Save current scroll position
            scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            // Apply fixed position with negative top to maintain visual position
            document.body.style.top = `-${scrollPosition}px`;
            document.body.classList.add("menu-open");
        } else {
            // Remove fixed position
            document.body.classList.remove("menu-open");
            document.body.style.top = '';
            // Restore scroll position
            window.scrollTo(0, scrollPosition);
        }
    };

    // Event listener for menu toggle button
    menuToggle.addEventListener("click", toggleMenu);

    // Close menu when clicking outside the nav
    menuOverlay.addEventListener("click", (e) => {
        if (e.target === menuOverlay) {
            toggleMenu();
        }
    });

    // Close menu when pressing Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && menuOverlay.classList.contains("active")) {
            toggleMenu();
        }
    });
};

// Initialize on first load and after every navigation
document.addEventListener("astro:page-load", initMenu);
