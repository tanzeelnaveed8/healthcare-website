import Image from 'next/image';
import EnquiryForm from '@/app/components/enquiry';

const DepressionInfo = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 pt-36 ">
      {/* Top - Image */}
      <div className="mb-8 ">
        <Image
          src="/dep.jpg" // Replace with your image path
          alt="Depression Image"
          width={500}  // Adjust the size as needed
          height={500}  // Adjust the size as needed
          objectFit="cover"  // Ensures the image covers the area without distortion
          
        />
      </div>

      {/* Bottom - Text Content */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Depression</h1>
        <p className="text-lg text-gray-700 mb-4">
          Major depressive disorder represents the classic condition in the mood disorders group. Depression is characterized by discrete episodes of at least two weeks duration and causes a persistent feeling of sadness and loss of interest. It affects how you feel, think and behave and can lead to a variety of emotional and physical problems. You may have trouble doing normal day-to-day activities, and sometimes you may feel as if life isn't worth living.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          A more chronic form of depression, persistent depressive disorder (dysthymia), can be diagnosed when the mood disturbance continues for at least 2 years in adults or 1 year in children.
        </p>

        {/* Symptoms Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Symptoms of Depression</h2>
        <p className="text-lg text-gray-700 mb-4">
          For a diagnosis of major depressive disorder, five or more of the following symptoms have been present during the same two-week period; at least one of the symptoms is either depressed mood or loss of pleasure or interest. Depression symptoms can include:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
          <li>Depressed mood most of the day, nearly every day</li>
          <li>Diminished interest or pleasure in all, or almost all, activities</li>
          <li>Reduced appetite and weight loss</li>
          <li>Sleep disturbances, including insomnia or sleeping too much</li>
          <li>Anxiety, agitation or restlessness</li>
          <li>Fatigue or loss of energy</li>
          <li>Trouble thinking, concentrating and remembering things</li>
          <li>Feelings of worthlessness or guilt, fixating on past failures or self-blame</li>
          <li>Frequent or recurrent thoughts of death, suicidal thoughts, suicide attempts, or suicide</li>
        </ul>
      </div>
      <EnquiryForm />
    </div>
  );
};

export default DepressionInfo;
