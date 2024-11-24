'use client'
import { useState } from "react";


const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    reason: "",
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log("Form Data Submitted: ", formData);
    // Implement form submission logic here, e.g., API calls.
  };

  return (
   
    <section
      className=" flex flex-col lg:flex-row bg-cover bg-center py-12 pt-36"
    >
      {/* Left Side */}
      <div className="lg:w-1/2 bg-opacity-80 text-black p-10 flex flex-col justify-center">
      <img src="/nav-logo.png" alt="Logo" className="mb-6" />
        <h2 className="text-3xl font-semibold mb-6">
          Enquire Today for More Information
        </h2>
        <p className="text-lg mb-4" >
          Fill in the form or contact us through the number below for a{" "}
          <strong>FREE no-obligation nurse screening</strong> to confirm your
          eligibility and answer any questions you may have surrounding our
          services.
        </p>
        <p className="text-xl font-bold mb-6">📞 0800 844 5257</p>
        <p>
          Our expert team is here to provide guidance and discuss treatment
          options tailored to your needs.
        </p>
      </div>

      {/* Right Side (Form) */}
      <div className="lg:w-1/2 p-10  rounded-lg">
        {formSubmitted ? (
          <div className="text-center text-green-600 font-semibold">
            Thank you for your enquiry! We will contact you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-black font-medium mb-2">
                Name*
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-black focus:ring focus:ring-blue-300"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-black font-medium mb-2">
                Email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-black focus:ring focus:ring-blue-300"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-black font-medium mb-2">
                Phone*
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-black focus:ring focus:ring-blue-300"
                required
              />
            </div>

            {/* Location Field */}
            <div>
              <label className="block text-black font-medium mb-2">
                Location*
              </label>
              <input
                type="text"
                name="location"
                placeholder="Your Location (Town or City)"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-black focus:ring focus:ring-blue-300"
                required
              />
            </div>

            {/* Reason for Enquiry Field */}
            <div>
              <label className="block text-black font-medium mb-2">
                Reason for enquiry*
              </label>
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-black focus:ring focus:ring-blue-300"
                required
              >
                <option value="" disabled>
                  Please select an option
                </option>
                <option value="General Enquiry">General Enquiry</option>
                <option value="Treatment Options">Treatment Options</option>
                <option value="Eligibility Confirmation">
                  Eligibility Confirmation
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Consent */}
            <div>
              <p className="text-sm text-white">
                By submitting this form I give OHCG permission to contact me in
                regards to treatment choices in line with their privacy policy.
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Get in Touch
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default EnquiryForm;
