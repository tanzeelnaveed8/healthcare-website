import Image from 'next/image';
import EnquiryForm from '@/app/components/enquiry';

const OcdInfo = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 pt-48">
      {/* Top - Image */}
      <div className="mb-8">
        <Image
          src="/ocd.jpg" // Replace with your image path
          alt="OCD Image"
          width={500}  // Adjust the size as needed
          height={500}  // Adjust the size as needed
          objectFit="cover"  // Ensures the image covers the area without distortion
        />
      </div>

      {/* Bottom - Text Content */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Obsessive-Compulsive Disorder (OCD)</h1>
        <p className="text-lg text-gray-700 mb-4">
          Obsessive-Compulsive Disorder (OCD) is characterized by the presence of obsession and/or compulsion. It causes clinically significant distress or impairment in social, occupational, or other important areas of functioning. Obsessions and compulsions slow some patients down to the point that it can take them hours just to finish their daily routines.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Most patients are well aware that their behaviour is odd or peculiar, in fact they are often embarrassed by it and try to hide it. But others either have never recognized the irrationality of their behaviour or have now to some degree lost that insight.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Obsessive-Compulsive Disorder is clinically important because it is usually chronic and often debilitating.
        </p>

        {/* Symptoms Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Symptoms of OCD</h2>
        <p className="text-lg text-gray-700 mb-4">
          Obsessions are recurrent and persistent thoughts, beliefs, and ideas that are experienced as intrusive, distressing, and unwanted. They are recognized as an individual’s own thoughts, even though they are involuntary and often repugnant. In most individuals, they cause anxiety or distress. The individual attempts to ignore or suppress these thoughts or neutralize them with some other thought or action.
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 mb-4">
          <li>Fear of contamination and dirt</li>
          <li>Extreme concern about symmetry, order, and precision</li>
          <li>Disturbing sexual thoughts or images</li>
          <li>Recurrent intrusive thoughts of numbers, words, or sounds</li>
          <li>Fear of losing or discarding something important</li>
        </ul>

        <p className="text-lg text-gray-700 mb-4">
          Compulsions are repetitive behaviours/rituals or mental acts that an individual feels the need to perform in order to reduce anxiety or distress or in response to an obsession; however, these behaviours or mental acts are not connected in a realistic way with what they are designed to neutralize or prevent, or are clearly excessive. Usually, this behaviour is recognized by the individual as pointless and inappropriate, and repeated attempts are made to resist it. Engaging in the compulsions brings no pleasure and may offer only temporary relief from anxiety.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Compulsions:</h3>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
          <li>Excessive hand washing, showering, brushing teeth, or toileting</li>
          <li>Repeated cleaning of household objects</li>
          <li>Ordering or arranging things in a particular way</li>
          <li>Repeated counting to a certain number</li>
          <li>Repeatedly checking locks, switches, or appliances</li>
        </ul>
      </div>
      <EnquiryForm />
    </div>
  );
};

export default OcdInfo;
