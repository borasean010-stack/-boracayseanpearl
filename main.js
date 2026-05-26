import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqAd03xpQd_o3yXIFHv5t-BZWL6blvkmQ",
  authDomain: "boracaysean-local.firebaseapp.com",
  projectId: "boracaysean-local",
  storageBucket: "boracaysean-local.firebasestorage.app",
  messagingSenderId: "673386650213",
  appId: "1:673386650213:web:484b15ee8b2d8ec226448c",
  measurementId: "G-DKC8HE000W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.addEventListener('DOMContentLoaded', () => {
    // --- Sticky Header ---
    const header = document.getElementById('header');
    const logoText = document.getElementById('logo-text');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        if (!header || !logoText) return;
        if (window.scrollY > 50) {
            header.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
            header.classList.remove('bg-transparent', 'py-6');
            logoText.classList.replace('text-white', 'text-secondary');
            navLinks.forEach(link => link.classList.replace('text-white', 'text-secondary'));
        } else {
            header.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
            header.classList.add('bg-transparent', 'py-6');
            logoText.classList.replace('text-secondary', 'text-white');
            navLinks.forEach(link => link.classList.replace('text-secondary', 'text-white'));
        }
    });

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // Try to play videos when they enter view
                const videos = entry.target.querySelectorAll('video');
                videos.forEach(video => {
                    video.muted = true;
                    video.play().catch(() => {});
                });
            }
        });
    }, observerOptions);

    // Bulletproof interaction unlock for all mobile browsers
    const forcePlayVideos = () => {
        const allVideos = document.querySelectorAll('video[autoplay]');
        allVideos.forEach(video => {
            video.muted = true;
            video.playsInline = true;
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Fail silently, browser may still be blocking
                });
            }
        });
    };

    const unlockVideos = () => {
        forcePlayVideos();
        document.removeEventListener('touchstart', unlockVideos);
        document.removeEventListener('click', unlockVideos);
        document.removeEventListener('scroll', unlockVideos);
    };

    // Add multiple triggers for unlocking
    document.addEventListener('touchstart', unlockVideos, { passive: true });
    document.addEventListener('click', unlockVideos, { passive: true });
    document.addEventListener('scroll', unlockVideos, { passive: true });

    // Handle visibility changes (e.g. coming back from another tab or unlocking phone)
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            forcePlayVideos();
        }
    });

    // Select all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .fade-zoom, .fade-left, .fade-right');
    animatedElements.forEach(el => observer.observe(el));
});
