import Image from 'next/image';
import EnquiryForm from '@/app/components/enquiry';

const AdhdInfo = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5">
      {/* Top - Image */}
      <div className="mb-8 ml-20">
        <Image
          src="/adhd.jpg" 
          alt="ADHD Image"
          width={1000}  
          height={500}  
          objectFit="cover"
          
        />
      </div>

      {/* Bottom - Text Content */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Attention Deficit Hyperactivity Disorder (ADHD)</h1>
        <p className="text-lg text-gray-700 mb-4">
          Attention-Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder which may affect emotions, learning ability, self-control and memory. It can be characterised by a combination of different patterns such as attention difficulties, hyperactivity, and impulsive behaviour.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          ADHD can affect relationships, work/school performance and, in general, interferes with functioning or development.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          It affects people at all ages, and symptoms often start during childhood and continue into adulthood. According to the WHO, the global prevalence of adult ADHD is around 3.4%. ADHD is more frequent in males than in females, with a ratio of 2:1 in children and 6:1 in adults.
        </p>

        {/* Symptoms Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Symptoms of ADHD</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
          <li>Restlessness</li>
          <li>Impulsivity</li>
          <li>Problems focusing on a task</li>
          <li>Mood swings</li>
          <li>Often forgetful in daily activities</li>
          <li>Disorganization and problems prioritizing</li>
          <li>Often loses important things</li>
          <li>Avoid engaging in tasks that require mental effort</li>
          <li>Often easily distracted by extraneous stimuli</li>
        </ul>

        <p className="text-lg text-gray-700 mt-4">
          There is a variation of symptoms in adulthood as compared to children.
        </p>
      </div>
      <EnquiryForm />
    </div>
  );
};

export default AdhdInfo;
