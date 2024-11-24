import React from "react";
import Image from "next/image"; // Import Next.js Image component
import Available from "../components/available";
import EnquiryForm from "@/app/components/enquiry";

const LiverpoolClinic = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6 bg-gray-100 text-gray-800 pt-48">
      {/* Image Section */}
      <div className="mb-8 relative w-full h-64">
        <Image
          src="/liver.jpeg" // Replace with the correct path to your image
          alt="Liverpool Clinic"
          layout="fill" // Makes the image cover the container
          objectFit="contain" // Ensures the image covers the area without distortion
          className="rounded-lg shadow-md" // Adds rounded corners and shadow for styling
        />
      </div>

      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Liverpool Clinic</h1>
        <p className="text-lg">
          Our expert team is highly qualified with vast knowledge and experience
          in mental health conditions. We provide in-depth assessments and
          personalized treatment plans to suit your needs.
        </p>
      </div>

      {/* Contact Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Tel:</span>{" "}
            <a href="tel:08008445257" className="text-blue-600 hover:underline">
              0800 8445257
            </a>
          </p>
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:info@optimisehcg.co.uk"
              className="text-blue-600 hover:underline"
            >
              info@optimisehcg.co.uk
            </a>
          </p>
          <p>
            <span className="font-medium">Address:</span>
            <br />
            Ghosh Medical Group, <br />
            Rodney Street, <br />
            Liverpool, L1 9ED
          </p>
        </div>
      </div>

      {/* Opening Times */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Opening Times</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Monday - Friday: 09:00 - 17:00</li>
          <li>Out of hours appointments available upon request</li>
          <li>Closed on bank holidays</li>
        </ul>
      </div>

      {/* Treatments */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Treatments</h2>
        <p className="text-lg">
          We are proud to offer the following treatments at our Liverpool Clinic.
        </p>
        {/* Add treatments list dynamically if available */}
      </div>
      <Available />
      <EnquiryForm />
    </div>
  );
};

export default LiverpoolClinic;
