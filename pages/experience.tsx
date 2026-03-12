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
              <li>Modernized legacy Java and .NET backend systems by implementing security 
upgrades, enhancing data integrations, and improving service reliability. </li>
              <li>Upgraded a legacy backend service from 2-way TLS (mutual authentication) to 
OAuth 2.0, modernizing security and authentication flows. </li>
              <li>Built a backend feature to receive data from a new internal service, including 
developing SQL stored procedures to update and synchronize UI information. </li>
              <li>Diagnosed and resolved production-level backend issues, performing root cause 
analysis and implementing long-term fixes in Java/.NET services. </li>
              <li>Led migration of infrastructure from Windows Server 2012 to 2022 to ensure 
backend service continuity and improve system reliability. </li>
              <li>Built and maintained CI/CD pipelines using YAML, Azure DevOps, and GitHub 
Actions to automate and streamline deployments. </li>
              <li>Developed JMeter performance tests and containerized test environments with 
Docker to benchmark and optimize service scalability. </li>
              <li>Automated application installation on Windows servers using PowerShell scripts, 
eliminating manual setup and accelerating provisioning for new servers. </li>
              <li>Led multiple production deployments, coordinating across teams to ensure 
smooth releases with minimal downtime and quick issue resolution. </li>
              <li>Expanded cloud expertise by completing the AWS Fundamentals Specialization 
(Coursera), gaining hands-on experience with core AWS services including EC2, 
S3, IAM, RDS, and Lambda to strengthen backend engineering and cloud 
migration capabilities. </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-xl font-semibold text-blue-700">Software Test Development Engineer</h2>
            <p className="text-sm text-gray-500 mb-2"><b>General Motors</b> · 2022 – 2023</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Developed Java-based automation frameworks using Selenium to validate 
backend functionality in service APIs. </li>
              <li>Automated over 300 regression test cases, significantly improving test coverage 
for backend microservices.</li>
              <li>Collaborated closely with developers to define acceptance criteria, reproduce 
complex bugs, and verify feature fixes pre-release. </li>
              <li>Integrated test automation with CI/CD pipelines to execute automation whenever 
needed and without disrupting daily tasks.</li>
              <li>Authored manual and automated test cases for backend APIs and frontend code in 
early development phases to reduce integration issues. </li>
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