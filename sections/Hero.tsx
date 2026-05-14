"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image / Video */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Boracay Ocean"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-transparent to-secondary/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary font-semibold tracking-[0.2em] uppercase mb-4 text-sm md:text-base"
        >
          Premium Boracay Island Hopping Experience
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 text-balance mx-auto leading-tight"
        >
          Sail Through Boracay’s Most <span className="italic text-primary">Beautiful</span> Moments
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href="#booking"
            className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-secondary transition-colors flex items-center justify-center gap-2"
          >
            Book Now <ArrowRight size={20} />
          </a>
          <a
            href="#tours"
            className="w-full sm:w-auto bg-transparent border border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            Explore Tours
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/70 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 overflow-hidden relative">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
