let scrollPosition = 0;

// Named functions for event listeners to allow proper removal/addition
const toggleMenu = () => {
    const nodes = {
        toggle: document.getElementById("menuToggle"),
        overlay: document.getElementById("menuOverlay"),
    };

    if (!nodes.toggle || !nodes.overlay) return;

    const isActive = nodes.overlay.classList.toggle("active");
    nodes.toggle.classList.toggle("active", isActive);

    if (isActive) {
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        document.body.style.top = `-${scrollPosition}px`;
        document.body.classList.add("menu-open");
        updateHashActiveState();
    } else {
        document.body.classList.remove("menu-open");
        document.body.style.top = '';

        // Temporarily disable smooth scroll to prevent jump animation
        const originalScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, scrollPosition);
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
    }
};

const updateHashActiveState = () => {
    const overlay = document.getElementById("menuOverlay");
    if (!overlay) return;

    const isHomePage = ['/', '/index.html'].includes(window.location.pathname);
    if (!isHomePage) return;

    const homeLink = overlay.querySelector('.nav-home');
    const contactLink = overlay.querySelector('.nav-contacto');
    if (homeLink && contactLink) {
        const isContact = window.location.hash === '#contacto';
        homeLink.classList.toggle('active', !isContact);
        contactLink.classList.toggle('active', isContact);
    }
};

const handleOverlayClick = (e) => {
    const overlay = document.getElementById("menuOverlay");
    if (e.target === overlay) toggleMenu();
};

const handleCloseClick = (e) => {
    const link = e.currentTarget;
    if (link.getAttribute('href')?.includes('#')) setTimeout(updateHashActiveState, 10);
    const overlay = document.getElementById("menuOverlay");
    if (overlay && overlay.classList.contains("active")) toggleMenu();
};

const handleAccordionClick = (e) => {
    e.currentTarget.closest('[data-accordion]')?.classList.toggle('active');
};

const handleKeyDown = (e) => {
    if (e.key === "Escape") {
        const overlay = document.getElementById("menuOverlay");
        if (overlay && overlay.classList.contains("active")) toggleMenu();
    }
};

const initMenu = () => {
    const nodes = {
        toggle: document.getElementById("menuToggle"),
        overlay: document.getElementById("menuOverlay")
    };

    if (!nodes.toggle || !nodes.overlay) return;

    // Remove before adding to avoid duplicate listeners on persistent elements
    nodes.toggle.removeEventListener("click", toggleMenu);
    nodes.toggle.addEventListener("click", toggleMenu);

    nodes.overlay.removeEventListener("click", handleOverlayClick);
    nodes.overlay.addEventListener("click", handleOverlayClick);

    nodes.overlay.querySelectorAll('[data-close-menu]').forEach(link => {
        link.removeEventListener('click', handleCloseClick);
        link.addEventListener('click', handleCloseClick);
    });

    // Accordion Logic
    nodes.overlay.querySelectorAll('[data-accordion]').forEach(group => {
        const trigger = group.querySelector('.accordion-trigger');
        if (trigger) {
            trigger.removeEventListener('click', handleAccordionClick);
            trigger.addEventListener('click', handleAccordionClick);
        }
    });

    // Keys and hash
    document.removeEventListener("keydown", handleKeyDown);
    document.addEventListener("keydown", handleKeyDown);

    window.removeEventListener('hashchange', updateHashActiveState);
    window.addEventListener('hashchange', updateHashActiveState);

    // Initial state check
    updateHashActiveState();
};

// Listen for both initial load and subsequent navigation trought View Transitions
document.addEventListener("astro:page-load", initMenu);
