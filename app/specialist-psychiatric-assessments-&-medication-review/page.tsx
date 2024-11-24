'use client'
import Image from 'next/image';
import EnquiryForm from '@/app/components/enquiry';

const SpecialistAssessments = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 pt-48">
      {/* Image Wrapper */}
      <div className="mb-8 relative w-full h-64">
        <Image
          src="/specialist.jpg" // Replace with your image path
          alt="Specialist Psychiatric Assessment"
          layout="fill" // Makes the image cover the container
          objectFit="contain" // Ensures the image covers the area without distortion
          className="rounded-lg" // Optional: adds rounded corners to the image
        />
      </div>

      {/* Section Title */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Specialist Psychiatric Assessments & Medication Review</h1>
      </div>

      {/* Treatment Information */}
      <div className="mb-8">
        <p className="text-lg text-gray-700 mb-4">
          Treatment available at the following clinics:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
          <li>Cheshire Clinic</li>
          <li>Liverpool Clinic</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          When you come to our clinic for a medication review, our friendly consultant will need to undertake a full psychiatric assessment. This can take up to 2 hours. They will take a full history and, depending on the outcome and information gathered, they will have the ability to suggest possible medication changes where they see fit and with the patient's agreement.
        </p>
      </div>

      {/* Specialist Assessments */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Specialist assessments we can offer:</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
          <li>Adult Psychiatric Assessment</li>
          <li>Attention Deficit Hyperactivity Disorder (ADHD)</li>
          <li>Autistic Spectrum Disorder (ASD)</li>
          <li>Child and Adolescent Mental Health (CAMHS)</li>
          <li>Later Life and Memory Services (LLAMS)</li>
          <li>Learning Disability Assessment</li>
        </ul>
      </div>
      <EnquiryForm />
    </div>
  );
};

export default SpecialistAssessments;
