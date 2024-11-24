'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <motion.div
            className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16 px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }} // Repeats the animation on scroll
            transition={{ duration: 1.5 }}
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Left Content */}
                <motion.div
                    className="w-full md:w-2/3 text-white px-6 py-12"
                    initial={{ opacity: 0, x: -100 }} // Initial state (off-screen left)
                    whileInView={{ opacity: 1, x: 0 }} // Triggered when in view
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: false }} // Animates every time it comes into view
                >
                    <h2 className="text-4xl font-extrabold mb-6">About Optimise Healthcare Group</h2>
                    <p className="text-lg mb-6">
                        Our qualified team is here to provide expert care and personalized solutions to enhance your well-being.
                        With a wide range of treatments and services, we ensure you receive the best care possible.
                    </p>
                    <a
                        href="#team"
                        className="bg-cyan-600 text-white text-lg py-3 px-6 rounded-lg shadow-lg hover:bg-cyan-700 transition duration-300"
                    >
                        Meet The Team
                    </a>
                    <p className="text-lg mt-6">
                        Call us: <span className="font-bold text-cyan-400">0800 8445257</span>
                    </p>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
                    initial={{ opacity: 0, x: 100 }} // Initial state (off-screen right)
                    whileInView={{ opacity: 1, x: 0 }} // Triggered when in view
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: false }} // Animates every time it comes into view
                >
                    <img
                        src="/aboutteam.jpeg" // Replace with the actual path to your image
                        alt="Healthcare Team"
                        className="w-[400px] h-auto md:w-[600px] lg:w-[800px] rounded-lg shadow-2xl"
                    />
                </motion.div>

            </div>
        </motion.div>
    );
};

export default AboutSection;
