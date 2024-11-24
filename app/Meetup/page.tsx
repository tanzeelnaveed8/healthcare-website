
'use client'
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion


export default function MeetTheTeam() {
  return (
    <div className="bg-gray-100 text-gray-800">


      {/* Team Picture */}
      <motion.section
        className="relative mb-16 mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <img
          src="/woleteam.jpg"
          alt="Meet the Team"
          className="w-full h-80 lg:h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Meet the Team
          </h1>
        </div>
      </motion.section>

      {/* Team Members */}
      <motion.section
        className="py-16 px-4 sm:px-8 lg:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <div>
          {/* Directors */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl font-semibold mb-6">Directors</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Lauren Campbell", role: "Managing Director", image: "lauren.jpeg", bio: "Click for bio" },
                { name: "Dr Rashad Nazir", role: "CEO", image: "/rashad.jpeg", bio: "Click for bio" },
                { name: "Dr Nithya Anandan", role: "Founder & Medical Director", image: "/nithaya.jpeg", bio: "Click for bio" },
              ].map((person) => (
                <motion.div
                  key={person.name}
                  className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: false }}
                >
                  <img src={person.image} alt={person.name} className="w-32 h-32 mx-auto rounded-full object-cover" />
                  <h3 className="mt-4 text-xl font-bold">{person.name}</h3>
                  <p className="text-gray-600">{person.role}</p>
                  <a href="#" className="mt-4 inline-block text-blue-600 hover:underline">{person.bio}</a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Management */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl font-semibold mb-6">Management</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Molly Walsh", role: "Lead Administrator", image: "/molly.jpg" },
                { name: "Joanne Pilling", role: "Operational Lead", image: "/joanne.jpg" },
              ].map((member) => (
                <motion.div
                  key={member.name}
                  className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: false }}
                >
                  <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover" />
                  <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Doctors */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl font-semibold mb-6">Doctors</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Dr Samuel Jeh", role: "Staff Grade, Associate Specialist, and Specialty Doctor", image: "/sameul.jpeg" },
                { name: "Dr Andrew Babicki", role: "Staff Grade, Associate Specialist, and Specialty Doctor", image: "/andrew.jpeg" },
                { name: "Dr Saman Shahzad", role: "Specialist Neurodevelopmental Consultant", image: "/saman.jpeg" },
              ].map((doctor) => (
                <motion.div
                  key={doctor.name}
                  className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: false }}
                >
                  <img src={doctor.image} alt={doctor.name} className="w-32 h-32 mx-auto rounded-full object-cover" />
                  <h3 className="mt-4 text-xl font-bold">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Nurses */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl font-semibold mb-6">Nurses</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "David Longworth", role: "Nurse Non-Medical Prescriber", image: "/david.jpg" },
              ].map((nurse) => (
                <motion.div
                  key={nurse.name}
                  className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: false }}
                >
                  <img src={nurse.image} alt={nurse.name} className="w-32 h-32 mx-auto rounded-full object-cover" />
                  <h3 className="mt-4 text-xl font-bold">{nurse.name}</h3>
                  <p className="text-gray-600">{nurse.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Psychology */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl font-semibold mb-6">Psychology</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Dr James Hampson", role: "Consultant Psychologist", image: "/james.jpeg" },
              ].map((psychologist) => (
                <motion.div
                key={psychologist.name}
                className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                  <img src={psychologist.image} alt={psychologist.name} className="w-32 h-32 mx-auto rounded-full object-cover" />
                  <h3 className="mt-4 text-xl font-bold">{psychologist.name}</h3>
                  <p className="text-gray-600">{psychologist.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

                   {/* Practitioners */}
                   <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-6">Practitioners</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Charlotte Thompson", role: "Practitioner", image: "/charlotte.jpg" },
                { name: "Brooke Furlong", role: "Practitioner", image: "/brokee.jpg" },
              ].map((practitioner) => (
                <motion.div
                key={practitioner.name}
                className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                  <img src={practitioner.image} alt={practitioner.name} className="w-32 h-32 mx-auto rounded-full object-cover" />
                  <h3 className="mt-4 text-xl font-bold">{practitioner.name}</h3>
                  <p className="text-gray-600">{practitioner.role}</p>
            
                </motion.div>
              ))}
            </div>
          </div>

          {/* Admin */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-6">Admin</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Reyhan Mahmood", role: "Administrator", image: "/reyhan.jpg" },
                { name: "Maryanne Greenough", role: "Medical Secretary", image: "/maryanne.jpeg" },
                { name: "Anne Buck", role: "Receptionist", image: "/anee.jpeg" },
              ].map((admin) => (
                <motion.div
                key={admin.name}
                className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                  <img src={admin.image} alt={admin.name} className="w-32 h-32 mx-auto rounded-full object-cover" />
                  <h3 className="mt-4 text-xl font-bold">{admin.name}</h3>
                  <p className="text-gray-600">{admin.role}</p>
                  </motion.div>
              ))}
            </div>
          </div>
    </div>
    </motion.section>
    </div >
  );
}