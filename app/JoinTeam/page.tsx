'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';


export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    speciality: '',
    message: '',
  });

  // Typing formErrors as Record<string, string> to allow dynamic keys
  const [formErrors, setFormErrors] = useState<Record<string, string>>({
    name: '',
    dob: '',
    email: '',
    speciality: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Validate the form fields
  const validateForm = () => {
    const errors: Record<string, string> = {
      name: formData.name ? '' : 'Name is required.',
      dob: formData.dob ? '' : 'Date of birth is required.',
      email: formData.email ? '' : 'Email is required.',
      speciality: formData.speciality ? '' : 'Speciality is required.',
      message: formData.message ? '' : 'Message is required.',
    };

    setFormErrors(errors);
    return !Object.values(errors).some((error) => error !== '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);
      setFormSubmitted(true); // Set submission success state
    } else {
      setFormSubmitted(false); // Set submission failed state
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center mt-36 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-12">
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-gray-800"
        >
          <h1 className="text-4xl font-bold">
            Join Us at <span className="text-blue-600">Optimise Healthcare Group</span>
          </h1>
          <p className="text-lg">
            Here at Optimise Healthcare Group, we have an expert multi-disciplinary team who are highly qualified and
            experienced in assessing and treating mental health conditions for all age groups.
          </p>
          <p className="text-lg">
            We take a bespoke approach to each patient by understanding their individual requirements to create the most
            effective treatment plan for them.
          </p>
          <p className="text-lg">
            If you're passionate about mental health and innovation, fill out the form to inquire about our latest
            vacancies.
          </p>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold mb-6">Enquire Now</h2>
          {formSubmitted && (
            <div className="bg-green-100 text-green-800 p-4 mb-4 rounded-md">
              <p>Form submitted successfully!</p>
            </div>
          )}
          {!formSubmitted && formErrors && (
            <div className="bg-red-100 text-red-800 p-4 mb-4 rounded-md">
              <p>Please fix the errors below:</p>
              <ul>
                {Object.keys(formErrors).map((key) => (
                  formErrors[key] && <li key={key}>{formErrors[key]}</li>
                ))}
              </ul>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.dob && <p className="text-red-500 text-sm">{formErrors.dob}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Speciality</label>
              <input
                type="text"
                name="speciality"
                value={formData.speciality}
                onChange={handleChange}
                placeholder="Your area of speciality"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.speciality && <p className="text-red-500 text-sm">{formErrors.speciality}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={4}
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
              ></textarea>
              {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>

      {/* Background Image for CEO */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-[-1] blur-sm"
      >
        <Image
          src="/specialist.jpg" // Replace with your CEO's image
          alt="CEO"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </motion.div>

      {/* Team Image Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-x-0 bottom-0 z-[-1] opacity-40"
      >
      </motion.div>
    </div>
  );
}
