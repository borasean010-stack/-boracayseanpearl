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

## 4. Current Task: Hopping Tour Booking Page Updates
*   **Hero Section:** Update background video to `https://youtu.be/9bDWdocKn9I` on both `index.html` and `yacht-tour.html`.
*   **Included Section:** Replace the main image in `yacht-tour.html` with a YouTube Short embed (`https://youtube.com/shorts/fuMdnDUH2aY`).
*   **Pricing:** Update price to 1,900 PHP per person across all relevant sections in `yacht-tour.html`.
*   **Elite Guestbook:** Replace the background image in `yacht-tour.html` with `Pearl of sean 10.png`.

## 5. Project History
### Hopping Tour Page Enhancements (Current)
*   **Unified Visuals:** Synced the hero background video across the landing page and tour detail page for a cohesive brand experience.
*   **Dynamic Content:** Integrated YouTube Shorts into the tour highlights section to provide a more engaging, mobile-first visual experience.
*   **Pricing Adjustment:** Updated the standard tour investment to 1,900 PHP, ensuring consistent pricing across sticky CTAs and detail sections.
*   **Branding:** Applied the "Pearl of sean 10.png" as a textured background for the social proof section.

### Add Logo to Header
*   Integrated "Pearl Of Sean" logo image into the fixed header and footer.
*   Ensured responsive sizing and color transitions on scroll.

### Hero Background Video (YouTube Integration)
*   Switched from a local video file to a YouTube-hosted background video (`https://youtu.be/p1Ksygpa4cE`).
*   Configured the YouTube iframe for seamless background playback.
*   This approach ensures 100% deployment compatibility with Cloudflare Pages and significantly faster initial page loads.
