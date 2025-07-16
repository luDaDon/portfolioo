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
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Work Experience</h1>
          <p className="text-gray-700">Here’s a look at what I’ve worked on professionally.</p>
        </motion.header>

        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-xl font-semibold text-blue-700">General Motors</h2>
            <p className="text-sm text-gray-500 mb-2">Software Engineer · 2023 – Present</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Built scalable REST APIs with C# and .NET Core/Framework.</li>
              <li>Implemented front-end upgrades using TypeScript.</li>
              <li>Automated deployments using PowerShell, Azure DevOps, and GitHub Actions pipelines.</li>
              <li>Worked on cloud infrastructure with Azure.</li>
              <li>Led the upgrade of multiple Windows Servers from 2012 to 2022.</li>
              <li>Developed and executed JMeter scripts for performance testing.</li>
              <li>Used Docker to containerize JMeter test environments, automating performance testing.</li>
              <li>Designed and implemented new features under tight deadlines to meet urgent business needs.</li>
              <li>Conducted peer code reviews and brainstormed solutions.</li>
              <li>Automated SQL database scripts and stored procedures.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-xl font-semibold text-blue-700">General Motors</h2>
            <p className="text-sm text-gray-500 mb-2">Software Test Development Engineer · 2022 – 2023</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Automated 300+ test cases using Java, Maven, Selenium, and custom test frameworks, enhancing test coverage and reducing regression effort.</li>
              <li>Collaborated closely with developers and product owners to define acceptance criteria, reproduce bugs, and verify fixes.</li>
              <li>Integrated automated test suites into CI/CD pipelines to ensure consistent quality during every deployment cycle.</li>
            </ul>
          </motion.div>
        </section>

        <a
          href="/Resume_2025.pdf"
          download
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
        >
          📄 Download Resume
        </a>
      </main>
      <Footer />
    </>
  );
}