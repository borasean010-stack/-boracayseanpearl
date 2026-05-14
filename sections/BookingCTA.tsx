"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export function BookingCTA() {
  return (
    <section id="booking" className="relative py-32 bg-secondary text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1510926880467-33eb9cc0350a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Sunset Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-heading font-bold mb-6 text-balance mx-auto max-w-4xl leading-tight"
        >
          Book Your Ultimate Boracay Adventure With <span className="text-primary italic">Pearl Of Sean</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Spots fill up quickly. Secure your premium island hopping experience today and get ready for unforgettable ocean vibes.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary transition-all transform hover:scale-105 shadow-xl hover:shadow-primary/50 flex items-center justify-center gap-2"
          >
            Book Your Tour <ArrowRight size={20} />
          </a>
          <a
            href="#"
            className="w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} /> WhatsApp Inquiry
          </a>
        </motion.div>
      </div>
    </section>
  );
}
