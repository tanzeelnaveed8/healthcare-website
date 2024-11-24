import Image from 'next/image';
import EnquiryForm from '@/app/components/enquiry';

const EsketamineTreatment = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 pt-48">
      {/* Image Wrapper */}
      <div className="mb-8 relative w-full h-64">
        <Image
          src="/nasal.jpeg" // Replace with your image path
          alt="Esketamine Nasal Spray Treatment"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Esketamine Nasal Spray</h1>
        <p className="text-lg text-gray-700 mb-4">
          As part of our persistent, relentless approach to help our patients suffering from treatment-resistant depression (TRD), alongside providing rTMS, we are proud to announce we are the first private Esketamine clinic in the North West of the UK.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Esketamine nasal spray has recently been licensed by the Medicines and Healthcare Products Regulatory Agency (MHRA) in the UK as a treatment for moderate to severe treatment-resistant depression, also referred to as "difficult to treat depression."
        </p>

        {/* How it Works */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How does Esketamine Nasal Spray work?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Esketamine nasal spray is the first licensed antidepressant in 30 years with a different mechanism of action from other available antidepressants. It works on the glutamate system of the brain. What is also remarkable is that some patients start feeling an improvement in their depressive symptoms as early as 24 hours from the first dose.
        </p>

        {/* Treatment Involvement */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">What does the treatment involve?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Patients will go through a detailed assessment with a Consultant Psychiatrist to assess suitability for Esketamine. Following this, they will need to come to the clinic twice a week for the first 4 weeks, followed by once a week for the following 4 weeks. After this, treatment options will be discussed with the Consultant Psychiatrist based on the client’s preference and needs. All treatments are supervised by our healthcare professionals, and patients can leave in approximately 2 hours post-treatment once the readiness-to-leave checklist is completed and the healthcare professional is satisfied.
        </p>

        {/* Eligibility */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who can have Esketamine Nasal Spray?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Esketamine is indicated for adults with treatment-resistant Major Depressive Disorder who have not responded to at least two different treatments with antidepressants in the current moderate-to-severe depressive episode.
        </p>

        {/* Conditions */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conditions we can treat with Esketamine Nasal Spray</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 mb-4">
          <li>Depression</li>
        </ul>

        {/* Research Evidence */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Research Evidence</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 mb-4">
          <li>Superior reduction in symptoms of depression by day 28</li>
          <li>Response rates at 24 hours (up to 76%) and maintaining clinical response at day 28</li>
          <li>51% reduction of risk of relapse in stable remitters</li>
        </ul>

        {/* Possible Side Effects */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Possible Side Effects</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 mb-4">
          <li>Dissociation</li>
          <li>Nausea</li>
          <li>Dry Mouth</li>
          <li>Dizziness</li>
          <li>Metallic Taste</li>
        </ul>

        {/* Clinics */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Treatment Available at the Following Clinics</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 mb-4">
          <li>Cheshire Clinic</li>
          <li>Liverpool Clinic</li>
        </ul>
      </div>
      <EnquiryForm />
    </div>
  );
};

export default EsketamineTreatment;
