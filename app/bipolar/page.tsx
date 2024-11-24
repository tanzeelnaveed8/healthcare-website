import Image from 'next/image';
import EnquiryForm from '@/app/components/enquiry';

const BipolarDisorder = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 pt-48">
      {/* Image Wrapper */}
      <div className="mb-8 relative w-full h-64">
        <Image
          src="/bipolor.jpg" // Replace with your image path
          alt="Bipolar Disorder Image"
          layout="fill" // Makes the image cover the container
          objectFit="contain" // Ensures the image covers the area without distortion
          className="rounded-lg" // Optional: adds rounded corners to the image
        />
      </div>

      {/* Content */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bipolar Disorder</h1>
        <p className="text-lg text-gray-700 mb-4">
          Bipolar disorder is a mental health condition that causes changes in a person&apos;s mood, energy, and ability to function. People with bipolar disorder experience extreme mood swings that usually occur during distinct periods, called mood episodes. These episodes include emotional highs, with abnormal happiness or irritability (mania or hypomania), and lows, with sadness (depression).
        </p>
        <p className="text-lg text-gray-700 mb-4">
          When depressed, you may feel sad, hopeless, and lose interest or pleasure in most activities. When your mood shifts to mania or hypomania (less extreme than mania), you may feel euphoric, full of energy, or unusually irritable. These mood swings can affect sleep, energy, activity, judgment, behavior, and the ability to think clearly.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          People without bipolar disorder also experience mood fluctuations, but these changes typically last hours rather than days and have less impact on daily routines.
        </p>

        {/* Symptoms Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Symptoms of Bipolar Disorder:</h2>
        <p className="text-lg text-gray-700 mb-4">
          This condition includes three different types of diagnoses: bipolar I, bipolar II, and cyclothymic disorder.
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 mb-4">
          <li><strong>Bipolar I Disorder:</strong> At least one manic episode, possibly preceded or followed by hypomanic or major depressive episodes.</li>
          <li><strong>Bipolar II Disorder:</strong> At least one major depressive episode and one hypomanic episode, but no manic episode.</li>
          <li><strong>Cyclothymic Disorder:</strong> At least two years (or one year for children/adolescents) of fluctuating moods that don&apos;t meet the criteria for manic, hypomanic, or major depressive episodes.</li>
        </ul>

        {/* Episodes Description */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Mood Episodes:</h2>
        <p className="text-lg text-gray-700 mb-4">There are several types of mood episodes that occur in bipolar disorder:</p>

        {/* Manic Episode */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Manic Episode</h3>
        <p className="text-lg text-gray-700 mb-4">
          A manic episode is characterized by an abnormal, persistent elevated or irritable mood and increased energy or goal-directed activity, lasting at least one week and present most of the day, nearly every day. Symptoms include:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 mb-4">
          <li>Increased activity</li>
          <li>Decreased need for sleep</li>
          <li>Increased risky behavior</li>
          <li>Distractibility</li>
          <li>Racing thoughts</li>
          <li>Faster speech</li>
        </ul>

        {/* Hypomanic Episode */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Hypomanic Episode</h3>
        <p className="text-lg text-gray-700 mb-4">
          Hypomania is a less severe form of mania, lasting only four days. The symptoms don&apos;t affect daily functioning as much as manic symptoms do.
        </p>

        {/* Major Depressive Episode */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Major Depressive Episode</h3>
        <p className="text-lg text-gray-700 mb-4">
          A major depressive episode lasts at least two weeks and causes noticeable difficulty in daily activities. Symptoms include:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 mb-4">
          <li>Intense sadness or despair</li>
          <li>Loss of interest in activities once enjoyed</li>
          <li>Changes in sleep and appetite</li>
          <li>Difficulty concentrating</li>
          <li>Fatigue</li>
          <li>Thoughts of death or suicide</li>
          <li>Restlessness or slowed movements and speech</li>
        </ul>
      </div>
      <EnquiryForm />
    </div>
  );
};

export default BipolarDisorder;
