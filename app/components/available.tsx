'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Available = () => {
  const treatments = [
    {
      src: "adhd.jpg",
      alt: "ADHD Clinic",
      title: "ADHD Clinic",
      link: "/adhd",
    },
    {
      src: "specialist.jpg",
      alt: "Psychiatric Assessments",
      title: "Specialist Psychiatric Assessments & Medication Review",
      link: "/specialist-psychiatric-assessments-&-medication-review",
    },
    {
      src: "transcranial.jpeg",
      alt: "TMS Treatment",
      title: "Transcranial Magnetic Stimulation (TMS)",
      link: "/transcranial-magnetic-stimulation-(tms)",
    },
    {
      src: "nasal.jpeg",
      alt: "Esketamine Nasal Spray",
      title: "Esketamine Nasal Spray",
      link: "/esketamine-nasal-spray",
    },
    {
      src: "therapy.jpeg",
      alt: "Psychological Therapy",
      title: "Psychological Therapy",
      link: "/psychological-therapy",
    },
    {
      src: "transcranial.jpeg",
      alt: "TMS for Migraine",
      title: "TMS for Migraine",
      link: "/transcranial-magnetic-stimulation-(tms)",
    },
    
  ];

  return (
    <motion.div
      className="bg-gradient-to-r from-white shadow-xl w-full"
      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="shadow-2xl py-20 mt-12 rounded-xl"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="container mx-auto px-12">
          <h2 className="text-5xl font-extrabold text-black mb-12 text-center">
            Available Treatments
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                className="w-full md:w-1/3 flex justify-center"
                initial={{ opacity: 0, x: -100 }} // Off-screen left
                whileInView={{ opacity: 1, x: 0 }} // Slide in from left
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: false }} // Trigger on each scroll into view
              >
                <div className="flex flex-col justify-between items-center p-6 w-80 bg-white border-b border-gray-300 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={treatment.src}
                    alt={treatment.alt}
                    className="w-40 h-40 object-cover rounded-full shadow-xl mb-4"
                  />
                  <span className="text-2xl font-semibold text-gray-800 text-center mb-4">
                    {treatment.title}
                  </span>
                  <a
                    href={treatment.link}
                    className="text-black hover:underline text-lg"
                  >
                    View Treatment
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Available;
