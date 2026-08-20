"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cpu,
  Cloud,
  Gamepad2,
  Server,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skills = {
  Languages: [
    "Java",
    "C#",
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
  ],
  Frameworks: [
    "Spring Boot",
    ".NET",
    "React",
    "Next.js",
    "Selenium",
  ],
  DevOps: [
    "Docker",
    "Azure DevOps",
    "GitHub Actions",
    "PowerShell",
    "AWS",
  ],
  Databases: [
    "PostgreSQL",
    "SQL Server",
    "Oracle",
  ],
  Tools: [
    "Git",
    "VS Code",
    "IntelliJ",
    "Eclipse",
    "OpenShift",
    "VMware",
  ],
};

const stats = [
  {
    number: "3+",
    label: "Years Experience",
  },
  {
    number: "20+",
    label: "Projects Built",
  },
  {
    number: "10+",
    label: "Technologies",
  },
  {
    number: "∞",
    label: "Things To Learn",
  },
];

const cards = [
  {
    icon: <Server className="w-8 h-8 text-blue-600" />,
    title: "Backend Development",
    text:
      "Building scalable APIs, enterprise applications, databases, authentication systems, and cloud-ready services using Java, Spring Boot, .NET, and SQL.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-blue-600" />,
    title: "Frontend Development",
    text:
      "Creating responsive web applications with React, Next.js, TypeScript, and modern UI frameworks that prioritize performance and user experience.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
    title: "AI & Automation",
    text:
      "Exploring machine learning, automation, and AI-powered applications while integrating intelligent features into full-stack software.",
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-blue-600" />,
    title: "Beyond Coding",
    text:
      "When I'm away from my keyboard you'll probably find me golfing, experimenting with Raspberry Pi projects, building games in Unity, or following the latest advances in AI.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 text-gray-900">

        {/* Hero */}

        <section className="max-w-6xl mx-auto px-6 pt-28 pb-24">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >

            <p className="uppercase tracking-[0.35em] text-blue-600 font-semibold">
              Software Engineer
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-blue-700">
                Luther :)
              </span>
            </h1>

            <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-gray-600 leading-8">
              I build scalable backend systems, modern web applications,
              and AI-powered software using Java, Spring Boot,
              React, Next.js, Python, and cloud technologies.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">

              <a
                href="/projects"
                className="rounded-xl bg-blue-700 px-7 py-4 text-white font-semibold hover:bg-blue-800 transition"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="rounded-xl border border-gray-300 px-7 py-4 font-semibold hover:bg-gray-100 transition"
              >
                Download Resume
              </a>

            </div>

          </motion.div>
        </section>

        {/* Stats */}

        <section className="max-w-6xl mx-auto px-6 mb-24">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {stats.map((stat) => (

              <motion.div
                key={stat.label}
                whileHover={{
                  y: -6,
                }}
                className="rounded-2xl bg-white shadow-sm border border-gray-200 p-8 text-center"
              >

                <h2 className="text-4xl font-bold text-blue-700">
                  {stat.number}
                </h2>

                <p className="text-gray-500 mt-2">
                  {stat.label}
                </p>

              </motion.div>

            ))}

          </div>

        </section>

        {/* About */}

        <section className="max-w-6xl mx-auto px-6 mb-24">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <h2 className="text-4xl font-bold mb-6">
              About Me
            </h2>

            <p className="text-lg leading-8 text-gray-600 max-w-4xl mb-14">

              I'm a software engineer with over three years of experience
              building enterprise applications and modern web software.
              My background spans backend development, frontend development,
              cloud technologies, and automation. I enjoy solving challenging
              problems and building software that's clean, scalable,
              and easy to maintain.

            </p>

            <div className="grid md:grid-cols-2 gap-8">

              {cards.map((card) => (

                <motion.div
                  key={card.title}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition"
                >

                  {card.icon}

                  <h3 className="text-2xl font-bold mt-5 mb-4">
                    {card.title}
                  </h3>

                  <p className="leading-7 text-gray-600">
                    {card.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </section>
                {/* Skills */}

        <section className="max-w-6xl mx-auto px-6 mb-24">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-3 mb-10">
              <Cloud className="w-8 h-8 text-blue-700" />
              <h2 className="text-4xl font-bold">
                Technical Skills
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {Object.entries(skills).map(([category, items]) => (

                <motion.div
                  key={category}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                >

                  <h3 className="text-2xl font-semibold text-blue-700 mb-6">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {items.map((item) => (

                      <span
                        key={item}
                        className="rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-600 hover:text-white transition"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </section>

        {/* Technologies */}

        <section className="max-w-6xl mx-auto px-6 mb-24">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-12 text-white"
          >

            <h2 className="text-4xl font-bold mb-6">
              What I Enjoy Building
            </h2>

            <div className="grid md:grid-cols-3 gap-10">

              <div>

                <Database className="w-10 h-10 mb-4" />

                <h3 className="text-2xl font-semibold mb-3">
                  Backend Systems
                </h3>

                <p className="text-blue-100 leading-7">
                  REST APIs, authentication, enterprise applications,
                  databases, distributed systems, and scalable backend
                  architecture.
                </p>

              </div>

              <div>

                <Code2 className="w-10 h-10 mb-4" />

                <h3 className="text-2xl font-semibold mb-3">
                  Full Stack Apps
                </h3>

                <p className="text-blue-100 leading-7">
                  Modern React and Next.js applications with clean user
                  interfaces connected to powerful backend services.
                </p>

              </div>

              <div>

                <Cpu className="w-10 h-10 mb-4" />

                <h3 className="text-2xl font-semibold mb-3">
                  AI Projects
                </h3>

                <p className="text-blue-100 leading-7">
                  Intelligent software powered by machine learning,
                  automation, semantic search, and data-driven insights.
                </p>

              </div>

            </div>

          </motion.div>

        </section>

        {/* CTA */}

        <section className="max-w-5xl mx-auto px-6 pb-28">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white border border-gray-200 shadow-lg p-16 text-center"
          >

            <h2 className="text-5xl font-bold mb-6">
              Let's Build Something Great
            </h2>

            <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto">

              I'm always interested in building impactful software,
              collaborating with talented teams, and tackling challenging
              engineering problems. If you'd like to connect or discuss an
              opportunity, I'd love to hear from you.

            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">

              <a
                href="/contact"
                className="rounded-xl bg-blue-700 px-8 py-4 text-white font-semibold hover:bg-blue-800 transition"
              >
                Contact Me
              </a>

              <a
                href="/projects"
                className="rounded-xl border border-gray-300 px-8 py-4 font-semibold hover:bg-gray-100 transition"
              >
                View Projects
              </a>

            </div>

          </motion.div>

        </section>

      </main>

      <Footer />
    </>
  );
}