'use client';
import React from 'react';
import { motion } from 'framer-motion';

const MentalHealthSection = () => {
    return (
        <motion.div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black relative bg-cover bg-center py-32">
            {/* Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Flexbox Layout */}
            <div className="flex items-center justify-between relative container mx-auto px-6">

                {/* Left side: Image with scroll-triggered animation */}
                <motion.div
                    className="w-full md:w-1/3 flex justify-center"
                    initial={{ opacity: 0, x: -100 }} // Initial state (off-screen left)
                    whileInView={{ opacity: 1, x: 0 }} // Triggered when in view
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: false }} // Trigger each time it comes into view
                >
                    <img
                        src="/drsha.jpeg"
                        alt="img"
                        className="h-[500px] md:h-[700px] w-[500px] md:w-[400px] object-cover rounded-lg shadow-xl mx-auto"
                    />
                </motion.div>

                {/* Right side: Content with scroll-triggered animation */}
                <motion.div
                    className="w-full md:w-2/3 text-white px-6 py-12"
                    initial={{ opacity: 0, x: 100 }} // Initial state (off-screen right)
                    whileInView={{ opacity: 1, x: 0 }} // Triggered when in view
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: false }} // Trigger each time it comes into view
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
                        Are you experiencing symptoms of mental health illness for the first time?
                    </h2>
                    <p className="text-base md:text-lg font-medium mb-8">
                        We can treat a range of mental health conditions here in the clinic. However, we recognise that some people may be experiencing mental health concerns for the first time.
                    </p>
                    <p className="text-base md:text-lg font-medium mb-12">
                        If you do not have a current diagnosis but would like to speak to a member of staff, please fill out our form and a member of our staff will be in touch.
                    </p>

                    <p className="text-base md:text-lg font-medium mb-12">
                        You can also take a look at our conditions pages for further information about the symptoms you may be experiencing.
                    </p>




                </motion.div>
            </div>
        </motion.div>
    );
};

export default MentalHealthSection;
