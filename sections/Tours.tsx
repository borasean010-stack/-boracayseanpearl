"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tours = [
  {
    image: "https://images.unsplash.com/photo-1544551763-77ef2d011504?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Crystal Cove Hopping",
    description: "Explore the stunning caves and crystal clear waters of Boracay's famous neighbor.",
    price: "$85",
    includes: ["Snorkeling Gear", "Seafood BBQ Lunch", "Cove Entrance Fee", "Hotel Transfer"]
  },
  {
    image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Sunset Island Tour",
    description: "A romantic and relaxing cruise to watch the world-famous Boracay sunset.",
    price: "$65",
    includes: ["Welcome Cocktail", "Acoustic Live Music", "Gourmet Snacks", "Premium Yacht"]
  },
  {
    image: "https://images.unsplash.com/photo-1510926880467-33eb9cc0350a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Premium Snorkeling",
    description: "Dive into the vibrant marine life at Crocodile Island and Coral Garden.",
    price: "$50",
    includes: ["GoPro Photography", "Professional Guide", "Snacks & Drinks", "Towel Service"]
  },
  {
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Magic Island Cliff Jump",
    description: "For thrill-seekers! Test your courage with various cliff jumping platforms.",
    price: "$75",
    includes: ["Unlimited Jumps", "BBQ Lunch", "Cold Beers", "Safety Briefing"]
  }
];

export function Tours() {
  return (
    <section id="tours" className="py-24 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4"
          >
            Our Premium <span className="text-primary italic">Adventures</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            Select your perfect Boracay experience. Every tour is crafted for unforgettable memories.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-secondary">
                  {tour.price} <span className="text-sm font-normal text-gray-500">/ pax</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-secondary">{tour.title}</h3>
                <p className="text-gray-600 mb-6">{tour.description}</p>
                <div className="mb-8">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-3">What's Included</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tour.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                        <Check size={16} className="text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#booking" className="block w-full text-center bg-secondary text-white py-3 rounded-xl font-medium hover:bg-primary transition-colors">
                  Book This Tour
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
