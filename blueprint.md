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

## 4. Current Task: Search Engine Optimization & Verification
*   **Naver Site Verification:** Integrated the Naver site verification meta tag into the `<head>` section of `index.html` to allow the site to be registered and indexed by Naver Search Advisor.

## 5. Project History
### SEO & Site Verification
*   **Naver Verification:** Added `<meta name="naver-site-verification" content="5aad8aba9c3f537bae19fe3700a5e0cbf5f34131" />` to `index.html`.
### Navigation Header Standardization
*   **Header Unification:** Standardized the navigation header across all pages (`index.html`, `land-tour.html`, `yacht-tour.html`, `package-tour.html`, `booking.html`).
*   **Mobile Navigation:** Removed the hamburger menu (mobile toggle) and made the core navigation links ("Home" and "Tours") visible directly on mobile devices for a more streamlined user experience.
*   **Robust Sticky Header:** Updated the scroll logic in `main.js` to ensure visual transitions (background blur, color changes) work reliably across all pages without requiring mobile menu elements.
*   **Structure Fixes:** Corrected HTML structural issues (nested tag closures) in `index.html`.
### Global UI Scaling & Zoom Lock
*   **Default Zoom Level:** Set the global zoom to 90% via CSS (`zoom: 0.9`) for a more compact and balanced visual experience across all pages.
*   **Scaling Lock:** Updated `viewport` meta tags in `index.html`, `land-tour.html`, and `yacht-tour.html` to disable user scaling (`user-scalable=no`), ensuring the layout remains fixed and consistent.

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

### Land Tour Video Layout Standardization
*   **Hero Section:** Maintained the original high-quality static background image as requested, ensuring a clean and focused entry point.
*   **Visual Itinerary Overhaul:** Replaced the vertical timeline with a visually rich, sectioned itinerary similar to the Yacht Tour.
    *   **Looping Videos (GIF effect):** Integrated 8 looping videos for key destinations, including Puka Beach, Newcoast Keyhole, Mangrove Eco Park, and Bulabog's Leaning Coconut Tree.
    *   **English Localization:** All labels, headings, and descriptions have been translated to English for a premium global appeal.
    *   **Grouped Points:** Organized the tour into 4 main "Points" (Scenic Discovery, Modern Landscapes, Hidden Treasures, and Coastal Icons) to improve the narrative flow.
*   **Filipino Guest Testimonials:** Added a new social proof section featuring reviews from Filipino guests (Maria Santos, Juan Dela Cruz, Ana Reyes) to build trust with the local market, maintaining the same aesthetic as the main landing page.
*   **Layout Cleanup:** Removed the "Land Tour Views" masonry gallery section to prioritize the new video-based itinerary.

### Land Tour Hero Image Update
*   **Hero Section:** Updated the main hero image to `I-Love-Boracay-at-Bulabog-Beach-1536x1024.jpg` to provide a vibrant and iconic visual of Bulabog Beach for the Land Tour experience.
*   **Consistency:** Also updated the Final CTA background image to use the same asset, ensuring a unified visual theme throughout the page.

### Land Tour Inclusions & Itinerary Update
*   **New Inclusions:** Updated the package to include a fully air-conditioned van for a 3-hour tour and complimentary bottled mineral water.
*   **Pricing Correction:** Reverted the price to ₱700 per person as per the latest update.
*   **Itinerary Refresh:** Overhauled the tour destinations to include Mangrove Eco Park, Bolabog Beach (Leaning Coconut Tree), Newcoast Keyhole, Puka Shell Beach, and Sinagpa Beach.
*   **Descriptive Content Overhaul:** Rewrote the "Detailed Description" section to focus on the new 6 key destinations, replacing outdated sections like "Local Life" and "Sky-High Views" with relevant, high-quality copy.
*   **Layout Cleanup:** Removed the "Pearl Of Sean Moments" gallery section from the home page to maintain a cleaner, more focused user experience.
*   **Global Sync:** Updated `index.html` to ensure the Land Tour highlights, description, and pricing are consistent with the detail page.

### Mobile Video Compatibility & Layout Optimization
*   **Video Filename Standardization (ASCII):** Renamed all Korean video files to ASCII names to eliminate path encoding issues on mobile browsers (especially Safari/iOS).
    *   `보라카이 랜드투어.mp4` → `land_tour_highlights.mp4`
    *   `푸카비치.mp4` → `puka_beach.mp4`
    *   `뉴코스트.mp4` → `newcoast.mp4`
    *   `뉴코스트 키홀.mp4` → `newcoast_keyhole.mp4`
    *   `맹그로브.mp4` → `mangrove.mp4`
    *   `시낙빠.mp4` → `sinagpa.mp4`
    *   `블라복.mp4` → `bulabog.mp4`
    *   `블라복 나무.mp4` → `leaning_coconut.mp4`
*   **Mobile-First Itinerary Layout:** Updated the grid layout for tour itineraries in `land-tour.html` and `package-tour.html` to be single-column on mobile while preserving the 2-column layout on desktop. This ensures videos are large enough to be engaging on small screens.
*   **Intelligent Video Playback (Intersection Observer):** Enhanced `main.js`, `land-tour.js`, and `yacht-tour.js` with intersection-based playback. Videos now automatically `play()` when entering the viewport and `pause()` when leaving, saving mobile data and battery life.
*   **Autoplay Reliability:** Ensured all video elements have `muted`, `playsinline`, and `autoplay` attributes to bypass aggressive mobile autoplay restrictions.

### Project Tracking & Maintenance
*   **Git Cleanup:** Removed legacy Korean-named files from the repository to maintain a clean workspace.
*   **PC Layout Preservation:** Verified that all mobile-specific changes use responsive Tailwind classes (e.g., `grid-cols-1 md:grid-cols-2`) to ensure zero impact on the desktop experience.

### Quality Guarantee & UX Refinement
*   **Restored Floating Price CTAs:** Brought back the floating "Price & Booking" boxes (Desktop CTA) and sticky mobile bars to the `land-tour.html` and `yacht-tour.html` pages. This ensures the price (700 PHP for Land / 1,900 PHP for Hopping) is always visible to the user as they scroll, as per the "old version" layout.
*   **JS Scroll Logic Restoration:** Re-implemented the JavaScript scroll-triggered visibility for the floating CTAs in `land-tour.js` and `yacht-tour.js`.
*   **Layout Expansion:** Expanded the content width for the "Detailed Description" and "Logistics" sections on both `land-tour.html` and `yacht-tour.html`. Removed restrictive max-width classes to ensure the layout matches the broader scale of the overall application.
*   **Itinerary Video Optimization (Shorts Style):** Resized the tour highlight videos on both detailed pages. Changed the aspect ratio from 16:9 to a portrait 3:4 ratio and increased the grid columns (up to 4 columns on desktop). Also reduced internal label text sizes to ensure the videos feel like "shorts" and match the surrounding text scale.
*   **Header Navigation Cleanup:** Removed the "Book Now" / "Book Package" / "Book Tour" buttons from the top navigation bar and mobile menu across all pages. Also removed the "Gallery", "Reviews", and "Contact" links to prioritize the most critical paths (Home, Tours, Itinerary).

### Dedicated Booking Page Refactor
*   **Purpose:** Transitioned from a generic booking form to a tour-specific checkout experience (`booking.html`).
*   **Tour-Specific Logic:** The page now dynamically adapts its content (tour name, price, icon) based on URL parameters (`?tour=land`, `?tour=yacht`, `?tour=combo`).
*   **Two-Step Booking Flow:**
    1.  **Reservation Details:** Guest information, Date selection via custom calendar, and Pax adjustment.
    2.  **Checkout & Payment:** A summary view confirming all details and calculating the Grand Total based on selected tour and pax count.
*   **Guest Details Overhaul:** Reverted the customer information section to a comprehensive layout including Full Name, Phone Number, and Email Address.
*   **Integrated Payment Gateway (Placeholder):** Added a professional payment method selection interface.
    *   **GCash:** Stylized option for Philippines' primary digital wallet.
    *   **PayPal:** Brand-aligned option for international and card payments.
    *   **Order Summary:** Real-time calculation of subtotal, service fees, and grand total.
*   **Custom Calendar Integration:** Replaced the external `flatpickr` input with a custom-built, always-visible calendar component.
    *   **Aesthetics:** Matches the Pearl of Sean palette (Secondary background, Primary accents).
    *   **Interactivity:** Month-to-month navigation, automatic today highlighting, and past-date disabling.
*   **Enhanced Pax Controls:** Replaced numeric inputs with interactive plus/minus controllers for Adults and Children.


### Combo Package (Land + Hopping) Detail Page
*   **New Page (`package-tour.html`):** Created a dedicated landing page for the Ultimate Combo Package.
*   **Hero Section:** Reverted to the high-end **YouTube premium yacht video** (`9bDWdocKn9I`) for a more consistent and cinematic luxury feel.
*   **Value Proposition:** Added a dedicated section immediately below the hero that breaks down the individual costs (1,900 + 700 = 2,600) vs. the discounted package price (2,500 PHP), emphasizing the 100 PHP per person saving.
*   **Dynamic Video Previews:** Implemented a JavaScript-based video switcher for the "Double the Adventure" section.
*   **Essential Info Cards:** Added integrated logistics cards for both tours (Meeting times, locations, and preparation guides).
*   **Sticky Reservation UX:** Implemented a fixed vertical booking tab on the right side of the screen for desktop users, ensuring the primary conversion goal is always accessible.
*   **Expanded Social Proof:** Increased the number of testimonials in the "Elite Guestbook" to 6.
*   **Quality Guarantee:** Integrated the "Al-Jal-Ttak-Kkal-Sen" (알잘딱깔센) service philosophy into the copy.
*   **Home Page Integration:** Linked the "Ultimate Combo Package" section on `index.html` directly to this new detail page.

### Tour Detail Page Enhancements
*   **Meeting Logistics:** Added "Essential Tour Information" cards to both `land-tour.html` and `yacht-tour.html` containing meeting times, starting times, specific points (Front/Back Beach), and preparation checklists.
*   **Anniversary Events:** Added a promotional card for the **Black Pearl Special Event Service** (Birthday, Proposal, Anniversary celebrations) on the Yacht Tour page, highlighting it as a free, pre-requested luxury service.

### Thumbnail & Deployment Fixes
*   **Removed Detailed View Link:** Deleted the "전체 제휴사 및 할인 혜택 상세 보기" link as requested, streamlining the Membership section.
*   **HTML Structure Cleanup:** Identified and removed a significant block of orphaned and redundant partner icons that were outside the section container, fixing a layout bug.
*   **Icon Standardization:** Standardized all affiliate icons to a larger, more premium size (`w-24 h-24 md:w-32 md:h-32`) and updated label text to a consistent `text-sm`.
*   **Background Consistency:** Ensured all partner icons have a clean `bg-white rounded-full` background with `shadow-xl` for a polished look.

### Membership Icon & Styling Overhaul
*   **Premium Partner Integration:** Replaced generic partner icons with 10 new "Pearl of Sean" partner logos (`Pearl of sean 1..10`).
*   **Styling Fix:** Resolved the "square edges" issue by switching from `object-contain` with padding to `object-cover`. This ensures images fill the circular containers perfectly.
*   **Background Color Adjustment:** Removed white backgrounds from icons as requested, ensuring the circular container's aesthetic matches the provided logos.
*   **Full English Translation:** Conducted a project-wide sweep to ensure all user-facing text, labels, and alt tags are in English.

### Land Tour Logistics Overhaul
*   **Section:** "Explore Boracay's Natural Wonders" in `land-tour.html`.
*   **Layout Change:** Consolidated "Meeting Information", "Preparation", and "Inclusions & Exclusions" into a single 3-column responsive grid located immediately below the section's introductory description.
*   **Aesthetics:** Maintained consistency with the existing premium design, using rounded containers, soft shadows, and Phosphor icons for each category.
*   **Content Optimization:** Streamlined the lists for better readability in a column-based layout, ensuring all essential details are preserved while reducing vertical scrolling.

### Mangrove Park Integration
*   **Land Tour Highlights:** Added Mangrove Eco Park to the primary "Highlights" section on `land-tour.html` to ensure all key destinations are represented at a glance.
*   **Consistency Check:** Verified that Mangrove Park is consistently featured across the landing page and detailed itinerary sections.

### Domain Integration & DNS Configuration
*   **Domain Re-registration:** Successfully re-registered `pearlofsean.com` and configured DNS records for Firebase Hosting.
*   **DNS Settings (Verification in Progress):**
    *   **A Record:** `@` pointed to `199.36.158.100` and `151.101.1.195`.
    *   **CNAME Record:** `www` pointed to `boracaysean-local.web.app`.
    *   **TXT Record:** `@` (Requires value from Firebase Console to complete verification).
*   **Redirect Logic:** Configured `firebase.json` to redirect the root domain to `www.pearlofsean.com` for SEO consistency.
*   **SEO & Metadata:** Verified that all HTML files, `sitemap.xml`, and `rss.xml` are correctly using `https://www.pearlofsean.com` as the canonical base URL.

