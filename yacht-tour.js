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
            if (entry.isIntersecting) {
                entry.target.play().catch(error => {
                    console.log("Autoplay prevented:", error);
                });
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.1 });

    videos.forEach(video => {
        videoObserver.observe(video);
        // Ensure videos are muted for autoplay
        video.muted = true;
    });
});
