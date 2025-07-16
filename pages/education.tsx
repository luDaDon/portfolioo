import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Experience() {
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
          <p className="text-gray-700">Here’s a look at my education.</p>
        </motion.header>

        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-xl font-semibold text-red-700">Bachelor of Science in Computer Science / Cyber Security</h2>
            <p className="text-lg font-medium text-red-700 mb-2">St. John’s University — Queens, New York — May 2021</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">Relevant Coursework:</span> Data Structures & Algorithms, Software Engineering, Web Development, Database Systems
              </li>
              <li>
                <span className="font-semibold">Senior Capstone Project:</span> Built a full-stack vehicle reporting system that allowed users to use the car’s resources to perform tasks on the internet.
              </li>
              <li>
                <span className="font-semibold">Activities:</span> Hackathons, Coding Clubs, Open Source Contributor
              </li>
            </ul>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}