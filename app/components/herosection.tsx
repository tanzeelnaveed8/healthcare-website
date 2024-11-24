"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto px-6 pt-32 md:pt-48 lg:pt-60 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Content: Text Section */}
        <motion.div
          className="space-y-6 text-left"
          initial={{ opacity: 0, x: -50 }} // Start state (hidden and shifted left)
          whileInView={{ opacity: 1, x: 0 }} // Visible state (fades in and moves to position)
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Maximise Your True <br />
            Potential with{" "}
            <span className="text-blue-950">Optimise</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-800">
            Leading Experts in Mental Health Assessment and Treatment.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/career"
              className="bg-white hover:bg-cyan-400 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-center"
            >
              Explore Careers
            </a>
            <a
              href="/EnquiryForm"
              className="bg-black hover:bg-cyan-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-center"
            >
              Speak to Our Experts
            </a>
          </div>
        </motion.div>

        {/* Right Content: Single Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }} // Start state (hidden and shifted right)
          whileInView={{ opacity: 1, x: 0 }} // Visible state (fades in and moves to position)
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
        >
          <img
            src="/dr.jpg"
            alt="Mental Health Illustration"
            className="h-80 w-80 md:h-96 md:w-96 object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
