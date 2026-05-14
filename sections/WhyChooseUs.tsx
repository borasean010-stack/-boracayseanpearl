"use client";

import { motion } from "framer-motion";
import { Users, Camera, Anchor, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Users size={32} />,
    title: "Small Group Premium Tours",
    description: "Enjoy a more intimate and personalized experience without the crowds."
  },
  {
    icon: <Camera size={32} />,
    title: "Instagram-Worthy Locations",
    description: "We take you to the most beautiful, hidden spots perfect for your feed."
  },
  {
    icon: <Anchor size={32} />,
    title: "Local Expert Guides",
    description: "Discover Boracay through the eyes of passionate, knowledgeable locals."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Safe & Professional",
    description: "Top-tier safety standards and a highly trained crew for your peace of mind."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4"
          >
            Why Choose <span className="text-primary italic">Pearl Of Sean</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            We redefine island hopping by combining luxury, adventure, and impeccable service.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-light p-8 rounded-2xl text-center group transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-secondary group-hover:text-primary transition-colors shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
