"use client";
import React, { useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryForm from "../EnquiryForm/page";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state

  // Function to handle hover for each dropdown
  const handleMouseEnter = (dropdown: any | React.SetStateAction<null>) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      className="bg-white shadow-lg w-full fixed top-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Navbar Top Section */}
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
        >
          <a href="/">
            <img src="nav-logo.png" alt="Logo" className="w-48 h-auto" />
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="flex items-center space-x-2 text-gray-800 sm:flex"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <PhoneIcon className="h-6 w-6 text-black" />
          <a
            href="tel:08008445257"
            className="font-medium text-black hover:text-cyan-600"
          >
            Contact Us:{" "}
            <span className="underline text-blue-900">0800 844 5257</span>
          </a>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Navbar Links Section */}
      <motion.div
        className="bg-white py-3 shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Links for Desktop */}
          <div className="hidden sm:flex space-x-6">
            {/* Dropdown for Our Team */}
            <motion.div
              className="relative"
              onMouseEnter={() => handleMouseEnter("ourTeam")}
              onMouseLeave={handleMouseLeave}
            >
              <motion.a
                href="/"
                className="text-gray-800 hover:text-cyan-600 text-lg font-semibold transition-transform transform hover:scale-105"
              >
                Our Team
              </motion.a>
              <AnimatePresence>
                {activeDropdown === "ourTeam" && (
                  <motion.ul
                    className="absolute bg-white shadow-lg mt-2 rounded-lg text-gray-800 w-48"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <li>
                      <a
                        href="/Meetup"
                        className="block px-4 py-2 text-lg font-medium hover:text-cyan-600"
                      >
                        Meet the Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="/JoinTeam"
                        className="block px-4 py-2 text-lg font-medium hover:text-cyan-600"
                      >
                        Join Our Team
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>

           

            {/* Conditions Dropdown */}
            <motion.div
              className="relative"
              onMouseEnter={() => handleMouseEnter("conditions")}
              onMouseLeave={handleMouseLeave}
            >
              <motion.a
                href="/"
                className="text-gray-800 hover:text-cyan-600 text-lg font-semibold transition-transform transform hover:scale-105"
              >
                Conditions
              </motion.a>
              <AnimatePresence>
                {activeDropdown === "conditions" && (
                  <motion.ul
                    className="absolute bg-white shadow-lg mt-2 rounded-lg text-gray-800 w-48"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {[
                      "ADHD",
                      "Depression",
                      "OCD",
                      "Anxiety",
                      "Addiction",
                      "PTSD",
                      "Migraine",
                      "Bipolar",
                    ].map((condition) => (
                      <li key={condition}>
                        <a
                          href={`/${condition.toLowerCase()}`}
                          className="block px-4 py-2 text-lg font-medium hover:text-cyan-600"
                        >
                          {condition}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
                
            {/* Services Dropdown */}
            <motion.div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <motion.a
                href="/"
                className="text-gray-800 hover:text-cyan-600 text-lg font-semibold transition-transform transform hover:scale-105"
              >
                Services
              </motion.a>
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.ul
                    className="absolute bg-white shadow-lg mt-2 rounded-lg text-gray-800 w-48"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {[
                      "ADHD",
                      "Specialist Psychiatric Assessments & Medication Review",
                      "Transcranial Magnetic Stimulation (TMS)",
                      "Esketamine Nasal Spray",
                      "Psychological Therapy",
                      "TMS for Migraine",
                      "Maintenance Treatment",
                    ].map((service) => (
                      <li key={service}>
                        <a
                          href={`/${service.toLowerCase().replace(/ /g, "-")}`}
                          className="block px-4 py-2 text-lg font-medium hover:text-cyan-600"
                        >
                          {service}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Treatments Dropdown */}
            <motion.div
              className="relative"
              onMouseEnter={() => handleMouseEnter("treatments")}
              onMouseLeave={handleMouseLeave}
            >
              <motion.a
                href="/"
                className="text-gray-800 hover:text-cyan-600 text-lg font-semibold transition-transform transform hover:scale-105"
              >
                Treatments
              </motion.a>
              <AnimatePresence>
                {activeDropdown === "treatments" && (
                  <motion.ul
                    className="absolute bg-white shadow-lg mt-2 rounded-lg text-gray-800 w-48"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {[
                      "ADHD",
                      "Esketamine Nasal Spray",
                      "Transcranial Magnetic Stimulation (TMS)",
                    ].map((treatment) => (
                      <li key={treatment}>
                        <a
                          href={`/${treatment.toLowerCase().replace(/ /g, "-")}`}
                          className="block px-4 py-2 text-lg font-medium hover:text-cyan-600"
                        >
                          {treatment}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
             {/* Location Dropdown */}
             <motion.div
              className="relative"
              onMouseEnter={() => handleMouseEnter("locations")}
              onMouseLeave={handleMouseLeave}
            >
              <motion.a
                href="/"
                className="text-gray-800 hover:text-cyan-600 text-lg font-semibold transition-transform transform hover:scale-105"
              >
                Locations
              </motion.a>
              <AnimatePresence>
                {activeDropdown === "locations" && (
                  <motion.ul
                    className="absolute bg-white shadow-lg mt-2 rounded-lg text-gray-800 w-48"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <li>
                      <a
                        href="/liverpool-clinic"
                        className="block px-4 py-2 text-lg font-medium hover:text-cyan-600"
                      >
                        Liverpool Clinic
                      </a>
                    </li>
                    <li>
                      <a
                        href="/cheshire-clinic"
                        className="block px-4 py-2 text-lg font-medium hover:text-cyan-600"
                      >
                        Cheshire Clinic
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          
        </div>
      </motion.div>
      
    </motion.nav>

  );
};

export default Navbar;
