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
            <h2 className="text-xl font-semibold text-blue-700">Software Engineer</h2>
            <p className="text-sm text-gray-500 mb-2"><b>General Motors</b> · 2023 – Present</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Rewrote and migrated legacy .NET Framework services to Java Spring Boot, 
modernizing backend architecture and improving maintainability and long-term 
support.</li>
              <li>Took increasing ownership responsibilities of a production backend application, 
contributing to deployments, incident response, and ongoing system reliability</li>
              <li>Migrated legacy authentication services to OAuth 2.0, strengthening security and 
eliminating certificate-based authentication across team applications. </li>
              <li>Designed and implemented REST API endpoints serving part lists with secure S3 
download links for external systems. </li>
              <li>Led migration of infrastructure from Windows Server 2012 to 2022 to ensure 
backend service continuity and improve system reliability. </li>
              <li>Built and maintained CI/CD pipelines using YAML, Azure DevOps, and GitHub 
Actions to automate and streamline deployments. </li>
              <li>Built backend services to process data from newly onboarded manufacturing 
plants, improving tracking accuracy for soft part information.</li>
              <li>Optimized SQL stored procedures and queries to improve backend reliability and 
data accuracy.</li>
              <li>Led multiple production deployments, coordinating across teams to ensure 
smooth releases with minimal downtime and quick issue resolution. </li>
              <li>Expanded cloud expertise by completing the AWS Fundamentals Specialization 
(Coursera), gaining hands-on experience with core AWS services including EC2, 
S3, IAM, RDS, and Lambda to strengthen backend engineering and cloud 
migration capabilities. </li>
            </ul>
          </motion.div>
        </section>

        <a
          href="/Resume_2026.pdf"
          download
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </main>
      <Footer />
    </>
  );
}