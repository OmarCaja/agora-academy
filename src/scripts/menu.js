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

    /**
     * Animate the menu symbol by cycling through math characters
     * @param {string} finalSymbol - The symbol to settle on
     */
    const animateMenuSymbol = (finalSymbol) => {
        let iterations = 0;
        const maxIterations = 10;
        const intervalTime = 100;

        const interval = setInterval(() => {
            menuSymbol.innerText = MATH_SYMBOLS[Math.floor(Math.random() * MATH_SYMBOLS.length)];
            iterations++;

            if (iterations >= maxIterations) {
                clearInterval(interval);
                menuSymbol.innerText = finalSymbol;
            }
        }, intervalTime);
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
