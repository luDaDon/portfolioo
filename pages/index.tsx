import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black p-8 max-w-4xl mx-auto">
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Luther Bell</h1>
          <p className="text-lg text-blue-700 mb-6">Software Engineer • AI Developer • Open to Work</p>
        </motion.header>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b pb-2">Skills</h2>
          <ul className="space-y-6 text-gray-800">
            <li>
              <p className="font-semibold text-blue-700">Languages</p>
              <p className="mt-1 text-gray-700">Java, C#, Python, JavaScript, TypeScript, HTML/CSS, Bootstrap</p>
            </li>
            <li>
              <p className="font-semibold text-blue-700">Frameworks</p>
              <p className="mt-1 text-gray-700">Spring Boot, .NET Core, .NET Framework, React, Next.js, Selenium</p>
            </li>
            <li>
              <p className="font-semibold text-blue-700">DevOps & CI/CD</p>
              <p className="mt-1 text-gray-700">Azure DevOps, GitHub Actions, YAML Pipelines, Docker, PowerShell</p>
            </li>
            <li>
              <p className="font-semibold text-blue-700">Tools & IDEs</p>
              <p className="mt-1 text-gray-700">
                Visual Studio Enterprise, Visual Studio Code, Eclipse, IntelliJ IDEA, Git Bash, EGit, VMware, RedHat OpenShift,
                VirtualBox
              </p>
            </li>
            <li>
              <p className="font-semibold text-blue-700">Testing</p>
              <p className="mt-1 text-gray-700">UI & API Automation, Manual QA, JMeter, TFS</p>
            </li>
            <li>
              <p className="font-semibold text-blue-700">Databases</p>
              <p className="mt-1 text-gray-700">Oracle SQL Developer, Microsoft SQL Server, PostgreSQL</p>
            </li>
            <li>
              <p className="font-semibold text-blue-700">AI</p>
              <p className="mt-1 text-gray-700">Deep Learning, FFmpeg</p>
            </li>
          </ul>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
