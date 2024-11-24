import Image from 'next/image';
import EnquiryForm from '../components/enquiry';

const AnxietyDisorder = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 pt-48">
      
      <div className="mb-8 relative w-100 h-64">
        <Image
          src="/axi.jpg" // Replace with your image path
          alt="Anxiety Disorder Image"
          layout="fill" // This makes the image cover the container
          objectFit="contain" // Ensures the image covers the area without distortion
          className="rounded-lg" // Optional, for rounded corners
        />
      </div>

      {/* Text Content */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Anxiety Disorder</h1>
        <p className="text-lg text-gray-700 mb-4">
          Anxiety disorders are characterized by the presence of excessive fear and anxiety-related symptoms. They differ from normal transient anxiety and fear because they are uncontrollable and persistent (typically lasting 6 months or more). Most anxiety disorders develop in childhood and tend to persist if left untreated. Anxiety disorders are diagnosed only when the symptoms are not associated with the effects of a substance or drug or with another medical condition.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Anxiety disorders are more frequent in males than in females, with a ratio of 2:1.
        </p>

        {/* Types of Anxiety Disorders */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Anxiety Disorders:</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 mb-4">
          <li><strong>Panic Disorder:</strong> Repeated feelings of sudden intense anxiety, fear, or terror known as panic attacks, accompanied by the worry of additional attacks.</li>
          <li><strong>Agoraphobia:</strong> Fear of situations or places where the person might feel trapped or unable to escape easily to safety.</li>
          <li><strong>Specific Phobia:</strong> Fear of specific objects or situations like animals, heights, flying, blood, injury, or situations that could lead to choking or illness.</li>
          <li><strong>Social Anxiety Disorder:</strong> High levels of anxiety, fear, and avoidance of social situations due to fear of judgment or negative perception by others.</li>
          <li><strong>Selective Mutism:</strong> The inability to speak in specific social situations.</li>
          <li><strong>Generalized Anxiety Disorder:</strong> Persistent and excessive anxiety about various domains that is difficult to control.</li>
          <li><strong>Separation Anxiety Disorder:</strong> Anxiety about being separated from attachment figures, which can persist into adulthood.</li>
          <li><strong>Anxiety Disorder due to a Medical Condition:</strong> Anxiety caused directly by a physical health problem.</li>
          <li><strong>Substance/Medication-Induced Anxiety Disorder:</strong> Intense anxiety or panic caused by the use of a substance or medication.</li>
          <li><strong>Other Specific or Unspecified Anxiety Disorders:</strong> Anxiety or phobias that don&apos;t fit exact criteria for other anxiety disorders but are still distressing and disruptive.</li>
        </ul>

        {/* Symptoms Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Symptoms of Anxiety Disorder:</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 mb-4">
          <li>Breathing rapidly (hyperventilation)</li>
          <li>Increased heart rate</li>
          <li>Feeling nervous, restless, or tense</li>
          <li>A sense of impending danger or panic</li>
          <li>Sweating</li>
          <li>Trembling</li>
          <li>Difficulty concentrating or thinking about anything other than the present worry</li>
          <li>Difficulty controlling worry</li>
          <li>Urge to avoid things that trigger anxiety</li>
          <li>Having trouble sleeping</li>
          <li>Experiencing gastrointestinal problems</li>
        </ul>
      </div>
      <EnquiryForm />
    </div>
  );
};

export default AnxietyDisorder;
