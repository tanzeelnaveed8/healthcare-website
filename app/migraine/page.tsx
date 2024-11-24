import Image from 'next/image';
import EnquiryForm from '@/app/components/enquiry';

const Migraine = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 pt-48">
      {/* Image Wrapper */}
      <div className="mb-8 relative w-full h-64">
        <Image
          src="/mig.jpg" // Replace with your image path
          alt="Migraine Image"
          layout="fill" // Makes the image cover the container
          objectFit="contain" // Ensures the image covers the area without distortion
          className="rounded-lg" // Optional: adds rounded corners to the image
        />
      </div>

      {/* Content */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Migraine</h1>
        <p className="text-lg text-gray-700 mb-4">
          Migraine is a painful and severe health condition characterized by symptoms that can last from hours to days. While the primary symptom is an intense headache (usually more intense on one side of the head), migraine attacks can affect the entire body, interfering with daily activities.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Some believe migraines result from abnormal brain activity affecting nerve signals, chemicals, and blood vessels in the brain. However, the exact cause of this brain activity is still not fully understood, although many people have a genetic link to migraines.
        </p>

        {/* Symptoms Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Symptoms of Migraine:</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 mb-4">
          <li>Headache</li>
          <li>Problems with your sight, such as seeing flashing lights</li>
          <li>Being very sensitive to light, sounds, and smells</li>
          <li>Nausea / Vomiting</li>
          <li>Fatigue</li>
          <li>Poor concentration</li>
          <li>Feeling very hot or very cold</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          Migraine attacks usually last between four hours and three days. Some symptoms may begin about 24 hours before the head pain and last for about 24 hours after the head pain stops. Most people do not experience symptoms between migraine attacks.
        </p>

        {/* Types of Migraine */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Migraine:</h2>
        <p className="text-lg text-gray-700 mb-4">
          There is an international classification system for migraines that doctors use to diagnose and treat them. The two most common types of migraine are:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 mb-4">
          <li><strong>Migraine with Aura:</strong> Characterized by visual disturbances or other neurological symptoms before the headache.</li>
          <li><strong>Migraine without Aura:</strong> The most common type, where no aura precedes the headache.</li>
        </ul>
      </div>
      <EnquiryForm />
    </div>
  );
};

export default Migraine;
