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
*   **Itinerary Refresh:** Overhauled the tour destinations to include Mangrove Eco Park, Bolabog Beach (Leaning Coconut Tree), Newcoast Keyhole, Puka Shell Beach, Sinagpa Beach, and Station 1 Groto (Willy's Rock).
*   **Descriptive Content Overhaul:** Rewrote the "Detailed Description" section to focus on the new 6 key destinations, replacing outdated sections like "Local Life" and "Sky-High Views" with relevant, high-quality copy.
*   **Layout Cleanup:** Removed the "Pearl Of Sean Moments" gallery section from the home page to maintain a cleaner, more focused user experience.
*   **Global Sync:** Updated `index.html` to ensure the Land Tour highlights, description, and pricing are consistent with the detail page.

### Thumbnail & Deployment Fixes
*   **Fixed Broken Thumbnails:** Restored `land.jpg` and `hopping.jpg` by copying them from existing assets (`land0.jpg`, `hopping0.jpg`), fixing the "broken image" issue on the main `index.html` page.
*   **Git Deployment:** Committed and pushed all recent changes to the `main` branch to trigger the production deployment.

### Quality Guarantee & UX Refinement
*   **Restored Floating Price CTAs:** Brought back the floating "Price & Booking" boxes (Desktop CTA) and sticky mobile bars to the `land-tour.html` and `yacht-tour.html` pages. This ensures the price (700 PHP for Land / 1,900 PHP for Hopping) is always visible to the user as they scroll, as per the "old version" layout.
*   **JS Scroll Logic Restoration:** Re-implemented the JavaScript scroll-triggered visibility for the floating CTAs in `land-tour.js` and `yacht-tour.js`.
*   **Layout Expansion:** Expanded the content width for the "Detailed Description" and "Logistics" sections on both `land-tour.html` and `yacht-tour.html`. Removed restrictive max-width classes to ensure the layout matches the broader scale of the overall application.
*   **Itinerary Video Optimization (Shorts Style):** Resized the tour highlight videos on both detailed pages. Changed the aspect ratio from 16:9 to a portrait 3:4 ratio and increased the grid columns (up to 4 columns on desktop). Also reduced internal label text sizes to ensure the videos feel like "shorts" and match the surrounding text scale.
*   **Header Navigation Cleanup:** Removed the "Book Now" / "Book Package" / "Book Tour" buttons from the top navigation bar and mobile menu across all pages. Also removed the "Gallery", "Reviews", and "Contact" links to prioritize the most critical paths (Home, Tours, Itinerary).

### Dedicated Booking Page Implementation (Current Task)
*   **Purpose:** Create a professional, dedicated booking page (`booking.html`) to replace inline booking sections and external chat links, providing a more structured and premium booking experience.
*   **Form Structure:**
    *   **Guest Details:** Name, Phone/Email, Messenger ID (Kakao/WhatsApp), and Number of Guests (Adults/Children).
    *   **Tour Selection:** Dropdown to choose between Boracay Land Tour, Pearl of Sean Hopping Tour, or the Ultimate Combo Package.
    *   **Date Selection:** Visual calendar input for selecting the tour date.
*   **Conversion Logic:** 
    *   The "Submit" button will process the form data via JavaScript.
    *   It will generate a structured, pre-filled booking message (e.g., "Hi Pearl of Sean, I'd like to book [Tour] for [Date] for [Pax] people. My Kakao/WA ID is [ID]...")
    *   The user will be redirected to WhatsApp to send the final message for immediate confirmation.
*   **Integration:**
    *   Update all "Book Now", "Reserve Now", and "Website Booking" buttons across the entire site to link to `booking.html`.
    *   Use URL parameters (e.g., `?tour=land`) to pre-populate the tour selection when users click from a specific detail page.

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

