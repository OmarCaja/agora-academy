/**
 * Global Menu Functionality
 * Handles the mobile menu overlay, accordion behavior, and scroll locking.
 */

let scrollPosition = 0;

const SELECTORS = {
    toggle: "menuToggle",
    overlay: "menuOverlay",
    accordion: "[data-accordion]",
    accordionTrigger: ".accordion-trigger",
    closeMenu: "[data-close-menu]",
    navHome: ".nav-home",
    navContact: ".nav-contacto"
};

const CLASSES = {
    active: "active",
    menuOpen: "menu-open"
};

/**
 * Toggles the menu overlay state.
 * Handles locking the body scroll to prevent background scrolling (iOS safetey).
 */
const toggleMenu = () => {
    const toggleBtn = document.getElementById(SELECTORS.toggle);
    const overlay = document.getElementById(SELECTORS.overlay);

    if (!toggleBtn || !overlay) return;

    const isActive = overlay.classList.toggle(CLASSES.active);
    toggleBtn.classList.toggle(CLASSES.active, isActive);

    if (isActive) {
        // Lock body scroll
        scrollPosition = window.scrollY;
        document.body.style.top = `-${scrollPosition}px`;
        document.body.classList.add(CLASSES.menuOpen);
        updateActiveStateFromHash();
    } else {
        // Unlock body scroll
        document.body.classList.remove(CLASSES.menuOpen);
        document.body.style.top = "";

        // Restore scroll position immediately without smooth scrolling behavior
        // to prevent jarring visual jump
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo(0, scrollPosition);
        document.documentElement.style.removeProperty("scroll-behavior");
    }
};

/**
 * Updates the 'active' class for Home/Contact based on the URL hash.
 */
const updateActiveStateFromHash = () => {
    const overlay = document.getElementById(SELECTORS.overlay);
    if (!overlay) return;

    // Only relevant on the home page
    const isHomePage = ["/", "/index.html"].includes(window.location.pathname);
    if (!isHomePage) return;

    const homeLink = overlay.querySelector(SELECTORS.navHome);
    const contactLink = overlay.querySelector(SELECTORS.navContact);

    if (homeLink && contactLink) {
        const isContactSection = window.location.hash === "#contacto";
        homeLink.classList.toggle(CLASSES.active, !isContactSection);
        contactLink.classList.toggle(CLASSES.active, isContactSection);
    }
};

/**
 * Closes the menu when the user clicks/taps anywhere outside
 * the menu panel or the toggle button.
 */
const handleOutsideClick = (e) => {
    const overlay = document.getElementById(SELECTORS.overlay);
    const toggleBtn = document.getElementById(SELECTORS.toggle);

    if (!overlay?.classList.contains(CLASSES.active)) return;

    const nav = overlay.querySelector(".menu-nav");
    const clickedInsideMenu = nav?.contains(e.target);
    const clickedToggle = toggleBtn?.contains(e.target);

    if (!clickedInsideMenu && !clickedToggle) {
        toggleMenu();
    }
};

const handleLinkClick = (e) => {
    const link = e.currentTarget;
    // If it's an anchor link, give a tiny delay for hash update before checking state
    if (link.getAttribute("href")?.includes("#")) {
        setTimeout(updateActiveStateFromHash, 10);
    }

    // Close menu if it's currently suggested by the element (data-close-menu)
    const overlay = document.getElementById(SELECTORS.overlay);
    if (overlay?.classList.contains(CLASSES.active)) {
        toggleMenu();
    }
};

const handleAccordionToggle = (e) => {
    const group = e.currentTarget.closest(SELECTORS.accordion);
    group?.classList.toggle(CLASSES.active);
};

const handleKeyDown = (e) => {
    if (e.key === "Escape") {
        const overlay = document.getElementById(SELECTORS.overlay);
        if (overlay?.classList.contains(CLASSES.active)) {
            toggleMenu();
        }
    }
};

/**
 * Initializes all menu event listeners.
 * Designed to be safe to run multiple times (removes old listeners first).
 */
const initMenu = () => {
    const toggleBtn = document.getElementById(SELECTORS.toggle);
    const overlay = document.getElementById(SELECTORS.overlay);

    if (!toggleBtn || !overlay) return;

    // 1. Toggle Button
    toggleBtn.removeEventListener("click", toggleMenu);
    toggleBtn.addEventListener("click", toggleMenu);

    // 2. Outside-click handler (document level, closes menu on tap outside)
    document.removeEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("pointerdown", handleOutsideClick);

    // 3. Navigation Links (Close menu on click)
    overlay.querySelectorAll(SELECTORS.closeMenu).forEach(link => {
        link.removeEventListener("click", handleLinkClick);
        link.addEventListener("click", handleLinkClick);
    });

    // 4. Accordion Triggers
    overlay.querySelectorAll(SELECTORS.accordion).forEach(group => {
        const trigger = group.querySelector(SELECTORS.accordionTrigger);
        if (trigger) {
            trigger.removeEventListener("click", handleAccordionToggle);
            trigger.addEventListener("click", handleAccordionToggle);
        }
    });

    // 5. Global Keyboard Events
    document.removeEventListener("keydown", handleKeyDown);
    document.addEventListener("keydown", handleKeyDown);

    // 6. Hash Change Events
    window.removeEventListener("hashchange", updateActiveStateFromHash);
    window.addEventListener("hashchange", updateActiveStateFromHash);

    // Initial check
    updateActiveStateFromHash();
};

// Initialize on Astro page transitions
document.addEventListener("astro:page-load", initMenu);
