import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Certificates() {
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
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Certifications</h1>
          <p className="text-gray-700">Here’s are some of the certifications that I have.</p>
        </motion.header>

        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-xl font-semibold text-blue-700">AWS Fundamentals</h2>
            <p className="text-sm text-gray-500 mb-2">Coursera</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Covered EC2, S3, IAM, RDS, Lambda, and cloud-native architectures.</li>
            </ul>
            <a
                href="https://www.coursera.org/account/accomplishments/verify/5CW4CW14GMVT"
                download
                className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
                >
                📄 View
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}