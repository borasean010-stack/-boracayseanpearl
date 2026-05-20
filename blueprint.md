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

## 4. Current Task: Horizontal Itinerary Overhaul (Yacht Tour)
*   **Section:** "The Elite Itinerary" in `yacht-tour.html`.
*   **Layout Change:** Transition from a vertical timeline to a horizontal card-based or slider layout.
*   **Image Placeholders:** Add specific slots for GIF/JPG content for each itinerary point and activity.
*   **Visual Polish:** Use modern CSS (Grid/Flex) to ensure the horizontal flow is responsive and aesthetically pleasing.

## 5. Project History
### Land Tour Designation Correction
*   **Removed 'Private' Labeling:** Updated `index.html` and `land-tour.html` to remove references to the land tour being a "private" service, accurately reflecting it as a standard/guided tour.
*   **Terminology Update:** Changed "Private Transport" to "Tour Transport" and updated descriptions to use "comfortable" or "guided" instead of "private".
### Yacht Tour Content Expansion
*   **Premium Refreshments Section Redesign:** Overhauled the service banner into a visual grid showcasing "Pika-Pika, Fruits, K-Ramen, and Unlimited Beverages" with actual photos of the items.
*   **Terminology Correction:** Changed "Cup Noodles" to "K-Ramen" and clarified that only beverages are unlimited.
*   **Balinghai Beach Media Overhaul:** Integrated high-performance looping MP4 videos for Point 2 activities.
    *   Updated: Kayaking, Paddleboard, Dance Party, Onboard Song Performance (renamed from Onboard Performance), and Giant Slide (formerly Ocean Slide).
*   **Coral Garden Media Overhaul:** Replaced static image placeholders with high-performance, looping MP4 videos for a dynamic "GIF" effect.
    *   Updated: Snorkeling, Giant Slide (formerly Ocean Slide), Rooftop Diving, and Free Diving.
*   **Complimentary Service Section:** Added a dedicated "Unlimited Refreshments" banner between point 1 and 2, highlighting unlimited pika-pika, fruits, cup noodles, and beverages.
*   **Balinghai Beach Expansion:** Reconfigured the activity grid to 8 items, including new focus on:
...
    *   Kayaking & Paddleboarding
    *   Snorkeling, Diving, and Free Diving
    *   Water Slide
    *   Dance Party and Onboard Performances
*   **Visual Grid:** Updated to a 4-column responsive grid to accommodate the increased activity count.

### Media Format Optimization
*   **HEIC to JPG Conversion:** Converted key refreshment and snack images (`fruits.heic`, `unlimited_drinks.heic`, `snacks2.heic`) to JPG format for better browser compatibility.
*   **Updated References:** Updated `yacht-tour.html` to use the new `.jpg` files for the Premium Refreshments section.

### Horizontal Itinerary Overhaul (In Progress)
*   **Task Started:** Redesigning "The Elite Itinerary" for horizontal orientation.
*   **Objective:** Improve visual flow and provide dedicated media slots for GIFs and images.

### Hopping Tour Layout & Itinerary Overhaul
*   **Section Reordering:** Swapped "The Elite Itinerary" and "Captured Moments" sections for better narrative flow.
*   **Detailed Itinerary:** Implemented a new, feature-rich itinerary structure:
    *   **First Point (Coral Garden):** Added focus on luxury amenities (cookies, drinks, hair braiding) and activities (snorkeling, rooftop diving, mermaid photos).
    *   **Second Point (Balinghai Beach):** Added focus on island playground adventure (banana boat, water gun party, kayaking) and family comfort (babysitter service, live DJ).
*   **Visual Activity Grid:** Transformed activity bullet points into "side-by-side" visual cards with icons and bold typography, ensuring high visibility for Kayaking, Paddleboarding, Snorkeling, etc.
*   **Visual Polish:** Integrated point-specific imagery and grid layouts for highlights and activities.

### Land Tour Detailed Page Implementation

*   Integrated "Pearl Of Sean" logo image into the fixed header and footer.
*   Ensured responsive sizing and color transitions on scroll.

### Hero Background Video (YouTube Integration)
*   Switched from a local video file to a YouTube-hosted background video (`https://youtu.be/p1Ksygpa4cE`).
*   Configured the YouTube iframe for seamless background playback.
*   This approach ensures 100% deployment compatibility with Cloudflare Pages and significantly faster initial page loads.
