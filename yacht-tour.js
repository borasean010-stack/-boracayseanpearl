document.addEventListener('DOMContentLoaded', () => {
    // --- Sticky CTAs Logic ---
    const stickyMobileCTA = document.getElementById('sticky-cta');
    const stickyDesktopCTA = document.getElementById('desktop-cta');
    const heroHeight = window.innerHeight * 0.8;

    window.addEventListener('scroll', () => {
        if (window.scrollY > heroHeight) {
            if (stickyMobileCTA) stickyMobileCTA.classList.remove('translate-y-full');
            if (stickyDesktopCTA) {
                stickyDesktopCTA.classList.remove('opacity-0', 'translate-x-10');
                stickyDesktopCTA.classList.add('opacity-100', 'translate-x-0');
            }
        } else {
            if (stickyMobileCTA) stickyMobileCTA.classList.add('translate-y-full');
            if (stickyDesktopCTA) {
                stickyDesktopCTA.classList.add('opacity-0', 'translate-x-10');
                stickyDesktopCTA.classList.remove('opacity-100', 'translate-x-0');
            }
        }
    });
});
