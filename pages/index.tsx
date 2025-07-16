import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 text-black px-4 md:px-8 max-w-5xl mx-auto">
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 tracking-tight">
            About Me:
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            I&apos;m a <b>software engineer</b> with a passion for building clean, efficient, and user-friendly web applications.
            My experience in both frontend and backend development allows me to bring ideas to life — whether it&apos;s a
            data-driven sports analytics tool or a full-stack web app.
            <br /><br />
            I specialize in Java, Python, JavaScript/TypeScript, and modern frameworks like React, Next.js, Spring Boot,
            .NET, and always open to learning new languages and technologies. I&apos;m currently exploring the intersection
            of software, sports, and machine learning to create engaging digital experiences.
            <br /><br />
            When I&apos;mnot coding, you can find me experimenting with Raspberry Pi builds, creating full-stack apps, or
            diving into the latest in AI tech. I&apos;ve also been diving into game development with Unity too!
          </p>
        </motion.header>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b pb-2">Skills</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Languages", content: "Java, C#, Python, JavaScript, TypeScript, HTML/CSS, Bootstrap" },
              { title: "Frameworks", content: "Spring Boot, .NET Core, .NET Framework, React, Next.js, Selenium" },
              { title: "DevOps & CI/CD", content: "Azure DevOps, GitHub Actions, YAML Pipelines, Docker, PowerShell" },
              { title: "Tools & IDEs", content: "Visual Studio Enterprise, Visual Studio Code, Eclipse, IntelliJ IDEA, Git Bash, EGit, VMware, RedHat OpenShift, VirtualBox" },
              { title: "Testing", content: "UI & API Automation, Manual QA, JMeter, TFS" },
              { title: "Databases", content: "Oracle SQL Developer, Microsoft SQL Server, PostgreSQL" },
              { title: "AI", content: "Deep Learning, FFmpeg" },
            ].map((skill, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 bg-white rounded-xl shadow-md"
              >
                <p className="font-semibold text-blue-700">{skill.title}</p>
                <p className="mt-1 text-gray-700">{skill.content}</p>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}