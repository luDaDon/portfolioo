import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Education() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 text-black px-4 md:px-8 max-w-5xl mx-auto">
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Education</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            My academic background and the experiences that built the foundation for my career in software engineering.
          </p>
        </motion.header>

        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-bold text-blue-700">
              Bachelor of Science in Computer Science & Cyber Security
            </h2>

            <p className="mt-2 text-lg text-gray-600">
              St. John's University • Queens, NY
            </p>

            <p className="text-gray-500">
              Graduated May 2021
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              {[
                "Data Structures",
                "Algorithms",
                "Software Engineering",
                "Web Development",
                "Database Systems",
              ].map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
