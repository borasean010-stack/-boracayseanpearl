"use client";

import { motion } from "framer-motion";

const timeline = [
  { time: "08:00 AM", title: "Meet & Greet", desc: "Gather at Station 2 for check-in and safety briefing." },
  { time: "09:00 AM", title: "Set Sail", desc: "Board the luxury yacht and begin cruising the coastline." },
  { time: "10:30 AM", title: "Snorkeling & Water Sports", desc: "Dive into crystal waters or enjoy paddleboarding." },
  { time: "12:30 PM", title: "Premium Seafood Lunch", desc: "Feast on a freshly prepared island-style BBQ." },
  { time: "03:00 PM", title: "Island Exploration", desc: "Visit hidden coves and pristine white beaches." },
  { time: "05:00 PM", title: "Sunset Party Vibes", desc: "Live DJ, cocktails, and the famous Boracay sunset." }
];

export function Timeline() {
  return (
    <section className="py-24 bg-secondary text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            A Day in <span className="text-primary italic">Paradise</span>
          </motion.h2>
          <p className="text-gray-400">Typical itinerary for our full-day premium tour.</p>
        </div>

        <div className="relative border-l border-white/20 pl-8 ml-4 md:pl-0 md:ml-0 md:border-l-0">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/20" />

          {timeline.map((item, index) => (
            <div key={index} className="mb-12 relative md:flex md:justify-between md:items-center">
              {/* Dot */}
              <div className="absolute -left-[41px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary z-10 shadow-[0_0_10px_rgba(41,211,208,0.8)]" />
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:ml-auto'}`}
              >
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-primary font-bold tracking-wider text-sm mb-2 block">{item.time}</span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
