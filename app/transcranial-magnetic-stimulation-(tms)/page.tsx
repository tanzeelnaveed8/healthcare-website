import Image from 'next/image';
import EnquiryForm from '@/app/components/enquiry';

const TMS = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 pt-48">
      {/* Image Wrapper */}
      <div className="mb-8 relative w-full h-64">
        <Image
          src="/transcranial.jpeg" // Replace with your image path
          alt="TMS Treatment"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Transcranial Magnetic Stimulation (TMS)</h1>
        <p className="text-lg text-gray-700 mb-4">
          Transcranial Magnetic Stimulation (TMS) is a non-invasive, physical approach to psychiatric treatment. TMS is based on the principle of electromagnetic induction that allows us to stimulate or inhibit the neuronal activity of specific brain areas. An electrical impulse generates a magnetic field that penetrates through the skull and induces the stimulus in the nervous tissue that modulates the activity of neurons.
        </p>

        {/* How TMS Works */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How does Transcranial Magnetic Stimulation (TMS) work?</h2>
        <p className="text-lg text-gray-700 mb-4">
          The effect of TMS can be of two types:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 mb-4">
          <li><strong>Activation:</strong> Induction/increase of the electrical activity of an otherwise inactive or hypoactive area.</li>
          <li><strong>Inhibition:</strong> Reduction of electrical activity in a hyperactive area.</li>
        </ul>

        {/* Repetitive TMS */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Repetitive Transcranial Magnetic Stimulation (rTMS)</h2>
        <p className="text-lg text-gray-700 mb-4">
          Multiple TMS pulses given consecutively are referred to as repetitive or rTMS. Longer repetitive pulse sequences may induce long-term neuroplastic changes, offering enduring alterations that carry therapeutic potential. For this purpose, TMS pulses are usually delivered in trains or in more complex patterns, like Theta Burst Stimulation.
        </p>

        {/* Theta Burst Stimulation */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Theta Burst Stimulation (TBS)</h2>
        <p className="text-lg text-gray-700 mb-4">
          Theta Burst Stimulation (TBS) is a type of stimulation characterized by the rapid repetition of high frequency stimuli (50Hz) divided into triplets of stimuli. Two types of TBS protocols are distinguished:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 mb-4">
          <li><strong>Continuous TBS:</strong> Reduces cortical activity.</li>
          <li><strong>Intermittent TBS:</strong> Increases cortical activity.</li>
        </ul>

        {/* How TMS Works in Practice */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How Does it Work?</h2>
        <p className="text-lg text-gray-700 mb-4">
          In TMS treatment, an instrument called a stimulator supplies electrical energy to a magnetic coil that generates a magnetic field in the brain for a short period of time. The magnetic field produced by the coil passes unhindered through the scalp to the brain without any dispersion and almost painlessly, thus being able to reach the underlying brain structures, in particular the cerebral cortex, and modify its electrical activity in order to improve symptoms of psychiatric disorders.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          The coil is placed on the head in such a way as to allow the magnetic field to reach the brain region of interest. The magnetic stimulus produces a recordable response, which is manifested by a noise similar to a series of clicks and a tingling sensation on the skin of the head. The most commonly reported side effect of TMS is a mild and transient muscle-tension headache.
        </p>

        {/* Clinics */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Treatment Available at the Following Clinics</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 mb-4">
          <li>Cheshire Clinic</li>
          <li>Liverpool Clinic</li>
        </ul>

        {/* Consultation Process */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Consultation Process</h2>
        <p className="text-lg text-gray-700 mb-4">
          When you come to our clinic for a medication review, our friendly consultant will need to undertake a full psychiatric assessment. This can take up to 2 hours. They will take a full history and, depending on the outcome and information gathered, they will have the ability, where they see fit and with patient agreement, to suggest possible medication changes.
        </p>
      </div>
      <EnquiryForm />
    </div>
  );
};

export default TMS;
