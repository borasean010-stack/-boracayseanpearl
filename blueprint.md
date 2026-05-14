# Pearl Of Sean Boracay - Project Blueprint

## 1. Overview
This project is a modern, responsive landing page for "Pearl Of Sean", a premium island hopping tour and ocean experience service in Boracay. The website aims to provide a high-end, immersive experience for potential travelers, showcasing tours, gallery, and reviews with a clean and vibrant aesthetic.

## 2. Design & Styling Outline
*   **Aesthetics:** Premium, vibrant, and modern marine theme.
*   **Color Palette (Tailwind Config):**
    *   Primary: `#29D3D0` (Teal/Turquoise)
    *   Secondary: `#062B43` (Deep Navy)
    *   Accent: `#F2C94C` (Gold/Yellow)
    *   Light: `#F8F9FA` (Off-white)
*   **Typography:**
    *   Headings: 'Montserrat'
    *   Body: 'Inter'
*   **Visual Elements:**
    *   Glassmorphism/Translucency on fixed headers.
    *   Fade-in and Zoom animations using Intersection Observer.
    *   Modern Phosphor Icons.

## 3. Features
*   **Fixed Navbar:** Sticky navigation with dynamic background transitions.
*   **Hero Section:** Full-screen immersive hero with background video, parallax-like overlays, and smooth typography.
*   **Tours Section:** Grid of tour cards with pricing, features, and booking CTAs.
*   **Gallery Section:** Masonry-style layout for visual storytelling.
*   **Timeline Section:** Vertical itinerary showing a "Day in Paradise".
*   **Testimonials:** User-focused social proof section.
*   **Contact/Booking:** High-visibility CTAs for booking and WhatsApp inquiries.
*   **Tour Detail Landing Page:** A dedicated, high-conversion page for the Yacht Hopping Tour with cinematic video background, sticky booking UX, and detailed itinerary.

## 4. Current Task: Yacht Tour Detail Page
*   Created `yacht-tour.html` and `yacht-tour.js`.
*   Implemented cinematic YouTube hero background.
*   Added luxury UI components: Glassmorphism, floating CTAs, masonry gallery, and animated timeline.
*   Linked main landing page (`index.html`) to the new detail page.

## 5. Project History
### Add Logo to Header
*   Integrated "Pearl Of Sean" logo image into the fixed header and footer.
*   Ensured responsive sizing and color transitions on scroll.

### Hero Background Video (YouTube Integration)
*   Switched from a local video file to a YouTube-hosted background video (`https://youtu.be/p1Ksygpa4cE`).
*   Configured the YouTube iframe for seamless background playback:
    *   **Autoplay & Mute:** Required for automatic playback in modern browsers.
    *   **Loop:** Enabled via the `playlist` parameter.
    *   **UI Hidden:** Removed controls, branding, and related videos.
    *   **Responsive Covering:** Used CSS transform and scaling to ensure the video covers the hero area without letterboxing.
*   This approach ensures 100% deployment compatibility with Cloudflare Pages and significantly faster initial page loads.
