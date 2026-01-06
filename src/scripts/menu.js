const initMenu = () => {
    const nodes = {
        toggle: document.getElementById("menuToggle"),
        overlay: document.getElementById("menuOverlay"),
        symbol: document.querySelector(".menu-symbol")
    };

    if (!nodes.toggle || !nodes.overlay || !nodes.symbol) return;

    let scrollPosition = 0;

    const toggleMenu = () => {
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

            // Restore smooth scroll behavior
            document.documentElement.style.scrollBehavior = originalScrollBehavior;
        }
    };

    const updateHashActiveState = () => {
        const isHomePage = ['/', '/index.html'].includes(window.location.pathname);
        if (!isHomePage) return;

        const homeLink = nodes.overlay.querySelector('.nav-home');
        const contactLink = nodes.overlay.querySelector('.nav-contacto');
        if (homeLink && contactLink) {
            const isContact = window.location.hash === '#contacto';
            homeLink.classList.toggle('active', !isContact);
            contactLink.classList.toggle('active', isContact);
        }
    };

    // Event Listeners
    nodes.toggle.addEventListener("click", toggleMenu);

    nodes.overlay.addEventListener("click", (e) => {
        if (e.target === nodes.overlay) toggleMenu();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && nodes.overlay.classList.contains("active")) toggleMenu();
    });

    nodes.overlay.querySelectorAll('[data-close-menu]').forEach(link => {
        link.addEventListener('click', () => {
            if (link.getAttribute('href')?.includes('#')) setTimeout(updateHashActiveState, 10);
            if (nodes.overlay.classList.contains("active")) toggleMenu();
        });
    });

    // Accordion Logic
    nodes.overlay.querySelectorAll('[data-accordion]').forEach(group => {
        group.querySelector('.accordion-trigger')?.addEventListener('click', () => {
            group.classList.toggle('active');
        });
    });

    window.addEventListener('hashchange', updateHashActiveState);
    updateHashActiveState();
};

document.addEventListener("astro:page-load", initMenu);
