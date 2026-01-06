// ===== HAMBURGER MENU =====

/**
 * Initialize the menu functionality
 */
const initMenu = () => {
    const nodes = {
        toggle: document.getElementById("menuToggle"),
        overlay: document.getElementById("menuOverlay"),
        symbol: document.querySelector(".menu-symbol")
    };

    if (!nodes.toggle || !nodes.overlay || !nodes.symbol) return;

    const MATH_SYMBOLS = ["+", "-", "π", "x", "÷", "="];
    let scrollPosition = 0;
    let morphInterval = null;

    /**
     * Animate the menu symbol with a shuffling effect
     */
    const animateMenuSymbol = (finalSymbol) => {
        if (morphInterval) clearInterval(morphInterval);

        nodes.symbol.classList.remove("settled");
        nodes.symbol.classList.add("shuffling");

        let step = 0;
        const totalSteps = 10;

        morphInterval = setInterval(() => {
            nodes.symbol.innerText = MATH_SYMBOLS[Math.floor(Math.random() * MATH_SYMBOLS.length)];

            if (++step >= totalSteps) {
                clearInterval(morphInterval);
                nodes.symbol.innerText = finalSymbol;
                nodes.symbol.classList.remove("shuffling");
                requestAnimationFrame(() => nodes.symbol.classList.add("settled"));
            }
        }, 60);
    };

    /**
     * Toggle the menu open/closed
     */
    const toggleMenu = (animate = true) => {
        const isActive = nodes.overlay.classList.toggle("active");
        nodes.toggle.classList.toggle("active", isActive);

        // Treat event objects as animate=true
        if (animate !== false) {
            const currentSymbol = nodes.symbol.innerText;
            let randomSymbol;
            do {
                randomSymbol = MATH_SYMBOLS[Math.floor(Math.random() * MATH_SYMBOLS.length)];
            } while (randomSymbol === currentSymbol);
            animateMenuSymbol(randomSymbol);
        }

        if (isActive) {
            scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            document.body.style.top = `-${scrollPosition}px`;
            document.body.classList.add("menu-open");
            updateHashActiveState();
        } else {
            document.body.classList.remove("menu-open");
            document.body.style.top = '';
            window.scrollTo(0, scrollPosition);
        }
    };

    /**
     * Update active state for Home and Contact links based on hash
     */
    const updateHashActiveState = () => {
        const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
        if (!isHomePage) return;

        const homeLink = nodes.overlay.querySelector('.nav-home');
        const contactLink = nodes.overlay.querySelector('.nav-contacto');
        if (!homeLink || !contactLink) return;

        const isContact = window.location.hash === '#contacto';
        homeLink.classList.toggle('active', !isContact);
        contactLink.classList.toggle('active', isContact);
    };

    // Event Listeners
    nodes.toggle.addEventListener("click", () => toggleMenu(true));

    nodes.overlay.addEventListener("click", (e) => {
        if (e.target === nodes.overlay) toggleMenu(true);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && nodes.overlay.classList.contains("active")) toggleMenu(true);
    });

    nodes.overlay.querySelectorAll('[data-close-menu]').forEach(link => {
        link.addEventListener('click', () => {
            const href = link.getAttribute('href');
            if (href?.includes('#')) setTimeout(updateHashActiveState, 10);
            if (nodes.overlay.classList.contains("active")) toggleMenu(false);
        });
    });

    // Accordion Logic
    nodes.overlay.querySelectorAll('[data-accordion]').forEach(group => {
        const trigger = group.querySelector('.accordion-trigger');
        if (trigger) {
            trigger.addEventListener('click', () => {
                group.classList.toggle('active');
            });
        }
    });

    window.addEventListener('hashchange', updateHashActiveState);
    updateHashActiveState();
};

document.addEventListener("astro:page-load", initMenu);
