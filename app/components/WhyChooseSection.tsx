'use client';
import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseSection = () => {
  return (
    <motion.div
      className="shadow-xl w-full py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <div className="flex items-center justify-center text-center mb-12">
          <img
            src="/choose.jpg" 
            alt="Why Choose Us"
            className="w-24 h-24 object-cover rounded-full mr-4 "
          />
          <h2 className="text-4xl font-extrabold text-black">
            Why Choose Optimise Healthcare Group?
          </h2>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: 'Public Transport Links', description: 'Easily accessible by public transport, ensuring convenience for all our patients.' },
            { title: 'Expert Consultant Psychiatrists', description: 'Our team consists of highly qualified psychiatrists specializing in mental health.' },
            { title: 'Mental Health Support Group', description: 'Join our support groups to connect with others facing similar challenges.' },
            { title: 'On-Site Parking Available', description: 'We provide ample on-site parking for your convenience and peace of mind.' },
            { title: 'Disabled Access', description: 'Our facility is fully accessible, with ramps and special accommodations for disabled individuals.' },
            { title: 'Self Referrals Accepted', description: 'Patients can refer themselves directly to our services, simplifying the process.' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center flex-col bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              whileInView={{
                opacity: 1,
                scale: 1.05,
                transition: { duration: 1 },
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <span className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">{item.title}</span>
              <p className="text-lg text-gray-700 mb-4">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseSection;
