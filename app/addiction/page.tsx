import Image from 'next/image';
import EnquiryForm from '@/app/components/enquiry';

const Addiction = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 pt-48">
      {/* Image Wrapper */}
      <div className="mb-8 relative w-full h-64">
        <Image
          src="/add.jpg"
          alt="Addiction Image"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>

      {/* Content */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Addiction</h1>
        <p className="text-lg text-gray-700 mb-4">
          According to the NHS, addiction can be defined as not having control over doing, taking, or using something to the point where it could be harmful. It is most commonly associated with drug, alcohol, smoking, and gambling.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Substance addiction is a mental condition that affects a person&apos;s brain and behavior, leading to an inability to control the use of a legal or illegal drug or medication. Substances such as alcohol, cocaine, amphetamines, opioids, marijuana, and nicotine are considered drugs. When a person is addicted, they may continue using the drug despite the harm it causes.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Drug addiction can start with experimental use in social situations. For some, the drug use becomes more frequent. The repetition of its use forms a predictable habit pattern, even though the risk of addiction and how fast it occurs varies by drug. Over time, the person may need larger doses to feel the same effects. As the drug use increases, the person may find it difficult to feel well without the drug. Attempts to stop may cause intense cravings and physical withdrawal symptoms.
        </p>

        {/* Symptoms Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Symptoms of Addiction:</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 mb-4">
          <li>Feeling that you have to use the substance regularly (daily or several times a day)</li>
          <li>Needing more of the substance to get the same effect over time</li>
          <li>Taking larger amounts of the substance over a longer period than intended</li>
          <li>Spending money on the substance, even though you can&apos;t afford it</li>
          <li>Not meeting work responsibilities or cutting back on activities because of substance use</li>
          <li>Continuing to use the substance despite knowing it&apos;s causing problems in your life</li>
          <li>Doing things you normally wouldn&apos;t do to get the substance, such as stealing</li>
          <li>Engaging in risky activities like driving under the influence</li>
          <li>Spending significant time obtaining, using, or recovering from the substance</li>
          <li>Failure in attempts to stop using the substance</li>
          <li>Experiencing withdrawal symptoms when attempting to stop using the substance</li>
        </ul>
      </div>
      <EnquiryForm />
    </div>
  );
};

export default Addiction;
