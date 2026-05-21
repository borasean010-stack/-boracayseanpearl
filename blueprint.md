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

### Combo Package (Land + Hopping) Detail Page
*   **New Page (`package-tour.html`):** Created a dedicated landing page for the Ultimate Combo Package.
*   **Hero Section:** Integrated a dynamic **YouTube Shorts** background video (`fuMdnDUH2aY`) for a modern, mobile-first visual impact.
*   **Value Proposition:** Added a dedicated section immediately below the hero that breaks down the individual costs (1,900 + 700 = 2,600) vs. the discounted package price (2,500 PHP), emphasizing the 100 PHP per person saving.
*   **Split Highlights:** Implemented a side-by-side comparison of "Part 1: Land" and "Part 2: Yacht" highlights to showcase the full island coverage, including looping "GIF-style" video previews.
*   **Expanded Social Proof:** Increased the number of testimonials in the "Elite Guestbook" to 6, including specific feedback from Korean and international guests to boost credibility and appeal.
*   **Quality Guarantee:** Integrated the "Al-Jal-Ttak-Kkal-Sen" (알잘딱깔센) service philosophy into the copy to emphasize professional, seamless coordination.
*   **Home Page Integration:** Linked the "Ultimate Combo Package" section on `index.html` directly to this new detail page.

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
