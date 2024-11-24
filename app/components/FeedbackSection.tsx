
import { motion } from "framer-motion";
import Link from "next/link";

const feedbacks = [
  {
    name: "Yusif",
    feedback:
      "So far my experience has been really good, it has already given me a significant release. I couldn’t think clearly or function before starting Esketamine and I feel like it has already given me an opportunity to find my normal again. I’m really keen to commence therapy with Optimise Healthcare I feel I am now able to fully engage in the therapy now I am seeing positive improvements in my mood. My motivation was a debilitating factor pre-treatment, not being able to get out of bed on some days and I am already feeling improvements. That in itself will open so many doors to my future.",
    rating: 5,
  },
  {
    name: "Trina",
    feedback:
      "For me, rTMS provided swift results, with symptom relief only after a few weeks of treatment. Although non-invasive, rTMS seems to effectively resolve the crux of the issue rather than simply treating the symptoms. Personally, I would highly recommend rTMS treatment with Expert TMS due to the effectiveness of treatment in the context of a caring clinical setting.",
    rating: 4,
  },
  {
    name: "Zoe",
    feedback:
      "I just wanted to say a big thank you to you all for helping me with my mental health difficulties over the last year or so. I believe the TMS treatment helped a great deal and showed me a different way to feel. This has helped improve my life and help me look forward to the future.",
    rating: 5,
  },
  {
    name: "Antonia",
    feedback:
      "The approach by all of the professionals involved in my care has been an important part of my recovery. Establishing such an effective therapeutic relationship has been key towards opening myself up, setting goals and discussing things openly and honestly.",
    rating: 4,
  },
  {
    name: "Charlotte",
    feedback:
      "If someone said 7 weeks ago that I would have improved to this level, I would not have believed them. Not only has the treatment given me a new access to life after a 12-year struggle with OCD, anxiety, and depression, it's been life-changing. The staff have supported me and made my journey so much better. Without their love, support, dedication, and genuine passion to help, my journey wouldn't have been so successful. I only wish more people knew about this life-changing treatment and could know that hope is out there.",
    rating: 5,
  },
  {
    name: "Will",
    feedback:
      "Very knowledgeable and approachable staff. Always ensuring to make you comfortable during the treatment. Sessions with the on-site psychiatrist and clinical psychologist were really helpful. A really lovely group of people to get treatment from - special thanks to the team!",
    rating: 5,
  },
];

const Feedback = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-semibold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Customers Say About Us
        </motion.h2>
        <motion.p
          className="text-center text-lg text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Client Feedback
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-lg text-gray-700 italic">{`"${item.feedback}"`}</p>
              <div className="flex mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${i < item.rating ? "text-yellow-500" : "text-gray-300"}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-4 font-bold text-gray-800">- {item.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/EnquiryForm">
            <motion.button
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book A Free Consultation
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
