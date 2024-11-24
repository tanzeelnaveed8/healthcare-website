import Image from 'next/image';
import EnquiryForm from '@/app/components/enquiry';

const PTSD = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 pt-48">
      {/* Image Wrapper */}
      <div className="mb-8 relative w-full h-64">
        <Image
          src="/PTSD.jpg" // Replace with your image path
          alt="PTSD Image"
          layout="fill" // Makes the image cover the container
          objectFit="contain" // Ensures the image covers the area without distortion
          className="rounded-lg" // Optional: adds rounded corners to the image
        />
      </div>

      {/* Content */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Post-Traumatic Stress Disorder (PTSD)</h1>
        <p className="text-lg text-gray-700 mb-4">
          Post-traumatic stress disorder (PTSD) is a mental health condition that is triggered by a terrifying event — either experiencing it or witnessing it.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Many people who survive severely traumatic events will develop PTSD. Survivors of combat are the most frequent victims, but it is also experienced by those who have been through other traumatic experiences.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          PTSD can also be diagnosed in people who have learned about severe trauma or threat suffered by someone close to them.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Most people who go through traumatic events may have temporary difficulty adjusting and coping, but with time and good self-care, they usually get better. Stressful experiences of ordinary life, such as divorce or serious illness, are excluded from this definition.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          However, if the symptoms get worse, last for months or even years, and cause significant problems in social, work situations, and relationships, it may indicate PTSD.
        </p>

        {/* Symptoms Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Symptoms of PTSD:</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 mb-4">
          <li><strong>Intrusive memories:</strong></li>
          <ul className="list-inside pl-5 space-y-2">
            <li>Upsetting dreams about the trauma</li>
            <li>Flashbacks, reliving the event as if it were happening again</li>
            <li>Recurrent and unwanted distressing memories of the event</li>
            <li>Severe emotional distress or physical reactions to something that reminds you of the traumatic event</li>
          </ul>

          <li><strong>Avoidance:</strong></li>
          <ul className="list-inside pl-5 space-y-2">
            <li>Avoid thinking about the traumatic event</li>
            <li>Avoid external reminders, such as places, people, or activities related to the event</li>
          </ul>

          <li><strong>Changes in thinking and mood:</strong></li>
          <ul className="list-inside pl-5 space-y-2">
            <li>Inability to remember important aspects of the traumatic event</li>
            <li>Negative beliefs or expectations about oneself, others, or the world</li>
            <li>Distorted thinking about the cause or consequences of the event that leads to self-blame</li>
            <li>Difficulty experiencing positive emotions or feeling emotionally numb</li>
            <li>Difficulty maintaining close relationships</li>
          </ul>

          <li><strong>Changes in physical and emotional reactions:</strong></li>
          <ul className="list-inside pl-5 space-y-2">
            <li>Exaggerated startle response</li>
            <li>Hypervigilance</li>
            <li>Problems with concentration</li>
            <li>Sleep problems</li>
            <li>Self-destructive behavior (e.g., excessive drinking, risky driving)</li>
            <li>Overwhelming guilt or shame</li>
            <li>Irritable behavior and angry outbursts (verbal or physical aggression)</li>
          </ul>
        </ul>
      </div>
      <EnquiryForm />
    </div>
  );
};

export default PTSD;
