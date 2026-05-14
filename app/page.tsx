import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Tours } from "@/sections/Tours";
import { Gallery } from "@/sections/Gallery";
import { Timeline } from "@/sections/Timeline";
import { Testimonials } from "@/sections/Testimonials";
import { BookingCTA } from "@/sections/BookingCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Tours />
      <Gallery />
      <Timeline />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </main>
  );
}
