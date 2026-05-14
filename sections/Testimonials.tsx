"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Jenkins",
    location: "Australia",
    text: "Best experience we had in Boracay! The crew was so attentive and the yacht was absolutely stunning.",
    rating: 5
  },
  {
    name: "Michael Chen",
    location: "USA",
    text: "The views were absolutely unreal. The sunset party vibe is something you cannot miss when visiting.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    location: "UK",
    text: "Super friendly crew and amazing vibes. From the snorkeling to the food, everything was premium quality.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-light overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4"
          >
            Traveler <span className="text-primary italic">Stories</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg max-w-md w-full relative"
            >
              <div className="flex text-accent mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 text-lg">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-secondary">{review.name}</h4>
                <p className="text-sm text-gray-400">{review.location}</p>
              </div>
              <div className="absolute top-8 right-8 text-primary/10 font-heading text-6xl font-black select-none">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
