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

    // --- Timeline Progress Logic ---
    const timelineSection = document.getElementById('timeline');
    const timelineProgress = document.getElementById('timeline-progress');

    function updateTimeline() {
        if (!timelineSection || !timelineProgress) return;
        
        const rect = timelineSection.getBoundingClientRect();
        const sectionHeight = rect.height;
        const viewHeight = window.innerHeight;
        
        // Calculate how much of the section is visible
        let progress = (viewHeight - rect.top) / (sectionHeight + viewHeight * 0.2);
        progress = Math.max(0, Math.min(1, progress));
        
        timelineProgress.style.height = `${progress * 100}%`;
    }

    window.addEventListener('scroll', updateTimeline);

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
                // Optional: Stop observing after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .fade-zoom, .fade-left, .fade-right');
    animatedElements.forEach(el => observer.observe(el));
});
