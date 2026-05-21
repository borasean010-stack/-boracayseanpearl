document.addEventListener('DOMContentLoaded', () => {
    // --- Sticky Header ---
    const header = document.getElementById('header');
    const logoText = document.getElementById('logo-text');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileToggleIcon = document.querySelector('#mobile-toggle i');
    
    window.addEventListener('scroll', () => {
        if (!header || !logoText || !mobileToggleIcon) return;
        if (window.scrollY > 50) {
            header.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
            header.classList.remove('bg-transparent', 'py-6');
            logoText.classList.replace('text-white', 'text-secondary');
            mobileToggleIcon.classList.replace('text-white', 'text-secondary');
            navLinks.forEach(link => link.classList.replace('text-white', 'text-secondary'));
        } else {
            header.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
            header.classList.add('bg-transparent', 'py-6');
            logoText.classList.replace('text-secondary', 'text-white');
            mobileToggleIcon.classList.replace('text-secondary', 'text-white');
            navLinks.forEach(link => link.classList.replace('text-secondary', 'text-white'));
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileToggleBtn = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    let isMenuOpen = false;

    function toggleMenu() {
        if (!mobileMenu || !mobileToggleIcon || !logoText) return;
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('-translate-y-full');
            mobileToggleIcon.classList.replace('ph-list', 'ph-x');
            // Ensure elements are secondary color when menu is open on white bg
            mobileToggleIcon.classList.replace('text-white', 'text-secondary'); 
            logoText.classList.replace('text-white', 'text-secondary');
        } else {
            mobileMenu.classList.add('-translate-y-full');
            mobileToggleIcon.classList.replace('ph-x', 'ph-list');
            // Revert colors based on scroll position
            if (window.scrollY <= 50) {
                mobileToggleIcon.classList.replace('text-secondary', 'text-white');
                logoText.classList.replace('text-secondary', 'text-white');
            }
        }
    }

    if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });

    // --- Intersection Observer for Scroll Animations & Video Autoplay ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // Video Autoplay Logic
                const video = entry.target.tagName === 'VIDEO' ? entry.target : entry.target.querySelector('video');
                if (video) {
                    video.muted = true;
                    video.playsInline = true;
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() => {
                            // Autoplay was prevented
                            console.log("Autoplay prevented, waiting for interaction");
                        });
                    }
                }
            } else {
                // Pause video when out of view to save resources
                const video = entry.target.tagName === 'VIDEO' ? entry.target : entry.target.querySelector('video');
                if (video) {
                    video.pause();
                }
            }
        });
    }, observerOptions);

    // Global interaction unlock for mobile (especially for Low Power Mode)
    const unlockVideos = () => {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            if (video.paused && video.getAttribute('autoplay') !== null) {
                video.muted = true;
                video.play().catch(() => {});
            }
        });
        document.removeEventListener('touchstart', unlockVideos);
        document.removeEventListener('click', unlockVideos);
    };

    document.addEventListener('touchstart', unlockVideos);
    document.addEventListener('click', unlockVideos);

    // Select all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .fade-zoom, .fade-left, .fade-right');
    animatedElements.forEach(el => observer.observe(el));
});
