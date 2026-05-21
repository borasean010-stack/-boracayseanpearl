document.addEventListener('DOMContentLoaded', () => {
    // --- Sticky Header & Logo Color ---
    const header = document.getElementById('header');
    const logoText = document.getElementById('logo-text');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileToggleIcon = document.querySelector('#mobile-toggle i');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-4');
            header.classList.remove('bg-transparent', 'py-6');
            logoText.classList.replace('text-white', 'text-secondary');
            if (mobileToggleIcon) mobileToggleIcon.classList.replace('text-white', 'text-secondary');
            navLinks.forEach(link => link.classList.replace('text-white', 'text-secondary'));
        } else {
            header.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-4');
            header.classList.add('bg-transparent', 'py-6');
            logoText.classList.replace('text-secondary', 'text-white');
            if (mobileToggleIcon) mobileToggleIcon.classList.replace('text-secondary', 'text-white');
            navLinks.forEach(link => link.classList.replace('text-secondary', 'text-white'));
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileToggleBtn = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('-translate-y-full');
            mobileToggleIcon.classList.replace('ph-list', 'ph-x');
            mobileToggleIcon.classList.replace('text-white', 'text-secondary'); 
            logoText.classList.replace('text-white', 'text-secondary');
        } else {
            mobileMenu.classList.add('-translate-y-full');
            mobileToggleIcon.classList.replace('ph-x', 'ph-list');
            if (window.scrollY <= 50) {
                mobileToggleIcon.classList.replace('text-secondary', 'text-white');
                logoText.classList.replace('text-secondary', 'text-white');
            }
        }
    }

    if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => link.addEventListener('click', () => { if (isMenuOpen) toggleMenu(); }));

    // --- Intersection Observer for Reveal Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .fade-zoom, .fade-left, .fade-right');
    animatedElements.forEach(el => observer.observe(el));

    // --- Video Playback Optimization ---
    const videos = document.querySelectorAll('video');
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                // Preload and play when in view
                video.play().catch(error => {
                    // Autoplay might be blocked until user interaction
                    console.log("Autoplay check:", error);
                });
            } else {
                // Pause when out of view to save resources
                video.pause();
            }
        });
    }, { threshold: 0.05 }); // Lower threshold for earlier trigger

    videos.forEach(video => {
        videoObserver.observe(video);
        video.muted = true; // Extra insurance for autoplay
    });
});
