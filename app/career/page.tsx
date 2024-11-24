import Head from 'next/head';
import Image from 'next/image';

export default function Career() {
    return (
        <>
            <Head>
                <title>Career Opportunities | Optimise Healthcare Group</title>
            </Head>
            <div className="text-base sm:text-lg md:text-xl text-gray-800 pt-40">
                {/* Header Section */}
                <header className="text-center py-16 bg-gray-900 text-white">
                    <h1 className="text-4xl font-bold leading-tight">Join Our Healthcare Team</h1>
                    <p className="text-lg mt-4 max-w-3xl mx-auto">
                        Make a difference in healthcare by working with dedicated professionals at Optimise Healthcare Group. Explore our exciting opportunities to be part of something meaningful.
                    </p>
                </header>

                {/* Image and Content Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between mb-12 px-6">
                    {/* Content */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-semibold mb-6">Current Openings</h2>
                        <p className="text-lg mb-8">
                            We’re always looking for passionate individuals to join our growing healthcare team. If you’re ready to make an impact, we’d love to hear from you!
                        </p>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Job 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <h3 className="text-2xl font-semibold text-gray-800">Registered Nurse</h3>
                                <p className="mt-2 text-gray-600">Provide compassionate care to patients in our healthcare facility. Work with a team that prioritizes patient wellbeing.</p>
                                <button className="mt-12 bg-blue-600 text-white py-2 px-6 rounded-lg transition-all duration-200 hover:bg-blue-700">
                                    Apply Now
                                </button>
                            </div>
                            {/* Job 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <h3 className="text-2xl font-semibold text-gray-800">Medical Lab Technician</h3>
                                <p className="mt-2 text-gray-600">Support diagnostic testing and lab operations in our hospital, ensuring the best patient outcomes through precise lab work.</p>
                                <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg transition-all duration-200 hover:bg-blue-700">
                                    Apply Now
                                </button>
                            </div>
                            {/* Job 3 */}
                            <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <h3 className="text-2xl font-semibold text-gray-800">Healthcare Administrator</h3>
                                <p className="mt-2 text-gray-600">Oversee the management of healthcare services and operations, ensuring efficiency and a focus on patient care.</p>
                                <button className="mt-20 bg-blue-600 text-white py-2 px-6 rounded-lg transition-all duration-200 hover:bg-blue-700">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:w-1/2 relative w-50 h-96 rounded-lg  overflow-hidden pl-56 mt-36 mix-blend-mode">
                        <Image
                            src="/career.jpg" // Path to image in the public directory
                            alt="Optimise Healthcare Group Team"
                            layout="fill"
                            objectFit="contain"
                            className="transition-all duration-300 transform hover:scale-105"
                           
                        />
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <section className="py-16 px-6 bg-gray-900 text-white">
                <h2 className="text-3xl font-semibold text-center mb-8">About Our Optimise Healthcare Group</h2>
                <p className="text-lg text-center max-w-3xl mx-auto">
                    Our mission is to provide exceptional, compassionate care to our community. We recruit healthcare professionals who share our dedication to improving patient outcomes and delivering the best in healthcare services.
                </p>
            </section>

            {/* Benefits Section */}
            <section className="py-16 px-6 bg-gray-100">
                <h2 className="text-3xl font-semibold text-center mb-8">Why Work with Us?</h2>
                <div className="max-w-3xl mx-auto text-lg text-gray-600">
                    <ul className="list-disc pl-10 space-y-4">
                        <li>Competitive salary and benefits package</li>
                        <li>Opportunities for professional development and growth</li>
                        <li>A supportive and inclusive work environment</li>
                        <li>Work-life balance with flexible scheduling</li>
                        <li>Comprehensive health and wellness programs</li>
                    </ul>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center bg-gray-900 text-white">
                <p className="text-lg">For more details, contact us at <a href="mailto:info@optimisehcg.co.uk" className="text-yellow-500">info@optimisehcg.co.uk</a></p>
            </footer>
        </>
    );
}
