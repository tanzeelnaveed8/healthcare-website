import Image from 'next/image';
import EnquiryForm from '@/app/components/enquiry';

const PsychologicalTherapy = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 pt-48">
      {/* Header Section */}
      <div className="mb-8 relative w-full h-64">
        <Image
          src="/psy.jpeg" // Replace with your image path
          alt="Migraine Image"
          layout="fill" // Makes the image cover the container
          objectFit="contain" // Ensures the image covers the area without distortion
          className="rounded-lg" // Optional: adds rounded corners to the image
        />
      </div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Psychological Therapy</h1>
        <p className="text-lg text-gray-700">
          Treatment available at the following clinic:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700 mb-4">
          <li>Cheshire Clinic</li>
        </ul>
      </div>

      {/* Therapy Approaches */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Therapeutic Approaches We Offer</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-gray-800">Cognitive Behavioural Therapy (CBT)</h3>
            <p className="text-lg text-gray-700">
              CBT helps people identify thinking patterns that cause distress. It teaches how to recognize and change destructive thought patterns that negatively influence behavior and emotions. CBT also develops coping skills that can be beneficial both now and in the future.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800">Acceptance and Commitment Therapy (ACT)</h3>
            <p className="text-lg text-gray-700">
              ACT focuses on helping clients stop avoiding, denying, or struggling with inner emotions. Instead, they learn to accept these emotions and build a compassionate relationship with their experiences.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800">Compassion-focused Therapy (CFT)</h3>
            <p className="text-lg text-gray-700">
              CFT aims to create positive emotional responses in individuals with low self-worth, encouraging them to develop compassion for themselves and others.
            </p>
          </div>
        </div>
      </div>

      {/* Eligibility */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who Can Have Psychological Therapy?</h2>
        <p className="text-lg text-gray-700">
          Anyone experiencing a condition that may improve with talking therapy can benefit. During your first visit, your therapist will conduct an initial assessment to determine if psychological therapy is right for you.
        </p>
      </div>

      {/* Conditions */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conditions We Can Treat</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
          <li>Addiction</li>
          <li>Bipolar Disorder</li>
          <li>Anxiety Disorder</li>
          <li>Schizophrenia</li>
          <li>Insomnia</li>
          <li>Obsessive-Compulsive Disorder (OCD)</li>
          <li>Eating Disorders</li>
          <li>Post-Traumatic Stress Disorder (PTSD)</li>
          <li>Depression</li>
          <li>Attention Deficit Hyperactivity Disorder (ADHD)</li>
        </ul>
      </div>

      {/* FAQs */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQs - Psychological Therapy</h2>
        <p className="text-lg text-gray-700">
          For any additional questions or concerns, please contact our Cheshire Clinic to speak with a specialist.
        </p>
      </div>
      <EnquiryForm />
    </div>
  );
};

export default PsychologicalTherapy;
